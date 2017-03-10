import './config.js'

export default ((options) => {
  let tempWin = window.parent || window.top
  var OTHER_ORIGIN
  let postReady = () => {
    // alert("post ready")
    tempWin.postMessage({name: 'ready'}, '*')
  }

  let receiveMessage = (event) => {
    // alert("receiveMessage: " + event.data);
    var msgObj = event.data
    console.log(event)
    if (msgObj.name === 'config') {
      window.MallConf.setConfig(event.data.data)
      OTHER_ORIGIN = event.data.data.msgOrigin
    }
  }

  function postMsgNum (num) {
    var data = {
      name: 'update-msg-num',
      params: {
        count: num
      }
    }

    postMessage(data)
  }

  function postCustomerDetail (id) {
    var data = {
      name: 'customer-detail',
      params: {
        id: id
      }
    }
    postMessage(data)
  }

  function postMessage (data) {
    tempWin.postMessage(data, OTHER_ORIGIN)
  }

  window.addEventListener('message', receiveMessage, false)
  postReady()

  return {
    postCustomerDetail,
  postMsgNum}
})()

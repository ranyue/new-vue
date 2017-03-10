;(function (w) {
  function MallPc(opts) {
    var chatId = opts.containerId
    var body, container, theframe, options = {},
      theWin
    container = document.querySelector('#' + chatId)

    var ORIGIN = window.location.origin
    var OTHER_ORIGIN = opts.msgOrigin

    if (!container) {
      console.error('请指定节点')
      return
    } else {
      if (container.children && container.children.length) {
        console.error('当前配置节点，含有子节点')
        return
      }
    }
    // authentication 
    options.token = opts.token
    options.api_server = opts.api_server || ''

    function receiveMsg (event) {
      var msgObj = event.data
      if (event.origin !== OTHER_ORIGIN) {
        return
      }

      if (msgObj.name === 'ready') {
        theWin = event.source
        sendConfig()
      }
    }

    function postMessage (data) {
      theWin.postMessage(data, OTHER_ORIGIN)
    }

    function sendConfig () {
      var config = {
        name: 'config',
        data: {
          token: options.token,
          api_server: options.api_server,
          msgOrigin: ORIGIN,
          permissionCodes: options.permissionCodes
        }
      }
      postMessage(config)
    }

    window.addEventListener('message', receiveMsg, false)

    function createFrame () {
      theframe = document.createElement('iframe')
      theframe.src = (opts.baseUrl || '') + '/#/index'
      theframe.style.border = 'none'
      theframe.style.width = '100%'
      theframe.style.height = '100%'

      container.appendChild(theframe)
    }
    createFrame()
  }
  w.MallPc = MallPc
  
})(window)

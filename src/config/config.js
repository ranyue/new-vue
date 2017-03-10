window.MallConf = (function () {
  var config
  var myResolve
  var myPromise = new Promise(function (resolve, reject) {
    myResolve = resolve
  })

  return {
    setConfig: function (opts) {
      config = opts
      myResolve(opts)
    },
    getConfig: function (key) {
      var result = {}
      result = config
      return result
    },
    ready: function () {
      return myPromise
    }
  }
})()
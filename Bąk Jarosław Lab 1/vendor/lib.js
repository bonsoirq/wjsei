_ = {}
_.self = (x) => x
_.toInt = (str, radix = 10) => parseInt(str, radix)
_.toFloat = (str) => parseFloat(str)
_.each = (arr = [], iterratee = _.self) => arr.forEach(iterratee)
_.getEl = (selector) => document.querySelector(selector)
_.getAll = (selector) => document.querySelectorAll(selector)
_.on = (event, obj, callback) => obj.addEventListener(event, callback)
module.exports.parse = (str) => {
  try { return JSON.parse(str) } catch (e) { }
  return {}
}

module.exports.stringify = (obj, beautify = false) =>
  beautify
    ? JSON.stringify(obj, null, 4)
    : JSON.stringify(obj)

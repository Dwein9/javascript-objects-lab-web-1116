var recipes = {}

function updateObjectWithKeyAndValue(obj, k, v) {
  return Object.assign({}, obj, {[k]: v})
}

function destructivelyUpdateObjectWithKeyAndValue(obj, k, v) {
  obj[k] = v
  return obj
}

function deleteFromObjectByKey(obj, k) {
  var obj2 = Object.assign({}, obj)
  delete obj2[k]
  return obj2
}

function destructivelyDeleteFromObjectByKey(obj, k) {
  delete obj[k]
  return obj
}

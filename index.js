// Write your solution in this file!
let employee = {
  name:'Selam',
  streetAddress: '7586 Tulip drive'
}

function updateEmployeeWithKeyAndValue(obj, key, value){
return Object.assign({}, obj, {[key]: value})
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
   obj[key] = value
   return obj
}

function deleteFromEmployeeByKey(obj, key, value){
  let newArray =  Object.assign({}, obj, {[key]: value})
  delete newArray.key
  return newArray
}

function destructivelyDeleteFromEmployeeByKey(obj,key){
   delete obj[key]
  return obj;
}

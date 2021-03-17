// Write your solution in this file!
const employee = {
    name: 'Selam',
    streetAddress: '6294 daringgton hall st'
};

function updateEmployeeWithKeyAndValue(obj, key, value){
    return Object.assign({}, obj, { [key]: value });
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
  obj[key] = value;
return obj;
}

function  deleteFromEmployeeByKey(obj, key) {
  let newEmployee = Object.assign({}, obj)
         delete newEmployee[key]
         return newEmployee
}



function destructivelyDeleteFromEmployeeByKey(obj, key){
delete obj[key]
  return obj;
}

let employee = {
   
    name: 'John',
    streetAddress: '121 North Ave',

};

function updateEmployeeWithKeyAndValue (employee, key, value) {
    const updatedEmployee = { ...employee };

    updatedEmployee[key] = value;

    return updatedEmployee;
};

function destructivelyUpdateEmployeeWithKeyAndValue (obj, key, value) {
    obj[key] = value;

    return obj;

};

function deleteFromEmployeeByKey(employee, key) {
    const deleteEmployee = { ...employee };

    delete deleteEmployee[key];

    return deleteEmployee;
};

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];

    return employee;

};
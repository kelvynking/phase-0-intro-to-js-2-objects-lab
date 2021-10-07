const employee = {
    name : "bob",
    streetAddress: "1 Bourke Street"
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {...employee, ...{[key]: value}};
    //alternative using Object.assign()
    // return Object.assign({}, obj, {[key]:value});
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}
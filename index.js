const employee = {
    name : "bob",
    streetAddress: "1 Bourke Street"
}

function updateEmployeeWithKeyAndValue(obj, key, value) {
    return {...obj, ...{[key]: value}};
    //alternative using Object.assign()
    // return Object.assign({}, obj, {[key]:value});
}
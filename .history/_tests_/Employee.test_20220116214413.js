const Employee = require("../lib/class_employee");

test("Can create a new employee.", () => {
    const employeeObj = new Employee();
    expect(typeof(employeeInstance)).toBe("object");
})

test("Employee has a name.", () => {
    const name = "Brenham";
    const employeeObj = new Employee(name);
    expect(typeof(employeeObj.name)).toBe(name);
})

test("Employee has an ID number.", () => {
    const id = 12345;
    const employeeObj = new Employee("Brenham", id);
    expect(typeof(employeeObj.id)).toBe(id);
})

test("Employee has an email.", () => {
    const email = "bpozzi@trinity.edu";
    const employeeObj = new Employee("Brenham", 12345, email);

})
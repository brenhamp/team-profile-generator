const Employee = require("../lib/class_employee");

test("Can create a new employee.", () => {
    const employeeObj = new Employee();
    expect(typeof(employeeObj)).toBe("object");
});

test("Employee has a name.", () => {
    const name = "Brenham";
    const employeeObj = new Employee(name);
    expect(employeeObj.name).toBe(name);
});

test("Employee has an ID number.", () => {
    const id = 12345;
    const employeeObj = new Employee("Brenham", id);
    expect(employeeObj.id).toBe(id);
});

test("Employee has an email.", () => {
    const email = "bpozzi@trinity.edu";
    const employeeObj = new Employee("Brenham", 12345, email);
    expect(employeeObj.email).toBe(email);
});

test("getName method fetches name.", () => {
    const name = "Brenham";
    const employeeObj = new Employee(name);
    expect(employeeObj.getName()).toBe(name);
});

test("getID method fetches ID.", () => {
    const id = 12345;
    const employeeObj = new Employee("Brenham", id);
    expect(employeeObj.getID()).toBe(id);
});

test("getEmail method fetches email.", () => {
    const email = "bpozzi@trinity.edu";
    const employeeObj = new Employee(email);
    expect(employeeObj.getEmail()).toBe(email);
});

test("getRole method fetches role.", () => {
    const role = "Employee";
    const employeeObj = new Employee("Brenham", 12345, "bpozzi@trinity.edu");
    expect(employeeObj.getRole()).toBe(role);
});
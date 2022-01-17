const Manager = require ("../lib/class_manager");

test("Can recognize office number.", () => {
    const officeNumber = "123";
    const managerObj = new Manager ("Brenham", 12345, "bpozzi@trinity.edu", officeNumber);
    expect(managerObj.officeNumber()).toBe(officeNumber);
});

test("getOfficeNumber returns office number.", () => {
    const officeNumber = "123";
    const managerObj = new Manager ("Brenham", 12345, "bpozzi@trinity.edu", officeNumber);
    expect(managerObj.getOfficeNumber).toBe(officeNumber);
});

test("getRole returns 'Manager'.", () => {
    const role = "Manager";
    const managerObj = new Manager ("Brenham", 12345, "bpozzi@trinity.edu", "bpozzi");
    expect(managerObj.getRole).toBe(role);
});
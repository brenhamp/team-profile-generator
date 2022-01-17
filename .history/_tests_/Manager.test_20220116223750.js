const Manager = require ("../lib/class_manager");

test("getGithub returns github.", () => {
    const officeNumber = "123";
    const managerObj = new Manager ("Brenham", 12345, "bpozzi@trinity.edu", officeNumber);
    expect(managerObj.officeNumber()).toBe(officeNumber);
});

test("getRole returns 'Engineer'.", () => {
    const role = "Engineer";
    const engineerObj = new Engineer ("Brenham", 12345, "bpozzi@trinity.edu", "bpozzi");
    expect(engineerObj.getRole).toBe(role);
});
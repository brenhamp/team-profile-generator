const Engineer = require("../lib/class_engineer");

test("Can recognize GitHub name.", () => {
    const github = "bpozzi";
    const engineerObj = new Engineer ("Brenham", 12345, "bpozzi@trinity.edu", github);
    expect(engineerObj.github).toBe(github);
});

test("getGithub returns github.", () => {
    const github = "bpozzi";
    const engineerObj = new Engineer ("Brenham", 12345, "bpozzi@trinity.edu", github);
    expect(engineerObj.getGithub()).toBe(github);
});

test("getRole returns 'Engineer'.", () => {
    const role = "Engineer";
    const engineerObj = new Engineer ("Brenham", 12345, "bpozzi@trinity.edu", "bpozzi");
    expect(engineerObj.getRole()).toBe(role);
});
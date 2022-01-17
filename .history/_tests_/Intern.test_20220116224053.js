const Intern = require("../lib/class_intern");

test("School is recognized.", () => {
    const school = "University of Texas";
    const internObj = new Intern("Brenham", 123, "bpozzi@utsa.edu", school);
    expect(internObj.school).toBe(school);
});

test("getSchool returns school.", () => {
    const school = "University of Texas";
    const internObj = new Intern ("Brenham", 12345, "bpozzi@trinity.edu", school);
    expect(internObj.getSchool()).toBe(school);
});

test("getRole returns 'intern'.", () => {
    const role = "Intern";
    const internObj = new Intern ("Brenham", 12345, "bpozzi@trinity.edu", "University of Texas");
    expect(internObj.getRole()).toBe(role);
});
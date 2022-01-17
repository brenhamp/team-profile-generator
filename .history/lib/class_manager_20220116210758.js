class Manager {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
    }

getName() {return this.name;}
getEmail() {return this.email;}
getRole() {return "Employee"}
getOfficeNumber() {return this.officeNumber;}
};
module.exports = Manager;
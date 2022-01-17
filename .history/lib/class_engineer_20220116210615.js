class Engineer {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
    }

getName() {return this.name;}
getEmail() {return this.email;}
getRole() {return "Engineer"}
getGithub() {return this.github;}
};
module.exports = Engineer;
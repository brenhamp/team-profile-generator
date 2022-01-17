const generatePage = team => {
    const generateManager = manager => {
        return `
        <div class="employee-card">
            <div class="card-header">
                <h2 class="employee-name">${manager.getName()}</h2>
                <h3 class="employee-title">${manager.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class="list">
                    <li class="list-item">ID: ${manager.getID()}</li>
                    <li class="list-item">Email: ${manager.getEmail()}</li>
                    <li class="list-item">Office number: ${manager.getOfficeNumber()}</li>
                </ul>
            </div>
        </div>
        `;
    };

    const generateEngineer = engineer => {
        return `
        <div class="employee-card">
            <div class="card-header">
                <h2 class="employee-name">${engineer.getName()}</h2>
                <h3 class="employee-title">${engineer.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class="list">
                    <li class="list-item">ID: ${engineer.getID()}</li>
                    <li class="list-item">Email: ${engineer.getEmail()}</li>
                    <li class="list-item">Github: <a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></li>
                </ul>
            </div>
        </div>
        `;
    };

    const generateEmployee = employee => {
        return `
        <div class="employee-card">
            <div class="card-header">
                <h2 class="employee-name">${employee.getName()}</h2>
                <h3 class="employee-title">${employee.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class="list">
                    <li class="list-item">ID: ${employee.getID()}</li>
                    <li class="list-item">Email: ${employee.getEmail()}</li>
                </ul>
            </div>
        </div>
        `;
    };

    const generateIntern = intern => {
        return `
        <div class="employee-card">
            <div class="card-header">
                <h2 class="employee-name">${intern.getName()}</h2>
                <h3 class="employee-title">${intern.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class="list">
                    <li class="list-item">ID: ${intern.getID()}</li>
                    <li class="list-item">Email: ${intern.getEmail()}</li>
                    <li class="list-item">School: ${intern.getSchool()}</li>
                </ul>
            </div>
        </div>
        `;
    };

    const htmlPage = [];
    
    htmlPage.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager)));

    htmlPage.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join(""));

    htmlPage.push(team
        .filter(employee => employee.getRole() === "Employee")
        .map(employee => generateEmployee(employee))
        .join(""));

    htmlPage.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join(""));

    return htmlPage.join("");
};

module.exports = team => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles/styles.css"/>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <title>My Team</title>
</head>

<body>
    <div class="container-fluid">
        <div class="row">
            <div class="hero col-12 mb-3">
                <h1 class="text-center text-white">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container-fluid>
        <div class="row">
            <div class="row col-12 d-flex-justify-content-center">
            ${generatePage(team)}
            </div>
        </div>
    </div>
</body>
</html>
    `;
};
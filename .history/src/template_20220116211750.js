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
}
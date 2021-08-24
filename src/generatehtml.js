const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

// Function that adds the HTML for the employee cards to the HTML document
function generateWebPage(data) {
    const webPage = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
        <link rel="stylesheet" href="./stylesheet.css">
        <title>Team Roster</title>
    </head>
    <body>
        <header>
            <h1>Team Roster</h1>
        </header>

        <main>
            <div class="container-fluid">
                <div class="row">
                        ${data}
                </div>    
            </div> 
        </main>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj" crossorigin="anonymous"></script>
    </body>
    </html>
    `
    // console.log(webPage);
    return webPage;
}

// Create a function to accept the employeesList array and filter it into three arrays by employee type
function html(data) {
    // console.log(data); this works - employeesList is successfully pulled in

    // create an array to hold team member card data
    const teamHTML = [];

    // pull manager objects from the employeesList and add card data to the team array
    let managerArr = data.filter(Employee => Employee.getRole() === "Manager");

    managerArr.forEach(Manager => {
        const card = `
            <div class="col-sm-4">
                <div class="card">
                    <div class="card-header">
                        <h2>${Manager.name}</h2>
                        <i class="glyphicon glyphicon-briefcase"></i><h3>Manager</h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                        <li class="list-group-item id">ID: ${Manager.id}</li>
                        <li class="list-group-item email">Email: <a href="mailto:${Manager.email}">${Manager.email}</a></li>
                        <li class="list-group-item info">Office Number: ${Manager.officeNumber}</li>
                        </ul>
                    </div>    
                </div>
            </div>`;
        teamHTML.push(card);
    });

    // pull engineer objects from the employeesList and add card data to the team array
    let engineerArr = data.filter(Employee => Employee.getRole() === "Engineer");

    engineerArr.forEach(Engineer => {
        const card = `
            <div class="col-sm-4">
                <div class="card">
                    <div class="card-header">
                        <h2>${Engineer.name}</h2>
                        <i class="glyphicon glyphicon-wrench" style="color:blue"></i><h3>Engineer</h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                        <li class="list-group-item id">ID: ${Engineer.id}</li>
                        <li class="list-group-item email">Email: <a href="mailto:${Engineer.email}">${Engineer.email}</a></li>
                        <li class="list-group-item github">GitHub: <a href="https://github.com/${Engineer.github}"  target="_blank">${Engineer.github}</a></li>
                        </ul>
                    </div>    
                </div>
            </div>`;
        teamHTML.push(card);
    });

    // pull intern objects from the employeesList and add card data to the team array
    let internArr = data.filter(Employee => Employee.getRole() === "Intern");
    
    internArr.forEach(Intern => {
        const card = `
            <div class="col-sm-4">
                <div class="card">
                    <div class="card-header">
                        <h2>${Intern.name}</h2>
                        <i class="glyphicon glyphicon-apple" style="color:red"></i><h3>Intern</h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                        <li class="list-group-item id">ID: ${Intern.id}</li>
                        <li class="list-group-item email">Email: <a href="mailto:${Intern.email}">${Intern.email}</a></li>
                        <li class="list-group-item school">School: ${Intern.school}</li>
                        </ul>
                    </div>    
                </div>
            </div>`;
        teamHTML.push(card);
     
    });

    const joinedTeam = teamHTML.join("");
    // console.log(teamHTML);
    // console.log(generateWebPage(teamHTML));

    const finalResult = generateWebPage(joinedTeam);

    return finalResult;

}


module.exports = html;
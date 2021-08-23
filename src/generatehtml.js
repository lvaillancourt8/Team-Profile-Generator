const Employee = require("../lib/Employee");

// Create a function to accept the employeesList array and filter it into three arrays by employee type
function html(data) {
    let managerArr = data.filter(Employee => Employee.getRole() === "Manager");
    let engineerArr = data.filter(Employee => Employee.getRole() === "Engineer");
    let internArr = data.filter(Employee => Employee.getRole() === "Intern");

    function(managerArr)
    function(engineerArr)
    function
}

// Create a function to loop through the managerArray and create the HTML for the card


// Create a function to loop through the engineerArray and create the HTML for the cards


// Create a function to loop through the internArray and create the HTML for the cards


// Create a function to join all of the cards into one text string


// Function that adds the HTML for the employee cards to the HTML document
// const html = function() {
//     return `
//     <!DOCTYPE html>
//     <html lang="en">
//     <head>
//         <meta charset="UTF-8">
//         <meta http-equiv="X-UA-Compatible" content="IE=edge">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
//         <link rel="stylesheet" href="./stylesheet.css">
//         <title>Team Roster</title>
//     </head>
//     <body>
//         <header>
//             <h1>Team Roster</h1>
//         </header>

//         <main>
//             <div class="container-fluid">
//                 <div class="row">
//                     <div class="col-sm-4">
//                         // ${add in the card HTML Here}
//                     </div>
//                 </div>    
//             </div> 
//         </main>



//         <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj" crossorigin="anonymous"></script>
//     </body>
//     </html>
//     `
// }

//     `
//     <div class="card">
//     <div class="card-header">
//     <h2>Name</h2>
//     <i>icon</i><h3>Title</h3>
//     </div>
//     <div class="card-body">
//         <ul class="list-group">
//         <li class="list-group-item id">ID: 4</li>
//         <li class="list-group-item email">Email: <a href="mailto:email@email.com">email@email.com</a></li>
//         <li class="list-group-item info">Label: info</li>
//         </ul>
//     </div>    
// </div>`


module.exports = html;
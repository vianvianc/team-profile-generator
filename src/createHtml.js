const createTeam = (team) => {
  function createCard(employee) {
    return `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${employee.getName()}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${employee.getPosition()}</h6>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${employee.getId()}</li>
                    <li class="list-group-item">
                    <a href="#" class="card-link">${employee.getEmail()}</a></li>
                    
                    ${
                      employee.getPosition() === "Manager"
                        ? `<li class="list-group-item">Office: ${employee.getOffice()}</li>`
                        : employee.getPosition() === "Engineer"
                        ? `<li class="list-group-item">Github: ${employee.getGitHub()}</li>`
                        : `<li class="list-group-item">University: ${employee.getSchool()}</li>`
                    }
                    
                    
                    
                    
                    
                </ul>
                
                
                
                
                
        
      
                 
            </div>
        </div>











        

        `;
  }
  const html = [];
  html.push(team.map((employee) => createCard(employee)));
  return html.join("");
};
module.exports = (team) => {
  return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team</title>
</head>
<body>
<div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3  bg-dark">
                <h1 class="text-center text-light"> Team </h1>
            </div>
        </div>
    </div>
<div class="container">
<div class="row justify-content-center">
    <div class="team-area col-12 d-flex justify-content-center">
        ${createTeam(team)}
    </div>
</div>
</div>
</body>
</html>
    
    
    
    `;
};

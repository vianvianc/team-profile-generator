const createTeam = (team) => {
  function createCard(employee) {
    return `
        <div class="card
        ${employee.getName()}
        
        
        
        </div>
        `;
  }
  const html = [];
  html.push(team.map((emploee) => createCard(empoyee)));
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

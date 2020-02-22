# Template-Engine-Example
Use Node to generate a team profile page. Node takes input form CLI and populates premade templates which are merged to a master html page.

## Functionality
This project uses CLI to populate premade html pages, then merges and serves the resulting html. The user initially inputs their team data into the CLI, then the code takes this list of member data and populates classes of each team member type. Then the team member classes are passed to a renderer which generates html for each team member. Then this html is merged into an overall page html and is served to the user.

## Run
In VS Code, you may open the terminal (Ctrl+\`), navigate to the main project folder, and run app.js ("node app.js").
Choose the employee type and insert their data. Continue adding employees until you are finished. Once finished, the code automatically generates the html file, and you just load that page to view the result (/output/team.html).

## Access
Repo: https://github.com/austin-e-cox/Template-Engine-Example

## Preview:
![Tool preview](/preview.gif?raw=true "Tool Preview")

"use strict";

let sprint01Name = "IBW-Klasse";

let sprint02Names = [
    "Raphael",
    "Pedro",
    "Daniele"
];

let sprint03User = {
    "givenName": "Daniel",
    "familyName": "Krebs",
    "age": 26
};

let sprint04Users = [
    {
        "givenName": "Robin",
        "familyName": "Kälin"
    },
    {
        "givenName": "Nebojsa",
        "familyName": "Milosevic"
    },
    {
        "givenName": "Tobias",
        "familyName": "Rudin"
    }
];

function init() {
    let output = "";

    output += `<h2>Sprint 01</h2>`;
    output += `<p>Hallo ${sprint01Name}!</p>`;

    output += `<h2>Sprint 02</h2>`;
    for (let name of sprint02Names) {
        output += `<p>Hallo ${name}!</p>`;
    }

    output += `<h2>Sprint 03</h2>`;
    Object.entries(sprint03User).forEach(entry => {
        const [key, value] = entry;
        output += `<p>${key}: ${value}</p>`;
    });
    output += `<p>Hallo ${sprint03User.givenName} ${sprint03User.familyName} (${sprint03User.age})!</p>`;

    output += `<h2>Sprint 04</h2>`;
    sprint04Users.forEach(user => {
        output += `<p>Hallo ${user.givenName} ${user.familyName}!</p>`;
    });

    document.getElementById("output").innerHTML = output;
}

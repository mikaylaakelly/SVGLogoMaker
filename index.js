const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes.js');
const path = require('path');

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to 3 letters for the logo text',
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter the color you would like the text to be',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose from the list of shapes',
        choices: ['Triangle', 'Circle', 'Square'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter what color you would like the shape to be',
    },
];

function writeToFile(filename, answers) {
    let svgEl = "";
    let shapeChoice;

    if (answers.shape === "Triangle") {
        shapeChoice = new Triangle();
        svgEl = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeColor}"/>
            <g>
                <text x="150" y="150" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>
            </g>
        </svg>`;
    } else if (answers.shape === "Square") {
        shapeChoice = new Square();
        svgEl = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect x="73" y="40" width="160" height="160" fill="${answers.shapeColor}"/>
            <g>
                <text x="150" y="150" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>
            </g>
        </svg>`;
    } else if (answers.shape === "Circle") {
        shapeChoice = new Circle();
        svgEl = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="115" r="80" fill='${answers.shapeColor}'/>
            <g>
                <text x="150" y="150" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>
            </g>
        </svg>`;
    }



//     fs.writeFile(filename, svgEl, (err) => {
//         err ? console.error(err) : console.log("Successfully generated SVG Logo!");
//     });
// }

// inquirer.prompt(questions).then((answers) => {
//     writeToFile('logo.svg', answers);
// });


const filePath = path.join(__dirname, 'Examples', filename);

    fs.writeFile(filePath, svgEl, (err) => {
        err ? console.error(err) : console.log(`Successfully generated ${filename} in the 'Examples' folder!`);
    });
}

inquirer.prompt(questions).then((answers) => {
    writeToFile('Trianglelogo.svg', answers);
});

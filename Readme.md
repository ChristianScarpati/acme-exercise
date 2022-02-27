

# ACME EXERCISE

This program read a txt file, its purpose is to find the number of matches of each employee that were been within the same time frame in the office.

RENE=MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00-21:00
ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00,MO12:00-12:00
ANDRES=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00
AGUSTIN=MO12:00-12:00,TH12:00-14:00,SU20:00-21:00
DARKO=TH012:00-03:00,SA14:00-18:00,TH12:00-14:00,MO12:00-12:00 


## Contents
__________

* [Installation](#Installation)
* [Overview](#Overview)
* [Methodology and Arquitecture](#Methodology)

## Overview

The Overview of this exercise is to output a table containing pairs of employees and how often they have coincided in the office.


## Installation

This application runs on nodeJs, therefore, requires it, please visit [Node.js](https://nodejs.org/) for more info.

1) clone the project to your local machine : 
     ```sh
     git clone https://github.com/ChristianScarpati/acme-exercise
     ```

2) From the root of the app, install the dependencies.
     ```sh
     npm i or npm install
     ```

3) Execute the app

     ```sh
     App   --->  node index.js
     Tests --->  npm run test
     ```


## Methodology and Arquitecture

The challenge was projected using sheets and pencil, making flow diagrams, sketches, so that the situation of the exercise can be analyzed in a deeper and more logical way, starting from the general to the particular.

I made the functions inside the controllers, breaking it into small pieces of logic, so that it can be understood in the simplest possible way.

- I created and set up the environment configurations with nodejs and tester jest.
- Developed sketches and flowcharts
- I used Trello to go step by step using the S.M.A.R.T. Approach. 
- I separated the project structure through folders (controllers, utils, images, etc).
- Code development through functions that fulfill a particular feature.
- Upload to github.

The tasks were made by scrum methodology 
[trello](images/Trello.png)





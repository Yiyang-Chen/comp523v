### 0. Herbarium Map:

UNC Herbarium is the second largest Herbarium in the US and has large amounts of plant specimen collections from all over the world.  Plant specimens take up much space in   buildings and are not considered useful or necessary by some people, however, the specimens are accessed constantly by researchers and scholars. 

Our client, Carol McCormick, the Curator of Herbarium, would like a web app built to show the access records of plant specimens to show the values of the specimens. 

Based on this, we would like to build a web-based “world-wide map,‘blip’ every time specimen record is accessed, time-lapse for past month, post the movie-blip-map on herbarium website” and a Dynamic demonstration of collection use and scope, to show the valuableness of the plant specimens.


### 1. Getting started:

* **Prerequisites:** 
  * For frontend, you should install **react**, **mapbox-gl**, **dotenv** and **jest** 
  * There are no specific requirements for backend, since our **mongodb** database’s running on cloud. Just install the required software before going on(See Installing)
    * If you want to see what the database’s like, ask a team member for the login credential for mongodb.
 
* **Installing:** 
  Please install Node.js:
  * Install Node.js  https://nodejs.org/en/ 
  * For testing:
    * npm install --save-dev jest

* **Running locally:**
  * First, run `npm install` on both frontend and backend, this will install the required package for this project.
  * Run `npm start` on backend and frontend separately to start the application
  * Run `npm test` to run jest to test the api.
  * Frontend Specific:
    * Install mapbox: `npm install --save react-maobox-gl`
    * Install dotenv for environmental variable: `npm install --save dotenv`

* **Wrranty:** 
The instructions were last tested by team members who developed the project on Nov. 11st, 2020, on the MacOS system.


### 2. Testing:

  * Run `npm install` will automatically install **jest** package.
  * In package.json, add one line in `"scripts"`: `“test”: “jest”`, which will look like:
 ```
 "scripts": {
   "start": "nodemon app.js",
   "test": "jest"
 },
 ```
  * Simply type `npm test` in your command line to run the tests


### 3. Deployment:

  * For this project, we use **heroku** to host our api and frontend.
  * The process in detail 
    * https://devcenter.heroku.com/articles/git 
  * The way we update our deployment:
    * `heroku login` to login with our heroku credential
    * `Git add`
    * `Git commit -m “message”`
    * `Git push heroku main`


### 4. Technologies used:

  * **Frontend**: React.js, Mapbox
  * **Backend**:  Node.js, Express.js, mongoose
  * **Database**: MongoDB
  * **Testing**:  Jest.js, supertest.

You can find the [ADR file here](./ADR.txt).
And the [ADR diagram here](./ADRdiagram.jpg)


### 5. Contributing:

If you want to contribute to the project, you need to download the codes in this github.

You can also get access to the [Trello leaderboard](https://trello.com/yiyangchen12/boards) to see what tasks are to be done. 

There are no special style, testing, or process conventions.

**For more information goto our** [team webpage](https://tarheels.live/teamv/)

Technologies we used (Feel free to use other editors/IDEs):

  * Install VSCode https://code.visualstudio.com/ 
  * Install Postman https://www.postman.com/downloads/ 
  * Install Prettier in VSCode https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode 


### 6. Authors:

* **Yiyang Chen:**  Collect and deal with data

* **Hongyu Li:** Frontend

* **Longbo Wei:** Backend


### 7. License:

Herbarium Map

Copyright © <2020> <Team V, COMP523-2020 Fall-UNC Chapel Hill>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


### 8. Acknowledgements:

Special thanks to our client **Carol McCormick**, mentor **Jeff Byzek** and professor **Jeff Terrell**

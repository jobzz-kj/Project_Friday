# Project_Friday
This is simple concept CRUD operations using JS and Sequelize

Steps
   1.Create a new folder
   2. Open Terminal and run - npm init -y
   3. Now you will create a json file, instead of that json copy my package.json file and install the dependencies
   4. You can take my package file and then run - npm install, now you installed all the dependencies, we can go ahead with the coding now!!!


Create a folder config and inside that configure the js file for database

Then define the schema of the database by creating another folder named model and inside that we can use the Gig.js file to define the schema

Now let us create a folder named dao for creating a js file named gig.dao for data manipulations
DAO is Data Access Object
insdie the gig.dao.js file we are coding to do all the crud operation functionalities

Now we are introducing a controller for the DAO. This controller is just for wrapping up the DAO i.e. the DAO has all the logic and this controller is like a handshake
Create a folder named controller and inside that create conntroller.js

Here we are using postman to check our api s working
next I am setting up a route folder for setting up the routes: the routes has been splitted up into two folders in which the reason I will tell shortly
So create a folder routes then create 2 files routes.js and gigs.route.js

Now We are going to the final step which is configuring the index file 



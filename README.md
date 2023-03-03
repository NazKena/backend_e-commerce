# E-Commerce Backend

## Table of Contents 

- [Description](#description)
- [Installation](#)
- [Usage](#usage)
- [Video Demonstration](#video-demonstration)

## Description 

The way this application works is that when a functional Express.js API is given, and I have added my database name, MySQL username, and MySQL password to an environment variable file, then it will connect to a database using sequalise. When schema command `mysql -h127.0.0.1 -uroot -p`and seed command `npm run seed` are entered, then a development database is created. When command `nodemon server.js` is invoked, then the server starts and sequlize models are syncde to the MYSQL database. Using INSOMNIA, I was able to GET, PUT,POST and DELETE for routes `product-route.js`, `category-route.js` and `tag-route.js`. 

## Installation

1. `run npm run` seed to seed data to your database so that you can test your routes.

2. `nodemon server.js` was used to sync the Sequalise models to the sql database.

3. Use Insomnia to check the API routes.


## Usage 

Open Insomnia, and use the GET, PUT, POST and DELETE requests in formatted JSON.

## Screenshot

![Image](./Image/Screenshot%202023-03-03%20at%2017.03.20.png)


## Video Demonstration 

Here is the video link on how to create the schema, seed the database and start the applications server. [Video](https://drive.google.com/file/d/1Z4f9_vNCpn79zjnInPsn4N4Lg1_FgjBg/view?usp=sharing)

Link to GET, POST, PUT and DELETE routes [Video](https://drive.google.com/file/d/1xfqZvn_klurWx4J_nu_np9ktvhdXoqko/view?usp=sharing)



//dependencies 
const express = require('express');
const routes = require('./routes');
const sequelize = require('./Config/connection');

/// ports for hosing
const app = express();
const port = env.process.PORT || 1337;


//middleware
app.use(json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);



//listening for connection
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Server is live on Port: ${port}!`));
});
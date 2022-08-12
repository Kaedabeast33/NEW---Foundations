require("dotenv").config();// communicating our dotenv
const Sequelize = require("sequelize");//imports sequelize after you download it and pg and pg-hstore
const {CONNECTION_STRING}= process.env;//destructuring conncetion string form our .env file
const sequelize = new Sequelize(CONNECTION_STRING,{
    dialect: 'postgres',
    dialectOptions: {
        ssl:{
            rejectUnauthorized: false
        }
    }
})


const userId= 4;
const clientId= 3;

module.exports = {
    getUserInfo: (req,res)=>{
        sequelize.query(`SELECT * 
        FROM cc_clients AS c
          JOIN cc_users AS u 
            ON c.user_id= u.user_id
        WHERE u.user_id = ${userId};`)
        .then((dbRes)=>{

        console.log("hi")
            res.status(200).send(dbRes[0])//postgres always puts data in the [0] index of dbRes
        }).catch((err)=>{
            console.log(err)
        })
    }
}
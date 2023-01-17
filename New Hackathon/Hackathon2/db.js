const knex = require('knex');


const db = knex({
  client:'pg',
  connection:{
    host: 'localhost',
    port: '5432',
    user: 'postgres',
    password: 'ght25ater',
    database: 'Animal Clinic'
  }
})

function createCustomer({name, petname, reason, number, date}){

    console.log ('name', name);
  
    return db('customerinfo').insert(
    {
        custname: name,
        petname: petname,
        appreason: reason,
        phonenumber: number,
        appdate: date
    }
  )
  .returning('*')
}

module.exports = {
  createCustomer
}
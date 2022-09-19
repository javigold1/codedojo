const port = 8000;
const { application } = require('express');
const express = require('express');
const faker = require('@faker-js/faker');
const app = express();


app.use( express.json() );

// var city = faker.address.city();

// console.log(
//     faker.helpers.fake(
//       'Hello {{name.prefix}} {{name.lastName}}, how are you today?'
//     )
//   );

const indexCallBack = (req,res) => {
    return res.json({hello : 'world', someOtherKey: city})
}

// app.get("/", indexCallBack)

class User {
    constructor() {
    //   this._id = faker.finance.account();
      this.city = faker.address.city()
      this.firstName = faker.name.firstName();
      this.lastName = faker.name.lastName();
      this.phoneNumber = faker.phone.phoneNumber();
      this.email = faker.internet.email();
      this.password = faker.internet.password();
    }
  }

app.get("/api/cities", (req,res) => {
    const cities = [
    {
        id: 1,
        name: 'Conway',
        population: 30000,
    },
    {
        id: 2,
        name: 'NLR',
        population: 20000,
    },
    {
        id: 3,
        name: 'Fayettville',
        population: 60000,
    },
];

    return res.json(cities);

});

app.get("/api/users/new", (req, res) => {
    const user = new User();
    console.log("Navigated to /api/users/new ||", JSON.stringify(uer));
    res.send(user);
  });
  

app.post('/api/cities', (req,res) => {
    console.log(req.body)

    return res.json({
        status: "success",
        name: "name",
        city: req.body
    })
});







// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );


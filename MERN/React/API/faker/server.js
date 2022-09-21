const express = require("express");
const faker = require("@faker-js/faker");
const app = express();
const port = 8000;

class User {
    constructor() {
        this._id = '8';
        this.firstName = 'Jeff';
        this.email = faker.internet.email();


    //   this._id = faker.finance.account();
    //   this.firstName = faker.name.firstName();
    //   this.lastName = faker.name.lastName();
    //   this.phoneNumber = faker.phone.phoneNumber();
    //   this.email = faker.internet.email();
    //   this.password = faker.internet.password();
    }
  }

  class Company {
    constructor() {
      this._id = faker.finance.account();
      this.name = faker.company.companyName() + " " + faker.company.companySuffix()
      this.address = {
        street: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.state(),
        zipCode: faker.address.zipCode(),
        country: faker.address.country()
      }
    }
  }

  app.get("/api/users/new", (req, res) => {
    const user = new User();
    console.log("Navigated to /api/users/new ||", JSON.stringify(user));
    res.send(user);
  });



app.listen(port, () => console.log(`Listening on port: ${port}`));
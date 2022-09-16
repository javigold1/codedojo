const port = 8000;
const { application } = require('express');
const express = require('express');
const app = express();

app.use( express.json() );

const indexCallBack = (req,res) => {
    return res.json({hello : 'world', someOtherKey: "nother"})
}

app.get("/", indexCallBack)

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


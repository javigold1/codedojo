const Jokesontroller = require('../controllers/jokes.controller');
 
module.exports = app => {
    app.get('/api/jokes', Jokesontroller.findAllJokes);
    app.get('/api/jokes/:id', Jokesontroller.findOneSingleJoke);
    app.get('/api/jokes/random', Jokesontroller.findRandomJoke);
    app.put('/api/jokes/update/:id', Jokesontroller.updateExistingJoke);
    app.post('/api/jokes/new', Jokesontroller.createNewJoke);
    app.delete('/api/jokes/:id', Jokesontroller.deleteAnExistingJoke);
}
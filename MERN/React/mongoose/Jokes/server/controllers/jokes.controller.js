const { Joke } = require('../models/jokes.model');

module.exports.findAllJokes = (request, response) => {
    Joke.find({})
        .then(Joke => response.json(Joke))
        .catch(err => response.json(err))
}
module.exports.findOneSingleJoke = (request, response) => {
    Joke.findOne({_id:request.params.id})
        .then(Joke => response.json(Joke))
        .catch(err => response.json(err))
}
module.exports.findRandomJoke = (request, response) => {
    Joke.findOne({})
        .then(Joke => response.json(Joke))
        .catch(err => response.json(err))
}

module.exports.createNewJoke = (request, response) => {
    const { setup, punchline } = request.body;
    Joke.create({
        setup,
        punchline
    })
        .then(joke => response.json(joke))
        .catch(err => response.json(err));
}
module.exports.updateExistingJoke = (req, res) => {
    Joke.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedJoke => res.json({ Joke: updatedJoke }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
module.exports.deleteAnExistingJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
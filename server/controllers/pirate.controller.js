const Pirate = require('../models/pirate.model');

module.exports.createPirate = (req, res) => {
    Pirate.exists({ position: "captain" })
        .then(exists => {
            if (exists && req.body.position === "captain") {
                return Promise.reject({ errors: { position: { message: "Only one captain allowed!" } } });
            }
            return Pirate.create(req.body);
        })
        .then(pirate => res.json(pirate))
        .catch(err => res.status(400).json(err));
};

module.exports.getAllPirates = (request, response) => {
    Pirate.find({}).sort({name: 'asc'})
        .then(pirates => {
            response.json(pirates);
        })
        .catch(err => {
            response.json(err);
        })
}



module.exports.getPirate = (req, res) => {
    Pirate.findById(req.params.id)
        .then(pirate => res.json(pirate))
        .catch(err => res.json(err));
};

module.exports.updatePirate = (req, res) => {
    Pirate.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        .then(updatedPirate => res.json(updatedPirate))
        .catch(err => res.status(300).json(err));
};

module.exports.deletePirate = (req, res) => {
    Pirate.findByIdAndDelete(req.params.id)
        .then(() => res.json({ message: "Pirate walked the plank!" }))
        .catch(err => res.json(err));
};

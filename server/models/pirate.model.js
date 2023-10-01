const mongoose = require('mongoose');

const PirateSchema = new mongoose.Schema({
    name: { type: String, required: [true, "Pirate name is required"] },
    imgUrl: { type: String, required: [true, "Image URL is required"] },
    treasureChests: { type: Number, required: [true, "Number of treasure chests is required"] },
    catchPhrase: { type: String, required: [true, "Catch phrase is required"] },
    position: { 
        type: String, 
        enum: ["captain", "first mate", "quarter master", "boatswain", "powder monkey"],
        required: [true, "Position is required"]
    },
    pegleg: { type: Boolean, default: true },
    eyepatch: { type: Boolean, default: true },
    hookhand: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model('Pirate', PirateSchema);

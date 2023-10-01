const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/pirateCrewDB", { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
})
    .then(() => console.log("Connected to the pirateCrewDB database"))
    .catch(err => console.log("Failed to connect to the pirateCrewDB database", err));

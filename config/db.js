const mongoose = require('mongoose');
const MONGOURI = 'mongodb+srv://jake:Ybs35YhbeH0K7LMz@fnbrmaps1.bdc68.mongodb.net/fnbrmaps?retryWrites=true&w=majority'

mongoose.set('useFindAndModify', false);

const initiateMongo = async () => {
    try {
        await mongoose.connect(MONGOURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to DB');
    } catch(e) {
        console.log(e);
        throw e;
    }
};

module.exports = initiateMongo;
var Prize = require('../models/Prize')

const Prizes = module.exports;

//works
Prizes.getPrizes = () => {
    return Prize.aggregate([
        { $project: { _id: false, year: true, category: true } }
    ]);
}

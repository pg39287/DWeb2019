var Movie = require('../models/Movie')

const Movies = module.exports;

//works
Movies.showAll = () => {
    return Movie
        .find()
        .sort({ title: 1 })
        .exec()
}

//works
Movies.show = id => {
    return Movie
        .findOne({ _id: id })
        .exec()
}

//works
Movies.insert = body => {
    return Movie
        .create(body)
}

//works
Movies.update = (id, body) => {
    let idQuery = { _id: id };
    return Movie
        .findOneAndUpdate(idQuery, body, { new: true })
}

//works
Movies.delete = id => {
    return Movie
        .deleteOne({ _id: id })
}

Movies.count = () => {
    return Movie
        .countDocuments()
}

Movies.project = fields => {
    return Movie
        .find({}, fields)
        .exec()
}

Movies.aggregate = field => {
    return Movie
        .aggregate([
            { $group: { _id: "$" + field, counter: { $sum: 1 } } },
            { $sort: { counter: -1 } }])
        .exec()
}
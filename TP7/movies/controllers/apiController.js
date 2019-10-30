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

Movies.insert = body => {
    return Movie
        .create(body)
        .exec()
}

Movies.update = body => {
    title = { title: body.title };
    year = { year: body.year };

    return Movie
        .updateOne(title, year)
        .exec()
}

Movies.deleting = id => {
    return Movie
        .deleteOne({ _id: id })
        .exec();
}

Movies.count = () => {
    return Movie
        .countDocuments()
        .exec()
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
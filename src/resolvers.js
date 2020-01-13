const Event = require('./Event');
const Category = require('./Category');

module.exports = {
  Query: {
    events: () => Event.find().populate('category'),
    event: (_, { id }) => Event.findById(id).populate('category'),
    category: (_, { id }) => Category.findById(id),
    categories: () => Category.find()
  },

  Mutation: {
    createEvent: (_, { title, text, location, date, category }) =>
      Event.create({ title, text, location, date, category }),

    createCategory: (_, { title }) => Category.create({ title })
  }
};

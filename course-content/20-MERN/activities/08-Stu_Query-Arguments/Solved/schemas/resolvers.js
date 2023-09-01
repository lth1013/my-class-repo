const { School, Class, Professor } = require('../models');

const resolvers = {
  Query: {
    schools: async () => {
      return await School.find({}).populate('classes').populate({
        path: 'classes',
        populate: 'professor'
      });
    },
    classes: async () => {
      return await Class.find({}).populate('professor');
    },
    // Define a resolver to retrieve individual classes
    class: async (parent, args) => {
      // Use the parameter to find the matching class in the collection
      return await Class.findById(args.id).populate('professor');
    },
    professors: async () => {
      return await Professor.find({}).populate('classes');
    }
  }
};

module.exports = resolvers;
















// const resolvers = {
//   Query: {
//     schools: async () => {
//       return await School.find({});
//     },

//     classes: async () => {
//       return await Class.find({});
//     },
    
//     class: async (parent, args, context, info) => {
//       return await Class.findOne({ _id: ObjectId(args.id) });
//     },

//     professors: async () => {
//       return await Professor.find({});
//     }
//   },

//   School: {
//     classes: async(parent, args, context, info) => {
//       return await Class.find({ _id: { $in: parent.classes }});
//     }
//   },
//   Class: {
//     professor: async(parent, args, context, info) => {
//       return await Professor.findOne({ _id: parent.professor });
//     }
//   },
//   Professor: {
//     classes: async(parent, args, context, info) => {
//       return await Class.find({ _id: { $in: parent.classes }});
//     }
//   }
// };

// module.exports = resolvers;
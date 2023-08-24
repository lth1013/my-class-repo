const { Schema, Types } = require('mongoose');

const responseSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    responseBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    // https://mongoosejs.com/docs/guide.html#toJSON
    // Mongoose will not include virtuals in the schema unless you explicitly tell it to. 
    // As a result, we add an options object to our schema definition to tell Mongoose to include virtuals by setting the virtuals property to true.
    toJSON: {
      virtuals: true,
    },
    id: false,
    // id: false,//don't return the id of the 'response`
  }
);

module.exports = responseSchema;

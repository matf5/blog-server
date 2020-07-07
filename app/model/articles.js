module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const ArticleSchema = new Schema({
    title: { type: String },
    content: { type: String },
    createdTime: { type: Date },
    updateTime: { type: Date },
    articleId: { type: Number }
  });
  return mongoose.model('articles', ArticleSchema);
};
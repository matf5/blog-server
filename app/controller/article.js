'use strict';

const Controller = require('egg').Controller;
Date.prototype.Format = function (fmt) { //author: meizz 
  var o = {
      "M+": this.getMonth() + 1, //月份 
      "d+": this.getDate(), //日 
      "h+": this.getHours(), //小时 
      "m+": this.getMinutes(), //分 
      "s+": this.getSeconds(), //秒 
      "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
      "S": this.getMilliseconds() //毫秒 
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
  if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
};
class ArticleController extends Controller {
  async getList() {
    const { ctx } = this;
    ctx.body = await ctx.model.Articles.find({}).sort({createdTime: -1});
  }
  async add() {
    const { ctx } = this;
    console.log(ctx.request.body.title);
    let data = await ctx.model.Articles({
      title: ctx.request.body.title,
      content: ctx.request.body.content,
      createdTime: new Date(),
    });
    data.save();
    ctx.body = 'ok';
  }
  async getById() {
    const { ctx } = this;
    const data = await ctx.model.Articles.find({
      _id: ctx.request.body._id
    });
    if (data && data.length) {
      ctx.body = data[0];
    }
  }
  async update() {
    const { ctx } = this;
    const data = await ctx.model.Articles.updateOne({
      _id: ctx.request.body._id
    }, {
      content: ctx.request.body.content,
      title: ctx.request.body.title,
      updateTime: new Date()
    });
    ctx.body = data;
  }
}

module.exports = ArticleController;

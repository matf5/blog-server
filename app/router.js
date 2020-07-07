'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/articles/getList', controller.article.getList);
  router.post('/articles/add', controller.article.add);
  router.post('/articles/getById', controller.article.getById);
  router.post('/articles/update', controller.article.update);
};

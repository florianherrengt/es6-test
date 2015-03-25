import express from 'express';
import controller from './controller'
var router = express.Router();

router.get('/', controller.list);
router.get('/one/:id', controller.one);

export default router;

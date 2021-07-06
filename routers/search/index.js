const express = require('express');
const router = express.Router();
const userController = require('./search.controller')

router.get('/search',userController.search);//검색페이지
router.post('/search',userController.searchPost);//검색결과 페이지


const express = require('express');
const router = express.Router();
const userController = require('./user.controller')


router.get('/login',userController.login)//로그인
router.post('/login',userController.loginPost)//로그인 포스트
router.get('/:user/mypage',userController.mypage)//마이페이지
router.get('/:user/review',userController.review)//리뷰
router.get('/:user/cart',userController.cart)//장바구니
router.get('/:user/history',userController.history)//구매내역
router.get('/:order_number/order_history',userController.order_history)//주문조회
router.get('/:order_number/pay',userController.pay)//결제화면
router.post('/:order_number/pay',userController.payPost)//결제완료


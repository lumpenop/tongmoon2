/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

CREATE DATABASE IF NOT EXISTS `tme` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8_general_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `tme`;

CREATE TABLE IF NOT EXISTS `cart` (
  `userid` varchar(100) DEFAULT NULL,
  `product_code` varchar(100) DEFAULT NULL,
  `store_code` varchar(100) DEFAULT NULL,
  `quantity` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;

CREATE TABLE IF NOT EXISTS `category_code` (
  `category_code` varchar(100) NOT NULL,
  `category_name` varchar(100) NOT NULL,
  `top_code` varchar(100) NOT NULL,
  `mid_code` varchar(100) NOT NULL,
  `small_code` varchar(100) NOT NULL,
  PRIMARY KEY (`category_code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

/*!40000 ALTER TABLE `category_code` DISABLE KEYS */;
/*!40000 ALTER TABLE `category_code` ENABLE KEYS */;

CREATE TABLE IF NOT EXISTS `contents_reco` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userid` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `product_code` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*!40000 ALTER TABLE `contents_reco` DISABLE KEYS */;
/*!40000 ALTER TABLE `contents_reco` ENABLE KEYS */;

CREATE TABLE IF NOT EXISTS `detail_order_history` (
  `id` int NOT NULL AUTO_INCREMENT,
  `order_num` int NOT NULL,
  `quantity` int NOT NULL DEFAULT '0',
  `product_code` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `buy_time` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `reserve_time` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `userid` varchar(100) NOT NULL,
  `store_code` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `detail_order_num` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `state` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*!40000 ALTER TABLE `detail_order_history` DISABLE KEYS */;
/*!40000 ALTER TABLE `detail_order_history` ENABLE KEYS */;

CREATE TABLE IF NOT EXISTS `item_reco` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userid` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `product_code` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*!40000 ALTER TABLE `item_reco` DISABLE KEYS */;
/*!40000 ALTER TABLE `item_reco` ENABLE KEYS */;

CREATE TABLE IF NOT EXISTS `mid_code` (
  `mid_code` varchar(100) NOT NULL,
  `mid_name` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `top_code` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`mid_code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*!40000 ALTER TABLE `mid_code` DISABLE KEYS */;
/*!40000 ALTER TABLE `mid_code` ENABLE KEYS */;

CREATE TABLE IF NOT EXISTS `order_history` (
  `order_num` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `userid` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `state` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`order_num`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*!40000 ALTER TABLE `order_history` DISABLE KEYS */;
/*!40000 ALTER TABLE `order_history` ENABLE KEYS */;

CREATE TABLE IF NOT EXISTS `review` (
  `id` int NOT NULL,
  `userid` varchar(100) NOT NULL,
  `star` varchar(100) NOT NULL,
  `store_code` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `product_code` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `review_text` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*!40000 ALTER TABLE `review` DISABLE KEYS */;
/*!40000 ALTER TABLE `review` ENABLE KEYS */;

CREATE TABLE IF NOT EXISTS `state_code` (
  `id` int NOT NULL,
  `state` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*!40000 ALTER TABLE `state_code` DISABLE KEYS */;
INSERT INTO `state_code` (`id`, `state`) VALUES
	(1, '결제완료'),
	(2, '상품준비중'),
	(3, '픽업완료'),
	(4, '부분환불_환불'),
	(5, '부분환불_결제'),
	(6, '전체환불'),
	(7, '부분환불');
/*!40000 ALTER TABLE `state_code` ENABLE KEYS */;

CREATE TABLE IF NOT EXISTS `store` (
  `store_code` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `store_name` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `tel` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `store_star` int DEFAULT NULL,
  PRIMARY KEY (`store_code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*!40000 ALTER TABLE `store` DISABLE KEYS */;
/*!40000 ALTER TABLE `store` ENABLE KEYS */;

CREATE TABLE IF NOT EXISTS `store_list` (
  `product_code` varchar(100) NOT NULL DEFAULT '0',
  `store_code` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `product_name` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `price` int DEFAULT NULL,
  `origin` varchar(100) DEFAULT NULL,
  `img` varchar(100) DEFAULT NULL,
  `star` float DEFAULT NULL,
  `review_count` int DEFAULT NULL,
  `category_code` varchar(100) DEFAULT NULL,
  `total_price` int DEFAULT NULL,
  PRIMARY KEY (`product_code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*!40000 ALTER TABLE `store_list` DISABLE KEYS */;
/*!40000 ALTER TABLE `store_list` ENABLE KEYS */;

CREATE TABLE IF NOT EXISTS `top_code` (
  `id` int NOT NULL AUTO_INCREMENT,
  `top_code` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `top_name` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

/*!40000 ALTER TABLE `top_code` DISABLE KEYS */;
/*!40000 ALTER TABLE `top_code` ENABLE KEYS */;

CREATE TABLE IF NOT EXISTS `user` (
  `userid` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `username` varchar(100) DEFAULT NULL,
  `gender` varchar(100) DEFAULT NULL,
  `user_email` varchar(100) DEFAULT NULL,
  `user_number` varchar(100) DEFAULT NULL,
  `user_birth` varchar(100) DEFAULT NULL,
  `point` int DEFAULT '0',
  `cash` int DEFAULT '0',
  PRIMARY KEY (`userid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*!40000 ALTER TABLE `user` DISABLE KEYS */;
/*!40000 ALTER TABLE `user` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;

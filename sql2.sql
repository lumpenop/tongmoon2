-- --------------------------------------------------------
-- 호스트:                          127.0.0.1
-- 서버 버전:                        10.5.10-MariaDB - mariadb.org binary distribution
-- 서버 OS:                        Win64
-- HeidiSQL 버전:                  11.2.0.6213
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- tme 데이터베이스 구조 내보내기
CREATE DATABASE IF NOT EXISTS `tme` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `tme`;

-- 테이블 tme.bcode 구조 내보내기
CREATE TABLE IF NOT EXISTS `bcode` (
  `Big` varchar(50) NOT NULL,
  `Mid` varchar(50) NOT NULL,
  `Ename` varchar(100) NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 테이블 데이터 tme.bcode:~0 rows (대략적) 내보내기
/*!40000 ALTER TABLE `bcode` DISABLE KEYS */;
/*!40000 ALTER TABLE `bcode` ENABLE KEYS */;

-- 테이블 tme.comment 구조 내보내기
CREATE TABLE IF NOT EXISTS `comment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userid` varchar(50) NOT NULL,
  `review` varchar(100) NOT NULL,
  `star` varchar(100) NOT NULL,
  `S_code` varchar(100) NOT NULL,
  `product` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 테이블 데이터 tme.comment:~0 rows (대략적) 내보내기
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
/*!40000 ALTER TABLE `comment` ENABLE KEYS */;

-- 테이블 tme.contentsreco 구조 내보내기
CREATE TABLE IF NOT EXISTS `contentsreco` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` varchar(50) DEFAULT NULL,
  `file02` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 테이블 데이터 tme.contentsreco:~0 rows (대략적) 내보내기
/*!40000 ALTER TABLE `contentsreco` DISABLE KEYS */;
/*!40000 ALTER TABLE `contentsreco` ENABLE KEYS */;

-- 테이블 tme.history 구조 내보내기
CREATE TABLE IF NOT EXISTS `history` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `C_code` varchar(50) NOT NULL,
  `B_time` varchar(100) NOT NULL,
  `R_time` varchar(100) NOT NULL,
  `userid` varchar(100) NOT NULL,
  `seller` varchar(100) NOT NULL,
  `Get_num` varchar(100) NOT NULL,
  `state` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 테이블 데이터 tme.history:~0 rows (대략적) 내보내기
/*!40000 ALTER TABLE `history` DISABLE KEYS */;
/*!40000 ALTER TABLE `history` ENABLE KEYS */;

-- 테이블 tme.itemreco 구조 내보내기
CREATE TABLE IF NOT EXISTS `itemreco` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` varchar(50) DEFAULT NULL,
  `file01` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 테이블 데이터 tme.itemreco:~0 rows (대략적) 내보내기
/*!40000 ALTER TABLE `itemreco` DISABLE KEYS */;
/*!40000 ALTER TABLE `itemreco` ENABLE KEYS */;

-- 테이블 tme.mcode 구조 내보내기
CREATE TABLE IF NOT EXISTS `mcode` (
  `id` int(11) NOT NULL,
  `Big` varchar(50) NOT NULL,
  `Mid` varchar(50) NOT NULL,
  `Pname` varchar(100) NOT NULL,
  `Ename` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 테이블 데이터 tme.mcode:~0 rows (대략적) 내보내기
/*!40000 ALTER TABLE `mcode` DISABLE KEYS */;
/*!40000 ALTER TABLE `mcode` ENABLE KEYS */;

-- 테이블 tme.order_history 구조 내보내기
CREATE TABLE IF NOT EXISTS `order_history` (
  `order_number` varchar(100) NOT NULL,
  `userid` varchar(100) DEFAULT NULL,
  `state` int(11) DEFAULT NULL,
  PRIMARY KEY (`order_number`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 테이블 데이터 tme.order_history:~0 rows (대략적) 내보내기
/*!40000 ALTER TABLE `order_history` DISABLE KEYS */;
/*!40000 ALTER TABLE `order_history` ENABLE KEYS */;

-- 테이블 tme.pcode 구조 내보내기
CREATE TABLE IF NOT EXISTS `pcode` (
  `Big` varchar(50) NOT NULL,
  `Mid` varchar(50) NOT NULL,
  `Sml` varchar(50) NOT NULL,
  `Pname` varchar(50) NOT NULL,
  `C_code` varchar(50) NOT NULL,
  PRIMARY KEY (`Big`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 테이블 데이터 tme.pcode:~0 rows (대략적) 내보내기
/*!40000 ALTER TABLE `pcode` DISABLE KEYS */;
/*!40000 ALTER TABLE `pcode` ENABLE KEYS */;

-- 테이블 tme.state_code 구조 내보내기
CREATE TABLE IF NOT EXISTS `state_code` (
  `id` int(11) NOT NULL,
  `state` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 테이블 데이터 tme.state_code:~7 rows (대략적) 내보내기
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

-- 테이블 tme.store 구조 내보내기
CREATE TABLE IF NOT EXISTS `store` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `S_code` varchar(50) DEFAULT NULL,
  `building` varchar(50) DEFAULT NULL,
  `S_name` varchar(50) DEFAULT NULL,
  `ho` varchar(50) DEFAULT NULL,
  `number` varchar(50) DEFAULT NULL,
  `star` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 테이블 데이터 tme.store:~0 rows (대략적) 내보내기
/*!40000 ALTER TABLE `store` DISABLE KEYS */;
/*!40000 ALTER TABLE `store` ENABLE KEYS */;

-- 테이블 tme.storelist 구조 내보내기
CREATE TABLE IF NOT EXISTS `storelist` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `S_code` varchar(50) DEFAULT NULL,
  `P_code` varchar(50) DEFAULT NULL,
  `price` varchar(50) DEFAULT NULL,
  `review` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 테이블 데이터 tme.storelist:~0 rows (대략적) 내보내기
/*!40000 ALTER TABLE `storelist` DISABLE KEYS */;
/*!40000 ALTER TABLE `storelist` ENABLE KEYS */;

-- 테이블 tme.user 구조 내보내기
CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userid` varchar(100) NOT NULL,
  `username` varchar(100) DEFAULT NULL,
  `gender` varchar(100) DEFAULT NULL,
  `user_email` varchar(100) DEFAULT NULL,
  `user_address` varchar(100) DEFAULT NULL,
  `user_number` varchar(100) DEFAULT NULL,
  `user_birth` varchar(100) DEFAULT NULL,
  `point` varchar(100) DEFAULT NULL,
  `chargecash` varchar(100) DEFAULT NULL,
  `totalprice` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 테이블 데이터 tme.user:~0 rows (대략적) 내보내기
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
/*!40000 ALTER TABLE `user` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;

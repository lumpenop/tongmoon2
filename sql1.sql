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

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;

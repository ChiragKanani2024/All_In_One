-- MySQL dump 10.13  Distrib 8.0.36, for Linux (x86_64)
--
-- Host: localhost    Database: all_in_one
-- ------------------------------------------------------
-- Server version	8.0.36-0ubuntu0.20.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `technology_detail`
--

DROP TABLE IF EXISTS `technology_detail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `technology_detail` (
  `id` int NOT NULL AUTO_INCREMENT,
  `employee_id` int NOT NULL,
  `technology` varchar(20) NOT NULL,
  `beginer` char(1) NOT NULL,
  `mideator` char(1) DEFAULT NULL,
  `expert` char(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `index4` (`employee_id`,`technology`),
  KEY `emp10_idx` (`employee_id`)
) ENGINE=InnoDB AUTO_INCREMENT=54 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `technology_detail`
--

LOCK TABLES `technology_detail` WRITE;
/*!40000 ALTER TABLE `technology_detail` DISABLE KEYS */;
INSERT INTO `technology_detail` VALUES (4,36,'php','0','0','1'),(5,38,'php','1','0','0'),(6,47,'php','0','1','0'),(7,47,'mysql','0','0','1'),(8,48,'php','0','1','0'),(9,48,'mysql','0','0','1'),(22,51,'mysql','0','0','1'),(23,52,'php','0','1','0'),(24,52,'mysql','1','0','0'),(25,52,'laravel','0','1','0'),(26,52,'oracle','0','0','1'),(27,53,'php','0','1','0'),(28,53,'mysql','1','0','0'),(29,53,'laravel','0','1','0'),(30,53,'oracle','0','0','1'),(31,54,'php','0','1','0'),(32,54,'mysql','1','0','0'),(33,54,'laravel','0','1','0'),(34,54,'oracle','0','0','1'),(35,55,'php','0','1','0'),(36,55,'mysql','1','0','0'),(37,55,'laravel','0','1','0'),(38,55,'oracle','0','0','1'),(39,59,'php','0','0','1'),(40,34,'laravel','1','0','0'),(41,38,'mysql','0','0','1'),(42,38,'laravel','1','0','0'),(44,38,'oracle','0','1','0'),(45,60,'mysql','1','0','0'),(46,61,'php','0','0','1'),(47,61,'mysql','0','1','0'),(48,61,'laravel','1','0','0'),(49,61,'oracle','0','1','0'),(50,63,'php','0','1','0'),(51,63,'mysql','1','0','0'),(52,63,'laravel','0','1','0'),(53,64,'mysql','0','1','0');
/*!40000 ALTER TABLE `technology_detail` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-03-28 12:20:00

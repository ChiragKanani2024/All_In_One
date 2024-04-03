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
-- Table structure for table `language_detail`
--

DROP TABLE IF EXISTS `language_detail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `language_detail` (
  `id` int NOT NULL AUTO_INCREMENT,
  `employee_id` int NOT NULL,
  `language` varchar(20) DEFAULT NULL,
  `read` char(1) DEFAULT NULL,
  `write` char(1) DEFAULT NULL,
  `speak` char(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_languageyouknow_1_idx` (`employee_id`),
  CONSTRAINT `fk_language_detail_1` FOREIGN KEY (`employee_id`) REFERENCES `basic_detail` (`employee_id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `language_detail`
--

LOCK TABLES `language_detail` WRITE;
/*!40000 ALTER TABLE `language_detail` DISABLE KEYS */;
INSERT INTO `language_detail` VALUES (2,34,'hindi','1','0','0'),(4,36,'hindi','1','1','1'),(5,38,'hindi','1','1','1'),(8,47,'hindi','1','1','0'),(9,47,'english','0','1','0'),(10,47,'gujarati','1','0','0'),(11,48,'english','1','1','1'),(12,48,'gujarati','1','1','1'),(16,51,'english','1','0','0'),(17,52,'hindi','1','1','0'),(18,52,'english','1','1','1'),(19,52,'gujarati','1','1','0'),(20,53,'hindi','1','1','0'),(21,53,'english','1','1','1'),(22,53,'gujarati','1','1','0'),(23,54,'hindi','1','1','0'),(24,54,'english','1','1','1'),(25,54,'gujarati','1','1','0'),(26,55,'hindi','1','1','0'),(27,55,'english','1','1','1'),(28,55,'gujarati','1','1','0'),(29,59,'hindi','0','0','1'),(30,38,'english','1','1','0'),(31,38,'gujarati','1','1','1'),(32,60,'hindi','1','0','0'),(33,61,'hindi','1','0','0'),(34,63,'hindi','1','1','0'),(35,63,'english','1','1','1'),(36,63,'gujarati','1','0','0'),(37,64,'english','0','0','1'),(38,64,'gujarati','1','0','0'),(39,65,'hindi','1','0','0'),(40,65,'english','1','0','0');
/*!40000 ALTER TABLE `language_detail` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-03  9:51:42

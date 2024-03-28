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
-- Table structure for table `workexperience_detail`
--

DROP TABLE IF EXISTS `workexperience_detail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `workexperience_detail` (
  `id` int NOT NULL AUTO_INCREMENT,
  `employee_id` int NOT NULL,
  `comname` varchar(45) NOT NULL,
  `designation` varchar(45) NOT NULL,
  `from` date NOT NULL,
  `to` date NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique1` (`employee_id`,`comname`,`from`,`to`,`designation`),
  KEY `emp2_idx` (`employee_id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `workexperience_detail`
--

LOCK TABLES `workexperience_detail` WRITE;
/*!40000 ALTER TABLE `workexperience_detail` DISABLE KEYS */;
INSERT INTO `workexperience_detail` VALUES (2,34,'Cyber com','software devollpoper','2025-03-01','2024-03-14'),(1,34,'esparkbiz','software ','2024-03-13','2024-03-09'),(3,36,'Cybercom','software devollpoper','2024-03-13','2024-03-04'),(4,38,'esparkbiz','software devoloper','2024-03-05','2024-03-08'),(6,47,'Cybercom','software devoloper','2024-03-25','2024-03-27'),(5,47,'esparkbiz','software devoloper','2024-03-05','2024-03-04'),(7,48,'esparkbiz','sde','2024-03-13','2024-03-27'),(8,48,'solguruz','full stack','2024-02-28','2024-03-13'),(10,52,'Cybercom','software devoloper','2025-03-01','2002-01-09'),(9,52,'esparkbiz','sdf','2002-01-07','2002-01-07'),(12,53,'Cybercom','software devoloper','2025-03-01','2002-01-09'),(11,53,'esparkbiz','sdf','2002-01-07','2002-01-07'),(14,54,'Cybercom','software devoloper','2025-03-01','2002-01-09'),(13,54,'esparkbiz','sdf','2002-01-07','2002-01-07'),(15,55,'esparkbiz','sdf','2002-01-07','2002-01-07'),(16,59,'esparkbiz','sdf','2002-01-07','2002-01-07'),(17,60,'esparkbiz','software devoloper','2002-01-07','2002-01-07'),(18,61,'esparkbiz','software devollpoper','2002-01-07','2002-01-09'),(19,63,'esparkbiz','software devollpoper','2025-03-01','2002-01-09');
/*!40000 ALTER TABLE `workexperience_detail` ENABLE KEYS */;
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

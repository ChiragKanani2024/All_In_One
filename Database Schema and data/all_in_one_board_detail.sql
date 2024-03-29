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
-- Table structure for table `board_detail`
--

DROP TABLE IF EXISTS `board_detail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `board_detail` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nameofboard` varchar(45) NOT NULL,
  `passing_year` year NOT NULL,
  `percentage` float NOT NULL,
  `employee_id` int NOT NULL,
  `board` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `em4_idx` (`employee_id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `board_detail`
--

LOCK TABLES `board_detail` WRITE;
/*!40000 ALTER TABLE `board_detail` DISABLE KEYS */;
INSERT INTO `board_detail` VALUES (1,'ssc',2020,100,34,'SSC'),(2,'hsc',2030,100,34,'HSC'),(3,'GSEB',2018,86,36,'SSC'),(4,'GSEB',2020,86,36,'HSC'),(5,'GESB',2019,48,38,'SSC'),(6,'GESB',2020,48,38,'HSC'),(9,'GESB',2020,86,47,'SSC'),(10,'GESB',2020,48,47,'HSC'),(11,'GSEB',2018,82,48,'SSC'),(12,'GESB',2020,83,48,'HSC'),(13,'GSEB',2020,78,51,'SSC'),(14,'GESB',2020,86,51,'HSC'),(15,'GESB',2018,86,52,'SSC'),(16,'GESB',2020,78,52,'HSC'),(17,'GESB',2018,86,53,'SSC'),(18,'GESB',2020,78,53,'HSC'),(19,'GESB',2018,86,54,'SSC'),(20,'GESB',2020,78,54,'HSC'),(21,'GESB',2018,86,55,'SSC'),(22,'GESB',2020,78,55,'HSC'),(23,'GESB',2020,86,59,'SSC'),(24,'GSEB',2020,78,59,'HSC'),(25,'GESB',2020,86,60,'SSC'),(26,'GESB',2020,78,60,'HSC'),(27,'GESB',2020,78,61,'SSC'),(28,'GESB',2020,78,61,'HSC'),(29,'GESB',2020,78,63,'SSC'),(30,'GESB',2020,78,63,'HSC'),(31,'GESB',2018,78,64,'SSC'),(32,'GESB',2020,86,64,'HSC');
/*!40000 ALTER TABLE `board_detail` ENABLE KEYS */;
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
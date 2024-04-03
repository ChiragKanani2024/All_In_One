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
-- Table structure for table `degree_detail`
--

DROP TABLE IF EXISTS `degree_detail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `degree_detail` (
  `id` int NOT NULL AUTO_INCREMENT,
  `employee_id` int NOT NULL,
  `university` varchar(45) NOT NULL,
  `cource` varchar(45) NOT NULL,
  `passingyear` year NOT NULL,
  `cgpa` float NOT NULL,
  `degree` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `emp6_idx` (`employee_id`),
  CONSTRAINT `fk_degree_detail_1` FOREIGN KEY (`employee_id`) REFERENCES `basic_detail` (`employee_id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `degree_detail`
--

LOCK TABLES `degree_detail` WRITE;
/*!40000 ALTER TABLE `degree_detail` DISABLE KEYS */;
INSERT INTO `degree_detail` VALUES (1,34,'GEC ','computer ',2000,100,'Bechelor'),(2,34,'IIT','computer ',2000,100,'Master'),(3,36,'GEC Bhavnagar','computer engineering',2121,12,'Bechelor'),(4,38,'SSCCS','computer engineering',2022,87,'Bechelor'),(5,38,'DDU','computer engineering',2024,89,'Master'),(6,47,'GEC Bhavnagar','computer engineering',2024,87,'Bechelor'),(7,48,'gtu','computer engineering',2024,9,'Bechelor'),(8,51,'GEC Bhavnagar','computer engineering',2024,12,'Bechelor'),(9,52,'GEC Bhavnagar','computer engineering',2121,12,'Bechelor'),(10,52,'DDU','computer engineering',2000,78,'Master'),(11,53,'GEC Bhavnagar','computer engineering',2121,12,'Bechelor'),(12,53,'DDU','computer engineering',2000,78,'Master'),(13,54,'GEC Bhavnagar','computer engineering',2121,12,'Bechelor'),(14,54,'DDU','computer engineering',2000,78,'Master'),(15,55,'GEC Bhavnagar','computer engineering',2121,12,'Bechelor'),(16,55,'DDU','computer engineering',2000,78,'Master'),(17,59,'GEC Bhavnagar','computer engineering',2121,12,'Bechelor'),(18,60,'GEC Bhavnagar','computer engineering',2121,12,'Bechelor'),(19,60,'DDU','computer engineering',2000,100,'Master'),(20,61,'GEC Bhavnagar','computer engineering',2121,12,'Bechelor'),(21,61,'DDU','computer engineering',2024,89,'Master'),(22,63,'GEC Bhavnagar','computer engineering',2121,87,'Bechelor'),(23,63,'DDU','computer engineering',2024,45,'Master'),(24,64,'GEC Bhavnagar','sdf',2121,87,'Bechelor'),(25,64,'DDU','computer engineering',2000,8,'Master'),(26,65,'sdf','computer engineering',2121,87,'Bechelor');
/*!40000 ALTER TABLE `degree_detail` ENABLE KEYS */;
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

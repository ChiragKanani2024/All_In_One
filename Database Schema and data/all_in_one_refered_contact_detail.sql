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
-- Table structure for table `refered_contact_detail`
--

DROP TABLE IF EXISTS `refered_contact_detail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `refered_contact_detail` (
  `id` int NOT NULL AUTO_INCREMENT,
  `employee_id` int NOT NULL,
  `name` varchar(45) NOT NULL,
  `number` bigint NOT NULL,
  `relation` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique` (`employee_id`,`name`,`number`,`relation`),
  CONSTRAINT `fk_refered_contact_detail_1` FOREIGN KEY (`employee_id`) REFERENCES `basic_detail` (`employee_id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `refered_contact_detail`
--

LOCK TABLES `refered_contact_detail` WRITE;
/*!40000 ALTER TABLE `refered_contact_detail` DISABLE KEYS */;
INSERT INTO `refered_contact_detail` VALUES (1,34,'ashokbhai kanani',9998645348,'bapa'),(2,34,'meet kanani',9998698853,'brother'),(3,36,'ashokbhai',1212211212,'friend'),(4,38,'chirag',9054687227,'friend'),(5,47,'ashokbhai',1212211212,'Father'),(6,47,'meet',1212211212,'friend'),(7,48,'chirag',2382383323,'brother'),(8,48,'dhaval',1234590323,'bhai'),(9,52,'ashokbhai',1212211212,'friend'),(10,53,'ashokbhai',1212211212,'friend'),(11,54,'ashokbhai',1212211212,'friend'),(12,55,'ashokbhai',1212211212,'friend'),(13,59,'ashokbhai',9054687227,'friend'),(15,60,'ashokbhai',9054687227,'Father'),(14,60,'chirag',9054687227,'friend'),(16,61,'ashokbhai',9054687227,'friend'),(17,61,'chirag',9054687227,'friend'),(18,63,'ashokbhai',9054687227,'friend'),(19,63,'chirag',9054687227,'friend'),(20,64,'chirag',9054687227,'friend'),(21,65,'ashokbhai',1212211212,'friend'),(22,65,'chirag',9054687227,'friend');
/*!40000 ALTER TABLE `refered_contact_detail` ENABLE KEYS */;
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

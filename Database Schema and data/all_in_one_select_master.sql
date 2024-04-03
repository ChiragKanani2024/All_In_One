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
-- Table structure for table `select_master`
--

DROP TABLE IF EXISTS `select_master`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `select_master` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `unique_key` varchar(45) NOT NULL,
  `control_type` varchar(45) NOT NULL,
  `css_class` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `select_key_UNIQUE` (`unique_key`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `select_master`
--

LOCK TABLES `select_master` WRITE;
/*!40000 ALTER TABLE `select_master` DISABLE KEYS */;
INSERT INTO `select_master` VALUES (1,'gender','gender_combo','combo',NULL),(2,'relationship_status','relationship_combo','combo','required'),(3,'language','language_checkbox','checkbox',''),(4,'technology','technology_checkbox','checkbox',NULL),(5,'department','department_combo','combo','required'),(6,'prefered_location','prefered_location_combo','combo','required'),(7,'gender','gender_radio','radio','required'),(8,'gender','gender_checkbox','checkbox',NULL),(9,'relationship_status','relationship_radio','radio',NULL),(10,'relationship_status','relationship_checkbox','checkbox',NULL),(11,'language','language_combo','combo',NULL),(12,'language','language_radio','radio',NULL),(13,'technology','technology_radio','radio',NULL),(14,'technology','technology_combo','combo',NULL),(15,'department','department_checkbox','checkbox',NULL),(16,'department','department_radio','radio',NULL),(17,'prefered_location','prefered_location_checkbox','checkbox',NULL),(18,'prefered_location','prefered_location_radio','radio',NULL),(19,'state','state_combo','combo','required');
/*!40000 ALTER TABLE `select_master` ENABLE KEYS */;
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

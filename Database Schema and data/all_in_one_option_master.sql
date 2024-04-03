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
-- Table structure for table `option_master`
--

DROP TABLE IF EXISTS `option_master`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `option_master` (
  `id` int NOT NULL AUTO_INCREMENT,
  `select_id` int NOT NULL,
  `name` varchar(45) NOT NULL,
  `value` varchar(45) NOT NULL,
  `status` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `optioncol_UNIQUE` (`select_id`,`name`),
  CONSTRAINT `fk_option_master_1` FOREIGN KEY (`select_id`) REFERENCES `select_master` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=58 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `option_master`
--

LOCK TABLES `option_master` WRITE;
/*!40000 ALTER TABLE `option_master` DISABLE KEYS */;
INSERT INTO `option_master` VALUES (1,1,'Male','male',1),(2,1,'Female','female',1),(3,2,'Married','married',1),(4,2,'Single','single',1),(5,2,'Divorced','divorced',1),(6,3,'Hindi','hindi',1),(7,3,'English','english',1),(8,3,'Gujarati','gujarati',1),(9,4,'PHP','php',1),(10,4,'Mysql','mysql',1),(11,4,'Laravel','laravel',1),(12,4,'Oracle','oracle',1),(13,5,'Software Developer','software_developer',1),(14,5,'Bussiness Analysis','ba',1),(15,5,'Designer','designer',1),(16,6,'Ahmedabad','ahmedabad',1),(17,6,'Bhavnagar','bhavnagar',1),(18,6,'Rajkot','rajkot',1),(19,7,'Male','male',1),(20,7,'Female','female',1),(21,8,'Male','male',1),(22,8,'Female','female',1),(23,9,'Married','married',1),(24,9,'Single','single',1),(25,9,'Divorced','divorced',1),(26,10,'Married','married',1),(27,10,'Single','single',1),(28,10,'Divorced','divorced',1),(29,11,'Hindi','hindi',1),(30,11,'English','english',1),(31,11,'Gujarati','gujarati',1),(32,12,'Hindi','hindi',1),(33,12,'English','english',1),(34,12,'Gujarati','gujarati',1),(35,13,'PHP','php',1),(36,13,'Mysql','mysql',1),(37,13,'Laravel','laravel',1),(38,13,'Oracle','oracle',1),(39,14,'PHP','php',1),(40,14,'Mysql','mysql',1),(41,14,'Laravel','laravel',1),(42,14,'Oracle','oracle',1),(43,15,'Software Developer','software_developer',1),(44,15,'Bussiness Analysis','ba',1),(45,15,'Designer','designer',1),(46,16,'Software Developer','software_developer',1),(47,16,'Bussiness Analysis','ba',1),(48,16,'Designer','designer',1),(49,17,'Ahmedabad','ahmedabad',1),(50,17,'Bhavnagar','bhavnagar',1),(51,17,'Rajkot','rajkot',1),(52,18,'Ahmedabad','ahmedabad',1),(53,18,'Bhavnagar','bhavnagar',1),(54,18,'Rajkot','rajkot',1),(55,19,'Gujarat','gujarat',1),(56,19,'Maharastra','marastra',1),(57,19,'Rajasthan','rajasthan',1);
/*!40000 ALTER TABLE `option_master` ENABLE KEYS */;
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

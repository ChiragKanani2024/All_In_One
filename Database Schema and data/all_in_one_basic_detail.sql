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
-- Table structure for table `basic_detail`
--

DROP TABLE IF EXISTS `basic_detail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `basic_detail` (
  `employee_id` int NOT NULL AUTO_INCREMENT,
  `firstname` varchar(20) NOT NULL,
  `lastname` varchar(20) NOT NULL,
  `designation` varchar(20) NOT NULL,
  `address1` longtext,
  `address2` longtext,
  `email` varchar(60) NOT NULL,
  `phoneno` bigint NOT NULL,
  `city` varchar(50) NOT NULL,
  `state` varchar(50) NOT NULL,
  `gender` varchar(10) NOT NULL,
  `zipcode` int NOT NULL,
  `status` varchar(20) NOT NULL,
  `dob` date NOT NULL,
  `prefered_location` varchar(45) DEFAULT NULL,
  `current_ctc` varchar(45) DEFAULT NULL,
  `notic_period` varchar(45) DEFAULT NULL,
  `expected_ctc` varchar(45) DEFAULT NULL,
  `department` varchar(45) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`employee_id`),
  UNIQUE KEY `unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=65 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `basic_detail`
--

LOCK TABLES `basic_detail` WRITE;
/*!40000 ALTER TABLE `basic_detail` DISABLE KEYS */;
INSERT INTO `basic_detail` VALUES (34,'haresh','Kanani','web developer','Jawels Circle , jamnagar','bhavnagar','chiragkanani2003@gmail.com',9054687227,'bhavnagar','marastra','male',364003,'single','2003-09-01','bhavnagar','4lpa','10','5lpa','software_developer','2024-03-12 11:06:19','2024-03-12 11:06:19'),(36,'Chirag','kanani','web developer','cfgh','xfg','mihir@gmail.com',4524551212,'bhavnagar','gujarat','male',45,'married','2024-03-28','bhavnagar','4lpa','12','5lpa','designer','2024-03-12 13:42:55','2024-03-12 13:42:55'),(38,'Mihir','Rajpopat','web developer','gayatri nagar','','mihirbhai@gmail.com',9898989998,'bhavnagar','gujarat','male',364001,'single','2002-10-08','rajkot','2lpa','10','15lpa','software_developer','2024-03-13 04:37:57','2024-03-13 04:37:57'),(47,'Chirag','manish','web developer','sdfgfdg','','chirag2003@gmail.com',9054687227,'bhavnagar','gujarat','male',364003,'married','2024-03-21','bhavnagar','2lpa','2','25lpa','designer','2024-03-13 05:23:49','2024-03-13 05:23:49'),(48,'alpesh','prajapati','full stack ','dhanera','','ap@gmail.com',1234567890,'dhanera','marastra','male',123456,'single','2023-12-20','ahmedabad','3','3','10000','software_developer','2024-03-13 05:36:33','2024-03-13 05:36:33'),(51,'hardev','jala','web developer','dfgsdfg','sdfgdfg','hardev@gmail.com',1234567890,'bhavnagar','gujarat','male',364003,'single','2323-01-02','bhavnagar','3lpa','10','10000','designer','2024-03-14 08:59:58','2024-03-14 08:59:58'),(52,'Chirag','kanani','web developer','xcvc','','meet@gmail.com',1212121221,'bhavnagar','gujarat','male',364003,'single','2003-02-07','bhavnagar','3lpa','12','5lpa','ba','2024-03-15 10:09:49','2024-03-15 10:09:49'),(53,'Chirag','kanani','web developer','xcvc','','meet2003@gmail.com',1212121221,'bhavnagar','gujarat','male',364003,'single','2003-02-07','bhavnagar','3lpa','12','5lpa','ba','2024-03-15 10:13:12','2024-03-15 10:13:12'),(54,'Chirag','kanani','web developer','xcvc','','meet2000@gmail.com',1212121221,'bhavnagar','gujarat','male',364003,'single','2003-02-07','bhavnagar','3lpa','12','5lpa','ba','2024-03-15 10:14:19','2024-03-15 10:14:19'),(55,'Chirag','kanani','web developer','xcvc','','meet2004@gmail.com',1212121221,'bhavnagar','gujarat','male',364003,'single','2003-02-07','bhavnagar','3lpa','12','5lpa','ba','2024-03-15 10:15:14','2024-03-15 10:15:14'),(59,'yashvi','ghetiya','manager','sfrg','xfb','yashvi2004@gmail.com',9054687227,'bhavnagar','marastra','male',364003,'divorced','2003-02-03','rajkot','3lpa','10','5lpa','ba','2024-03-18 07:46:36','2024-03-18 07:46:36'),(60,'Chirag','kanani','web developer','Bhavnagar','','chirag2001@gmail.com',1212121221,'bhavnagar','gujarat','male',364003,'divorced','2003-02-07','ahmedabad','3lpa','12','5lpa','software_developer','2024-03-19 11:33:10','2024-03-19 11:33:10'),(61,'Chirag','kanani','web developer','Bhavnagar','','chirag1990@gmail.com',1212121221,'bhavnagar','gujarat','male',364003,'divorced','2003-02-07','ahmedabad','3lpa','12','5lpa','software_developer','2024-03-19 11:38:14','2024-03-19 11:38:14'),(63,'Chirag','mandaviya','web developer','Bhavnagar','','chirag2009@gmail.com',9054687227,'bhavnagar','gujarat','male',364003,'single','2003-02-07','bhavnagar','3lpa','12','5lpa','software_developer','2024-03-19 11:46:48','2024-03-19 11:46:48'),(64,'manish','sdfsdf','web developer','cvb','','chiragkanani2017@gmail.com',1212121221,'fgdfg','gujarat','male',364003,'married','2003-02-07','bhavnagar','3lpa','12','25lpa','ba','2024-03-27 10:52:59','2024-03-27 10:52:59');
/*!40000 ALTER TABLE `basic_detail` ENABLE KEYS */;
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

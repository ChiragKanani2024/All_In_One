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
-- Table structure for table `Users`
--

DROP TABLE IF EXISTS `Users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(45) NOT NULL,
  `password` varchar(255) NOT NULL,
  `salt` varchar(45) NOT NULL,
  `status` varchar(45) NOT NULL,
  `active_pin` varchar(45) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `pass_updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Users`
--

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;
INSERT INTO `Users` VALUES (1,'chiragkanani2012@gmail.com','$2b$10$bLyKRLsueen7DMmaP/oCIeeazGUAz/3lnzlQLV668PVtGTgKL8uvq','ekhq','Active','fp16m1yobuh9','2024-03-21 04:43:03','2024-03-21 11:31:40'),(2,'chiragkanani2003@gmail.com','$2b$10$NJoaiYyq7Lr4JiJW1WaRJu89drdpIaF9nXPw/22WayJDt7Gd2wt3O','w4bb','Active','dts6cxna00tt','2024-03-21 05:17:00','2024-03-28 04:29:23'),(3,'chiragkanani2004@gmail.com','$2b$10$hzPKLvfca2GKapQQTE3RROX/MWR4Ft9OSfZ4lqFDHB54p6YErJsxW','di1k','inActive','c01a7ru81v1a','2024-03-21 06:51:37','2024-03-21 11:31:40'),(5,'chiragkanani2013@gmail.com','$2b$10$5C7hkUWkpoOt3VjWAbZcfOQaeAplKJs/ylQI4NIsMgn5rI7xG5GDe','d8ey','Active','bbzw6l0bmvgj','2024-03-21 07:24:33','2024-03-21 11:31:40'),(6,'chiragkanani2015@gmail.com','$2b$10$3D0fcdJeHTZ3zVifgu3T9u7RTc4QHqzi2qmu7G7dNAj68HMoyL88i','3mjv','Active','mz808w998gjj','2024-03-21 09:04:30','2024-03-21 12:38:43'),(7,'honey@gmail.com','$2b$10$cQkmqSLxl2/XFA94G7wM3.IyKyBTPmdF/KDRA4ftTW/eAkMt4GaZq','0g2h','Active','f3vv6oefzn8d','2024-03-27 13:36:10','2024-03-27 13:36:10'),(8,'a@a.com','$2b$10$lpr4QtTVsD0W9wMJMzNQBuRgYRVTXkT1hldtH7cRWBGtZfSOWNbqm','s5sx','inActive','ii7nkarvp8hy','2024-03-28 04:03:02','2024-03-28 04:03:02'),(9,'aa@a.com','$2b$10$mcUqil1WjegfOjYfVzNWLuQAoxlSBwhUkzxEpfIksQhDNbNuLgAgO','emjb','Active','j5oibm044jo0','2024-03-28 04:03:29','2024-03-28 04:03:29'),(10,'hbzala07@gmail.com','$2b$10$lDOmWsTKhfuooTkIIvCIkuP7QpfrnfcYExd5DBptnfLC66A1f3X1S','gmd7','Active','yxxtsuskvufm','2024-03-28 09:03:23','2024-03-28 09:03:23'),(11,'alpesh12@gmail.com','$2b$10$i/CeCbnD7S6tb3x.o1t.fuVZ6p4dea7QalXq6TKD4t2zhx3QRTBdi','v3v3','Active','48py80qysgfh','2024-03-28 09:03:24','2024-03-28 09:03:24'),(12,'thakkarnihir007@gmail.com','$2b$10$Aqclrw7vxMCK3P5NwRs47uyaZxYQIzwxVw/sRv8l69juVQidpT4tS','2f8s','Active','zwoo3p4uwj8i','2024-03-28 09:05:39','2024-03-28 09:03:24'),(13,'ar67@gmail.com','$2b$10$V524Z5eS10e16aUlWzuVp.BSPthqb9K9nQUj.IdLrA20wkVrze.li','qahk','inActive','05k5tr5bkret','2024-03-28 09:04:51','2024-03-28 09:04:51'),(14,'ar678@gmail.com','$2b$10$ICmnixQ/xuCkwiLjNEPLlu1lmzgxR1mEejB1qzp5SZRjYm6QSf0bK','cfns','inActive','kv44hub93hk8','2024-03-28 09:05:07','2024-03-28 09:05:07'),(15,'b@b.com','$2b$10$F2ybzhD1pVyCJrJGy.OG/OVYb6tV8fuYFh02gPuEGutgyh7Qm1pd2','dz3n','Active','smgxwi0b6ufd','2024-03-28 09:05:24','2024-03-28 09:05:24'),(16,'mihir@esb.com','$2b$10$o9m6MbpAKjkrH8T7g7zmgex9Jh8yO4Pa9pqn2vjw7qLILkXabdm2.','f5g0','Active','ao1doweg3tjb','2024-03-28 09:17:09','2024-03-28 09:17:09');
/*!40000 ALTER TABLE `Users` ENABLE KEYS */;
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

CREATE DATABASE  IF NOT EXISTS `nannynotesdb` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `nannynotesdb`;
-- MySQL dump 10.13  Distrib 5.7.12, for osx10.9 (x86_64)
--
-- Host: 127.0.0.1    Database: nannynotesdb
-- ------------------------------------------------------
-- Server version	5.6.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `child`
--

DROP TABLE IF EXISTS `child`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `child` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `age` int(18) NOT NULL,
  `household_id` int(11) DEFAULT NULL,
  `parent_notes` varchar(255) DEFAULT NULL,
  `nanny_notes` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_household_id_idx` (`household_id`),
  KEY `fk_household_child_id_idx` (`household_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `child`
--

LOCK TABLES `child` WRITE;
/*!40000 ALTER TABLE `child` DISABLE KEYS */;
INSERT INTO `child` VALUES (1,'Jaime',7,1,NULL,NULL),(2,'Robbie',10,NULL,NULL,NULL),(3,'Chris',3,NULL,NULL,NULL);
/*!40000 ALTER TABLE `child` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `household`
--

DROP TABLE IF EXISTS `household`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `household` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `parent_notes` varchar(255) DEFAULT NULL,
  `nanny_notes` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `household`
--

LOCK TABLES `household` WRITE;
/*!40000 ALTER TABLE `household` DISABLE KEYS */;
INSERT INTO `household` VALUES (1,'family robinson','update 10',NULL),(2,'Adam\'s Family Values',NULL,'Too many bats and cobwebs in the house. Also beware of cousin Itt');
/*!40000 ALTER TABLE `household` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shift`
--

DROP TABLE IF EXISTS `shift`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `shift` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `household_id` int(11) DEFAULT NULL,
  `parent_notes` varchar(255) DEFAULT NULL,
  `nanny_notes` varchar(255) DEFAULT NULL,
  `start_datetime` datetime DEFAULT NULL,
  `end_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_shift_household_id_idx` (`household_id`),
  KEY `fk_shift_user_id_idx` (`user_id`),
  CONSTRAINT `fk_shift_household_id` FOREIGN KEY (`household_id`) REFERENCES `household` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_shift_user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shift`
--

LOCK TABLES `shift` WRITE;
/*!40000 ALTER TABLE `shift` DISABLE KEYS */;
INSERT INTO `shift` VALUES (1,NULL,NULL,'Take Johnny to swimming class',NULL,'2017-01-27 08:00:00','2017-01-27 16:00:00'),(2,NULL,NULL,'Make sure to take dog outside during shift',NULL,'2017-01-28 08:30:00','2017-01-28 12:30:00'),(3,2,NULL,NULL,NULL,'2017-01-15 12:00:00','2017-01-15 20:00:00');
/*!40000 ALTER TABLE `shift` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `task`
--

DROP TABLE IF EXISTS `task`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `task` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `complete` tinyint(1) NOT NULL,
  `shift_id` int(11) DEFAULT NULL,
  `parent_notes` varchar(255) DEFAULT NULL,
  `nanny_notes` varchar(255) DEFAULT NULL,
  `start_datetime` datetime DEFAULT NULL,
  `end_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_shifttasks` (`shift_id`),
  CONSTRAINT `fk_shifttasks` FOREIGN KEY (`shift_id`) REFERENCES `shift` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `task`
--

LOCK TABLES `task` WRITE;
/*!40000 ALTER TABLE `task` DISABLE KEYS */;
INSERT INTO `task` VALUES (1,'Task 1-1',0,1,NULL,NULL,'2017-01-27 08:00:00','2017-01-27 10:00:00'),(2,'Task 2-1',0,2,NULL,NULL,'2017-01-28 09:30:00','2017-01-28 10:30:00'),(3,'Task 1-2',0,NULL,'Last nanny forgot this task, please be sure it is completed.',NULL,'2017-01-27 10:00:00','2017-01-27 12:00:00'),(4,'Task 2-2',0,2,NULL,NULL,'2017-01-28 11:30:00','2017-01-28 12:00:00'),(6,'Task 1-3',0,NULL,NULL,NULL,'2017-01-27 11:00:00','2017-01-27 14:00:00');
/*!40000 ALTER TABLE `task` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(15) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` enum('ADMIN','PARENT','NANNY') NOT NULL,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'sparent1','$2a$10$SuwcF1NtYLqP6U5EW20eeeGdA0VzruNlC6bPAUF8oe07VfqEZ4VD6','PARENT','Sarah P.'),(2,'mawfiananny1','$2a$10$ShxnAHp9HA2NCqugttcwwONsT5r6PCg80DE/AphZ3KM9qo.N5ekoi','NANNY','Michael McKnight'),(3,'bonedaddy2','$2a$10$nCGNAxAOkU4utG.o9GNJ6u2vFCFphFyHPAtmI6Q.D4doQRXctQ98C','PARENT','Josh'),(4,'username','$2a$10$W./RlANfic.jTuIKTUOgDOro6CCJiCts766.D0IzbeKemfjTUNO8G','ADMIN','Andrew'),(5,'ananny2','$2a$10$CuWNBRv.beSBhqu9o7e9Suxc0AozhV7d5lMV9XppUyeD2KX2XZrsW','NANNY','Aaron Gamil');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_household`
--

DROP TABLE IF EXISTS `user_household`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_household` (
  `user_id` int(11) NOT NULL,
  `household_id` int(11) NOT NULL,
  PRIMARY KEY (`user_id`,`household_id`),
  KEY `fk_household_id_idx` (`household_id`),
  CONSTRAINT `fk_household_id` FOREIGN KEY (`household_id`) REFERENCES `household` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_household`
--

LOCK TABLES `user_household` WRITE;
/*!40000 ALTER TABLE `user_household` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_household` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-01-12  3:31:31

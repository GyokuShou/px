-- MySQL dump 10.13  Distrib 8.0.15, for Win64 (x86_64)
--
-- Host: localhost    Database: px
-- ------------------------------------------------------
-- Server version	8.0.15

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8mb4 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `auth_group`
--

DROP TABLE IF EXISTS `auth_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `auth_group` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(80) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group`
--

LOCK TABLES `auth_group` WRITE;
/*!40000 ALTER TABLE `auth_group` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_group_permissions`
--

DROP TABLE IF EXISTS `auth_group_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `auth_group_permissions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `group_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group_permissions`
--

LOCK TABLES `auth_group_permissions` WRITE;
/*!40000 ALTER TABLE `auth_group_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_permission`
--

DROP TABLE IF EXISTS `auth_permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `auth_permission` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `content_type_id` int(11) NOT NULL,
  `codename` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`),
  CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_permission`
--

LOCK TABLES `auth_permission` WRITE;
/*!40000 ALTER TABLE `auth_permission` DISABLE KEYS */;
INSERT INTO `auth_permission` VALUES (1,'Can add log entry',1,'add_logentry'),(2,'Can change log entry',1,'change_logentry'),(3,'Can delete log entry',1,'delete_logentry'),(4,'Can add permission',2,'add_permission'),(5,'Can change permission',2,'change_permission'),(6,'Can delete permission',2,'delete_permission'),(7,'Can add group',3,'add_group'),(8,'Can change group',3,'change_group'),(9,'Can delete group',3,'delete_group'),(10,'Can add user',4,'add_user'),(11,'Can change user',4,'change_user'),(12,'Can delete user',4,'delete_user'),(13,'Can add content type',5,'add_contenttype'),(14,'Can change content type',5,'change_contenttype'),(15,'Can delete content type',5,'delete_contenttype'),(16,'Can add session',6,'add_session'),(17,'Can change session',6,'change_session'),(18,'Can delete session',6,'delete_session'),(19,'Can add carousel',7,'add_carousel'),(20,'Can change carousel',7,'change_carousel'),(21,'Can delete carousel',7,'delete_carousel'),(22,'Can add user',8,'add_user'),(23,'Can change user',8,'change_user'),(24,'Can delete user',8,'delete_user'),(25,'Can add goods',9,'add_goods'),(26,'Can change goods',9,'change_goods'),(27,'Can delete goods',9,'delete_goods'),(28,'Can add type',10,'add_type'),(29,'Can change type',10,'change_type'),(30,'Can delete type',10,'delete_type'),(31,'Can add goods img',11,'add_goodsimg'),(32,'Can change goods img',11,'change_goodsimg'),(33,'Can delete goods img',11,'delete_goodsimg'),(34,'Can add cart',12,'add_cart'),(35,'Can change cart',12,'change_cart'),(36,'Can delete cart',12,'delete_cart'),(37,'Can add order',13,'add_order'),(38,'Can change order',13,'change_order'),(39,'Can delete order',13,'delete_order'),(40,'Can add order goods',14,'add_ordergoods'),(41,'Can change order goods',14,'change_ordergoods'),(42,'Can delete order goods',14,'delete_ordergoods');
/*!40000 ALTER TABLE `auth_permission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user`
--

DROP TABLE IF EXISTS `auth_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `auth_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) NOT NULL,
  `first_name` varchar(30) NOT NULL,
  `last_name` varchar(30) NOT NULL,
  `email` varchar(254) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user`
--

LOCK TABLES `auth_user` WRITE;
/*!40000 ALTER TABLE `auth_user` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user_groups`
--

DROP TABLE IF EXISTS `auth_user_groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `auth_user_groups` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_groups_user_id_group_id_94350c0c_uniq` (`user_id`,`group_id`),
  KEY `auth_user_groups_group_id_97559544_fk_auth_group_id` (`group_id`),
  CONSTRAINT `auth_user_groups_group_id_97559544_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  CONSTRAINT `auth_user_groups_user_id_6a12ed8b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user_groups`
--

LOCK TABLES `auth_user_groups` WRITE;
/*!40000 ALTER TABLE `auth_user_groups` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user_user_permissions`
--

DROP TABLE IF EXISTS `auth_user_user_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `auth_user_user_permissions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_user_permissions_user_id_permission_id_14a6b632_uniq` (`user_id`,`permission_id`),
  KEY `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user_user_permissions`
--

LOCK TABLES `auth_user_user_permissions` WRITE;
/*!40000 ALTER TABLE `auth_user_user_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_user_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_admin_log`
--

DROP TABLE IF EXISTS `django_admin_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `django_admin_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint(5) unsigned NOT NULL,
  `change_message` longtext NOT NULL,
  `content_type_id` int(11) DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  KEY `django_admin_log_user_id_c564eba6_fk_auth_user_id` (`user_id`),
  CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  CONSTRAINT `django_admin_log_user_id_c564eba6_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_admin_log`
--

LOCK TABLES `django_admin_log` WRITE;
/*!40000 ALTER TABLE `django_admin_log` DISABLE KEYS */;
/*!40000 ALTER TABLE `django_admin_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_content_type`
--

DROP TABLE IF EXISTS `django_content_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `django_content_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_content_type`
--

LOCK TABLES `django_content_type` WRITE;
/*!40000 ALTER TABLE `django_content_type` DISABLE KEYS */;
INSERT INTO `django_content_type` VALUES (1,'admin','logentry'),(3,'auth','group'),(2,'auth','permission'),(4,'auth','user'),(5,'contenttypes','contenttype'),(7,'pc','carousel'),(12,'pc','cart'),(9,'pc','goods'),(11,'pc','goodsimg'),(13,'pc','order'),(14,'pc','ordergoods'),(10,'pc','type'),(8,'pc','user'),(6,'sessions','session');
/*!40000 ALTER TABLE `django_content_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_migrations`
--

DROP TABLE IF EXISTS `django_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `django_migrations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_migrations`
--

LOCK TABLES `django_migrations` WRITE;
/*!40000 ALTER TABLE `django_migrations` DISABLE KEYS */;
INSERT INTO `django_migrations` VALUES (1,'contenttypes','0001_initial','2019-03-14 07:34:42.608768'),(2,'auth','0001_initial','2019-03-14 07:35:40.652702'),(3,'admin','0001_initial','2019-03-14 07:36:08.475504'),(4,'admin','0002_logentry_remove_auto_add','2019-03-14 07:36:08.650474'),(5,'contenttypes','0002_remove_content_type_name','2019-03-14 07:36:19.727953'),(6,'auth','0002_alter_permission_name_max_length','2019-03-14 07:36:30.030063'),(7,'auth','0003_alter_user_email_max_length','2019-03-14 07:36:36.875323'),(8,'auth','0004_alter_user_username_opts','2019-03-14 07:36:37.234694'),(9,'auth','0005_alter_user_last_login_null','2019-03-14 07:36:40.937716'),(10,'auth','0006_require_contenttypes_0002','2019-03-14 07:36:41.062711'),(11,'auth','0007_alter_validators_add_error_messages','2019-03-14 07:36:41.468950'),(12,'auth','0008_alter_user_username_max_length','2019-03-14 07:36:47.062514'),(13,'sessions','0001_initial','2019-03-14 07:36:51.187382'),(14,'pc','0001_initial','2019-03-14 09:36:04.178971'),(15,'pc','0002_user','2019-03-14 10:55:08.078152'),(16,'pc','0003_auto_20190315_1012','2019-03-15 02:12:39.218481'),(17,'pc','0004_auto_20190315_1355','2019-03-15 05:55:43.939011'),(18,'pc','0005_goods_img','2019-03-15 10:46:26.648031'),(19,'pc','0006_cart','2019-03-15 11:38:01.902905'),(20,'pc','0007_auto_20190316_0010','2019-03-15 16:10:34.222837'),(21,'pc','0008_order_ordergoods','2019-03-17 09:03:03.494870'),(22,'pc','0009_auto_20190317_1746','2019-03-17 09:46:59.985151');
/*!40000 ALTER TABLE `django_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_session`
--

DROP TABLE IF EXISTS `django_session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL,
  PRIMARY KEY (`session_key`),
  KEY `django_session_expire_date_a5c62663` (`expire_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_session`
--

LOCK TABLES `django_session` WRITE;
/*!40000 ALTER TABLE `django_session` DISABLE KEYS */;
INSERT INTO `django_session` VALUES ('695owhvz1d0py4qpigv3qzum1vnudbyz','Y2RkMGRkMzQ0MGZlNGM3YTdiZWZlYjM4NDE4ZGMzZDczMzk1OGRhNjp7InRva2VuIjoiNzExNDI2NjQyZDYxOTBlYjJkOTg2Njg0YmNlNjE2MTBiY2VmZmFjNyJ9','2019-03-30 06:05:47.637187'),('bbmcqy7rfnpgzugji0m1aaqmbik8gmta','NTI1NTQ1OGU0MzE4Yzc2YWMzZGYxYzlkZjkxZjhkOGM1YThkOWNiYTp7InRva2VuIjoiNDUzNzRmYTBkODhiNTUzZWZjNWE1ZWIxNWVmMmM4ZGNiZDdjZWI3OSJ9','2019-03-30 07:10:13.132186'),('ce9mzxb8kke35yjw2v3s0awzufdpirb5','Yjk5YzBhMGJkNzhmMzY2MmQyMjU4YWIzODg0YjE3NjI1NThjMWQ3MTp7InRva2VuIjoiMmRkYjU2MjYzNTVmMGEyNjc0NDlmZTcwMmFhMjNhNDI1NzA4ZTZkNSJ9','2019-03-30 14:16:24.079948'),('cn5h23lqvwbn90z1m3w71207spw3hfta','NThmMzc1ZmZiNTJjYzFkOTQ0MTBjMjFlNjRlNzNkNmJiYjliMTczNTp7InRva2VuIjoiZWRhM2ViNmE3MTEwMWFkZTk1NDhhNzM1MzM4MGI1MGI1MjhhN2Y1ZSJ9','2019-03-31 08:47:52.051035'),('fnth0yj54gossepi4qpt0cfpsdl03a2i','MmFkNjc5NWZkYWFhOTA4NTk2NGZhYzhmNGU5NmI0YTFkN2VjMjdjYzp7InRva2VuIjoiMjRmODA2N2Q5Y2MyNTA2MDZhMDZmMzYwNmRjZjUyZDJhOTdjMWEyMCJ9','2019-03-30 06:29:43.381536'),('hv73w7bh7qwwwgzc1tcj0dhqyqmsto4d','ODY2OTMwZDgyNzUxNDgwMjMxZTAwOTMzZjAwY2Q2NjY4NDJjYzgwYjp7InRva2VuIjoiYzc4NGQyMTE5NWJiMjQzMWE1Y2Q3Njg2OGNkYTMxYWU0Njg0ODMwZCJ9','2019-03-30 16:40:41.167344'),('ilr7rt3th5n0q0o6aa70k5l7ybemzcgp','YjdlN2FmMDMyZmIwNjY4ZGY4YWI1YWJiNTBmMDRiOWJkZTg3MDUxMjp7InRva2VuIjoiNmQzNTY4OGI5MjRhZDM1ZDcwOGVhNzdiOWE5ZDhhOWNkMGRiNmNlZSJ9','2019-03-29 03:13:37.714182'),('kxvnfmsvm1cpc4qzxtgybub1r1bs5ojc','ZjNiMzVjNDkyNTE1ZTUyNmRlYjg2ZWEzMjBkNGRkY2QyOTZkMjczMDp7InRva2VuIjoiNTMwNDJmNzRjYjE0OTZmYzNmNzc1ZGY0ZWVmMWE4Mjk5OTc2ZWFiZCJ9','2019-04-01 03:11:54.206275'),('tzd6cvvjnnj2l7p2a6uxelt0v3rdq7ja','M2FlZTYxNDE0OTFhNmJkYWI0Yjc3OTJhZTljOTNkOTRhNmQ1NzhiNTp7InRva2VuIjoiYjU0M2MwODlkYWNiNjc4ZDg2MTFkOTcxZDMzODUzNjI5MDk4NjE1ZCJ9','2019-03-29 16:12:14.470505'),('z7pcv7j8bovuca7on8ej3fq6qh5k9s5g','YjczZmY4Mjk3Njg5MWU2NTFhYWJiMDFmMDJjYTI0MjkwMmFmMmEyYjp7InRva2VuIjoiZWYwNjUzNzI0NjNlMGQ3NWI1MDU5Mzg5NzgyNzVmYjg2ZTI5NGUxMyJ9','2019-03-30 09:25:47.048383');
/*!40000 ALTER TABLE `django_session` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `px_cache_table`
--

DROP TABLE IF EXISTS `px_cache_table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `px_cache_table` (
  `cache_key` varchar(255) NOT NULL,
  `value` longtext NOT NULL,
  `expires` datetime(6) NOT NULL,
  PRIMARY KEY (`cache_key`),
  KEY `px_cache_table_expires` (`expires`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `px_cache_table`
--

LOCK TABLES `px_cache_table` WRITE;
/*!40000 ALTER TABLE `px_cache_table` DISABLE KEYS */;
INSERT INTO `px_cache_table` VALUES ('gin:1:059588a5d60503102448dfef8dc96e92586cf3e4','gASVAwAAAAAAAABLAy4=','2019-03-19 03:52:20.000000'),('gin:1:067fe98241fde09b0ba2200a55c417741ce10157','gASVAwAAAAAAAABLAy4=','2019-03-18 08:08:56.000000'),('gin:1:076512ad6c27ef7395f71e7756ee3f7a8dde4447','gASVAwAAAAAAAABLAy4=','2019-03-18 08:56:18.000000'),('gin:1:0b28ac1469a42ea691fb453c43722ee66b193b23','gASVAwAAAAAAAABLAy4=','2019-03-19 03:03:55.000000'),('gin:1:0bef73a0ae0d25714ed044d7c9f90aa424fae029','gASVAwAAAAAAAABLAy4=','2019-03-19 03:53:23.000000'),('gin:1:12c32f70dabba67e527a163acd26567775f39d34','gASVAwAAAAAAAABLAy4=','2019-03-19 03:33:23.000000'),('gin:1:14134f030a8722568ca69cafd7ea8afd97fb0290','gASVAwAAAAAAAABLAy4=','2019-03-19 01:56:31.000000'),('gin:1:150670509af09984028f9824a89ccef9359832b6','gASVAwAAAAAAAABLAy4=','2019-03-19 06:27:18.000000'),('gin:1:175eea2701c3216c30ecb396947ba9ea630aead7','gASVAwAAAAAAAABLAy4=','2019-03-19 16:33:54.000000'),('gin:1:24f8067d9cc250606a06f3606dcf52d2a97c1a20','gASVAwAAAAAAAABLAy4=','2019-03-19 06:29:43.000000'),('gin:1:2792488107f98c1080bbf87e674d107c9d3c8a3d','gASVAwAAAAAAAABLEy4=','2019-03-19 01:27:30.000000'),('gin:1:2989e52233c4417e4f67736f20cf4396bbd85e0c','gASVAwAAAAAAAABLEy4=','2019-03-18 03:16:02.000000'),('gin:1:2b75a8c777072cf5641a3c7c5842708127991b0e','gASVAwAAAAAAAABLEy4=','2019-03-18 08:57:13.000000'),('gin:1:2da0f60e1e1ecbc766f0993b43311659cf79c38e','gASVAwAAAAAAAABLAy4=','2019-03-19 06:20:28.000000'),('gin:1:2dbc636cea105a563a944ae71e19bd94d810a928','gASVAwAAAAAAAABLAy4=','2019-03-19 06:59:24.000000'),('gin:1:2ddb5626355f0a267449fe702aa23a425708e6d5','gASVAwAAAAAAAABLAy4=','2019-03-19 14:16:23.000000'),('gin:1:2ec5893e5d6ccc9c1ea30a01e2a3f69dd184660f','gASVAwAAAAAAAABLEy4=','2019-03-18 11:26:19.000000'),('gin:1:31add51b9cb7d099187283374bbd9af1afe146af','gASVAwAAAAAAAABLEy4=','2019-03-21 02:34:07.000000'),('gin:1:3cb60f84ac961945b5a0d427251d1ee87144a93a','gASVAwAAAAAAAABLAy4=','2019-03-19 07:03:41.000000'),('gin:1:3d2a8c094292686051db277c365488f0c06fb226','gASVAwAAAAAAAABLAy4=','2019-03-19 04:09:31.000000'),('gin:1:40bb24f0f16f0b96337af6819af4a38636881409','gASVAwAAAAAAAABLAy4=','2019-03-19 03:49:07.000000'),('gin:1:4241ee5997867826d57c2b473d93acd5168a790a','gASVAwAAAAAAAABLAy4=','2019-03-19 06:20:14.000000'),('gin:1:45374fa0d88b553efc5a5eb15ef2c8dcbd7ceb79','gASVAwAAAAAAAABLAy4=','2019-03-19 07:10:12.000000'),('gin:1:45d754612eb4023ac1225bf729397a34d44a44e8','gASVAwAAAAAAAABLAy4=','2019-03-19 03:27:34.000000'),('gin:1:46db1e9875463e1f7472293d125a01f9dfc5f374','gASVAwAAAAAAAABLAy4=','2019-03-19 03:23:15.000000'),('gin:1:4775bfd50f9dd71e9666bb8be561331789beb449','gASVAwAAAAAAAABLAy4=','2019-03-19 03:20:30.000000'),('gin:1:49f8f6e2d5d01e192c8af5ca026fee5275ed994b','gASVAwAAAAAAAABLAy4=','2019-03-19 07:38:06.000000'),('gin:1:4af87503401991392d98305121e14d3cc011aa27','gASVAwAAAAAAAABLAy4=','2019-03-19 03:35:17.000000'),('gin:1:4c8517f03ca9c404a5aed1c8ec6b31d2c35ffbd2','gASVAwAAAAAAAABLAy4=','2019-03-19 03:26:48.000000'),('gin:1:519ff920d591071c9d7e14f8669025f0dd5ff2c9','gASVAwAAAAAAAABLES4=','2019-03-18 03:11:55.000000'),('gin:1:53042f74cb1496fc3f775df4eef1a8299976eabd','gASVAwAAAAAAAABLAy4=','2019-03-21 03:11:53.000000'),('gin:1:5aac2928d6093a5f8844fde90c0250e4234fff90','gASVAwAAAAAAAABLAy4=','2019-03-19 03:22:25.000000'),('gin:1:5c90a017947125ab29eda330e5e4f209b921c96f','gASVAwAAAAAAAABLAy4=','2019-03-19 07:15:06.000000'),('gin:1:5fa039cc242a0843b7f5c965cea7c60afff2e991','gASVAwAAAAAAAABLAy4=','2019-03-19 04:17:27.000000'),('gin:1:6477a5713d0f49dce460c6acd3c7bac0bd22abb2','gASVAwAAAAAAAABLEy4=','2019-03-19 03:17:57.000000'),('gin:1:67f6df931ca3cc711c531683d1d721f1a391c4ea','gASVAwAAAAAAAABLAy4=','2019-03-19 07:38:26.000000'),('gin:1:6d35688b924ad35d708ea77b9a9d8a9cd0db6cee','gASVAwAAAAAAAABLEi4=','2019-03-18 03:13:37.000000'),('gin:1:6eb545cdd9e51c3d6b363000eec6f829402a1acd','gASVAwAAAAAAAABLDS4=','2019-03-18 02:57:30.000000'),('gin:1:70de216d4998d88f0a2286c52b82a035125f3eca','gASVAwAAAAAAAABLAy4=','2019-03-19 04:12:58.000000'),('gin:1:711426642d6190eb2d986684bce61610bceffac7','gASVAwAAAAAAAABLEy4=','2019-03-19 06:05:46.000000'),('gin:1:8b6d650c38e70da1181ae9c044a4136491175d93','gASVAwAAAAAAAABLAy4=','2019-03-19 03:56:32.000000'),('gin:1:8bc882d247e26856132a11f0fbeb2815eadb9acb','gASVAwAAAAAAAABLAy4=','2019-03-19 04:05:25.000000'),('gin:1:8de62d15d635b01b2e25c5a12546633d5fcfe2b7','gASVAwAAAAAAAABLAy4=','2019-03-19 03:54:45.000000'),('gin:1:8f4d804b13a084a1bce4ed8e108b95e9aab220d8','gASVAwAAAAAAAABLAy4=','2019-03-19 04:03:04.000000'),('gin:1:95eb1575f3a71a4307c2be25f021fd30bb3b2316','gASVAwAAAAAAAABLEy4=','2019-03-18 11:26:54.000000'),('gin:1:98aac76b7cac95cfffb949d7049b4348058db669','gASVAwAAAAAAAABLAy4=','2019-03-19 03:09:31.000000'),('gin:1:9f55fb1786599702d4fce66deb25fcfa959aca22','gASVAwAAAAAAAABLAy4=','2019-03-19 04:01:57.000000'),('gin:1:9fd81fab3ffd39863e4e3726a6c6e21dcb1e9127','gASVAwAAAAAAAABLAy4=','2019-03-19 03:58:10.000000'),('gin:1:a1eb6edce6c56c9434c4d030c8afcb13d549a5aa','gASVAwAAAAAAAABLAy4=','2019-03-19 02:48:26.000000'),('gin:1:a6b22a1173729a13ac3a82e50fe9351994ec82b8','gASVAwAAAAAAAABLAy4=','2019-03-19 02:30:28.000000'),('gin:1:a969185b52262149d599b82d407ee9352f86d147','gASVAwAAAAAAAABLAy4=','2019-03-19 06:26:13.000000'),('gin:1:ac56159be8c172e59fdeae48fda874c8badff813','gASVAwAAAAAAAABLAy4=','2019-03-19 03:51:05.000000'),('gin:1:ad52b816519164456147ad23d38257694c72cae1','gASVAwAAAAAAAABLAy4=','2019-03-19 07:05:38.000000'),('gin:1:b0da3048488e5ca31ffe3b80e631e09c8636944f','gASVAwAAAAAAAABLAy4=','2019-03-19 16:14:48.000000'),('gin:1:b12dd0657c648a5ab535c471bef0a54699080bdf','gASVAwAAAAAAAABLAy4=','2019-03-19 06:34:51.000000'),('gin:1:b1788e8e03e55b9c5700dec47111c0b513c0a1f7','gASVAwAAAAAAAABLEy4=','2019-03-19 06:21:57.000000'),('gin:1:b543c089dacb678d8611d971d33853629098615d','gASVAwAAAAAAAABLAy4=','2019-03-18 16:12:14.000000'),('gin:1:b951d9524dd3262d8400baf74591aa272092a07c','gASVAwAAAAAAAABLAy4=','2019-03-19 04:15:23.000000'),('gin:1:bb7db9399358ee4affb8687d06e635f6e1da58de','gASVAwAAAAAAAABLDy4=','2019-03-18 03:06:51.000000'),('gin:1:bd00f0ca35d48d0d084b9490b798ba3265c06c8b','gASVAwAAAAAAAABLAy4=','2019-03-19 03:39:50.000000'),('gin:1:bec4992d0cec8e319819033fdb331f95a1631293','gASVAwAAAAAAAABLEC4=','2019-03-18 03:10:30.000000'),('gin:1:c1ba00367c8ef1fe801a9e76faf53d1ba4f6322d','gASVAwAAAAAAAABLAy4=','2019-03-19 03:44:57.000000'),('gin:1:c397a41b1270c17664de1ff0a94c0d01f6f926d1','gASVAwAAAAAAAABLAy4=','2019-03-19 03:25:43.000000'),('gin:1:c5c193fb43f39f5d24c9285b781d999d34f829ff','gASVAwAAAAAAAABLAy4=','2019-03-19 03:54:05.000000'),('gin:1:c784d21195bb2431a5cd76868cda31ae4684830d','gASVAwAAAAAAAABLAy4=','2019-03-19 16:40:40.000000'),('gin:1:cb320baa0918835bfc2f6003ee423b29d44f0cac','gASVAwAAAAAAAABLAy4=','2019-03-19 03:46:47.000000'),('gin:1:cbe2a5b762df65196878fe6b9cde0636e295e9c7','gASVAwAAAAAAAABLAy4=','2019-03-19 03:25:13.000000'),('gin:1:d05541fa4408b74bb6e0025592dbcf3eb93b9eb6','gASVAwAAAAAAAABLAy4=','2019-03-21 02:37:37.000000'),('gin:1:d094ccafe6f905b6790c53490316ea65530eb582','gASVAwAAAAAAAABLAy4=','2019-03-19 03:21:35.000000'),('gin:1:d196831080c7c8f5981f2805b9322a7ebbc01f26','gASVAwAAAAAAAABLAy4=','2019-03-19 06:26:27.000000'),('gin:1:d29c5e9848ebf0270dadcb6ab1e44129059a0a7e','gASVAwAAAAAAAABLAy4=','2019-03-21 02:33:50.000000'),('gin:1:d883dc81ee4269ce1b7599e32e4a2da2b56500ab','gASVAwAAAAAAAABLAy4=','2019-03-19 06:18:39.000000'),('gin:1:e0a733e7acfb58b7dd25a16c8fdb5f6d40773659','gASVAwAAAAAAAABLAy4=','2019-03-19 06:14:55.000000'),('gin:1:e377b28c21bd9cb793dedb09d38a1e30be940d62','gASVAwAAAAAAAABLAy4=','2019-03-19 05:59:14.000000'),('gin:1:e7a45f66b3a019dabbac6c56cea6d65130e8e51c','gASVAwAAAAAAAABLAy4=','2019-03-19 07:11:44.000000'),('gin:1:ea28c51643596201a4313a368b60d928a9381f99','gASVAwAAAAAAAABLDi4=','2019-03-18 03:03:21.000000'),('gin:1:eb9cc040ffd1443809f861bd45cb5b43a3047190','gASVAwAAAAAAAABLAy4=','2019-03-19 03:16:02.000000'),('gin:1:eda3eb6a71101ade9548a7353380b50b528a7f5e','gASVAwAAAAAAAABLAy4=','2019-03-20 08:47:51.000000'),('gin:1:ee239083657b91bff602651a7c1dbde77b522de2','gASVAwAAAAAAAABLAy4=','2019-03-19 03:30:53.000000'),('gin:1:ef065372463e0d75b505938978275fb86e294e13','gASVAwAAAAAAAABLEy4=','2019-03-19 09:25:46.000000'),('gin:1:f125f4538147e968a72aa292d835ab12b2f8b5ca','gASVAwAAAAAAAABLAy4=','2019-03-19 06:32:35.000000'),('gin:1:f139b9319d850b1700d24e1947d76d2d52156c50','gASVAwAAAAAAAABLAy4=','2019-03-19 06:42:53.000000'),('gin:1:f169ddcda5a6beb7bb6f8cb9b80b4dee8557f33d','gASVAwAAAAAAAABLAy4=','2019-03-21 01:18:39.000000'),('gin:1:f2cf15dc5db42a7c05c28c0ec792b331199b5734','gASVAwAAAAAAAABLEy4=','2019-03-19 03:18:55.000000'),('gin:1:f50776ed93ef195a653a20095eeb803a41de3414','gASVAwAAAAAAAABLAy4=','2019-03-19 04:17:50.000000');
/*!40000 ALTER TABLE `px_cache_table` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `px_carousel`
--

DROP TABLE IF EXISTS `px_carousel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `px_carousel` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `path` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `px_carousel`
--

LOCK TABLES `px_carousel` WRITE;
/*!40000 ALTER TABLE `px_carousel` DISABLE KEYS */;
INSERT INTO `px_carousel` VALUES (1,'img/imgs/lun_bo1_01.jpg','l1'),(2,'img/imgs/lun_bo1_02.jpg','l2'),(3,'img/imgs/lun_bo1_03.jpg','l3'),(4,'img/imgs/lun_bo1_04.jpg','l4');
/*!40000 ALTER TABLE `px_carousel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `px_cart`
--

DROP TABLE IF EXISTS `px_cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `px_cart` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `desc` varchar(50) NOT NULL,
  `size` varchar(50) NOT NULL,
  `number` int(11) NOT NULL,
  `isselect` tinyint(1) NOT NULL,
  `isdelete` tinyint(1) NOT NULL,
  `good_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `pc_cart_good_id_15f54560_fk_px_goods_id` (`good_id`),
  KEY `pc_cart_user_id_57eb3ee8_fk_px_user_id` (`user_id`),
  CONSTRAINT `pc_cart_good_id_15f54560_fk_px_goods_id` FOREIGN KEY (`good_id`) REFERENCES `px_goods` (`id`),
  CONSTRAINT `pc_cart_user_id_57eb3ee8_fk_px_user_id` FOREIGN KEY (`user_id`) REFERENCES `px_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=174 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `px_cart`
--

LOCK TABLES `px_cart` WRITE;
/*!40000 ALTER TABLE `px_cart` DISABLE KEYS */;
INSERT INTO `px_cart` VALUES (96,'黑色','38',1,1,1,138,3),(101,'白色','40',2,1,1,138,3),(102,'黑色','40',2,1,1,138,3),(103,'白色','',1,1,1,140,3),(104,'卡其色','',1,1,1,140,3),(105,'红色','',1,1,1,140,3),(106,'','35',1,1,1,141,3),(107,'','36',1,1,1,141,3),(108,'','37',2,1,1,141,3),(109,'白色','37',2,1,1,141,3),(110,'卡其色','37',3,1,1,141,3),(111,'红色','37',2,1,1,141,3),(112,'黑色','39',3,1,1,141,3),(113,'黑色','38',1,1,1,138,3),(114,'黑色','39',1,1,1,138,3),(115,'军绿色','39',1,1,1,138,3),(116,'卡其色','41',1,1,1,138,3),(117,'卡其色','40',1,1,1,138,3),(118,'卡其色','42',1,1,1,138,3),(119,'灰色','40',1,1,1,138,3),(120,'灰色','39',1,1,1,138,3),(121,'军绿色','43',1,1,1,138,3),(122,'黑色','',1,1,1,139,3),(123,'白色','',1,1,1,139,3),(124,'军绿色','',1,1,1,139,3),(125,'卡其色','',2,1,1,139,3),(126,'灰色','',1,1,1,139,3),(127,'黑色','38',1,1,1,138,3),(128,'黑色','39',1,1,1,138,3),(129,'黑色','40',1,1,1,138,3),(130,'黑色','41',1,1,1,138,3),(131,'黑色','42',1,1,1,138,3),(132,'黑色','43',1,1,1,138,3),(133,'白色','43',2,1,1,138,3),(134,'白色','39',1,1,1,138,3),(135,'白色','40',1,1,1,138,3),(136,'白色','41',1,1,1,138,3),(137,'白色','42',1,1,1,138,3),(138,'黑色','',1,1,1,139,3),(139,'白色','',1,1,1,139,3),(140,'军绿色','',1,1,1,139,3),(141,'灰色','',1,1,1,139,3),(142,'黑色','38',1,1,1,138,3),(143,'黑色','39',1,1,1,138,3),(144,'黑色','40',1,1,1,138,3),(145,'黑色','41',1,1,1,138,3),(146,'黑色','42',1,1,1,138,3),(147,'黑色','43',1,1,1,138,3),(148,'白色','43',2,1,1,138,3),(149,'白色','39',1,1,1,138,3),(150,'白色','40',1,1,1,138,3),(151,'白色','41',1,1,1,138,3),(152,'白色','42',1,1,1,138,3),(153,'军绿色','43',2,0,0,138,3),(154,'军绿色','39',1,1,1,138,3),(155,'军绿色','40',1,1,1,138,3),(156,'军绿色','41',1,1,1,138,3),(157,'军绿色','42',1,1,1,138,3),(158,'卡其色','43',1,1,1,138,3),(159,'卡其色','39',1,1,1,138,3),(160,'卡其色','40',1,1,1,138,3),(161,'卡其色','41',1,1,1,138,3),(163,'黑色','39',1,1,1,138,3),(164,'黑色','40',1,0,0,138,3),(165,'黑色','41',1,0,0,138,3),(166,'黑色','42',1,0,0,138,3),(167,'黑色','43',1,0,0,138,3),(168,'白色','43',2,0,0,138,3),(169,'白色','39',1,0,0,138,3),(172,'白色','42',1,1,1,138,3);
/*!40000 ALTER TABLE `px_cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `px_goods`
--

DROP TABLE IF EXISTS `px_goods`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `px_goods` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `productname` varchar(50) DEFAULT NULL,
  `productlongname` varchar(200) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `ctypeid` varchar(15) NOT NULL,
  `productdesc` varchar(40) DEFAULT NULL,
  `productsize` varchar(40) DEFAULT NULL,
  `issale` int(11) NOT NULL,
  `saletime` datetime(6) DEFAULT NULL,
  `productnum` int(11) NOT NULL,
  `storenums` int(11) NOT NULL,
  `review` int(11) NOT NULL,
  `coin` int(11) NOT NULL,
  `ftypeid_id` int(11) NOT NULL,
  `img` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `pc_goods_ftypeid_id_bfd0424f_fk_pc_type_id` (`ftypeid_id`),
  CONSTRAINT `pc_goods_ftypeid_id_bfd0424f_fk_pc_type_id` FOREIGN KEY (`ftypeid_id`) REFERENCES `px_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=144 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `px_goods`
--

LOCK TABLES `px_goods` WRITE;
/*!40000 ALTER TABLE `px_goods` DISABLE KEYS */;
INSERT INTO `px_goods` VALUES (138,NULL,'想川 英伦时尚男士套脚潮流懒透气乐福鞋',99.50,'11000','黑色#白色#军绿色#卡其色#灰色','38#39#40#41#42#43',0,NULL,0,10000,0,10,1,'img/shoes_man1/1.jpg'),(139,NULL,'瑞士军刀韩版时尚男士运动双肩电脑背包商务休闲包学生书包SW9017',81.00,'21002','黑色#白色#军绿色#卡其色#灰色',NULL,0,NULL,0,245,0,10,2,'img/bag_male1/1.jpg'),(140,NULL,'柏丽雅诗 夏款日韩兔耳朵菱格单肩斜挎百搭贝壳包',37.00,'21001','白色#卡其色#红色',NULL,0,NULL,0,245,0,10,2,'img/bag_female1/1.jpg'),(141,NULL,'东帝名坊2016秋季尖头性感细高跟单鞋 123-2',109.00,'11001','#白色#卡其色#红色#黑色','35#36#37#38#39#40',0,NULL,0,245,0,10,1,'img/high_show1/1.jpg'),(142,NULL,'男童装夏装 休闲短袖 夏款',35.00,'41001','#白色#卡其色#黑色#灰色#蓝色','S#M#L#XL',0,NULL,0,194,0,2,4,'img/tshirt_kid1/1.jpg'),(143,NULL,'斯鑫明 2016秋冬新款男士纯棉夹克男时尚印花修身拼接夹克外套',77.00,'31002','#白色#黑色#灰色#深蓝','S#M#L#XL',0,NULL,0,194,0,2,3,'img/tshirt_man1/1.jpg');
/*!40000 ALTER TABLE `px_goods` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `px_goodsimg`
--

DROP TABLE IF EXISTS `px_goodsimg`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `px_goodsimg` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `path` varchar(100) NOT NULL,
  `goods_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `px_goodsimg_goods_id_41b203b2_fk_px_goods_id` (`goods_id`),
  CONSTRAINT `px_goodsimg_goods_id_41b203b2_fk_px_goods_id` FOREIGN KEY (`goods_id`) REFERENCES `px_goods` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `px_goodsimg`
--

LOCK TABLES `px_goodsimg` WRITE;
/*!40000 ALTER TABLE `px_goodsimg` DISABLE KEYS */;
INSERT INTO `px_goodsimg` VALUES (1,'img/shoes_man1/1.jpg',138),(2,'img/shoes_man1/2.jpg',138),(3,'img/shoes_man1/3.jpg',138),(4,'img/shoes_man1/4.jpg',138),(5,'img/shoes_man1/5.jpg',138),(6,'img/bag_male1/1.jpg',139),(7,'img/bag_male1/2.jpg',139),(8,'img/bag_male1/3.jpg',139),(9,'img/bag_female1/1.jpg',140),(10,'img/bag_female1/2.jpg',140),(11,'img/bag_female1/3.jpg',140),(12,'img/high_show1/1.jpg',141),(13,'img/high_show1/2.jpg',141),(14,'img/high_show1/3.jpg',141),(15,'img/high_show1/4.jpg',141),(16,'img/high_show1/5.jpg',141),(17,'img/tshirt_kid1/1.jpg',142),(18,'img/tshirt_kid1/2.jpg',142),(19,'img/tshirt_kid1/3.jpg',142),(20,'img/tshirt_kid1/4.jpg',142),(21,'img/tshirt_kid1/5.jpg',142),(22,'img/tshirt_man1/1.jpg',143),(23,'img/tshirt_man1/2.jpg',143),(24,'img/tshirt_man1/3.jpg',143),(25,'img/tshirt_man1/4.jpg',143),(26,'img/tshirt_man1/5.jpg',143);
/*!40000 ALTER TABLE `px_goodsimg` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `px_order`
--

DROP TABLE IF EXISTS `px_order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `px_order` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `createtime` datetime(6) NOT NULL,
  `updatetime` datetime(6) NOT NULL,
  `status` int(11) NOT NULL,
  `identifier` varchar(256) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `px_order_user_id_e1cf6370_fk_px_user_id` (`user_id`),
  CONSTRAINT `px_order_user_id_e1cf6370_fk_px_user_id` FOREIGN KEY (`user_id`) REFERENCES `px_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `px_order`
--

LOCK TABLES `px_order` WRITE;
/*!40000 ALTER TABLE `px_order` DISABLE KEYS */;
INSERT INTO `px_order` VALUES (9,'2019-03-18 06:15:24.410753','2019-03-18 06:15:24.410753',0,'201903181415247504002248',3),(10,'2019-03-18 06:20:49.546168','2019-03-18 06:20:49.546168',0,'201903181420491030323813',3);
/*!40000 ALTER TABLE `px_order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `px_ordergoods`
--

DROP TABLE IF EXISTS `px_ordergoods`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `px_ordergoods` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `number` int(11) NOT NULL,
  `goods_id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `desc` varchar(100) NOT NULL,
  `size` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `px_ordergoods_goods_id_153c49b1_fk_px_goods_id` (`goods_id`),
  KEY `px_ordergoods_order_id_ff3d236b_fk_px_order_id` (`order_id`),
  CONSTRAINT `px_ordergoods_goods_id_153c49b1_fk_px_goods_id` FOREIGN KEY (`goods_id`) REFERENCES `px_goods` (`id`),
  CONSTRAINT `px_ordergoods_order_id_ff3d236b_fk_px_order_id` FOREIGN KEY (`order_id`) REFERENCES `px_order` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `px_ordergoods`
--

LOCK TABLES `px_ordergoods` WRITE;
/*!40000 ALTER TABLE `px_ordergoods` DISABLE KEYS */;
INSERT INTO `px_ordergoods` VALUES (10,1,138,9,'黑色','38'),(11,1,139,10,'卡其色','');
/*!40000 ALTER TABLE `px_ordergoods` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `px_type`
--

DROP TABLE IF EXISTS `px_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `px_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `typeid` varchar(10) NOT NULL,
  `typename` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `px_type`
--

LOCK TABLES `px_type` WRITE;
/*!40000 ALTER TABLE `px_type` DISABLE KEYS */;
INSERT INTO `px_type` VALUES (1,'1','鞋类'),(2,'2','包'),(3,'3','服饰'),(4,'4','童装');
/*!40000 ALTER TABLE `px_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `px_user`
--

DROP TABLE IF EXISTS `px_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `px_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `password` varchar(256) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `px_user`
--

LOCK TABLES `px_user` WRITE;
/*!40000 ALTER TABLE `px_user` DISABLE KEYS */;
INSERT INTO `px_user` VALUES (3,'gin@gin.com','3b3927e40c6e2d6dcd4ae074e706611c76b920cd6cfbd0031e70c13029a0c7d1'),(19,'1@1.com','3b3927e40c6e2d6dcd4ae074e706611c76b920cd6cfbd0031e70c13029a0c7d1');
/*!40000 ALTER TABLE `px_user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-03-18 14:49:54

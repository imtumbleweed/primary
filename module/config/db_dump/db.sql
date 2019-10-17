# ************************************************************
# Sequel Pro SQL dump
# Version 4499
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 45.79.79.114 (MySQL 5.7.26-0ubuntu0.19.04.1)
# Database: lavacode
# Generation Time: 2019-10-16 13:16:16 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table like
# ------------------------------------------------------------

DROP TABLE IF EXISTS `like`;

CREATE TABLE `like` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `tweet_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table session
# ------------------------------------------------------------

DROP TABLE IF EXISTS `session`;

CREATE TABLE `session` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `token` varchar(255) DEFAULT NULL,
  `timestamp` int(11) DEFAULT NULL,
  `expire` varchar(11) DEFAULT 'never',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `session` WRITE;
/*!40000 ALTER TABLE `session` DISABLE KEYS */;

INSERT INTO `session` (`id`, `user_id`, `token`, `timestamp`, `expire`)
VALUES
	(10,1,'c73f002e978c3cc36bd2f3f6df803ba5',1559606968,'never'),
	(11,2,'d866bd5f01fbf8ef508e22cbde1764f9',1559606968,'never'),
	(12,1,'token_test_12345',0,'never');

/*!40000 ALTER TABLE `session` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table token
# ------------------------------------------------------------

DROP TABLE IF EXISTS `token`;

CREATE TABLE `token` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `token` varchar(64) DEFAULT '',
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table tweet
# ------------------------------------------------------------

DROP TABLE IF EXISTS `tweet`;

CREATE TABLE `tweet` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `message` char(255) DEFAULT NULL,
  `timestamp` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table user
# ------------------------------------------------------------

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(32) DEFAULT NULL,
  `email_address` varchar(255) DEFAULT NULL,
  `password_md5` varchar(255) DEFAULT NULL,
  `first_name` varchar(32) DEFAULT NULL,
  `last_name` varchar(32) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL COMMENT 'json',
  `country` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `ip_address` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;

INSERT INTO `user` (`id`, `username`, `email_address`, `password_md5`, `first_name`, `last_name`, `avatar`, `country`, `state`, `city`, `ip_address`)
VALUES
	(1,'felix','felix@felix.com','482c811da5d5b4bc6d497ffa98491e38','felix','felix','{}','US','California','San Francisco','123'),
	(2,'luna','luna@luna.com','12345','luna','luna','{}','US','California','San Francisco','123'),
	(3,'felix','felixx@gmail.com','haha123',NULL,NULL,NULL,NULL,NULL,NULL,NULL),
	(4,'felix','felixx@gmail.com','haha123',NULL,NULL,NULL,NULL,NULL,NULL,NULL),
	(5,'luna1543','luna487@lavacode.com','password',NULL,NULL,NULL,NULL,NULL,NULL,NULL),
	(6,'luna5230','luna856@lavacode.com','password',NULL,NULL,NULL,NULL,NULL,NULL,NULL),
	(7,'felix8842','felix367@lavacode.com','password',NULL,NULL,NULL,NULL,NULL,NULL,NULL),
	(8,'luna2778','luna219@lavacode.com','password',NULL,NULL,NULL,NULL,NULL,NULL,NULL),
	(9,'luna8993','luna966@lavacode.com','password','last','233906291','{\"head\":1,\"eyes\":1}',NULL,NULL,NULL,NULL),
	(10,'felix3374','felix974@lavacode.com','password','last','6289507725','{\"head\":1,\"eyes\":1}',NULL,NULL,NULL,NULL),
	(11,'felix4178','felix807@lavacode.com','password','last','3926883697','{\"head\":1,\"eyes\":1}',NULL,NULL,NULL,NULL),
	(47,'luna6270','luna796@lavacode.com','5f4dcc3b5aa765d61d8327deb882cf99','first','last','{\"head\":1,\"eyes\":1}',NULL,NULL,NULL,NULL),
	(48,'luna7480','luna603@lavacode.com','5f4dcc3b5aa765d61d8327deb882cf99','first','last','{\"head\":1,\"eyes\":1}',NULL,NULL,NULL,NULL),
	(49,'luna7480','luna6t03@lavacode.com','5f4dcc3b5aa765d61d8327deb882cf99','first','last','{\"head\":1,\"eyes\":1}',NULL,NULL,NULL,NULL),
	(50,'luna3298','luna382@lavacode.com','5f4dcc3b5aa765d61d8327deb882cf99','first','last','{\"head\":1,\"eyes\":1}',NULL,NULL,NULL,NULL),
	(51,'felix7529','felix956@lavacode.com','5f4dcc3b5aa765d61d8327deb882cf99','first','last','{\"head\":1,\"eyes\":1}',NULL,NULL,NULL,NULL),
	(52,'felix7419','felix638@lavacode.com','5f4dcc3b5aa765d61d8327deb882cf99','first','last','{\"head\":1,\"eyes\":1}',NULL,NULL,NULL,NULL),
	(53,'felix7118','felix182@lavacode.com','5f4dcc3b5aa765d61d8327deb882cf99','first','last','{\"head\":1,\"eyes\":1}',NULL,NULL,NULL,NULL),
	(54,'luna4266','luna381@lavacode.com','5f4dcc3b5aa765d61d8327deb882cf99','first','last','{\"head\":1,\"eyes\":1}',NULL,NULL,NULL,NULL),
	(55,'','','5f4dcc3b5aa765d61d8327deb882cf99','first','last','{\"head\":1,\"eyes\":1}',NULL,NULL,NULL,NULL),
	(56,'fghf','fgh','5f4dcc3b5aa765d61d8327deb882cf99','first','last','{\"head\":1,\"eyes\":1}',NULL,NULL,NULL,NULL);

/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

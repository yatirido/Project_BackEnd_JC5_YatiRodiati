-- phpMyAdmin SQL Dump
-- version 4.0.4.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Aug 03, 2018 at 10:14 AM
-- Server version: 5.6.13
-- PHP Version: 5.4.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `db_product`
--
CREATE DATABASE IF NOT EXISTS `db_product` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `db_product`;

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE IF NOT EXISTS `category` (
  `categoryID` int(11) NOT NULL AUTO_INCREMENT,
  `categoryName` varchar(50) NOT NULL,
  `description` varchar(200) NOT NULL,
  PRIMARY KEY (`categoryID`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`categoryID`, `categoryName`, `description`) VALUES
(1, 'Crossbody Bags', 'Our leather crossbody bags give you a hands-free way to pursue what makes you happy'),
(2, 'Tote Bags', 'Our spacious tote bags come in handy, designed to hold all of your essentials – even your small handbag when necessary '),
(3, 'Satchel Bags', 'The perfect combination of crossbody and tote bags'),
(4, 'Wallets & Clutches', 'Come in various types');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE IF NOT EXISTS `product` (
  `productID` int(11) NOT NULL AUTO_INCREMENT,
  `categoryID` int(11) NOT NULL,
  `productName` varchar(100) NOT NULL,
  `price` decimal(19,0) NOT NULL,
  `productPhoto` varchar(50) NOT NULL,
  PRIMARY KEY (`productID`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=17 ;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`productID`, `categoryID`, `productName`, `price`, `productPhoto`) VALUES
(1, 1, 'Crossbody Ryder Olive', '950000', 'Crossbody_Ryder_1.jpg'),
(2, 1, 'Crossbody Campbel Brown', '975000', 'Crossbody_Campbell_1.jpg'),
(3, 1, 'Crossbody Elle Blue', '850000', 'Crossbody_Elle_1.jpg'),
(4, 1, 'Crossbody Emma Havana', '1100000', 'Crossbody_Emma_1.jpg'),
(5, 1, 'Crossbody Kinley Stripes', '900000', 'Crossbody_Kinley_Small_1.jpg'),
(6, 2, 'Tote Fiona Cream', '1250000', 'Tote_Fiona_1.jpg'),
(7, 2, 'Tote Rachel Blue', '1200000', 'Tote_Rachel_1.jpg'),
(8, 2, 'Tote Fiona White Stripes', '1300000', 'Tote_Fiona_E_1.jpg'),
(9, 2, 'Tote Rachel Motif', '1300000', 'Tote_Rachel_Motif_1.jpg'),
(10, 3, 'Satchel Fiona Black', '1450000', 'Satchel_Fiona_1.jpg'),
(11, 3, 'Satchel Rachel Blue', '1350000', 'Satchel_Rachel_1.jpg'),
(12, 3, 'Satchel Ryder Brown', '1400000', 'Satchel_Ryder_1.jpg'),
(13, 4, 'Clutch Emma Navy', '800000', 'Clutch_Emma_RFID_MidnightNavy_1.jpg'),
(14, 4, 'Clutch Emma Mineral Grey', '850000', 'Clutch_Emma_RFID_MineralGrey_1.jpg'),
(15, 4, 'Clutch Emma Cooper', '750000', 'Clutch_Emma_RFID_Cooper_1.jpg'),
(16, 4, 'Clutch Emma Faded Indigo', '775000', 'Clutch_Emma_RFID_FadedIndigo_1.jpg');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

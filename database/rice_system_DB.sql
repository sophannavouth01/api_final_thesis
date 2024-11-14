/*
 Navicat Premium Dump SQL

 Source Server         : mysql
 Source Server Type    : MySQL
 Source Server Version : 90001 (9.0.1)
 Source Host           : localhost:3306
 Source Schema         : rice_system_DB

 Target Server Type    : MySQL
 Target Server Version : 90001 (9.0.1)
 File Encoding         : 65001

 Date: 06/11/2024 10:37:23
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for agent
-- ----------------------------
DROP TABLE IF EXISTS `agent`;
CREATE TABLE `agent` (
  `id` int NOT NULL AUTO_INCREMENT,
  `dateOfBirth` datetime NOT NULL,
  `commission` decimal(10,2) NOT NULL,
  `status` tinyint NOT NULL DEFAULT '1',
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `position_id` int DEFAULT NULL,
  `branch_id` int DEFAULT NULL,
  `createdBy` int DEFAULT NULL,
  `updatedBy` int DEFAULT NULL,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `enName` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `gender` varchar(255) NOT NULL,
  `phone1` varchar(255) NOT NULL,
  `phone2` varchar(255) DEFAULT NULL,
  `villageName` varchar(255) NOT NULL,
  `communeName` varchar(255) NOT NULL,
  `districtName` varchar(255) NOT NULL,
  `marriedStatus` varchar(255) NOT NULL,
  `provinceName` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_db0b192864bf5de1ce166d3a611` (`position_id`),
  KEY `FK_7e85a378e5e5239083223acd61b` (`branch_id`),
  KEY `FK_5cedeb8bb86278f96354246e690` (`createdBy`),
  KEY `FK_8157333a9b5c63e5f9208d7b548` (`updatedBy`),
  CONSTRAINT `FK_5cedeb8bb86278f96354246e690` FOREIGN KEY (`createdBy`) REFERENCES `user` (`id`),
  CONSTRAINT `FK_7e85a378e5e5239083223acd61b` FOREIGN KEY (`branch_id`) REFERENCES `branch` (`id`),
  CONSTRAINT `FK_8157333a9b5c63e5f9208d7b548` FOREIGN KEY (`updatedBy`) REFERENCES `user` (`id`),
  CONSTRAINT `FK_db0b192864bf5de1ce166d3a611` FOREIGN KEY (`position_id`) REFERENCES `position` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of agent
-- ----------------------------
BEGIN;
INSERT INTO `agent` (`id`, `dateOfBirth`, `commission`, `status`, `createdAt`, `updatedAt`, `position_id`, `branch_id`, `createdBy`, `updatedBy`, `firstName`, `lastName`, `enName`, `email`, `gender`, `phone1`, `phone2`, `villageName`, `communeName`, `districtName`, `marriedStatus`, `provinceName`) VALUES (1, '1999-06-02 07:00:00', 5000.00, 1, '2024-11-02 14:16:49.131236', '2024-11-02 14:16:49.131236', 8, 1, 1, 1, 'តាំង', 'លីវហន', 'Tang Lievhon', 'tangluehon@gmail.com', 'ស្រី', '09632684', '01236899', 'ពោធិ៍ចិន្ដាំ', 'ស្វាយអន្ទរ', 'ស្វាយអន្ទរ', 'រៀបការ', 'ព្រៃវែង');
INSERT INTO `agent` (`id`, `dateOfBirth`, `commission`, `status`, `createdAt`, `updatedAt`, `position_id`, `branch_id`, `createdBy`, `updatedBy`, `firstName`, `lastName`, `enName`, `email`, `gender`, `phone1`, `phone2`, `villageName`, `communeName`, `districtName`, `marriedStatus`, `provinceName`) VALUES (2, '1994-06-28 07:00:00', 5000.00, 1, '2024-11-02 14:28:03.680824', '2024-11-05 13:54:14.000000', 8, 1, 1, 1, 'រឿន', 'សីហា', 'Rern Seyha', 'rernseyha@gmail.com', 'ប្រុស', '093247843', '09325689', 'កំពង់អាទង់', 'ជើងទឹក', 'ព្រៃវែង', 'នៅលីវ', 'ព្រៃវែង');
INSERT INTO `agent` (`id`, `dateOfBirth`, `commission`, `status`, `createdAt`, `updatedAt`, `position_id`, `branch_id`, `createdBy`, `updatedBy`, `firstName`, `lastName`, `enName`, `email`, `gender`, `phone1`, `phone2`, `villageName`, `communeName`, `districtName`, `marriedStatus`, `provinceName`) VALUES (3, '1980-11-11 07:00:00', 5000.00, 1, '2024-11-05 10:33:43.643696', '2024-11-05 10:33:43.643696', 8, 1, 10, 10, 'លិ', 'ជីវ៉ា', 'Li Chiva', 'Lichiva@gmail.com', 'ប្រុស', '099242432', '', 'កណ្ដាល', 'ពានរោង', 'ស្វាយអន្ទរ', 'រៀបការ', 'ព្រៃវែង');
INSERT INTO `agent` (`id`, `dateOfBirth`, `commission`, `status`, `createdAt`, `updatedAt`, `position_id`, `branch_id`, `createdBy`, `updatedBy`, `firstName`, `lastName`, `enName`, `email`, `gender`, `phone1`, `phone2`, `villageName`, `communeName`, `districtName`, `marriedStatus`, `provinceName`) VALUES (4, '1988-11-10 07:00:00', 5000.00, 1, '2024-11-05 10:38:54.326798', '2024-11-05 10:38:54.326798', 8, 2, 10, 10, 'ហាក់', 'នីតា', '', '', 'ស្រី', '09992414', '', 'ក្រសាំងគយ', 'ជ្រៃ', 'ស្វាយអន្ទរ', 'រៀបការ', 'ព្រៃវែង');
INSERT INTO `agent` (`id`, `dateOfBirth`, `commission`, `status`, `createdAt`, `updatedAt`, `position_id`, `branch_id`, `createdBy`, `updatedBy`, `firstName`, `lastName`, `enName`, `email`, `gender`, `phone1`, `phone2`, `villageName`, `communeName`, `districtName`, `marriedStatus`, `provinceName`) VALUES (5, '1998-06-17 07:00:00', 5000.00, 1, '2024-11-05 13:57:37.570774', '2024-11-05 13:57:37.570774', 8, 2, 11, 11, 'សុីវ', 'រដ្ឋា', 'Siv Ratha', 'sivrathan@gmail.com', 'ស្រី', '099773253', '', 'ព្រៃតាម៉ុក', 'ជ្រៃ', 'ស្វាយអន្ទរ', 'នៅលីវ', 'ព្រៃវែង');
COMMIT;

-- ----------------------------
-- Table structure for branch
-- ----------------------------
DROP TABLE IF EXISTS `branch`;
CREATE TABLE `branch` (
  `id` int NOT NULL AUTO_INCREMENT,
  `status` tinyint NOT NULL DEFAULT '1',
  `branch_manager` int DEFAULT NULL,
  `created_By` int DEFAULT NULL,
  `updated_By` int DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `villageName` varchar(255) NOT NULL,
  `communeName` varchar(255) NOT NULL,
  `districtName` varchar(255) NOT NULL,
  `provinceName` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_42d67b516a8c278132a6851b42c` (`branch_manager`),
  KEY `FK_fe5e8d1272c07c7da7324e16847` (`created_By`),
  KEY `FK_9f553e72ec096606b1427930347` (`updated_By`),
  CONSTRAINT `FK_42d67b516a8c278132a6851b42c` FOREIGN KEY (`branch_manager`) REFERENCES `employee` (`id`),
  CONSTRAINT `FK_9f553e72ec096606b1427930347` FOREIGN KEY (`updated_By`) REFERENCES `user` (`id`),
  CONSTRAINT `FK_fe5e8d1272c07c7da7324e16847` FOREIGN KEY (`created_By`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of branch
-- ----------------------------
BEGIN;
INSERT INTO `branch` (`id`, `status`, `branch_manager`, `created_By`, `updated_By`, `name`, `villageName`, `communeName`, `districtName`, `provinceName`) VALUES (1, 1, 6, 1, 1, 'ស្វាយអន្ទរ', 'ពោធិ៍ចិន្ដាំ', 'ស្វាយអន្ទរ', 'ស្វាយអន្ទរ', 'ព្រៃវែង');
INSERT INTO `branch` (`id`, `status`, `branch_manager`, `created_By`, `updated_By`, `name`, `villageName`, `communeName`, `districtName`, `provinceName`) VALUES (2, 1, 10, 1, 1, 'ជ្រៃផ្សា', 'ជ្រៃផ្សារ', 'ជ្រៃ', 'ស្វាយអន្ទរ', 'ព្រៃវែង');
INSERT INTO `branch` (`id`, `status`, `branch_manager`, `created_By`, `updated_By`, `name`, `villageName`, `communeName`, `districtName`, `provinceName`) VALUES (3, 0, 9, 1, 1, 'មេសាង', 'ត្រោក', 'ជីផុច', 'មេសាង', 'ព្រៃវែង');
INSERT INTO `branch` (`id`, `status`, `branch_manager`, `created_By`, `updated_By`, `name`, `villageName`, `communeName`, `districtName`, `provinceName`) VALUES (4, 1, 8, 1, 1, 'កំចាយមារ', 'ពង្រ', 'ក្រញូង', 'កំចាយមារ', 'ព្រៃវែង');
INSERT INTO `branch` (`id`, `status`, `branch_manager`, `created_By`, `updated_By`, `name`, `villageName`, `communeName`, `districtName`, `provinceName`) VALUES (5, 0, NULL, 1, 1, 'ពារាំង', 'ព្រៃស្នៀតខាងលិច', 'ព្រៃស្នៀត', 'ពារាំង', 'ព្រៃវែង');
INSERT INTO `branch` (`id`, `status`, `branch_manager`, `created_By`, `updated_By`, `name`, `villageName`, `communeName`, `districtName`, `provinceName`) VALUES (6, 0, NULL, 1, 1, 'កំពង់ពពិល', 'កំពង់ពពិល', 'កំពង់ពពិល', 'ពារាំង', 'ព្រៃវែង');
INSERT INTO `branch` (`id`, `status`, `branch_manager`, `created_By`, `updated_By`, `name`, `villageName`, `communeName`, `districtName`, `provinceName`) VALUES (7, 0, NULL, 1, 1, 'ព្រែកសណ្តែក', 'ព្រែកសណ្ដែក', 'ព្រែកចង្ក្រាន', 'ស៊ីធរកណ្ដាល', 'ព្រៃវែង');
COMMIT;

-- ----------------------------
-- Table structure for customer
-- ----------------------------
DROP TABLE IF EXISTS `customer`;
CREATE TABLE `customer` (
  `id` int NOT NULL AUTO_INCREMENT,
  `dateOfBirth` datetime NOT NULL,
  `status` tinyint NOT NULL DEFAULT '1',
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `position_id` int DEFAULT NULL,
  `branch_id` int DEFAULT NULL,
  `agent_id` int DEFAULT NULL,
  `createdBy` int DEFAULT NULL,
  `updatedBy` int DEFAULT NULL,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `enName` varchar(255) NOT NULL,
  `gender` varchar(255) NOT NULL,
  `marriedStatus` varchar(255) NOT NULL,
  `phone1` varchar(255) NOT NULL,
  `phone2` varchar(255) DEFAULT NULL,
  `villageName` varchar(255) NOT NULL,
  `communeName` varchar(255) NOT NULL,
  `districtName` varchar(255) NOT NULL,
  `provinceName` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_031ef7867823f2098b53891332d` (`position_id`),
  KEY `FK_e8ff19b651ee2dfcb7837864dad` (`branch_id`),
  KEY `FK_84fb609340171a6732812ed7500` (`agent_id`),
  KEY `FK_13ac7ed24d0b4276c688dc23df1` (`createdBy`),
  KEY `FK_f03da81ccb738d2ba8cfd048306` (`updatedBy`),
  CONSTRAINT `FK_031ef7867823f2098b53891332d` FOREIGN KEY (`position_id`) REFERENCES `position` (`id`),
  CONSTRAINT `FK_13ac7ed24d0b4276c688dc23df1` FOREIGN KEY (`createdBy`) REFERENCES `user` (`id`),
  CONSTRAINT `FK_84fb609340171a6732812ed7500` FOREIGN KEY (`agent_id`) REFERENCES `agent` (`id`),
  CONSTRAINT `FK_e8ff19b651ee2dfcb7837864dad` FOREIGN KEY (`branch_id`) REFERENCES `branch` (`id`),
  CONSTRAINT `FK_f03da81ccb738d2ba8cfd048306` FOREIGN KEY (`updatedBy`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of customer
-- ----------------------------
BEGIN;
INSERT INTO `customer` (`id`, `dateOfBirth`, `status`, `createdAt`, `updatedAt`, `position_id`, `branch_id`, `agent_id`, `createdBy`, `updatedBy`, `firstName`, `lastName`, `enName`, `gender`, `marriedStatus`, `phone1`, `phone2`, `villageName`, `communeName`, `districtName`, `provinceName`) VALUES (1, '1991-11-07 07:00:00', 1, '2024-11-03 16:42:05.729908', '2024-11-03 16:42:05.729908', 10, 2, 2, 1, 1, 'កែវ', 'មរកត', 'Keo Morokot', 'ស្រី', 'រៀបការ', '09543687', '01244567', 'កំពង់អាទង់', 'ជើងទឹក', 'ព្រៃវែង', 'ព្រៃវែង');
INSERT INTO `customer` (`id`, `dateOfBirth`, `status`, `createdAt`, `updatedAt`, `position_id`, `branch_id`, `agent_id`, `createdBy`, `updatedBy`, `firstName`, `lastName`, `enName`, `gender`, `marriedStatus`, `phone1`, `phone2`, `villageName`, `communeName`, `districtName`, `provinceName`) VALUES (2, '1999-06-17 07:00:00', 1, '2024-11-03 16:43:48.572394', '2024-11-05 11:51:35.000000', 9, 1, 1, 10, 10, 'លន់', 'វីរ៉ាវ៉ាត់', 'Loun Viravath', 'ប្រុស', 'នៅលីវ', '016948495', '09248473', 'ស្វាយអន្ទរទី ១', 'ស្វាយអន្ទរ', 'ស្វាយអន្ទរ', 'ព្រៃវែង');
INSERT INTO `customer` (`id`, `dateOfBirth`, `status`, `createdAt`, `updatedAt`, `position_id`, `branch_id`, `agent_id`, `createdBy`, `updatedBy`, `firstName`, `lastName`, `enName`, `gender`, `marriedStatus`, `phone1`, `phone2`, `villageName`, `communeName`, `districtName`, `provinceName`) VALUES (3, '1996-06-14 07:00:00', 1, '2024-11-05 13:40:23.671321', '2024-11-05 13:40:23.671321', 9, 1, 1, 10, 1, 'និល', 'ឧត្តម', 'Nel Udom', 'ប្រុស', 'រៀបការ', '09875445', '012344677', 'ស្វាយអន្ទរទី ១', 'ស្វាយអន្ទរ', 'ស្វាយអន្ទរ', 'ព្រៃវែង');
INSERT INTO `customer` (`id`, `dateOfBirth`, `status`, `createdAt`, `updatedAt`, `position_id`, `branch_id`, `agent_id`, `createdBy`, `updatedBy`, `firstName`, `lastName`, `enName`, `gender`, `marriedStatus`, `phone1`, `phone2`, `villageName`, `communeName`, `districtName`, `provinceName`) VALUES (4, '1993-03-03 07:00:00', 1, '2024-11-05 13:42:04.940411', '2024-11-05 13:42:04.940411', 10, 1, 2, 10, 1, 'វុត', 'សុចារិយា', 'Vouth Sochariya', 'ស្រី', 'នៅលីវ', '012345656', '096544325', 'ស្វាយអន្ទរទី ២', 'ស្វាយអន្ទរ', 'ស្វាយអន្ទរ', 'ព្រៃវែង');
INSERT INTO `customer` (`id`, `dateOfBirth`, `status`, `createdAt`, `updatedAt`, `position_id`, `branch_id`, `agent_id`, `createdBy`, `updatedBy`, `firstName`, `lastName`, `enName`, `gender`, `marriedStatus`, `phone1`, `phone2`, `villageName`, `communeName`, `districtName`, `provinceName`) VALUES (5, '1998-04-12 07:00:00', 1, '2024-11-05 13:45:08.527715', '2024-11-05 13:45:08.527715', 9, 1, 2, 10, 1, 'សុផាន់', 'កនិថា', 'Sophan Kanitha', 'ស្រី', 'រៀបការ', '099887654', '', 'ពោធិ៍ជ្រៃ', 'ស្វាយអន្ទរ', 'ស្វាយអន្ទរ', 'ព្រៃវែង');
INSERT INTO `customer` (`id`, `dateOfBirth`, `status`, `createdAt`, `updatedAt`, `position_id`, `branch_id`, `agent_id`, `createdBy`, `updatedBy`, `firstName`, `lastName`, `enName`, `gender`, `marriedStatus`, `phone1`, `phone2`, `villageName`, `communeName`, `districtName`, `provinceName`) VALUES (6, '1989-08-11 07:00:00', 1, '2024-11-05 13:47:51.455138', '2024-11-05 13:47:51.455138', 9, 1, 2, 10, 1, 'ហួត', 'រិទ្ធី', 'Hout Rithy ', 'ប្រុស', 'នៅលីវ', '0887655432', '', 'ព្រៃរំពាក់', 'ពានរោង', 'ស្វាយអន្ទរ', 'ព្រៃវែង');
INSERT INTO `customer` (`id`, `dateOfBirth`, `status`, `createdAt`, `updatedAt`, `position_id`, `branch_id`, `agent_id`, `createdBy`, `updatedBy`, `firstName`, `lastName`, `enName`, `gender`, `marriedStatus`, `phone1`, `phone2`, `villageName`, `communeName`, `districtName`, `provinceName`) VALUES (7, '2000-05-19 07:00:00', 1, '2024-11-05 13:50:19.959401', '2024-11-05 13:50:19.959401', 9, 1, 2, 10, 1, 'សួស', 'រ៉ា', 'Sos Ra', 'ប្រុស', 'រៀបការ', '077543277', '', 'រកាខ្សុក', 'មេបុណ្យ', 'ស្វាយអន្ទរ', 'ព្រៃវែង');
INSERT INTO `customer` (`id`, `dateOfBirth`, `status`, `createdAt`, `updatedAt`, `position_id`, `branch_id`, `agent_id`, `createdBy`, `updatedBy`, `firstName`, `lastName`, `enName`, `gender`, `marriedStatus`, `phone1`, `phone2`, `villageName`, `communeName`, `districtName`, `provinceName`) VALUES (8, '1997-10-26 07:00:00', 1, '2024-11-05 14:00:44.292294', '2024-11-05 14:00:44.292294', 9, 2, 4, 11, 1, 'ម៉ាប់', 'កុសល', 'Mab Kosal', 'ប្រុស', 'រៀបការ', '098764345', '', 'ក្រសាំងគយ', 'ជ្រៃ', 'ស្វាយអន្ទរ', 'ព្រៃវែង');
INSERT INTO `customer` (`id`, `dateOfBirth`, `status`, `createdAt`, `updatedAt`, `position_id`, `branch_id`, `agent_id`, `createdBy`, `updatedBy`, `firstName`, `lastName`, `enName`, `gender`, `marriedStatus`, `phone1`, `phone2`, `villageName`, `communeName`, `districtName`, `provinceName`) VALUES (9, '1999-04-06 07:00:00', 1, '2024-11-05 14:01:52.569962', '2024-11-05 14:01:52.569962', 10, 2, 4, 11, 1, 'សែម', 'មិនា', 'Sem Minea', 'ស្រី', 'រៀបការ', '099824325', '', 'ជ្រៃផ្សារ', 'ជ្រៃ', 'ស្វាយអន្ទរ', 'ព្រៃវែង');
COMMIT;

-- ----------------------------
-- Table structure for employee
-- ----------------------------
DROP TABLE IF EXISTS `employee`;
CREATE TABLE `employee` (
  `id` int NOT NULL AUTO_INCREMENT,
  `baseSalary` decimal(10,0) DEFAULT NULL,
  `dateOfBirth` datetime NOT NULL,
  `hireDate` datetime NOT NULL,
  `status` tinyint NOT NULL,
  `blackList` tinyint NOT NULL,
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `branch_id` int DEFAULT NULL,
  `position_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `created_By` int DEFAULT NULL,
  `updated_By` int DEFAULT NULL,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone1` varchar(255) NOT NULL,
  `phone2` varchar(255) DEFAULT NULL,
  `gender` varchar(255) NOT NULL,
  `villageName` varchar(255) NOT NULL,
  `communeName` varchar(255) NOT NULL,
  `districtName` varchar(255) NOT NULL,
  `provinceName` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_380241ef3c0ea0a87b9411f37ff` (`branch_id`),
  KEY `FK_6ab3ec557a640017d53ac0e0ab7` (`position_id`),
  KEY `FK_f61258e58ed35475ce1dba03797` (`user_id`),
  KEY `FK_d14825965454a4ed3a48da68961` (`created_By`),
  KEY `FK_398741de66ca9996dfa74db86ac` (`updated_By`),
  CONSTRAINT `FK_380241ef3c0ea0a87b9411f37ff` FOREIGN KEY (`branch_id`) REFERENCES `branch` (`id`),
  CONSTRAINT `FK_398741de66ca9996dfa74db86ac` FOREIGN KEY (`updated_By`) REFERENCES `user` (`id`),
  CONSTRAINT `FK_6ab3ec557a640017d53ac0e0ab7` FOREIGN KEY (`position_id`) REFERENCES `position` (`id`),
  CONSTRAINT `FK_d14825965454a4ed3a48da68961` FOREIGN KEY (`created_By`) REFERENCES `user` (`id`),
  CONSTRAINT `FK_f61258e58ed35475ce1dba03797` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of employee
-- ----------------------------
BEGIN;
INSERT INTO `employee` (`id`, `baseSalary`, `dateOfBirth`, `hireDate`, `status`, `blackList`, `createdAt`, `updatedAt`, `branch_id`, `position_id`, `user_id`, `created_By`, `updated_By`, `firstName`, `lastName`, `email`, `phone1`, `phone2`, `gender`, `villageName`, `communeName`, `districtName`, `provinceName`) VALUES (6, 0, '2002-10-18 00:00:00', '2022-05-08 00:00:00', 1, 0, '2024-11-02 15:40:47.790452', '2024-11-05 10:21:20.000000', 1, 2, 7, 1, 1, 'លី', 'ម៉េងងួន', 'lymengngoun@gmail.com', '093478854', '09745732', 'Male', '21010303', '210103', '2101', '21');
INSERT INTO `employee` (`id`, `baseSalary`, `dateOfBirth`, `hireDate`, `status`, `blackList`, `createdAt`, `updatedAt`, `branch_id`, `position_id`, `user_id`, `created_By`, `updated_By`, `firstName`, `lastName`, `email`, `phone1`, `phone2`, `gender`, `villageName`, `communeName`, `districtName`, `provinceName`) VALUES (7, 0, '2004-11-21 00:00:00', '2009-12-30 00:00:00', 1, 0, '2024-11-02 15:42:28.088188', '2024-11-02 17:23:36.000000', 1, 1, 1, 1, 1, 'ហ៊ុយ', 'មួយហេង', 'huymouyheng@gmail.com', '012837364', '096447362', 'Female', '14131003', '141310', '1413', '14');
INSERT INTO `employee` (`id`, `baseSalary`, `dateOfBirth`, `hireDate`, `status`, `blackList`, `createdAt`, `updatedAt`, `branch_id`, `position_id`, `user_id`, `created_By`, `updated_By`, `firstName`, `lastName`, `email`, `phone1`, `phone2`, `gender`, `villageName`, `communeName`, `districtName`, `provinceName`) VALUES (8, 0, '2003-02-11 00:00:00', '2013-01-10 00:00:00', 1, 0, '2024-11-02 15:45:18.333381', '2024-11-05 10:22:55.000000', 4, 14, 6, 1, 1, 'ម៉ាប់', 'លាងហេង', 'mapleangheng@gmail.com', '012938436', '099284473', 'Female', '25030305', '250303', '2503', '25');
INSERT INTO `employee` (`id`, `baseSalary`, `dateOfBirth`, `hireDate`, `status`, `blackList`, `createdAt`, `updatedAt`, `branch_id`, `position_id`, `user_id`, `created_By`, `updated_By`, `firstName`, `lastName`, `email`, `phone1`, `phone2`, `gender`, `villageName`, `communeName`, `districtName`, `provinceName`) VALUES (9, 0, '2004-07-07 00:00:00', '2020-10-17 00:00:00', 1, 0, '2024-11-02 17:48:25.508047', '2024-11-05 10:10:03.000000', 4, 5, NULL, 1, NULL, 'មួយ', 'គឹមលាង', 'mouykimleng@gmail.com', '098765444', '012345567', 'Male', '14050415', '140504', '1405', '14');
INSERT INTO `employee` (`id`, `baseSalary`, `dateOfBirth`, `hireDate`, `status`, `blackList`, `createdAt`, `updatedAt`, `branch_id`, `position_id`, `user_id`, `created_By`, `updated_By`, `firstName`, `lastName`, `email`, `phone1`, `phone2`, `gender`, `villageName`, `communeName`, `districtName`, `provinceName`) VALUES (10, 0, '2002-02-19 00:00:00', '2019-02-08 00:00:00', 1, 0, '2024-11-02 23:10:31.699535', '2024-11-05 10:23:24.000000', 2, 2, 5, 1, 1, 'វុត', 'សុផាន់ណា', 'vouthsophanna@gmail.com', '0964494239', '0128376493', 'Male', '02110203', '021102', '0211', '02');
INSERT INTO `employee` (`id`, `baseSalary`, `dateOfBirth`, `hireDate`, `status`, `blackList`, `createdAt`, `updatedAt`, `branch_id`, `position_id`, `user_id`, `created_By`, `updated_By`, `firstName`, `lastName`, `email`, `phone1`, `phone2`, `gender`, `villageName`, `communeName`, `districtName`, `provinceName`) VALUES (11, 0, '1993-11-24 00:00:00', '2022-07-11 00:00:00', 1, 0, '2024-11-04 14:07:48.909382', '2024-11-05 09:51:06.000000', 1, 6, NULL, 1, NULL, 'លីវ', 'វឌ្ឍនា', 'lievvathana@gmail.com', '093447878', '098877654', 'Male', '14131001', '141310', '1413', '14');
INSERT INTO `employee` (`id`, `baseSalary`, `dateOfBirth`, `hireDate`, `status`, `blackList`, `createdAt`, `updatedAt`, `branch_id`, `position_id`, `user_id`, `created_By`, `updated_By`, `firstName`, `lastName`, `email`, `phone1`, `phone2`, `gender`, `villageName`, `communeName`, `districtName`, `provinceName`) VALUES (12, 0, '2001-10-18 00:00:00', '2024-11-03 00:00:00', 1, 0, '2024-11-04 14:09:05.874103', '2024-11-05 09:57:41.000000', 2, 6, NULL, 1, NULL, 'តែ', 'មេសា', 'teamesa@gmail.com', '098764433', '', 'Male', '14130306', '141303', '1413', '14');
INSERT INTO `employee` (`id`, `baseSalary`, `dateOfBirth`, `hireDate`, `status`, `blackList`, `createdAt`, `updatedAt`, `branch_id`, `position_id`, `user_id`, `created_By`, `updated_By`, `firstName`, `lastName`, `email`, `phone1`, `phone2`, `gender`, `villageName`, `communeName`, `districtName`, `provinceName`) VALUES (13, 0, '2000-01-06 00:00:00', '2024-11-04 00:00:00', 1, 0, '2024-11-04 14:13:43.701246', '2024-11-06 10:08:31.000000', 1, 14, 10, 1, 1, 'យឿន​​', 'ស្រីមុំ', '', '09231232', '', 'Femalse', '14130704', '141307', '1413', '14');
INSERT INTO `employee` (`id`, `baseSalary`, `dateOfBirth`, `hireDate`, `status`, `blackList`, `createdAt`, `updatedAt`, `branch_id`, `position_id`, `user_id`, `created_By`, `updated_By`, `firstName`, `lastName`, `email`, `phone1`, `phone2`, `gender`, `villageName`, `communeName`, `districtName`, `provinceName`) VALUES (14, 0, '2003-06-20 00:00:00', '2024-01-16 00:00:00', 1, 0, '2024-11-04 14:15:58.592046', '2024-11-04 14:15:58.592046', 1, 5, NULL, 1, NULL, 'នួន', 'សុីផ្សត', 'nouncport@gmail.com', '094845743', '', 'Femalse', '14130313', '141303', '1413', '14');
INSERT INTO `employee` (`id`, `baseSalary`, `dateOfBirth`, `hireDate`, `status`, `blackList`, `createdAt`, `updatedAt`, `branch_id`, `position_id`, `user_id`, `created_By`, `updated_By`, `firstName`, `lastName`, `email`, `phone1`, `phone2`, `gender`, `villageName`, `communeName`, `districtName`, `provinceName`) VALUES (15, 0, '1999-11-09 00:00:00', '2024-11-03 00:00:00', 1, 0, '2024-11-05 09:52:02.535662', '2024-11-05 10:19:44.000000', 1, 3, NULL, 1, NULL, 'ឃុត', 'វាសនា', '', '099342345', '', 'Male', '14100303', '141003', '1410', '14');
INSERT INTO `employee` (`id`, `baseSalary`, `dateOfBirth`, `hireDate`, `status`, `blackList`, `createdAt`, `updatedAt`, `branch_id`, `position_id`, `user_id`, `created_By`, `updated_By`, `firstName`, `lastName`, `email`, `phone1`, `phone2`, `gender`, `villageName`, `communeName`, `districtName`, `provinceName`) VALUES (16, 0, '1998-10-08 00:00:00', '2024-11-04 00:00:00', 1, 0, '2024-11-05 09:55:45.293493', '2024-11-05 09:55:45.293493', 1, 6, NULL, 1, NULL, 'ប៉េន', 'ជីវ៉ា', '', '0934848299', '', 'Male', '14100203', '141002', '1410', '14');
INSERT INTO `employee` (`id`, `baseSalary`, `dateOfBirth`, `hireDate`, `status`, `blackList`, `createdAt`, `updatedAt`, `branch_id`, `position_id`, `user_id`, `created_By`, `updated_By`, `firstName`, `lastName`, `email`, `phone1`, `phone2`, `gender`, `villageName`, `communeName`, `districtName`, `provinceName`) VALUES (17, 0, '1998-02-06 00:00:00', '2024-11-04 00:00:00', 1, 0, '2024-11-05 09:58:46.811727', '2024-11-05 09:58:46.811727', 2, 5, NULL, 1, NULL, 'ទេព', 'មករា', '', '099765432', '', 'Femalse', '14130306', '141303', '1413', '14');
INSERT INTO `employee` (`id`, `baseSalary`, `dateOfBirth`, `hireDate`, `status`, `blackList`, `createdAt`, `updatedAt`, `branch_id`, `position_id`, `user_id`, `created_By`, `updated_By`, `firstName`, `lastName`, `email`, `phone1`, `phone2`, `gender`, `villageName`, `communeName`, `districtName`, `provinceName`) VALUES (18, 0, '2000-11-23 00:00:00', '2024-11-04 00:00:00', 1, 0, '2024-11-05 10:00:12.313928', '2024-11-05 10:00:12.313928', 2, 14, NULL, 1, NULL, 'សុភា', 'ទេវី', '', '07866542', '', 'Femalse', '14131002', '141310', '1413', '14');
INSERT INTO `employee` (`id`, `baseSalary`, `dateOfBirth`, `hireDate`, `status`, `blackList`, `createdAt`, `updatedAt`, `branch_id`, `position_id`, `user_id`, `created_By`, `updated_By`, `firstName`, `lastName`, `email`, `phone1`, `phone2`, `gender`, `villageName`, `communeName`, `districtName`, `provinceName`) VALUES (19, 0, '2001-09-12 00:00:00', '2004-11-04 00:00:00', 1, 0, '2024-11-05 10:02:12.540590', '2024-11-05 10:02:12.540590', 2, 6, NULL, 1, NULL, 'ស្រូយ ', 'ជីវ៉ា', '', '012456789', '', 'Male', '14130203', '141302', '1413', '14');
INSERT INTO `employee` (`id`, `baseSalary`, `dateOfBirth`, `hireDate`, `status`, `blackList`, `createdAt`, `updatedAt`, `branch_id`, `position_id`, `user_id`, `created_By`, `updated_By`, `firstName`, `lastName`, `email`, `phone1`, `phone2`, `gender`, `villageName`, `communeName`, `districtName`, `provinceName`) VALUES (20, 0, '2001-02-19 00:00:00', '2024-10-11 00:00:00', 1, 0, '2024-11-05 10:04:03.028351', '2024-11-05 10:04:03.028351', 2, 6, NULL, 1, NULL, 'ស្នា', 'មករា', '', '099214124', '', 'Male', '14131004', '141310', '1413', '14');
INSERT INTO `employee` (`id`, `baseSalary`, `dateOfBirth`, `hireDate`, `status`, `blackList`, `createdAt`, `updatedAt`, `branch_id`, `position_id`, `user_id`, `created_By`, `updated_By`, `firstName`, `lastName`, `email`, `phone1`, `phone2`, `gender`, `villageName`, `communeName`, `districtName`, `provinceName`) VALUES (21, 0, '1995-03-28 00:00:00', '2024-10-31 00:00:00', 1, 0, '2024-11-05 10:12:21.010477', '2024-11-05 10:24:16.000000', 4, 2, NULL, 1, NULL, 'ណយ ', 'សុភ័ក្រ', '', '099214123', '', 'Male', '14130807', '141308', '1413', '14');
INSERT INTO `employee` (`id`, `baseSalary`, `dateOfBirth`, `hireDate`, `status`, `blackList`, `createdAt`, `updatedAt`, `branch_id`, `position_id`, `user_id`, `created_By`, `updated_By`, `firstName`, `lastName`, `email`, `phone1`, `phone2`, `gender`, `villageName`, `communeName`, `districtName`, `provinceName`) VALUES (22, 0, '1999-04-29 00:00:00', '2024-11-01 00:00:00', 1, 0, '2024-11-05 10:13:24.388927', '2024-11-05 10:13:24.388927', 4, 6, NULL, 1, NULL, 'សែម', 'សារ៉ុម', '', '0992412412', '', 'Male', '14020304', '140203', '1402', '14');
INSERT INTO `employee` (`id`, `baseSalary`, `dateOfBirth`, `hireDate`, `status`, `blackList`, `createdAt`, `updatedAt`, `branch_id`, `position_id`, `user_id`, `created_By`, `updated_By`, `firstName`, `lastName`, `email`, `phone1`, `phone2`, `gender`, `villageName`, `communeName`, `districtName`, `provinceName`) VALUES (23, 0, '1998-11-19 00:00:00', '2024-11-02 00:00:00', 1, 0, '2024-11-05 10:14:18.215344', '2024-11-05 10:14:18.215344', 2, 6, NULL, 1, NULL, 'ជា', 'ម៉េងហុង', '', '0977425522', '', 'Male', '14020304', '140203', '1402', '14');
COMMIT;

-- ----------------------------
-- Table structure for miller
-- ----------------------------
DROP TABLE IF EXISTS `miller`;
CREATE TABLE `miller` (
  `id` int NOT NULL AUTO_INCREMENT,
  `status` tinyint NOT NULL DEFAULT '0',
  `created_By` int DEFAULT NULL,
  `updated_By` int DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `phone1` varchar(255) NOT NULL,
  `phone2` varchar(255) NOT NULL,
  `phone3` varchar(255) NOT NULL,
  `villageName` varchar(255) NOT NULL,
  `communeName` varchar(255) NOT NULL,
  `districtName` varchar(255) NOT NULL,
  `provinceName` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_28d7ef0a1b020904d8eb893cae8` (`created_By`),
  KEY `FK_9999eb3578c316eafabe0b5d2be` (`updated_By`),
  CONSTRAINT `FK_28d7ef0a1b020904d8eb893cae8` FOREIGN KEY (`created_By`) REFERENCES `user` (`id`),
  CONSTRAINT `FK_9999eb3578c316eafabe0b5d2be` FOREIGN KEY (`updated_By`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of miller
-- ----------------------------
BEGIN;
INSERT INTO `miller` (`id`, `status`, `created_By`, `updated_By`, `name`, `phone1`, `phone2`, `phone3`, `villageName`, `communeName`, `districtName`, `provinceName`) VALUES (1, 1, 1, 1, 'តាំង លីហួត', '098347629', '09424586', '097662983', 'ស្វាយអន្ទរទី ១', 'ស្វាយអន្ទរ', 'ស្វាយអន្ទរ', 'ព្រៃវែង');
INSERT INTO `miller` (`id`, `status`, `created_By`, `updated_By`, `name`, `phone1`, `phone2`, `phone3`, `villageName`, `communeName`, `districtName`, `provinceName`) VALUES (2, 1, 1, 8, 'អម្រឹត អមតះ', '016739267', '012846359', '097124792', 'ព្រៃទួលថ្មី', 'ក្របៅ', 'កំចាយមារ', 'ព្រៃវែង');
INSERT INTO `miller` (`id`, `status`, `created_By`, `updated_By`, `name`, `phone1`, `phone2`, `phone3`, `villageName`, `communeName`, `districtName`, `provinceName`) VALUES (3, 0, 1, 8, 'ប្រាសាទ​ អង្ករ', '094234679', '012674693', '097273916', 'គោកច្រេស', 'អង្គរសរ', 'មេសាង', 'ព្រៃវែង');
INSERT INTO `miller` (`id`, `status`, `created_By`, `updated_By`, `name`, `phone1`, `phone2`, `phone3`, `villageName`, `communeName`, `districtName`, `provinceName`) VALUES (4, 0, 1, 8, 'អង្ករខ្មែរ', '096283648', '0124395847', '097248573', 'ត្នោតទោល', 'ព្រះស្ដេច', 'ព្រះស្ដេច', 'ព្រៃវែង');
INSERT INTO `miller` (`id`, `status`, `created_By`, `updated_By`, `name`, `phone1`, `phone2`, `phone3`, `villageName`, `communeName`, `districtName`, `provinceName`) VALUES (5, 0, 1, 1, 'ប្រាសាទ ពេជ្រ', '016847393', '09284738', '097128484', 'ជ្រៃគ្រហ៊ឹម', 'កំពង់ឫស្សី', 'ពោធិ៍រៀង', 'ព្រៃវែង');
INSERT INTO `miller` (`id`, `status`, `created_By`, `updated_By`, `name`, `phone1`, `phone2`, `phone3`, `villageName`, `communeName`, `districtName`, `provinceName`) VALUES (6, 0, 1, 1, 'តាវ​ តុងតុង', '016837393', '09284745', '0112987448', 'អង្វះមួយរយ', 'អន្សោង', 'កំពង់ត្របែក', 'ព្រៃវែង');
COMMIT;

-- ----------------------------
-- Table structure for position
-- ----------------------------
DROP TABLE IF EXISTS `position`;
CREATE TABLE `position` (
  `id` int NOT NULL AUTO_INCREMENT,
  `status` tinyint NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of position
-- ----------------------------
BEGIN;
INSERT INTO `position` (`id`, `status`, `name`, `description`) VALUES (1, 1, 'នាយកប្រតិបត្តិ', 'មុខតំណែងបុគ្គលិក ​មានតួនាទីគ្រប់គ្រងប្រតិបត្តិការទាំងមូល');
INSERT INTO `position` (`id`, `status`, `name`, `description`) VALUES (2, 1, 'នាយកសាខា', 'មុខតំណែងបុគ្គលិក មានតួនាទីគ្រប់គ្រងសាខា');
INSERT INTO `position` (`id`, `status`, `name`, `description`) VALUES (3, 1, 'អ្នកគ្រប់គ្រងស្តុក', 'មុខតំណែងបុគ្គលិក មានតួនាទីគ្រប់គ្រងទិន្ន័យស្តុកអង្ករ');
INSERT INTO `position` (`id`, `status`, `name`, `description`) VALUES (4, 1, 'អ្នកកាន់ប្រព័ន្ធ', 'មុខតំណែងបុគ្គលិក មានតួនាទីកាន់ប្រព័ន្ធ');
INSERT INTO `position` (`id`, `status`, `name`, `description`) VALUES (5, 1, 'បេឡាករ', 'មុខតំណែងបុគ្គលិក ');
INSERT INTO `position` (`id`, `status`, `name`, `description`) VALUES (6, 1, 'មន្រ្តីឥណទាន', 'មុខតំណែងបុគ្គលិក');
INSERT INTO `position` (`id`, `status`, `name`, `description`) VALUES (7, 1, 'គ្រូបង្រៀន', 'មុខតំណែងរបស់ភា្នក់ងារ ឬអតិថិជន');
INSERT INTO `position` (`id`, `status`, `name`, `description`) VALUES (8, 1, 'ភ្នាក់ងារ', 'មុខតំណែងរបស់ភ្នាក់ងារ');
INSERT INTO `position` (`id`, `status`, `name`, `description`) VALUES (9, 1, 'កសិករ', 'មុខតំណែងរបស់ភា្នក់ងារ ឬអតិថិជន');
INSERT INTO `position` (`id`, `status`, `name`, `description`) VALUES (10, 1, 'មេផ្ទះ', 'មុខតំណែងរបស់ភា្នក់ងារ ឬអតិថិជន');
INSERT INTO `position` (`id`, `status`, `name`, `description`) VALUES (14, 1, 'គណនេយ្យករ', 'មុខតំណែងរបស់បុគ្គលិក');
INSERT INTO `position` (`id`, `status`, `name`, `description`) VALUES (15, 1, 'មេភូមិ', 'មុខតំណែងរបស់ភា្នក់ងារ ឬអតិថិជន');
INSERT INTO `position` (`id`, `status`, `name`, `description`) VALUES (16, 1, 'អនុភូមិ', 'មុខតំណែងរបស់ភា្នក់ងារ ឬអតិថិជន');
COMMIT;

-- ----------------------------
-- Table structure for purchase_by_rice_from_miller
-- ----------------------------
DROP TABLE IF EXISTS `purchase_by_rice_from_miller`;
CREATE TABLE `purchase_by_rice_from_miller` (
  `id` int NOT NULL AUTO_INCREMENT,
  `quantity` int NOT NULL,
  `totalQuantity` int NOT NULL,
  `cost` decimal(10,2) NOT NULL,
  `totalCost` decimal(10,2) NOT NULL,
  `purchaseDate` datetime NOT NULL,
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `miller_id` int DEFAULT NULL,
  `branch_id` int DEFAULT NULL,
  `agent_id` int DEFAULT NULL,
  `customer_id` int DEFAULT NULL,
  `created_By` int DEFAULT NULL,
  `updated_By` int DEFAULT NULL,
  `paymentStatus` varchar(255) NOT NULL,
  `section` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_7e2a836fdd4ff891aac2388eaf5` (`miller_id`),
  KEY `FK_26bc612ea5cef33c895a0dee185` (`branch_id`),
  KEY `FK_e2873766e6105096a0ca8599729` (`agent_id`),
  KEY `FK_825266b34fb9ad13c2a33bc5878` (`customer_id`),
  KEY `FK_815856de820d454198fbace62f9` (`created_By`),
  KEY `FK_0f3022a806a32606649964e0a7f` (`updated_By`),
  CONSTRAINT `FK_0f3022a806a32606649964e0a7f` FOREIGN KEY (`updated_By`) REFERENCES `user` (`id`),
  CONSTRAINT `FK_26bc612ea5cef33c895a0dee185` FOREIGN KEY (`branch_id`) REFERENCES `branch` (`id`),
  CONSTRAINT `FK_7e2a836fdd4ff891aac2388eaf5` FOREIGN KEY (`miller_id`) REFERENCES `miller` (`id`),
  CONSTRAINT `FK_815856de820d454198fbace62f9` FOREIGN KEY (`created_By`) REFERENCES `user` (`id`),
  CONSTRAINT `FK_825266b34fb9ad13c2a33bc5878` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`id`),
  CONSTRAINT `FK_e2873766e6105096a0ca8599729` FOREIGN KEY (`agent_id`) REFERENCES `agent` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=150 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of purchase_by_rice_from_miller
-- ----------------------------
BEGIN;
INSERT INTO `purchase_by_rice_from_miller` (`id`, `quantity`, `totalQuantity`, `cost`, `totalCost`, `purchaseDate`, `createdAt`, `updatedAt`, `miller_id`, `branch_id`, `agent_id`, `customer_id`, `created_By`, `updated_By`, `paymentStatus`, `section`, `status`) VALUES (125, 10, 500, 1900.00, 950000.00, '2024-11-05 22:26:27', '2024-11-05 22:26:26.732243', '2024-11-05 22:26:26.732243', 1, NULL, NULL, NULL, 1, 1, 'Paid', '', 'Purchase');
INSERT INTO `purchase_by_rice_from_miller` (`id`, `quantity`, `totalQuantity`, `cost`, `totalCost`, `purchaseDate`, `createdAt`, `updatedAt`, `miller_id`, `branch_id`, `agent_id`, `customer_id`, `created_By`, `updated_By`, `paymentStatus`, `section`, `status`) VALUES (126, 5, 250, 1800.00, 450000.00, '2024-11-05 22:36:04', '2024-11-05 22:36:04.115384', '2024-11-05 22:36:04.115384', 1, NULL, NULL, NULL, 1, 1, 'Paid', '', 'Purchase');
INSERT INTO `purchase_by_rice_from_miller` (`id`, `quantity`, `totalQuantity`, `cost`, `totalCost`, `purchaseDate`, `createdAt`, `updatedAt`, `miller_id`, `branch_id`, `agent_id`, `customer_id`, `created_By`, `updated_By`, `paymentStatus`, `section`, `status`) VALUES (127, 5, 250, 1700.00, 425000.00, '2024-11-05 22:47:06', '2024-11-05 22:47:05.955148', '2024-11-05 22:47:05.955148', 2, NULL, NULL, NULL, 1, 1, 'Paid', '', 'Purchase');
INSERT INTO `purchase_by_rice_from_miller` (`id`, `quantity`, `totalQuantity`, `cost`, `totalCost`, `purchaseDate`, `createdAt`, `updatedAt`, `miller_id`, `branch_id`, `agent_id`, `customer_id`, `created_By`, `updated_By`, `paymentStatus`, `section`, `status`) VALUES (128, 5, 250, 0.00, 0.00, '2024-11-05 23:02:18', '2024-11-05 23:02:17.755552', '2024-11-05 23:02:17.755552', 2, NULL, NULL, NULL, 1, 1, 'Pending', '1', 'deductFromMiller');
INSERT INTO `purchase_by_rice_from_miller` (`id`, `quantity`, `totalQuantity`, `cost`, `totalCost`, `purchaseDate`, `createdAt`, `updatedAt`, `miller_id`, `branch_id`, `agent_id`, `customer_id`, `created_By`, `updated_By`, `paymentStatus`, `section`, `status`) VALUES (129, 15, 750, 0.00, 0.00, '2024-11-05 23:17:59', '2024-11-05 23:17:59.011152', '2024-11-05 23:17:59.011152', 1, NULL, NULL, NULL, 1, 1, 'Pending', '1', 'deductFromMiller');
INSERT INTO `purchase_by_rice_from_miller` (`id`, `quantity`, `totalQuantity`, `cost`, `totalCost`, `purchaseDate`, `createdAt`, `updatedAt`, `miller_id`, `branch_id`, `agent_id`, `customer_id`, `created_By`, `updated_By`, `paymentStatus`, `section`, `status`) VALUES (130, 10, 500, 1700.00, 850000.00, '2024-11-05 23:19:53', '2024-11-05 23:19:53.510258', '2024-11-05 23:19:53.510258', 2, NULL, NULL, NULL, 1, 1, 'Paid', '', 'Purchase');
INSERT INTO `purchase_by_rice_from_miller` (`id`, `quantity`, `totalQuantity`, `cost`, `totalCost`, `purchaseDate`, `createdAt`, `updatedAt`, `miller_id`, `branch_id`, `agent_id`, `customer_id`, `created_By`, `updated_By`, `paymentStatus`, `section`, `status`) VALUES (131, 5, 250, 0.00, 0.00, '2024-11-05 23:23:13', '2024-11-05 23:23:13.390475', '2024-11-05 23:23:13.390475', 2, NULL, NULL, NULL, 1, 1, 'Pending', '1', 'deductFromMiller');
INSERT INTO `purchase_by_rice_from_miller` (`id`, `quantity`, `totalQuantity`, `cost`, `totalCost`, `purchaseDate`, `createdAt`, `updatedAt`, `miller_id`, `branch_id`, `agent_id`, `customer_id`, `created_By`, `updated_By`, `paymentStatus`, `section`, `status`) VALUES (132, 5, 250, 0.00, 0.00, '2024-11-05 23:30:17', '2024-11-05 23:30:17.012764', '2024-11-05 23:30:17.012764', 2, 1, NULL, NULL, 1, 1, 'Transfer Stock', '1', 'transfertobranch');
INSERT INTO `purchase_by_rice_from_miller` (`id`, `quantity`, `totalQuantity`, `cost`, `totalCost`, `purchaseDate`, `createdAt`, `updatedAt`, `miller_id`, `branch_id`, `agent_id`, `customer_id`, `created_By`, `updated_By`, `paymentStatus`, `section`, `status`) VALUES (133, 5, 250, 0.00, 0.00, '2024-11-06 00:27:00', '2024-11-06 00:27:00.082101', '2024-11-06 00:27:00.082101', 2, 1, NULL, NULL, 1, 1, 'Transfer Stock', '1', 'TransferToBranch');
INSERT INTO `purchase_by_rice_from_miller` (`id`, `quantity`, `totalQuantity`, `cost`, `totalCost`, `purchaseDate`, `createdAt`, `updatedAt`, `miller_id`, `branch_id`, `agent_id`, `customer_id`, `created_By`, `updated_By`, `paymentStatus`, `section`, `status`) VALUES (134, 2, 100, 0.00, 0.00, '2024-11-06 00:30:55', '2024-11-06 00:30:55.419672', '2024-11-06 00:30:55.419672', 2, NULL, NULL, NULL, 1, 1, 'Pending', '1', 'deductFromMiller');
INSERT INTO `purchase_by_rice_from_miller` (`id`, `quantity`, `totalQuantity`, `cost`, `totalCost`, `purchaseDate`, `createdAt`, `updatedAt`, `miller_id`, `branch_id`, `agent_id`, `customer_id`, `created_By`, `updated_By`, `paymentStatus`, `section`, `status`) VALUES (135, 5, 250, 0.00, 0.00, '2024-11-06 00:51:04', '2024-11-06 00:51:04.044554', '2024-11-06 00:51:04.044554', NULL, 1, 1, NULL, 1, 1, 'Transfer Stock', '1', 'TransferToAgent');
INSERT INTO `purchase_by_rice_from_miller` (`id`, `quantity`, `totalQuantity`, `cost`, `totalCost`, `purchaseDate`, `createdAt`, `updatedAt`, `miller_id`, `branch_id`, `agent_id`, `customer_id`, `created_By`, `updated_By`, `paymentStatus`, `section`, `status`) VALUES (136, 2, 100, 0.00, 0.00, '2024-11-06 00:59:25', '2024-11-06 00:59:24.520959', '2024-11-06 00:59:24.520959', NULL, 1, 3, NULL, 1, 1, 'Transfer Stock', '1', 'TransferToAgent');
INSERT INTO `purchase_by_rice_from_miller` (`id`, `quantity`, `totalQuantity`, `cost`, `totalCost`, `purchaseDate`, `createdAt`, `updatedAt`, `miller_id`, `branch_id`, `agent_id`, `customer_id`, `created_By`, `updated_By`, `paymentStatus`, `section`, `status`) VALUES (137, 5, 250, 0.00, 0.00, '2024-11-06 01:07:29', '2024-11-06 01:07:28.784127', '2024-11-06 01:07:28.784127', 1, 2, NULL, NULL, 1, 1, 'Transfer Stock', '1', 'TransferToBranch');
INSERT INTO `purchase_by_rice_from_miller` (`id`, `quantity`, `totalQuantity`, `cost`, `totalCost`, `purchaseDate`, `createdAt`, `updatedAt`, `miller_id`, `branch_id`, `agent_id`, `customer_id`, `created_By`, `updated_By`, `paymentStatus`, `section`, `status`) VALUES (138, 1, 50, 0.00, 0.00, '2024-11-06 01:08:30', '2024-11-06 01:08:30.352707', '2024-11-06 01:08:30.352707', NULL, 2, 4, NULL, 1, 1, 'Transfer Stock', '1', 'TransferToAgent');
INSERT INTO `purchase_by_rice_from_miller` (`id`, `quantity`, `totalQuantity`, `cost`, `totalCost`, `purchaseDate`, `createdAt`, `updatedAt`, `miller_id`, `branch_id`, `agent_id`, `customer_id`, `created_By`, `updated_By`, `paymentStatus`, `section`, `status`) VALUES (139, 2, 100, 0.00, 0.00, '2024-11-06 01:21:29', '2024-11-06 01:21:28.751276', '2024-11-06 01:21:28.751276', NULL, 2, 5, NULL, 1, 1, 'Transfer Stock', '1', 'TransferToAgent');
INSERT INTO `purchase_by_rice_from_miller` (`id`, `quantity`, `totalQuantity`, `cost`, `totalCost`, `purchaseDate`, `createdAt`, `updatedAt`, `miller_id`, `branch_id`, `agent_id`, `customer_id`, `created_By`, `updated_By`, `paymentStatus`, `section`, `status`) VALUES (140, 1, 50, 0.00, 0.00, '2024-11-06 01:25:59', '2024-11-06 01:25:59.316032', '2024-11-06 01:25:59.316032', 2, NULL, NULL, NULL, 1, 1, 'Pending', '1', 'deductFromMiller');
INSERT INTO `purchase_by_rice_from_miller` (`id`, `quantity`, `totalQuantity`, `cost`, `totalCost`, `purchaseDate`, `createdAt`, `updatedAt`, `miller_id`, `branch_id`, `agent_id`, `customer_id`, `created_By`, `updated_By`, `paymentStatus`, `section`, `status`) VALUES (142, 2, 100, 2500.00, 250000.00, '2024-11-06 02:11:12', '2024-11-06 02:11:12.001393', '2024-11-06 02:11:12.001393', NULL, NULL, 1, 2, 1, 1, 'Not yet', '1', 'transfertocustomer');
INSERT INTO `purchase_by_rice_from_miller` (`id`, `quantity`, `totalQuantity`, `cost`, `totalCost`, `purchaseDate`, `createdAt`, `updatedAt`, `miller_id`, `branch_id`, `agent_id`, `customer_id`, `created_By`, `updated_By`, `paymentStatus`, `section`, `status`) VALUES (143, 5, 250, 0.00, 0.00, '2024-11-06 02:44:36', '2024-11-06 02:44:36.154754', '2024-11-06 09:45:23.000000', NULL, NULL, 2, NULL, 1, 1, 'Agent Request', '1', 'Approved Agent Request');
INSERT INTO `purchase_by_rice_from_miller` (`id`, `quantity`, `totalQuantity`, `cost`, `totalCost`, `purchaseDate`, `createdAt`, `updatedAt`, `miller_id`, `branch_id`, `agent_id`, `customer_id`, `created_By`, `updated_By`, `paymentStatus`, `section`, `status`) VALUES (144, 1, 50, 2500.00, 125000.00, '2024-11-06 09:40:52', '2024-11-06 09:40:52.288031', '2024-11-06 09:42:45.000000', NULL, NULL, 2, 5, 10, 10, 'Paid', '1', 'transfertocustomer');
INSERT INTO `purchase_by_rice_from_miller` (`id`, `quantity`, `totalQuantity`, `cost`, `totalCost`, `purchaseDate`, `createdAt`, `updatedAt`, `miller_id`, `branch_id`, `agent_id`, `customer_id`, `created_By`, `updated_By`, `paymentStatus`, `section`, `status`) VALUES (145, 10, 500, 0.00, 0.00, '2024-11-06 09:46:46', '2024-11-06 09:46:46.095463', '2024-11-06 09:46:46.095463', NULL, NULL, 1, NULL, 10, 10, 'Agent Request', '1', 'Pendding Agent Request');
INSERT INTO `purchase_by_rice_from_miller` (`id`, `quantity`, `totalQuantity`, `cost`, `totalCost`, `purchaseDate`, `createdAt`, `updatedAt`, `miller_id`, `branch_id`, `agent_id`, `customer_id`, `created_By`, `updated_By`, `paymentStatus`, `section`, `status`) VALUES (146, 5, 250, 0.00, 0.00, '2024-11-06 09:46:53', '2024-11-06 09:46:53.155947', '2024-11-06 09:48:41.000000', NULL, NULL, 3, NULL, 10, 10, 'Agent Request', '1', 'Approved Agent Request');
INSERT INTO `purchase_by_rice_from_miller` (`id`, `quantity`, `totalQuantity`, `cost`, `totalCost`, `purchaseDate`, `createdAt`, `updatedAt`, `miller_id`, `branch_id`, `agent_id`, `customer_id`, `created_By`, `updated_By`, `paymentStatus`, `section`, `status`) VALUES (147, 2, 100, 0.00, 0.00, '2024-11-06 09:47:01', '2024-11-06 09:47:00.824163', '2024-11-06 09:47:55.000000', NULL, NULL, 1, NULL, 10, 10, 'Agent Request', '1', 'Approved Agent Request');
INSERT INTO `purchase_by_rice_from_miller` (`id`, `quantity`, `totalQuantity`, `cost`, `totalCost`, `purchaseDate`, `createdAt`, `updatedAt`, `miller_id`, `branch_id`, `agent_id`, `customer_id`, `created_By`, `updated_By`, `paymentStatus`, `section`, `status`) VALUES (148, 5, 250, 0.00, 0.00, '2024-11-06 09:47:09', '2024-11-06 09:47:08.663116', '2024-11-06 09:50:05.000000', NULL, NULL, 2, NULL, 10, 10, 'Agent Request', '1', 'Rejected Agent Request');
INSERT INTO `purchase_by_rice_from_miller` (`id`, `quantity`, `totalQuantity`, `cost`, `totalCost`, `purchaseDate`, `createdAt`, `updatedAt`, `miller_id`, `branch_id`, `agent_id`, `customer_id`, `created_By`, `updated_By`, `paymentStatus`, `section`, `status`) VALUES (149, 2, 100, 0.00, 0.00, '2024-11-06 09:56:03', '2024-11-06 09:56:02.704340', '2024-11-06 09:56:31.000000', NULL, NULL, 2, NULL, 7, 7, 'Agent Request', '1', 'Rejected Agent Request');
COMMIT;

-- ----------------------------
-- Table structure for role
-- ----------------------------
DROP TABLE IF EXISTS `role`;
CREATE TABLE `role` (
  `id` int NOT NULL AUTO_INCREMENT,
  `status` tinyint NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of role
-- ----------------------------
BEGIN;
INSERT INTO `role` (`id`, `status`, `name`, `description`) VALUES (1, 1, 'Admin', 'Full access of System');
INSERT INTO `role` (`id`, `status`, `name`, `description`) VALUES (4, 1, 'Branch Manager', 'All access and only in their branch');
INSERT INTO `role` (`id`, `status`, `name`, `description`) VALUES (5, 1, 'Stock Manager', 'Puchase miller and stock management only');
INSERT INTO `role` (`id`, `status`, `name`, `description`) VALUES (6, 1, 'User', 'User access customer,agent,data order,in branch only');
COMMIT;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `allowResetPassword` tinyint NOT NULL DEFAULT '1',
  `active` tinyint NOT NULL DEFAULT '1',
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `role_id` int DEFAULT NULL,
  `employee_id` int DEFAULT NULL,
  `branch_id` int DEFAULT NULL,
  `created_By` int DEFAULT NULL,
  `updated_By` int DEFAULT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `confirmPassword` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_78a916df40e02a9deb1c4b75ed` (`username`),
  KEY `FK_fb2e442d14add3cefbdf33c4561` (`role_id`),
  KEY `FK_135936b6918bd375a4479b92311` (`employee_id`),
  KEY `FK_09210cab0384d041d5f3b337e8e` (`branch_id`),
  KEY `FK_938352a942ab4b0373fc19c0cd2` (`created_By`),
  KEY `FK_3ff1d4c876fb37e9333a80d253b` (`updated_By`),
  CONSTRAINT `FK_09210cab0384d041d5f3b337e8e` FOREIGN KEY (`branch_id`) REFERENCES `branch` (`id`),
  CONSTRAINT `FK_135936b6918bd375a4479b92311` FOREIGN KEY (`employee_id`) REFERENCES `employee` (`id`),
  CONSTRAINT `FK_3ff1d4c876fb37e9333a80d253b` FOREIGN KEY (`updated_By`) REFERENCES `user` (`id`),
  CONSTRAINT `FK_938352a942ab4b0373fc19c0cd2` FOREIGN KEY (`created_By`) REFERENCES `user` (`id`),
  CONSTRAINT `FK_fb2e442d14add3cefbdf33c4561` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of user
-- ----------------------------
BEGIN;
INSERT INTO `user` (`id`, `allowResetPassword`, `active`, `createdAt`, `updatedAt`, `role_id`, `employee_id`, `branch_id`, `created_By`, `updated_By`, `username`, `password`, `confirmPassword`, `email`) VALUES (1, 1, 1, '2024-10-24 15:01:14.489000', '2024-11-06 10:07:58.000000', 1, 7, 1, 1, 1, 'Huy Mouyheng', '$2b$10$gJwKbC4IaOdBnVZT7H.6T.R6gSxuZ4FF6m50AYlrAlNBDdoL4W1L.', NULL, 'huymouyheng@gmail.com');
INSERT INTO `user` (`id`, `allowResetPassword`, `active`, `createdAt`, `updatedAt`, `role_id`, `employee_id`, `branch_id`, `created_By`, `updated_By`, `username`, `password`, `confirmPassword`, `email`) VALUES (5, 0, 1, '2024-10-24 15:01:14.489000', '2024-11-05 10:23:24.000000', 4, 10, 2, 1, 1, 'Vouth Sophanna', '$2b$10$NwsxqXRELGMvrNPiMhZ3rOI567vk.c.xX98BWOLLY4x4BrscZ3ouO', '$2b$10$NwsxqXRELGMvrNPiMhZ3rOI567vk.c.xX98BWOLLY4x4BrscZ3ouO', 'vouthsophanna@gmail.com');
INSERT INTO `user` (`id`, `allowResetPassword`, `active`, `createdAt`, `updatedAt`, `role_id`, `employee_id`, `branch_id`, `created_By`, `updated_By`, `username`, `password`, `confirmPassword`, `email`) VALUES (6, 0, 1, '2024-11-02 23:15:38.283000', '2024-11-05 10:22:55.000000', 6, 8, 4, 1, 1, 'Map Leapheng', '$2b$10$60MI8rMhw6H6eJ/nZnY4Fegk46Y5AzAlJqOU2ctpWaxqq/iKZgjqO', '$2b$10$A6lx54MhBYBHPZPLYB4le.//fGRXk6HfHFelvqpt6qZf3e59509oC', 'mapleapheng@gmail.com');
INSERT INTO `user` (`id`, `allowResetPassword`, `active`, `createdAt`, `updatedAt`, `role_id`, `employee_id`, `branch_id`, `created_By`, `updated_By`, `username`, `password`, `confirmPassword`, `email`) VALUES (7, 0, 1, '2024-11-03 00:14:01.300000', '2024-11-05 10:21:20.000000', 4, 6, 1, 1, 1, 'Ly MengNgoun', '$2b$10$.7PrF4SCrtx9ctn9omvda.Nou7L2solrzReHf5asx/h3/OXQf31eG', '$2b$10$.7PrF4SCrtx9ctn9omvda.Nou7L2solrzReHf5asx/h3/OXQf31eG', 'lymengngoun@gmail.com');
INSERT INTO `user` (`id`, `allowResetPassword`, `active`, `createdAt`, `updatedAt`, `role_id`, `employee_id`, `branch_id`, `created_By`, `updated_By`, `username`, `password`, `confirmPassword`, `email`) VALUES (8, 0, 1, '2024-11-05 10:19:51.030000', '2024-11-05 10:21:07.085281', 5, 15, 1, 1, NULL, 'Khut Veasna', '$2b$10$7m4hkIg0cjmOkcBrbYsZ6e9rQweAyWveYp351I3JibBj2deuoA3ca', '$2b$10$7m4hkIg0cjmOkcBrbYsZ6e9rQweAyWveYp351I3JibBj2deuoA3ca', 'veasna12@gmail.com');
INSERT INTO `user` (`id`, `allowResetPassword`, `active`, `createdAt`, `updatedAt`, `role_id`, `employee_id`, `branch_id`, `created_By`, `updated_By`, `username`, `password`, `confirmPassword`, `email`) VALUES (9, 0, 1, '2024-11-05 10:24:25.721000', '2024-11-05 10:25:18.298679', 4, 21, 4, 1, NULL, 'Noy Sopheak', '$2b$10$XELWcpzlauPE8nVGP7iWkOCX1BnuxSEOYVFbZNRpD1kvea9iwDrrW', '$2b$10$XELWcpzlauPE8nVGP7iWkOCX1BnuxSEOYVFbZNRpD1kvea9iwDrrW', 'Noysopheak@gmail.com');
INSERT INTO `user` (`id`, `allowResetPassword`, `active`, `createdAt`, `updatedAt`, `role_id`, `employee_id`, `branch_id`, `created_By`, `updated_By`, `username`, `password`, `confirmPassword`, `email`) VALUES (10, 1, 1, '2024-11-05 10:26:26.317000', '2024-11-06 10:09:05.000000', 6, 13, 1, 1, 1, 'Yern Sreymom', '$2b$10$z4xeW11HL80a5si8KODkRu.efSF2UegMcuQOVd4uFUfOoGr6hy9O2', '$2b$10$ZksJdk/BhW5CaGXyXlKIAOAKcFeIMXVTGCa1y4iLF2spGvv8Znmx.', 'mom124@gmail.com');
INSERT INTO `user` (`id`, `allowResetPassword`, `active`, `createdAt`, `updatedAt`, `role_id`, `employee_id`, `branch_id`, `created_By`, `updated_By`, `username`, `password`, `confirmPassword`, `email`) VALUES (11, 0, 1, '2024-11-05 10:27:39.679000', '2024-11-05 10:28:17.376873', 6, 18, 2, 1, NULL, 'Sophea Tevy', '$2b$10$ZoYaE5vUa4n/S0nkbUYuA.dZDljzGP8z79urP7AQ.L1tRzI2ZTZ3.', '$2b$10$ZoYaE5vUa4n/S0nkbUYuA.dZDljzGP8z79urP7AQ.L1tRzI2ZTZ3.', 'Tevy4548@gmail.com');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;

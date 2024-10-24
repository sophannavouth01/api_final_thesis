/*
 Navicat Premium Data Transfer

 Source Server         : MySql
 Source Server Type    : MySQL
 Source Server Version : 80039
 Source Host           : localhost:3306
 Source Schema         : new_api

 Target Server Type    : MySQL
 Target Server Version : 80039
 File Encoding         : 65001

 Date: 30/08/2024 14:08:46
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for approval
-- ----------------------------
DROP TABLE IF EXISTS `approval`;
CREATE TABLE `approval`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `approver_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `approval_level` int NOT NULL,
  `approved` tinyint NOT NULL,
  `approved_at` timestamp NULL DEFAULT NULL,
  `comments` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `leave_request_id` int NULL DEFAULT NULL,
  `employee_id` int NULL DEFAULT NULL,
  `leave_type_id` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `FK_f305adc91428c5f4322365f51de`(`leave_request_id` ASC) USING BTREE,
  INDEX `FK_30a0ed389dade63c119a1975d82`(`employee_id` ASC) USING BTREE,
  INDEX `FK_a43e9737ca9ccc3d24776deea2e`(`leave_type_id` ASC) USING BTREE,
  CONSTRAINT `FK_30a0ed389dade63c119a1975d82` FOREIGN KEY (`employee_id`) REFERENCES `employee` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FK_a43e9737ca9ccc3d24776deea2e` FOREIGN KEY (`leave_type_id`) REFERENCES `leave_type` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FK_f305adc91428c5f4322365f51de` FOREIGN KEY (`leave_request_id`) REFERENCES `leave_request` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of approval
-- ----------------------------

-- ----------------------------
-- Table structure for department
-- ----------------------------
DROP TABLE IF EXISTS `department`;
CREATE TABLE `department`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of department
-- ----------------------------
INSERT INTO `department` VALUES (2, 'Information Technology', 'Handles all IT tasks.');
INSERT INTO `department` VALUES (5, 'Finance', '');
INSERT INTO `department` VALUES (7, 'CEO', '');

-- ----------------------------
-- Table structure for employee
-- ----------------------------
DROP TABLE IF EXISTS `employee`;
CREATE TABLE `employee`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `lastName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `phoneNumber` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `employeeId` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `dateOfBirth` datetime NOT NULL,
  `hireDate` datetime NOT NULL,
  `gender` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `status` tinyint NOT NULL,
  `department_id` int NULL DEFAULT NULL,
  `user_id` int NULL DEFAULT NULL,
  `site_id` int NULL DEFAULT NULL,
  `role_id` int NULL DEFAULT NULL,
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `createdBy` int NOT NULL,
  `section_id` int NULL DEFAULT NULL,
  `position_id` int NULL DEFAULT NULL,
  `lineManager_id` int NULL DEFAULT NULL,
  `grad_id` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `IDX_cd21151b14974c7a24e8c24df2`(`employeeId` ASC) USING BTREE,
  INDEX `FK_d62835db8c0aec1d18a5a927549`(`department_id` ASC) USING BTREE,
  INDEX `FK_72953417d3d7e75b72ca0918d53`(`site_id` ASC) USING BTREE,
  INDEX `FK_1c105b756816efbdeae09a9ab65`(`role_id` ASC) USING BTREE,
  INDEX `FK_e4306f097a54c5d94478683ff3f`(`section_id` ASC) USING BTREE,
  INDEX `FK_6ab3ec557a640017d53ac0e0ab7`(`position_id` ASC) USING BTREE,
  INDEX `FK_15a3e9136dc16440a7b286708ca`(`lineManager_id` ASC) USING BTREE,
  INDEX `FK_1091aec88d526c6e75a05c13c29`(`grad_id` ASC) USING BTREE,
  INDEX `FK_f61258e58ed35475ce1dba03797`(`user_id` ASC) USING BTREE,
  INDEX `FK_b69aa53739ecf73bb7538e50902`(`createdBy` ASC) USING BTREE,
  CONSTRAINT `FK_1091aec88d526c6e75a05c13c29` FOREIGN KEY (`grad_id`) REFERENCES `grad` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FK_15a3e9136dc16440a7b286708ca` FOREIGN KEY (`lineManager_id`) REFERENCES `employee` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FK_1c105b756816efbdeae09a9ab65` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FK_6ab3ec557a640017d53ac0e0ab7` FOREIGN KEY (`position_id`) REFERENCES `position` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FK_72953417d3d7e75b72ca0918d53` FOREIGN KEY (`site_id`) REFERENCES `site` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FK_b69aa53739ecf73bb7538e50902` FOREIGN KEY (`createdBy`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FK_d62835db8c0aec1d18a5a927549` FOREIGN KEY (`department_id`) REFERENCES `department` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FK_e4306f097a54c5d94478683ff3f` FOREIGN KEY (`section_id`) REFERENCES `section` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FK_f61258e58ed35475ce1dba03797` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 17 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of employee
-- ----------------------------
INSERT INTO `employee` VALUES (1, 'Admin', 'Account', 'Admin@gmail.com', '01234567890', 'EMP001', '1990-01-01 00:00:00', '2023-01-01 00:00:00', 'Male', 1, 2, 1, 1, 1, '2024-08-22 15:13:00.976319', '2024-08-30 13:57:15.691471', 10, 14, 1, 2, 6);
INSERT INTO `employee` VALUES (2, 'Khim', 'Sokhy', 'Khimsokhy@gmail.com', '012345678', 'EMP002', '2000-01-15 00:00:00', '2023-04-10 00:00:00', 'Male', 1, 2, 1, 1, 5, '2024-08-23 08:35:17.179445', '2024-08-30 13:57:17.019300', 10, 15, 11, 12, 4);
INSERT INTO `employee` VALUES (8, 'Chan', 'Ousa', 'Chanousa@gmail.com', '089345678', 'EMP003', '1970-08-15 00:00:00', '2020-09-10 00:00:00', 'Male', 1, 5, 1, 1, 3, '2024-08-23 10:30:21.893024', '2024-08-30 13:57:17.742826', 10, 16, 11, 12, 4);
INSERT INTO `employee` VALUES (12, 'Chan', 'Dara', 'Channdara@gmail.com', '08965234', 'EMP000', '1990-05-24 00:00:00', '2010-01-01 00:00:00', 'Male', 1, 7, 1, 1, NULL, '2024-08-23 11:16:50.743893', '2024-08-30 13:57:19.288476', 10, 17, 12, 12, 1);
INSERT INTO `employee` VALUES (16, 'Developer', 'Lees Food', 'Developerleesfood@gmail.com', '0964494239', 'Developer001', '2002-02-23 00:00:00', '2024-08-01 00:00:00', 'Male', 1, 2, 1, 1, 1, '2024-08-30 13:15:48.882463', '2024-08-30 13:57:22.313143', 10, 14, 1, 2, 6);

-- ----------------------------
-- Table structure for grad
-- ----------------------------
DROP TABLE IF EXISTS `grad`;
CREATE TABLE `grad`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `status` tinyint NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of grad
-- ----------------------------
INSERT INTO `grad` VALUES (1, 'Lavel 1', '', 1);
INSERT INTO `grad` VALUES (4, 'Lavel 2', '', 1);
INSERT INTO `grad` VALUES (5, 'Lavel 3', '', 1);
INSERT INTO `grad` VALUES (6, 'Lavel 4', '', 1);

-- ----------------------------
-- Table structure for leave_request
-- ----------------------------
DROP TABLE IF EXISTS `leave_request`;
CREATE TABLE `leave_request`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `start_date` date NULL DEFAULT NULL,
  `end_date` date NULL DEFAULT NULL,
  `reason` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `status` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `start_time` time NULL DEFAULT NULL,
  `end_time` time NULL DEFAULT NULL,
  `date_back_work` date NULL DEFAULT NULL,
  `location_mission` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `time_request` timestamp NULL DEFAULT NULL,
  `number_of_requests` int NOT NULL DEFAULT 0,
  `employee_id` int NULL DEFAULT NULL,
  `leave_type_id` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `FK_f457a5663e14c8aa27ce95a8a6a`(`employee_id` ASC) USING BTREE,
  INDEX `FK_62ca66780b8e4f25ae2791c3695`(`leave_type_id` ASC) USING BTREE,
  CONSTRAINT `FK_62ca66780b8e4f25ae2791c3695` FOREIGN KEY (`leave_type_id`) REFERENCES `leave_type` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FK_f457a5663e14c8aa27ce95a8a6a` FOREIGN KEY (`employee_id`) REFERENCES `employee` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of leave_request
-- ----------------------------

-- ----------------------------
-- Table structure for leave_type
-- ----------------------------
DROP TABLE IF EXISTS `leave_type`;
CREATE TABLE `leave_type`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `status` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 10 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of leave_type
-- ----------------------------
INSERT INTO `leave_type` VALUES (1, 'Annual Leave', '', 'active');
INSERT INTO `leave_type` VALUES (2, 'Manternity Leave', '', 'active');
INSERT INTO `leave_type` VALUES (3, 'Sick Leave', '', 'active');
INSERT INTO `leave_type` VALUES (4, 'Mission', '', 'active');
INSERT INTO `leave_type` VALUES (5, 'Early', '', 'active');
INSERT INTO `leave_type` VALUES (6, 'Late', '', 'active');
INSERT INTO `leave_type` VALUES (7, 'Missed Scan', '', 'active');
INSERT INTO `leave_type` VALUES (8, 'Company Activity', '', 'active');
INSERT INTO `leave_type` VALUES (9, 'Special Leave', '', 'active');

-- ----------------------------
-- Table structure for position
-- ----------------------------
DROP TABLE IF EXISTS `position`;
CREATE TABLE `position`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `status` tinyint NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 13 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of position
-- ----------------------------
INSERT INTO `position` VALUES (1, 'Developer', 'development on coding', 1);
INSERT INTO `position` VALUES (2, 'AR Collector', '', 1);
INSERT INTO `position` VALUES (3, 'Account Clerk', '', 1);
INSERT INTO `position` VALUES (4, 'Cost Account', '', 0);
INSERT INTO `position` VALUES (6, 'Procuretment', '', 0);
INSERT INTO `position` VALUES (7, 'Tranee', '', 0);
INSERT INTO `position` VALUES (8, 'IT Support Officer', '', 0);
INSERT INTO `position` VALUES (9, 'COD Controller', '', 0);
INSERT INTO `position` VALUES (10, 'COD Collectore', '', 0);
INSERT INTO `position` VALUES (11, 'Manager', '', 0);
INSERT INTO `position` VALUES (12, 'CEO', '', 0);

-- ----------------------------
-- Table structure for role
-- ----------------------------
DROP TABLE IF EXISTS `role`;
CREATE TABLE `role`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `status` tinyint NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of role
-- ----------------------------
INSERT INTO `role` VALUES (1, 'Admin', 'Full Access', 1);
INSERT INTO `role` VALUES (2, 'User', 'Just view data', 1);
INSERT INTO `role` VALUES (3, 'HR', '', 1);
INSERT INTO `role` VALUES (4, 'Developer', '', 1);
INSERT INTO `role` VALUES (5, 'Line Manager', '', 1);
INSERT INTO `role` VALUES (6, 'CEO', '', 1);

-- ----------------------------
-- Table structure for section
-- ----------------------------
DROP TABLE IF EXISTS `section`;
CREATE TABLE `section`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `status` tinyint NOT NULL,
  `departmentId` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `FK_dcacdb97ef1d86c168dd6b6bd56`(`departmentId` ASC) USING BTREE,
  CONSTRAINT `FK_dcacdb97ef1d86c168dd6b6bd56` FOREIGN KEY (`departmentId`) REFERENCES `department` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 18 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of section
-- ----------------------------
INSERT INTO `section` VALUES (9, 'AR ', 'Handles finance tasks', 0, 5);
INSERT INTO `section` VALUES (10, 'AP', '', 1, 5);
INSERT INTO `section` VALUES (14, 'IT', 'Handles Technology tasks', 1, 2);
INSERT INTO `section` VALUES (15, 'HOD', 'Head of Department', 1, 2);
INSERT INTO `section` VALUES (16, 'HOD', '', 1, 5);
INSERT INTO `section` VALUES (17, 'CEO', '', 1, 7);

-- ----------------------------
-- Table structure for section_positions_position
-- ----------------------------
DROP TABLE IF EXISTS `section_positions_position`;
CREATE TABLE `section_positions_position`  (
  `sectionId` int NOT NULL,
  `positionId` int NOT NULL,
  PRIMARY KEY (`sectionId`, `positionId`) USING BTREE,
  INDEX `IDX_21769592efa8c5a345b72a186f`(`sectionId` ASC) USING BTREE,
  INDEX `IDX_285d597f4d145ce1d053c323f3`(`positionId` ASC) USING BTREE,
  CONSTRAINT `FK_21769592efa8c5a345b72a186fa` FOREIGN KEY (`sectionId`) REFERENCES `section` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_285d597f4d145ce1d053c323f39` FOREIGN KEY (`positionId`) REFERENCES `position` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of section_positions_position
-- ----------------------------
INSERT INTO `section_positions_position` VALUES (9, 2);
INSERT INTO `section_positions_position` VALUES (9, 9);
INSERT INTO `section_positions_position` VALUES (9, 10);
INSERT INTO `section_positions_position` VALUES (9, 11);
INSERT INTO `section_positions_position` VALUES (10, 3);
INSERT INTO `section_positions_position` VALUES (10, 4);
INSERT INTO `section_positions_position` VALUES (10, 6);
INSERT INTO `section_positions_position` VALUES (10, 11);
INSERT INTO `section_positions_position` VALUES (14, 1);
INSERT INTO `section_positions_position` VALUES (14, 7);
INSERT INTO `section_positions_position` VALUES (14, 8);
INSERT INTO `section_positions_position` VALUES (15, 11);
INSERT INTO `section_positions_position` VALUES (16, 11);
INSERT INTO `section_positions_position` VALUES (17, 12);

-- ----------------------------
-- Table structure for site
-- ----------------------------
DROP TABLE IF EXISTS `site`;
CREATE TABLE `site`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of site
-- ----------------------------
INSERT INTO `site` VALUES (1, 'Office 598', 'Phnom Penh', 'Head Office of Leed food in cambodia');
INSERT INTO `site` VALUES (2, 'BTB', 'Battambang', '');
INSERT INTO `site` VALUES (3, 'KPT', 'Kampot', '');
INSERT INTO `site` VALUES (4, 'SR', 'Siem Reap', '');
INSERT INTO `site` VALUES (5, 'New WH', 'Phnom Penh', '');
INSERT INTO `site` VALUES (6, 'BVT', 'Svay Rieng', '');
INSERT INTO `site` VALUES (7, 'SHV', 'Preah Sihanouk', '');
INSERT INTO `site` VALUES (8, 'TBK', 'Kampong Cham', '');

-- ----------------------------
-- Table structure for sub_department
-- ----------------------------
DROP TABLE IF EXISTS `sub_department`;
CREATE TABLE `sub_department`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `department_id` int NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of sub_department
-- ----------------------------

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `role_id` int NULL DEFAULT NULL,
  `employee_id` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `IDX_78a916df40e02a9deb1c4b75ed`(`username` ASC) USING BTREE,
  INDEX `FK_fb2e442d14add3cefbdf33c4561`(`role_id` ASC) USING BTREE,
  INDEX `FK_135936b6918bd375a4479b92311`(`employee_id` ASC) USING BTREE,
  CONSTRAINT `FK_135936b6918bd375a4479b92311` FOREIGN KEY (`employee_id`) REFERENCES `employee` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FK_fb2e442d14add3cefbdf33c4561` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 11 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, 'test@gmail.com', '$2b$10$3vrDvOEinSOqi41PosV6AuoHzhe1fMviErIDnRhUDvybU/JCpCAoy', 'Maosaran@gmail.com', 1, 16);
INSERT INTO `user` VALUES (10, 'Developerleesfood@gmail.com', '$2b$10$51uw0OqSdwvTtZjGnqlYouhjyPxXrZLyr42.sUPdpyGMvU/cir5ly', 'Developerleesfood@gmail.com', 1, 16);

SET FOREIGN_KEY_CHECKS = 1;

-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema db_course_work
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `db_course_work` ;

-- -----------------------------------------------------
-- Schema db_course_work
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `db_course_work` DEFAULT CHARACTER SET utf8 COLLATE utf8_bin ;
USE `db_course_work` ;

-- -----------------------------------------------------
-- Table `db_course_work`.`role`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `db_course_work`.`role` ;

CREATE TABLE IF NOT EXISTS `db_course_work`.`role` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `description` VARCHAR(255) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  UNIQUE INDEX `name_UNIQUE` (`name` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_course_work`.`user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `db_course_work`.`user` ;

CREATE TABLE IF NOT EXISTS `db_course_work`.`user` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nickname` VARCHAR(45) NOT NULL,
  `firstname` VARCHAR(45) NOT NULL,
  `lastname` VARCHAR(45) NULL,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `role_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  UNIQUE INDEX `nickname_UNIQUE` (`nickname` ASC) VISIBLE,
  INDEX `fk_user_role_idx` (`role_id` ASC) VISIBLE,
  CONSTRAINT `fk_user_role`
    FOREIGN KEY (`role_id`)
    REFERENCES `db_course_work`.`role` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_course_work`.`request`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `db_course_work`.`request` ;

CREATE TABLE IF NOT EXISTS `db_course_work`.`request` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `target` VARCHAR(255) NOT NULL,
  `type` VARCHAR(45) NOT NULL,
  `date` DATETIME NOT NULL,
  `user_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_request_user1_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_request_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `db_course_work`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_course_work`.`filter`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `db_course_work`.`filter` ;

CREATE TABLE IF NOT EXISTS `db_course_work`.`filter` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `keyword` VARCHAR(255) NULL,
  `country` VARCHAR(45) NULL,
  `format` VARCHAR(45) NULL,
  `request_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_filter_request1_idx` (`request_id` ASC) VISIBLE,
  CONSTRAINT `fk_filter_request1`
    FOREIGN KEY (`request_id`)
    REFERENCES `db_course_work`.`request` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_course_work`.`file`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `db_course_work`.`file` ;

CREATE TABLE IF NOT EXISTS `db_course_work`.`file` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `description` VARCHAR(255) NULL,
  `uploadDate` DATE NOT NULL,
  `lastEditTime` DATETIME NOT NULL,
  `format` VARCHAR(45) NOT NULL,
  `hasVisualization` TINYINT UNSIGNED NOT NULL,
  `authorId` INT NOT NULL,
  `country` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  UNIQUE INDEX `name_UNIQUE` (`name` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_course_work`.`search`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `db_course_work`.`search` ;

CREATE TABLE IF NOT EXISTS `db_course_work`.`search` (
  `request_id` INT UNSIGNED NOT NULL,
  `file_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`request_id`, `file_id`),
  INDEX `fk_search_file1_idx` (`file_id` ASC) VISIBLE,
  CONSTRAINT `fk_search_request1`
    FOREIGN KEY (`request_id`)
    REFERENCES `db_course_work`.`request` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_search_file1`
    FOREIGN KEY (`file_id`)
    REFERENCES `db_course_work`.`file` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Таблиця `db_course_work`.`right`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `db_course_work`.`right` ;

CREATE TABLE IF NOT EXISTS `db_course_work`.`right` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  UNIQUE INDEX `name_UNIQUE` (`name` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_course_work`.`grant`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `db_course_work`.`grant` ;

CREATE TABLE IF NOT EXISTS `db_course_work`.`grant` (
  `right_id` INT UNSIGNED NOT NULL,
  `role_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`right_id`, `role_id`),
  INDEX `fk_grant_right1_idx` (`right_id` ASC) VISIBLE,
  CONSTRAINT `fk_grant_role1`
    FOREIGN KEY (`role_id`)
    REFERENCES `db_course_work`.`role` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_grant_right1`
    FOREIGN KEY (`right_id`)
    REFERENCES `db_course_work`.`right` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_course_work`.`permission`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `db_course_work`.`permission` ;

CREATE TABLE IF NOT EXISTS `db_course_work`.`permission` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `right_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  UNIQUE INDEX `name_UNIQUE` (`name` ASC) VISIBLE,
  INDEX `fk_permission_right1_idx` (`right_id` ASC) VISIBLE,
  CONSTRAINT `fk_permission_right1`
    FOREIGN KEY (`right_id`)
    REFERENCES `db_course_work`.`right` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_course_work`.`access`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `db_course_work`.`access` ;

CREATE TABLE IF NOT EXISTS `db_course_work`.`access` (
  `role_id` INT UNSIGNED NOT NULL,
  `file_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`role_id`, `file_id`),
  INDEX `fk_access_file1_idx` (`file_id` ASC) VISIBLE,
  CONSTRAINT `fk_access_role1`
    FOREIGN KEY (`role_id`)
    REFERENCES `db_course_work`.`role` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_access_file1`
    FOREIGN KEY (`file_id`)
    REFERENCES `db_course_work`.`file` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Стандартні дані для таблиці `db_course_work`.`right`
-- -----------------------------------------------------
START TRANSACTION;
USE `db_course_work`;
INSERT INTO `db_course_work`.`right` (`id`, `name`) VALUES (1, 'REGISTRATION');
INSERT INTO `db_course_work`.`right` (`id`, `name`) VALUES (2, 'PROFILE');
INSERT INTO `db_course_work`.`right` (`id`, `name`) VALUES (3, 'LOGIN');
INSERT INTO `db_course_work`.`right` (`id`, `name`) VALUES (4, 'LOGOUT');
INSERT INTO `db_course_work`.`right` (`id`, `name`) VALUES (5, 'DATA_INTERACTION');
INSERT INTO `db_course_work`.`right` (`id`, `name`) VALUES (6, 'DATA_CRUD');
INSERT INTO `db_course_work`.`right` (`id`, `name`) VALUES (7, 'PUBLICATION_VERIFICATION');
INSERT INTO `db_course_work`.`right` (`id`, `name`) VALUES (8, 'USER_MODERATING');

COMMIT;


-- -----------------------------------------------------
-- Стандартні дані для таблиці `db_course_work`.`permission`
-- -----------------------------------------------------
START TRANSACTION;
USE `db_course_work`;
INSERT INTO `db_course_work`.`permission` (`id`, `name`, `right_id`) VALUES (1, 'DATA_COMPARE', 5);
INSERT INTO `db_course_work`.`permission` (`id`, `name`, `right_id`) VALUES (2, 'DATA_VISUALIZE', 5);
INSERT INTO `db_course_work`.`permission` (`id`, `name`, `right_id`) VALUES (3, 'DATA_DOWNLOAD', 5);
INSERT INTO `db_course_work`.`permission` (`id`, `name`, `right_id`) VALUES (4, 'DATA_SEARCH', 5);
INSERT INTO `db_course_work`.`permission` (`id`, `name`, `right_id`) VALUES (5, 'DATA_UPLOAD', 6);
INSERT INTO `db_course_work`.`permission` (`id`, `name`, `right_id`) VALUES (6, 'DATA_EDIT', 6);
INSERT INTO `db_course_work`.`permission` (`id`, `name`, `right_id`) VALUES (7, 'DATA_PUBLISH', 6);
INSERT INTO `db_course_work`.`permission` (`id`, `name`, `right_id`) VALUES (8, 'DATA_REMOVE', 6);
INSERT INTO `db_course_work`.`permission` (`id`, `name`, `right_id`) VALUES (9, 'USER_BLOCKING', 8);
INSERT INTO `db_course_work`.`permission` (`id`, `name`, `right_id`) VALUES (10, 'USER_DELETION', 8);

COMMIT;


-- -----------------------------------------------------
-- Стандартні дані для таблиці `db_course_work`.`role`
-- -----------------------------------------------------
START TRANSACTION;
USE `db_course_work`;
INSERT INTO `db_course_work`.`role` (`id`, `name`, `description`) VALUES (1, 'USER', 'Звичайний користувач');
INSERT INTO `db_course_work`.`role` (`id`, `name`, `description`) VALUES (2, 'EDITOR', 'Редактор або автор');
INSERT INTO `db_course_work`.`role` (`id`, `name`, `description`) VALUES (3, 'ADMIN', 'Адміністратор');

COMMIT;


-- -----------------------------------------------------
-- Стандартні дані для таблиці `db_course_work`.`grant`
-- -----------------------------------------------------
START TRANSACTION;
USE `db_course_work`;
INSERT INTO `db_course_work`.`grant` (`right_id`, `role_id`) VALUES (1, 1);
INSERT INTO `db_course_work`.`grant` (`right_id`, `role_id`) VALUES (1, 2);
INSERT INTO `db_course_work`.`grant` (`right_id`, `role_id`) VALUES (1, 3);
INSERT INTO `db_course_work`.`grant` (`right_id`, `role_id`) VALUES (2, 1);
INSERT INTO `db_course_work`.`grant` (`right_id`, `role_id`) VALUES (2, 2);
INSERT INTO `db_course_work`.`grant` (`right_id`, `role_id`) VALUES (2, 3);
INSERT INTO `db_course_work`.`grant` (`right_id`, `role_id`) VALUES (3, 1);
INSERT INTO `db_course_work`.`grant` (`right_id`, `role_id`) VALUES (3, 2);
INSERT INTO `db_course_work`.`grant` (`right_id`, `role_id`) VALUES (3, 3);
INSERT INTO `db_course_work`.`grant` (`right_id`, `role_id`) VALUES (4, 1);
INSERT INTO `db_course_work`.`grant` (`right_id`, `role_id`) VALUES (4, 2);
INSERT INTO `db_course_work`.`grant` (`right_id`, `role_id`) VALUES (4, 3);
INSERT INTO `db_course_work`.`grant` (`right_id`, `role_id`) VALUES (5, 1);
INSERT INTO `db_course_work`.`grant` (`right_id`, `role_id`) VALUES (5, 2);
INSERT INTO `db_course_work`.`grant` (`right_id`, `role_id`) VALUES (5, 3);
INSERT INTO `db_course_work`.`grant` (`right_id`, `role_id`) VALUES (6, 2);
INSERT INTO `db_course_work`.`grant` (`right_id`, `role_id`) VALUES (6, 3);
INSERT INTO `db_course_work`.`grant` (`right_id`, `role_id`) VALUES (7, 3);
INSERT INTO `db_course_work`.`grant` (`right_id`, `role_id`) VALUES (8, 3);

COMMIT;


-- -----------------------------------------------------
-- Тестові дані для таблиці `db_course_work`.`user`
-- -----------------------------------------------------
START TRANSACTION;
USE `db_course_work`;
INSERT INTO `db_course_work`.`user` (`id`, `nickname`, `firstname`, `lastname`, `email`, `password`, `role_id`) VALUES (1, 'supreme_titan', 'Eren', ' Yeager', 'yeager-80@gmail.com', 'abc', 3);
INSERT INTO `db_course_work`.`user` (`id`, `nickname`, `firstname`, `lastname`, `email`, `password`, `role_id`) VALUES (2, 'magnet-for-bros-top1', 'Itadori', ' Yuji', 'itadori-sukuna@icloud.com', 'abc', 1);
INSERT INTO `db_course_work`.`user` (`id`, `nickname`, `firstname`, `lastname`, `email`, `password`, `role_id`) VALUES (3, 'soulless', 'Gabimaru', NULL, 'gabi-shinobi@ukr.net', 'abc', 1);
INSERT INTO `db_course_work`.`user` (`id`, `nickname`, `firstname`, `lastname`, `email`, `password`, `role_id`) VALUES (4, 'читер777', 'Yagami', 'Light', 'light.yagami@lll.kpi.ua', 'abc', 2);
INSERT INTO `db_course_work`.`user` (`id`, `nickname`, `firstname`, `lastname`, `email`, `password`, `role_id`) VALUES (5, 'bad-boy', 'Denji', NULL, 'chainsawman00@gmail.com', 'abc', 1);

COMMIT;


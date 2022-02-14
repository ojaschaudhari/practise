-- CreateTable
CREATE TABLE `Categories` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `category_name` VARCHAR(25) NOT NULL,

    UNIQUE INDEX `Categories_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Orgs` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `org_name` VARCHAR(100) NOT NULL,
    `city` VARCHAR(25) NOT NULL,

    UNIQUE INDEX `Orgs_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Products` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    `avail_city` VARCHAR(25) NOT NULL,
    `org_id` INTEGER NOT NULL,
    `category_id` INTEGER NOT NULL,
    `sub_category_id` INTEGER NOT NULL,

    UNIQUE INDEX `Products_id_key`(`id`),
    INDEX `fk_products_to_orgs`(`org_id`),
    INDEX `fk_products_to_sub_category`(`category_id`, `sub_category_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Sub_Categories` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `sub_category_name` VARCHAR(25) NOT NULL,
    `category_id` INTEGER NOT NULL,

    UNIQUE INDEX `Sub_Categories_id_key`(`id`),
    INDEX `fk_sub_category_to_category`(`category_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Vendor_Orgs` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `orgs_id` JSON NOT NULL,
    `city` VARCHAR(25) NOT NULL,
    `name` VARCHAR(50) NOT NULL,

    UNIQUE INDEX `Vendor_Orgs_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Vendors` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(50) NOT NULL,
    `password` VARCHAR(100) NOT NULL,

    UNIQUE INDEX `Vendors_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Products` ADD CONSTRAINT `fk_products_to_orgs` FOREIGN KEY (`org_id`) REFERENCES `Orgs`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Products` ADD CONSTRAINT `fk_products_to_sub_category` FOREIGN KEY (`category_id`, `sub_category_id`) REFERENCES `Sub_Categories`(`id`, `category_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Sub_Categories` ADD CONSTRAINT `fk_sub_category_to_category` FOREIGN KEY (`category_id`) REFERENCES `Categories`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

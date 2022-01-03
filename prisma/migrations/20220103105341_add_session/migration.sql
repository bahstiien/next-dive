-- CreateTable
CREATE TABLE `diveSession` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `date` DATETIME(3) NOT NULL,
    `boat` VARCHAR(191) NOT NULL,
    `spot` VARCHAR(191) NOT NULL,
    `placesOnBoat` INTEGER NOT NULL DEFAULT 10,
    `meetingSpot` VARCHAR(191) NOT NULL DEFAULT 'Club de plongée des Albatros',
    `miniLevel` VARCHAR(191) NOT NULL DEFAULT 'all',
    `price` INTEGER NOT NULL DEFAULT 45,
    `additionalInformation` LONGTEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `adminTgLogin` VARCHAR(191) NOT NULL,
    `adminTgChatId` VARCHAR(191) NOT NULL,
    `telegramToken` VARCHAR(191) NOT NULL,
    `isDisabled` BOOLEAN NOT NULL DEFAULT false,
    `TariffStatus` ENUM('PREMIUM', 'FREE') NOT NULL DEFAULT 'FREE',

    UNIQUE INDEX `User_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

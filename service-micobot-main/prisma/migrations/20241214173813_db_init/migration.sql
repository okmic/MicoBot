-- CreateTable
CREATE TABLE `Bots` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `adminTgLogin` VARCHAR(191) NOT NULL,
    `adminTgChatId` VARCHAR(191) NOT NULL,
    `telegramToken` VARCHAR(191) NOT NULL,
    `telegramBotId` VARCHAR(191) NULL,
    `isDisabled` BOOLEAN NOT NULL DEFAULT false,
    `TariffStatus` ENUM('PREMIUM', 'FREE') NOT NULL DEFAULT 'FREE',

    UNIQUE INDEX `Bots_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `BotTgCommands` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `botId` INTEGER NOT NULL,
    `commandKey` VARCHAR(191) NOT NULL,
    `commandValue` TEXT NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `BotTgCommands_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `BotTgMenu` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `botId` INTEGER NOT NULL,
    `menuKey` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `BotTgMenu_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `BotTgCommands` ADD CONSTRAINT `BotTgCommands_botId_fkey` FOREIGN KEY (`botId`) REFERENCES `Bots`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BotTgMenu` ADD CONSTRAINT `BotTgMenu_botId_fkey` FOREIGN KEY (`botId`) REFERENCES `Bots`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

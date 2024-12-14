/*
  Warnings:

  - A unique constraint covering the columns `[telegramToken]` on the table `Bots` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Bots_telegramToken_key` ON `Bots`(`telegramToken`);

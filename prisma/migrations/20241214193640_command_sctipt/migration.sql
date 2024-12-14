/*
  Warnings:

  - You are about to drop the column `commandValue` on the `BotTgCommands` table. All the data in the column will be lost.
  - Added the required column `commandSctipt` to the `BotTgCommands` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `BotTgCommands` DROP COLUMN `commandValue`,
    ADD COLUMN `commandSctipt` JSON NOT NULL;

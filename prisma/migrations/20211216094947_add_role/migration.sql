/*
  Warnings:

  - You are about to drop the column `birthday` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `certif_id` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `firstname` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `lastname` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `level_id` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `user` DROP COLUMN `birthday`,
    DROP COLUMN `certif_id`,
    DROP COLUMN `firstname`,
    DROP COLUMN `lastname`,
    DROP COLUMN `level_id`,
    ADD COLUMN `role` VARCHAR(191) NOT NULL DEFAULT 'diver';

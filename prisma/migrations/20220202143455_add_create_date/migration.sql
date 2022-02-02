-- AlterTable
ALTER TABLE `article` ADD COLUMN `createDate` DATETIME(3) NULL,
    MODIFY `link` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(191) NOT NULL,
    `nama` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Surat` (
    `id` VARCHAR(191) NOT NULL,
    `subject` VARCHAR(191) NOT NULL,
    `isi` TEXT NULL,
    `kategori_surat` VARCHAR(191) NOT NULL,
    `status_baca` VARCHAR(191) NOT NULL DEFAULT 'belum dibaca',
    `pdf_file_path` VARCHAR(191) NULL,
    `pengirimId` VARCHAR(191) NOT NULL,
    `penerimaId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `Surat_pengirimId_idx`(`pengirimId`),
    INDEX `Surat_penerimaId_idx`(`penerimaId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Surat` ADD CONSTRAINT `Surat_pengirimId_fkey` FOREIGN KEY (`pengirimId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Surat` ADD CONSTRAINT `Surat_penerimaId_fkey` FOREIGN KEY (`penerimaId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

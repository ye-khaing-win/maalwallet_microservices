/*
  Warnings:

  - You are about to drop the column `network_name` on the `chains` table. All the data in the column will be lost.
  - You are about to drop the column `wss` on the `chains` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."chains" DROP COLUMN "network_name",
DROP COLUMN "wss";

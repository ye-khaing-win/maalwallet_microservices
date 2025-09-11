-- CreateEnum
CREATE TYPE "public"."ChainNamespace" AS ENUM ('EIP155', 'SOLANA');

-- CreateTable
CREATE TABLE "public"."chains" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),
    "name" TEXT NOT NULL,
    "chain_id" TEXT NOT NULL,
    "chain_namespace" "public"."ChainNamespace" NOT NULL DEFAULT 'EIP155',
    "rpc_url" TEXT NOT NULL,
    "display_name" TEXT,
    "explorer_url" TEXT,
    "ticker" TEXT,
    "ticker_name" TEXT,
    "published" BOOLEAN DEFAULT false,
    "display_order" INTEGER NOT NULL DEFAULT 0,
    "image_url" TEXT,

    CONSTRAINT "chains_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "chains_name_key" ON "public"."chains"("name");

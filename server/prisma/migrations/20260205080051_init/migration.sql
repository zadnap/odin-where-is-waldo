-- CreateTable
CREATE TABLE "maps" (
    "id" TEXT NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "slug" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,
    "width" INTEGER NOT NULL,
    "height" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "maps_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "characters" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "image_url" TEXT NOT NULL,
    "x_min" DECIMAL(5,4) NOT NULL,
    "x_max" DECIMAL(5,4) NOT NULL,
    "y_min" DECIMAL(5,4) NOT NULL,
    "y_max" DECIMAL(5,4) NOT NULL,
    "map_id" TEXT NOT NULL,

    CONSTRAINT "characters_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "games" (
    "id" TEXT NOT NULL,
    "started_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "finished_at" TIMESTAMP(3),
    "map_id" TEXT NOT NULL,

    CONSTRAINT "games_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "scores" (
    "id" TEXT NOT NULL,
    "player_name" VARCHAR(255) NOT NULL,
    "time_ms" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "gameId" TEXT NOT NULL,

    CONSTRAINT "scores_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "maps_slug_key" ON "maps"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "characters_map_id_name_key" ON "characters"("map_id", "name");

-- CreateIndex
CREATE UNIQUE INDEX "scores_gameId_key" ON "scores"("gameId");

-- CreateIndex
CREATE INDEX "scores_time_ms_idx" ON "scores"("time_ms");

-- AddForeignKey
ALTER TABLE "characters" ADD CONSTRAINT "characters_map_id_fkey" FOREIGN KEY ("map_id") REFERENCES "maps"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "games" ADD CONSTRAINT "games_map_id_fkey" FOREIGN KEY ("map_id") REFERENCES "maps"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "scores" ADD CONSTRAINT "scores_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "games"("id") ON DELETE CASCADE ON UPDATE CASCADE;

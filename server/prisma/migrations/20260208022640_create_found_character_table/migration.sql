-- CreateTable
CREATE TABLE "found_characters" (
    "id" TEXT NOT NULL,
    "found_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "game_id" TEXT NOT NULL,
    "character_id" TEXT NOT NULL,

    CONSTRAINT "found_characters_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "found_characters_game_id_character_id_key" ON "found_characters"("game_id", "character_id");

-- AddForeignKey
ALTER TABLE "found_characters" ADD CONSTRAINT "found_characters_game_id_fkey" FOREIGN KEY ("game_id") REFERENCES "games"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "found_characters" ADD CONSTRAINT "found_characters_character_id_fkey" FOREIGN KEY ("character_id") REFERENCES "characters"("id") ON DELETE CASCADE ON UPDATE CASCADE;

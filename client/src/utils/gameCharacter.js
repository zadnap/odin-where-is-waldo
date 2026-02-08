const getRemainingCharacters = (game) => {
  if (!game?.map?.characters) return [];

  const foundCharacterIds = new Set(
    (game.foundCharacters ?? []).map((fc) => fc.characterId)
  );

  return game.map.characters.filter(
    (character) => !foundCharacterIds.has(character.id)
  );
};

const getFoundCharacterIds = (game) => {
  const foundCharacterIds = new Set(
    game?.foundCharacters?.map((fc) => fc.characterId)
  );

  return foundCharacterIds;
};

export { getRemainingCharacters, getFoundCharacterIds };

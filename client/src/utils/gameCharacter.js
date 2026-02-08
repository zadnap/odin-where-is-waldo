const getRemainingCharacters = (game) => {
  if (!game?.map?.characters) return [];

  const foundCharacterIds = new Set(
    (game.foundCharacters ?? []).map((fc) => fc.id)
  );

  return game.map.characters.filter(
    (character) => !foundCharacterIds.has(character.id)
  );
};

const getFoundCharacterIds = (game) => {
  const foundCharacterIds = new Set(game?.foundCharacters?.map((fc) => fc.id));

  return foundCharacterIds;
};

export { getRemainingCharacters, getFoundCharacterIds };

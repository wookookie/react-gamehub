import { SimpleGrid, Text } from "@chakra-ui/react";
import { GameCard } from "./GameCard";
import { useGames } from "../hooks/useGames";

export function GameGrid() {
  const { games, error } = useGames();

  // columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} -> 화면 크기에 따른 열 표시 개수 지정
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={10} padding="10px">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
}

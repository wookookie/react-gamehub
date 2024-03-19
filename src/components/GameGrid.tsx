import { SimpleGrid, Text } from "@chakra-ui/react";
import { GameCard } from "./GameCard";
import { GameCardContainer } from "./GameCardContainer";
import { GameCardSkeleton } from "./GameCardSkeleton";
import { GameQuery } from "../App";
import { useGames } from "../hooks/useGames";

interface Props {
  gameQuery: GameQuery;
}

export function GameGrid({ gameQuery }: Props) {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];

  // columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} -> 화면 크기에 따른 열 표시 개수 지정
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={3} padding="10px">
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
}

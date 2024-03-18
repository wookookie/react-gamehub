import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { PlatformIconList } from "./PlatformIconList";
import { Game } from "../hooks/useGames";

interface Props {
  game: Game;
}

export function GameCard({ game }: Props) {
  // overflow="hidden" -> Card의 borderRadius를 이미지에 적용
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <PlatformIconList platforms={game.parent_platforms.map((p) => p.platform)} />
      </CardBody>
    </Card>
  );
}

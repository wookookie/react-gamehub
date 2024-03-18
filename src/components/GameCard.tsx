import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { CriticScore } from "./CriticScore";
import { PlatformIconList } from "./PlatformIconList";
import { Game } from "../hooks/useGames";
import { getCroppedImageUrl } from "../services/image-url";

interface Props {
  game: Game;
}

export function GameCard({ game }: Props) {
  // overflow="hidden" -> Card의 borderRadius를 이미지에 적용
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIconList platforms={game.parent_platforms.map((p) => p.platform)} />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
}

import { Button, HStack, Image, List, ListItem, Spinner } from "@chakra-ui/react";
import { Genre, useGenres } from "../hooks/useGenres";
import { getCroppedImageUrl } from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

export function GenreList({ onSelectGenre }: Props) {
  const { data, error, isLoading } = useGenres();

  if (error) return null; // 오류가 발생할 경우 리스트를 표시하지 않음
  if (isLoading) return <Spinner />;

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image boxSize="32px" borderRadius={8} src={getCroppedImageUrl(genre.image_background)} />
            <Button fontSize="lg" variant="link" onClick={() => onSelectGenre(genre)}>
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}

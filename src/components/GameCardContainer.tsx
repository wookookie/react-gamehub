/**
 * GameCard, GameCardSkeleton에 동일한 속성을 적용하기 위한 container
 */

import { ReactNode } from "react";
import { Box } from "@chakra-ui/react";

interface Props {
  children: ReactNode;
}

export function GameCardContainer({ children }: Props) {
  // overflow="hidden" -> Card의 borderRadius를 이미지에 적용
  return (
    <Box width="300px" borderRadius={10} overflow="hidden">
      {children}
    </Box>
  );
}

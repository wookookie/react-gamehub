import { Image, ImageProps } from "@chakra-ui/react";
import bullsEye from "../assets/bulls-eye.webp";
import meh from "../assets/meh.webp";
import thumbsUp from "../assets/thumbs-up.webp";

interface Props {
  rating: number;
}

export function Emoji({ rating }: Props) {
  // 점수가 3 이하일 경우 이모지를 표시하지 않음
  if (rating < 3) return null;

  // 점수에 따른 Image 속성 정의 객체
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumbsUp, alt: "recommended", boxSize: "25px" },
    5: { src: bullsEye, alt: "exceptional", boxSize: "35px" },
  };

  return <Image {...emojiMap[rating]} marginTop={1} />;
}

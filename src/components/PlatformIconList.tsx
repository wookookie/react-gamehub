import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { BsGlobe } from "react-icons/bs";
import { FaAndroid, FaApple, FaLinux, FaPlaystation, FaWindows, FaXbox } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { Platform } from "../hooks/useGames";

interface Props {
  platforms: Platform[];
}

export function PlatformIconList({ platforms }: Props) {
  // { [key: string]: IconType } -> TypeScript Index signiture
  const iconMap: { [key: string]: IconType } = {
    android: FaAndroid,
    ios: MdPhoneIphone,
    linux: FaLinux,
    mac: FaApple,
    nintendo: SiNintendo,
    pc: FaWindows,
    playstation: FaPlaystation,
    web: BsGlobe,
    xbox: FaXbox,
  };

  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon as={iconMap[platform.slug]} color="gray.500" />
      ))}
    </HStack>
  );
}
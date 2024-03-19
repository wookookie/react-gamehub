import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

export function ColorModeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();

  // whiteSpace="nowrap" -> 단어의 공백에 대한 줄 바꿈 방지
  return (
    <HStack>
      <Switch colorScheme="green" isChecked={colorMode === "dark"} onChange={toggleColorMode} />
      <Text whiteSpace="nowrap">Dark Mode</Text>
    </HStack>
  );
}

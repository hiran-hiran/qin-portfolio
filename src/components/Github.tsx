import { Box, Text } from "@mantine/core";
import { useCustomMediaQuery } from "src/libs/mantine";

export const Github = () => {
  const isPC = useCustomMediaQuery("sm");

  return (
    <Box mt={40} className={isPC ? "w-1/2" : "w-full"}>
      <Text size={26} weight={700} pb={20} mb={40} className="border-b">
        Github
      </Text>
      <p>Github</p>
    </Box>
  );
};

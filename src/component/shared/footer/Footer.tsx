import { Box, Text } from "@mantine/core";
import { FC } from "react";

export const Footer: FC = () => {
  return (
    <Box className="text-center mt-20 py-10">
      <Text className="text-gray-400 text-xs">&copy;2022 Qin Portfolio</Text>
    </Box>
  );
};

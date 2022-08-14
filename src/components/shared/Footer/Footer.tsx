import { Box, Container, Text } from "@mantine/core";
import { FC } from "react";

export const Footer: FC = () => {
  return (
    <Container size="md">
      <Box className="text-center mt-20 py-10 border-t">
        <Text className="text-gray-400 text-xs">&copy;2022 Qin Portfolio</Text>
      </Box>
    </Container>
  );
};

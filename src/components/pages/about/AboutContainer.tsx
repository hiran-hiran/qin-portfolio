import { Box, Text } from "@mantine/core";
import { FC } from "react";
import { PageTitle } from "src/components/shared/PageTitle";

type Props = {};

export const AboutContainer: FC<Props> = () => {
  return (
    <Box>
      <PageTitle text="About" />
      <Text size={22} weight={700} className="my-10">
        ほげほげ。
      </Text>
      <Text>ほげほげ。</Text>
    </Box>
  );
};

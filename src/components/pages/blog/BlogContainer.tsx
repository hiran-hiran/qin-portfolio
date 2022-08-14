import { Box, Text } from "@mantine/core";
import { FC } from "react";
import { PageTitle } from "src/components/shared/PageTitle";

type Props = {};

export const BlogContainer: FC<Props> = () => {
  return (
    <Box>
      <PageTitle text="Blog" />
    </Box>
  );
};

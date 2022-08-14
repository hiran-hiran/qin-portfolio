import { Box, Text } from "@mantine/core";
import { FC } from "react";

type Props = {
  text: string;
};

export const PageTitle: FC<Props> = (props) => {
  return (
    <Box className="border-b pb-5">
      <Text size={26} weight={700}>
        {props.text}
      </Text>
    </Box>
  );
};

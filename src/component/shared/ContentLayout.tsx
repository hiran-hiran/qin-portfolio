import { Button, Text } from "@mantine/core";
import { FC, ReactNode } from "react";
import { useMediaQuery } from "src/lib/mantine/useMediaQuery";

type Props = {
  title: string;
  buttonTitle: string;
  isHalf?: true;
  children: ReactNode;
};

export const ContentLayout: FC<Props> = (props) => {
  const largerThanSm = useMediaQuery("sm");

  return (
    <div className={props.isHalf && largerThanSm ? "mt-6 w-5/12" : "mt-6"}>
      <Text
        weight={700}
        size={26}
        className="py-6 mb-6 border-solid border-t-0 border-l-0 border-r-0 border-b-1 border-gray-100"
      >
        {props.title}
      </Text>

      <div>{props.children}</div>

      <Button
        color="dark"
        radius="xl"
        size="md"
        className="bg-gray-800 mt-10 flex m-auto"
      >
        {props.buttonTitle}
      </Button>
    </div>
  );
};

import { Text } from "@mantine/core";
import Image from "next/image";
import { FC } from "react";
import { PortfolioType } from "src/components/portfolio";
import { useCustomMediaQuery } from "src/libs/mantine";

export const PortfolioContent: FC<PortfolioType> = (props) => {
  const isPC = useCustomMediaQuery("xs");

  return (
    <div className="mt-6 max-w-xs m-auto">
      <Image
        src={props.image}
        alt="Portfolio"
        width={isPC ? 314 : 314 * 1.5}
        height={isPC ? 184 : 184 * 1.5}
      />
      <Text weight={700} size={22}>
        {props.title}
      </Text>
      <Text weight={500} size={16} className="mt-3">
        {props.description}
      </Text>
      <Text weight={700} size={12} className="mt-3 text-gray-400">
        {props.created_at}
      </Text>
    </div>
  );
};

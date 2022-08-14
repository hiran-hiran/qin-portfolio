import { Text } from "@mantine/core";
import { FC } from "react";
import { BlogType } from "src/components/blog";

export const BlogContent: FC<BlogType> = (props) => {
  return (
    <div className="mb-6">
      <Text weight={700} size={22}>
        {props.title}
      </Text>
      <Text weight={500} size={16}>
        {props.description}
      </Text>
      <Text weight={700} size={12} className="text-gray-400">
        {props.created_at}
      </Text>
    </div>
  );
};

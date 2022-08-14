import { Box, Button, Text } from "@mantine/core";
import { FC } from "react";
import { BlogContent, BlogType } from "src/components/blog";

const BlogData: Array<BlogType> = [
  {
    title: "This is Header",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ",
    created_at: "2022.7.11",
  },
  {
    title: "This is Header2",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ",
    created_at: "2022.7.11",
  },
  {
    title: "This is Header3",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ",
    created_at: "2022.7.11",
  },
  {
    title: "This is Header4",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ",
    created_at: "2022.7.11",
  },
  {
    title: "This is Header5",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ",
    created_at: "2022.7.11",
  },
];

export const Blog: FC = () => {
  return (
    <Box mt={40}>
      <Text size={26} weight={700} pb={20} mb={40} className="border-b">
        Blog
      </Text>
      {BlogData.map((blog, index) => {
        return (
          <BlogContent
            key={index}
            title={blog.title}
            description={blog.description}
            created_at={blog.created_at}
          />
        );
      })}
      <Button
        color="dark"
        radius="xl"
        size="md"
        className="block bg-gray-800"
        mt={40}
        mx="auto"
      >
        View
      </Button>
    </Box>
  );
};

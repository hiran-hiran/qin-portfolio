import { FC } from "react";
import { BlogContent, BlogType } from "src/component/blog";
import { ContentLayout } from "src/component/shared/ContentLayout";

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
    <ContentLayout title="Blog" buttonTitle="View All">
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
    </ContentLayout>
  );
};

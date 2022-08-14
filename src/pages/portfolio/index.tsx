import { Container } from "@mantine/core";
import { NextPage } from "next";
import { Layout } from "src/components/shared/Layout";
import { PageTitle } from "src/components/shared/PageTitle";

const Portfolio: NextPage = () => {
  return (
    <Layout title="Blog">
      <Container size="md">
        <PageTitle text="Portfolio" />
      </Container>
    </Layout>
  );
};

export default Portfolio;

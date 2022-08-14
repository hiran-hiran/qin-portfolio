import { Box, Button, Grid, Text } from "@mantine/core";
import { FC } from "react";
import { PortfolioContent, PortfolioType } from "src/components/portfolio";

const PortfolioData: Array<PortfolioType> = [
  {
    id: 1,
    image: "/dammy.png",
    title: "IT KINGDOM",
    description:
      "当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。",
    created_at: "2021.10 - 2021.12",
  },
  {
    id: 2,
    image: "/dammy.png",
    title: "IT KINGDOM",
    description:
      "当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。",
    created_at: "2021.10 - 2021.12",
  },
  {
    id: 3,
    image: "/dammy.png",
    title: "IT KINGDOM",
    description:
      "当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。",
    created_at: "2021.10 - 2021.12",
  },
];

export const Portfolio: FC = () => (
  <Box mt={80}>
    <Text size={26} weight={700} pb={20} mb={40} className="border-b">
      Portfolio
    </Text>
    <Grid justify="space-between">
      {PortfolioData.map((data) => {
        return (
          <Grid.Col xs={12} sm={6} md={6} lg={4} key={data.id}>
            <PortfolioContent
              id={data.id}
              image={data.image}
              title={data.title}
              description={data.description}
              created_at={data.created_at}
            />
          </Grid.Col>
        );
      })}
    </Grid>
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

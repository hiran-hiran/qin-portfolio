import { Box } from "@mantine/core";
import Head from "next/head";
import { FC, ReactNode } from "react";
import { Footer } from "src/components/shared/Footer";
import { Header } from "src/components/shared/Header";

type Props = {
  title: string;
  children: ReactNode;
};

export const Layout: FC<Props> = (props) => {
  return (
    <>
      <Head>
        <title>{props.title}</title>
      </Head>

      <Header />
      <Box>{props.children}</Box>
      <Footer />
    </>
  );
};

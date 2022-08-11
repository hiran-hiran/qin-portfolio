import Head from "next/head";
import { FC, ReactNode } from "react";
import { Footer } from "src/component/shared/footer";
import { Header } from "src/component/shared/header";

type Props = {
  children: ReactNode;
  title: string;
};

export const Layout: FC<Props> = (props) => {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <div className="flex flex-col h-screen">
        <Header />
        <div className="flex-1">{props.children}</div>
        <Footer />
      </div>
    </>
  );
};

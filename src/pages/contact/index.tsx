import { Button, Container, Input, Textarea } from "@mantine/core";
import { FC } from "react";
import { Layout } from "src/components/shared/Layout";
import { PageTitle } from "src/components/shared/PageTitle";

const Contact: FC = () => {
  return (
    <Layout title="contact">
      <Container size="md">
        <PageTitle text="Contact" />

        <Input.Wrapper id="email" label="Email" mt={20}>
          <Input id="email" placeholder="your@email.com" mt={10} />
        </Input.Wrapper>

        <Input.Wrapper id="name" label="Name" mt={20}>
          <Input id="name" placeholder="Taro Yamada" mt={10} />
        </Input.Wrapper>

        <Input.Wrapper id="message" label="Your message" mt={20}>
          <Textarea
            id="message"
            placeholder="I want to order your goods"
            mt={10}
          />
        </Input.Wrapper>

        <Button
          color="dark"
          radius="xl"
          size="md"
          className="block bg-gray-800"
          mt={40}
          mx="auto"
        >
          Send
        </Button>
      </Container>
    </Layout>
  );
};

export default Contact;

import { Container, Input, Textarea } from "@mantine/core";
import { FC } from "react";
import { ContentLayout } from "src/component/shared/ContentLayout";
import { Layout } from "src/component/shared/Layout";

const Contact: FC = () => {
  return (
    <Layout title="contact">
      <div className="">
        <Container>
          <ContentLayout title="Contact" buttonTitle="Send Message">
            <Input.Wrapper id="input-demo" label="Email" className="mt-6">
              <Input id="input-demo" placeholder="your@email.com" />
            </Input.Wrapper>
            <Input.Wrapper id="input-demo" label="Name" className="mt-6">
              <Input id="input-demo" placeholder="Taro Yamada" />
            </Input.Wrapper>
            <Textarea
              placeholder="I want to order your goods"
              label="Your message"
              className="mt-6"
            />
          </ContentLayout>
        </Container>
      </div>
    </Layout>
  );
};

export default Contact;

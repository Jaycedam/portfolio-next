import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface EmailTemplateProps {
  email: string;
  subject?: string;
  message: string;
}

const image: string = process.env.EMAIL_LOGO_URL as string;

export const EmailTemplate = ({
  email,
  message,
  subject,
}: EmailTemplateProps) => (
  <Html>
    <Head />
    <Preview>Nuevo email desde jordancortes.dev</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img style={logo} src={image} width={48} height={48} alt="logo" />
        <Heading style={heading}>Nuevo email desde jordancortes.dev</Heading>
        <Section style={body}>
          <Text style={paragraph}>
            <Link style={link} href={`mailto:${email}`}>
              Responder a {email}
            </Link>
          </Text>
        </Section>
        <Text style={paragraph}>
          Mensaje:
          <br />
          {message}
        </Text>
        <Hr style={hr} />
        <Text style={footer}>jordancortes.dev</Text>
      </Container>
    </Body>
  </Html>
);

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const logo = {
  borderRadius: "25%",
};

const container = {
  margin: "0 auto",
  padding: "20px 25px 48px",
  backgroundImage: 'url("/assets/raycast-bg.png")',
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat, no-repeat",
};

const heading = {
  fontSize: "28px",
  fontWeight: "bold",
  marginTop: "48px",
};

const body = {
  margin: "24px 0",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const link = {
  color: "#FF6363",
};

const hr = {
  borderColor: "#dddddd",
  marginTop: "48px",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  marginLeft: "4px",
};

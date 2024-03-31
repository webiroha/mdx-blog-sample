import { ReactNode } from "react";
import Header from "components/Header";
import Footer from "components/Footer";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

interface Props {
  children?: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <Wrapper>
      <Header />
      {children}
      <PageFooter />
    </Wrapper>
  );
};

export default Layout;

const loadingEffect = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Wrapper = styled.div`
  animation: ${loadingEffect} 2s ease;
`;

const PageFooter = styled(Footer)`
  padding: 60px 0;
`;

import { MDXProvider } from "@mdx-js/react";
import { MDXRemote } from "next-mdx-remote";
import { fontsize } from "styles/fontsize";
import styled from "@emotion/styled";
import { firaSansHeading } from "lib/fonts";
import hljs from "highlight.js/lib/core";
import typescript from "highlight.js/lib/languages/typescript";
import "highlight.js/styles/github.css";

hljs.registerLanguage("typescript", typescript);

interface Props {
  contents: any;
}

const MdxLayout = ({ contents }: Props) => {
  const title = contents.title;

  return (
    <MdxWrapper>
      <Header>
        <Border />
        <Title className={firaSansHeading.className}>{title}</Title>
      </Header>
      <Contents>
        <MDXProvider>
          <MDXRemote {...contents.content} components={components} />
        </MDXProvider>
      </Contents>
    </MdxWrapper>
  );
};

export default MdxLayout;

const MdxWrapper = styled.article``;

const Header = styled.header`
  margin-bottom: 8rem;
  position: relative;
`;

const Border = styled.div`
  border-top: 2px solid #121212;
  position: absolute;
  top: 50%;
  width: 100%;
`;

const Title = styled.h1`
  font-weight: normal;
  position: relative;
  margin-inline: auto;
  width: calc(100% - 4rem);
  max-width: 800px;
  padding: 4rem;
  border: 2px solid #121212;
  background: #fff;
`;

const Contents = styled.section`
  margin-inline: auto;
  width: calc(100% - 4rem);
  max-width: 800px;
`;

const CodeArea = styled.pre`
  padding: 4rem;
  background: #121212;
  color: #999999;
  ${fontsize(1.6)}
`;

const Paragraph = styled.p`
  margin: 0 0 0.5em;
  ${fontsize(1.8)}
`;

const H2 = styled.h2`
  margin: 6rem 0 1rem;
`;

const components = {
  h2: ({ children }: any) => <H2>{children}</H2>,
  pre: ({ children }: any) => <CodeArea>{children}</CodeArea>,
  code: ({ children }: any) => (
    <code
      dangerouslySetInnerHTML={{
        __html: hljs.highlight(children, {
          language: "typescript",
        }).value,
      }}
    />
  ),
  p: ({ children }: any) => <Paragraph>{children}</Paragraph>,
};

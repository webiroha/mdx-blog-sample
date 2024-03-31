import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import React from "react";
import Footer from "components/Footer";
import { getAllPosts } from "../lib/api";
import { fontsize } from "../styles/fontsize";
import { firaSansHeading } from "../lib/fonts";
import { NextSeo } from "next-seo";

type articleProps = {
  title: string;
  date: string;
  slug: string[];
};
type Props = {
  allPosts: articleProps[];
};

export default function Home({ allPosts }: Props) {
  return (
    <>
      <NextSeo
        title="mdx blog sample"
        description="This is a mdx blog sample."
      />
      <div>
        <HeaderCard>
          <Center>
            <Concept>Mdx blog sample</Concept>
          </Center>
        </HeaderCard>
        <main>
          <section>
            {allPosts.length > 0 && (
              <BlogLists>
                {allPosts.map((post, i) => {
                  return (
                    <BlogList key={i} className="list">
                      <a href={`/${post.slug}`}>
                        <Title className={firaSansHeading.className}>
                          {post.title}
                        </Title>
                      </a>
                    </BlogList>
                  );
                })}
              </BlogLists>
            )}
          </section>
        </main>
        <TopFooter />
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts(["title", "slug"]);

  return {
    props: { allPosts },
  };
};

const firstCard = keyframes`
  0% {
    transform: translateY(-100px);
    opacity: 0;
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const HeaderCard = styled.header`
  animation: ${firstCard} 1s ease;
  border: 2px solid #121212;
  height: 40%;
  margin: 2rem 2rem 0;
`;

const Center = styled.div`
  display: grid;
  place-content: center;
  height: calc(100vh - 60vh - 4rem - 2px);
`;

const Line = styled.span`
  border: 1px solid #121212;
`;

const Concept = styled.p`
  ${fontsize(1)}
  letter-spacing:0.3rem;
  text-align: center;
  margin: 0.5rem 0 1rem;
  font-weight: bold;
`;

const Design = styled.div`
  background: #121212;
  border-bottom: 2px solid #121212;
  margin-bottom: 4rem;
`;

const listCard = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    transform: translateY(-100px);
    opacity: 0;
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const BlogLists = styled.ul`
  display: grid;
`;

const BlogList = styled.li`
  border: solid #121212;
  background: #fff;
  height: 50vh;
  width: calc(100% - 4rem + 2px);
  bottom: 0;

  animation: ${listCard} 2s ease;

  &:nth-child(odd) {
    margin: -6rem 4rem 2rem -2px;
    border-width: 2px 2px 2px 0;
  }

  &:nth-child(even) {
    margin: -6rem -2px 2rem 4rem;
    border-width: 2px 0 2px 2px;
  }

  &:last-child {
    margin-bottom: 0;
  }

  > a {
    width: 100%;
    padding: 4rem;
    display: grid;
    width: 100%;
    place-content: center;
    height: 100%;
  }
`;

const Title = styled.h2`
  font-weight: normal;
  line-height: 1.5;
`;

const TopFooter = styled(Footer)`
  padding: 20px 0;
`;

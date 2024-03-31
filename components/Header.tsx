import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import styled from "@emotion/styled";

const Header = () => {
  const [scroll, setScroll] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScroll(position);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Area
      style={{
        height: `${scroll > 0 ? "60px" : "140px"}`,
        borderBottom: `${scroll > 0 ? "2px solid #121212" : "none"}`,
      }}
    >
      <Link href="/">mdx blog sample</Link>
    </Area>
  );
};

export default Header;

const Area = styled.header`
  position: sticky;
  top: 0;
  display: grid;
  place-content: center;
  justify-items: center;
  transition: height 0.5s;
  background: #fff;
  width: 100%;
  z-index: 1;
`;

const Explain = styled.h1`
  font-size: 0.8rem;
  font-weight: normal;
`;

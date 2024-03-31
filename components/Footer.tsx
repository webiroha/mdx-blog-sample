import styled from "@emotion/styled";

const Footer = ({ className }: any) => {
  return (
    <footer className={className}>
      <Copy>&copy; 2024 mdx blog sample</Copy>
    </footer>
  );
};

export default Footer;

const Copy = styled.small`
  display: grid;
  place-content: center;
`;

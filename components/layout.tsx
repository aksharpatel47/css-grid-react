import { StatelessComponent } from "react";
import Link from "next/link";
import styled from "react-emotion";
import Head from "next/head";

const Header = styled("div")`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  align-items: center;
  grid-gap: 10px;
`;

export const Layout: StatelessComponent<any> = ({ children }) => (
  <div style={{ width: "100%" }}>
    <Head>
      <title>React + CSS Grid</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Header>
      <Link href="/">
        <a>
          <h1>CSS Grid React</h1>
        </a>
      </Link>
      <Link href="/fundamentals">
        <a>Fundamentals</a>
      </Link>
      <Link href="/album-grid">
        <a>Album Grid</a>
      </Link>
    </Header>

    {children}
  </div>
);

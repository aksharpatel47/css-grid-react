import styled from "react-emotion";
import { Album } from "./album";

export const StyledAlbums = styled("div")`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  background: peachpuff;
  grid-gap: 20px;
  font-family: sans-serif;
  padding: 1rem;
  width: 100%;
  box-sizing: border-box;
`;

export const Albums = () => {
  const count = new Array(20).fill(0);
  const items = count.map((a, i) => {
    return <Album i={i} key={i} />;
  });

  return <StyledAlbums>{items}</StyledAlbums>;
};

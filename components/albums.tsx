import styled from "react-emotion";
import { Album } from "./album";

export const StyledAlbums = styled("div")`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  background: peachpuff;
  grid-gap: 20px;
  font-family: sans-serif;
`;

export const Albums = () => {
  const count = new Array(20).fill(0);
  const items = count.map((a, i) => {
    return <Album i={i} key={i} />;
  });

  return (
    <StyledAlbums>
      {items}
      <h2>Hello World</h2>
    </StyledAlbums>
  );
};

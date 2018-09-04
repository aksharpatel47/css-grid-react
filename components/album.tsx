import styled from "react-emotion";
import { AlbumImage } from "./album-artwork";
import { StatelessComponent } from "react";
import { AlbumDetail } from "./album-details";

const StyledAlbum = styled("div")`
  background: rgba(255, 255, 255, 0.2);
  padding: 1rem;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-gap: 10px;
  align-items: center;
`;

interface IAlbum {
  i: number;
}

export const Album: StatelessComponent<IAlbum> = ({ i }) => {
  const url = `https://source.unsplash.com/random/300x300?v=${i}`;
  return (
    <StyledAlbum>
      <AlbumImage src={url} />
      <AlbumDetail />
    </StyledAlbum>
  );
};

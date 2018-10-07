import styled from "react-emotion";
import { css } from "emotion";
const StyledAlbumDetail = styled("div")`
  word-wrap: break-word;
`;
const artistNameCSS = css``;
const artistDescriptionCSS = css``;

export const AlbumDetail = () => {
  return (
    <StyledAlbumDetail>
      <h2>Album Title</h2>
      <p className={artistNameCSS}>Artist Name</p>
      <p className={artistDescriptionCSS}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni nesciunt
        iure unde quibusdam iste soluta rem impedit? Non enim, assumenda beatae
        vitae fugiat quam repudiandae ipsam possimus eum tempora? Officiis?
      </p>
    </StyledAlbumDetail>
  );
};

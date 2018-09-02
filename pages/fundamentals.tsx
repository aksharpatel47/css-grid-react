import { css } from "emotion";

const container = css`
  display: grid;
  border: solid black;
  grid-template-columns: repeat(5, 1fr 2fr);
  grid-template-rows: repeat(10, 50px);
  grid-gap: 20px;
  background-color: slateblue;
`;

const item = css`
  background-color: white;
  text-align: center;
  padding: 1rem;
  background-color: yellow;
`;

const item1 = css`
  grid-column: 3 / 5;
`;

const item2 = css`
  grid-column: 5 / -1;
`;

const item5 = css`
  grid-column: span 2;
  grid-row: span 2;
`;

const item8 = css`
  grid-row: span 2;
`;

const item15 = css`
  grid-column: 1 / -1;
`;

const item18 = css`
  grid-column: span 4 / 9;
`;

const item20 = css`
  grid-row: 4 / span 3;
`;

function fundamentalsPage() {
  return (
    <div className={container}>
      <div className={`${item} ${item1}`}>1</div>
      <div className={`${item} ${item2}`}>2</div>
      <div className={item}>3</div>
      <div className={item}>4</div>
      <div className={`${item} ${item5}`}>5</div>
      <div className={item}>6</div>
      <div className={item}>7</div>
      <div className={`${item} ${item8}`}>8</div>
      <div className={item}>9</div>
      <div className={item}>10</div>
      <div className={item}>11</div>
      <div className={item}>12</div>
      <div className={item}>13</div>
      <div className={item}>14</div>
      <div className={`${item} ${item15}`}>15</div>
      <div className={item}>16</div>
      <div className={item}>17</div>
      <div className={`${item} ${item18}`}>18</div>
      <div className={item}>19</div>
      <div className={`${item} ${item20}`}>20</div>
      <div className={item}>21</div>
      <div className={item}>22</div>
      <div className={item}>23</div>
      <div className={item}>24</div>
      <div className={item}>25</div>
      <div className={item}>26</div>
      <div className={item}>27</div>
      <div className={item}>28</div>
      <div className={item}>29</div>
      <div className={item}>30</div>
    </div>
  );
}

export default fundamentalsPage;

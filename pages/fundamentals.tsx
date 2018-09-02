import { css } from "emotion";

const container = css`
  display: grid;
  border: solid black;
  grid-template-columns: repeat(5, 1fr 2fr);
  grid-gap: 20px;
  background-color: slateblue;
`;

const item = css`
  background-color: white;
  text-align: center;
  padding: 1rem;
  background-color: yellow;
`;

function fundamentalsPage() {
  return (
    <div className={container}>
      <div className={item}>1</div>
      <div className={item}>2</div>
      <div className={item}>3</div>
      <div className={item}>4</div>
      <div className={item}>5</div>
      <div className={item}>6</div>
      <div className={item}>7</div>
      <div className={item}>8</div>
      <div className={item}>9</div>
      <div className={item}>10</div>
      <div className={item}>11</div>
      <div className={item}>12</div>
      <div className={item}>13</div>
      <div className={item}>14</div>
      <div className={item}>15</div>
      <div className={item}>16</div>
      <div className={item}>17</div>
      <div className={item}>18</div>
      <div className={item}>19</div>
      <div className={item}>20</div>
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

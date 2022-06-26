import StartMenu from "../Menus/Start";
import styled from "styled-components";
const Desktop: React.FC = () => {
  return (
    <Container>
      <StartMenu />
      <div className="short_cuts">
        <div className="short_cut">
          <img width={32} height={32} src="./computer_explorer-3.png" alt="" />
          <p>A propos</p>
        </div>
        <div className="short_cut">
          <img width={32} height={32} src="./computer_explorer-3.png" alt="" />
          <p>A propos</p>
        </div>
        <div className="short_cut">
          <img width={32} height={32} src="./computer_explorer-3.png" alt="" />
          <p>A propos</p>
        </div>
        <div className="short_cut">
          <img width={32} height={32} src="./computer_explorer-3.png" alt="" />
          <p>A propos</p>
        </div>
      </div>
    </Container>
  );
};
const Container = styled.div`
  flex: 1;
  background-color: #018281;
  position: relative;
  .short_cuts {
    display: flex;
    flex-wrap: wrap;
    width: 12%;

    .short_cut {
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 20px;

      img {
      }
      p {
        margin-top: 8px;
        font-family: "Win98";
        color: #fff;
      }
    }
  }
`;
export default Desktop;
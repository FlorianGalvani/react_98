import styled from "styled-components";

const StartButton: React.FC = () => {
  const openMenu = () => {
    console.log("Hello");
  };
  return (
    <Button onClick={openMenu}>
      <img src="/w98_Startup_logo.png" width={16} height={16}></img>
      <p>Démarrer</p>
    </Button>
  );
};

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #fff;
  border-right: 1px solid #575757;
  border-bottom: 1px solid #575757;
  border-left: 1px solid #fff;
  box-shadow: 1px 1px 0 #000;
  padding: 6px 4px;
  background-color: #818181;
  &:focus {
    box-shadow: inset 1px 1px 0 #000;
    border-top: 1px solid #575757;
    border-right: 1px solid #fff;
    border-bottom: 1px solid #fff;
    border-left: 1px solid #575757;
  }
  img {
    user-select: none;
  }
  p {
    margin-left: 4px;
    font-size: 15px;
    user-select: none;
    font-family: "Win98";
  }
`;

export default StartButton;

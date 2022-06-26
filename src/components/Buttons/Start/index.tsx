import "./style.css";

const Start: React.FC = () => {
  const openMenu = () => {
    console.log("Hello");
  };
  return (
    <button className="start_button" onClick={openMenu}>
      <img src="/w98_Startup_logo.png" width={16} height={16}></img>
      <p>Démarrer</p>
    </button>
  );
};

export default Start;

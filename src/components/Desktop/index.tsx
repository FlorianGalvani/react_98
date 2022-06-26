import StartMenu from "../Menus/Start";
import "./style.css";

const Desktop: React.FC = () => {
  return (
    <div className="desktop">
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
    </div>
  );
};

export default Desktop;

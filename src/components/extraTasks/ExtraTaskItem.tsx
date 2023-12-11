import "./ExtraTaskItem.css";
// TEMP IMPORT REMOVE LATER

const ExtraTaskItem = () => {
  return (
    <div className="big-container">
      <div className="time-container">
        <div className="start-time">
            10:10
        </div>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <div className="end-time">10:30</div>
      </div>

      <div className="folder-container">
        <div className="upper-part">
          <div className="tab"></div>
          <div className="progression-bar"></div>
        </div>
        <div className="folder"></div>
      </div>
    </div>
  );
};

export default ExtraTaskItem;

export default function Tabs({ activeTab, setActiveTab }) {
  return (
    <>
      <button
        className={activeTab == "timer" ? "active" : ""}
        onClick={() => setActiveTab("timer")}
      >
        Timer
      </button>
      <button
        className={activeTab == "stopwatch" ? "active" : ""}
        onClick={() => setActiveTab("stopwatch")}
      >
        Stopwatch
      </button>
    </>
  );
}

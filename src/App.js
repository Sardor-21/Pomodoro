import Pomodoro from "./Pomodoro/Pomodoro";

function App() {
  return (
    <div className="App">
      <Pomodoro workTime={35} restTime={5} />
    </div>
  );
}

export default App;

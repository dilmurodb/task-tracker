import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Grociery store",
      day: "Feb 7th at 3pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Interview prep",
      day: "April 10th at 4pm",
      reminder: false,
    },
    {
      id: 3,
      text: "Zoom meeting",
      day: "November 15th at 5pm",
      reminder: true,
    },
  ]);
  return (
    <div className="container">
      <Header title="Task Tracker" />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import useHttp from "./hooks/useHttp";

function App() {
  const [tasks, setTasks] = useState([]);

  const { isLoading, error, sendRequest: fetchTasks } = useHttp();

  useEffect(() => {
    const transformTasks = (taskObj) => {
      const loadedTasks = [];
      for (const taskKey in taskObj) {
        loadedTasks.push({ id: taskKey, text: taskObj[taskKey].text });
      }
      setTasks(loadedTasks);
    };
    fetchTasks(
      { url: "https://react-db-9f00d-default-rtdb.firebaseio.com/tasks.json" },
      transformTasks
    );
  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    console.log('Task: ', task);
    setTasks(prevTasks => {
      const newTasks = prevTasks.concat(task);
      return newTasks;
    });
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;

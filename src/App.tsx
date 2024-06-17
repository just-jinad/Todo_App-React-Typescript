import { useEffect, useState } from "react";
import { dummyData } from "./data/todo";
import TodoEditForm from "./components/addTodoForm";
import TodoList from "./components/TodoList";
import AddSummary from "./components/AddSummary";
import { Todo } from "./types/todo";
function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos: Todo[] = JSON.parse(localStorage.getItem("todo") || "[]");
    return savedTodos.length > 0 ? savedTodos : dummyData;
  });

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todos));
  }, [todos]);

  function setTodoCompleted(id: number, completed: boolean) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, completed } : todo))
    );
    // alert(`Todo with id ${id} is now ${completed ? "completed" : "not completed"}`)
  }

  const addTodo = (title: string) => {
    setTodos((prevTodos) => [
      {
        id: Date.now(),
        title,
        completed: false,
      },
      ...prevTodos,
    ]);
  };

  const onDeleted = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const removeAllCompleted = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed));
  };
  return (
    <>
      <main className="py-10 bg-red-100 h-screen space-y-5 overflow-y-auto">
        <h3 className="font-bold text-center text-3xl">Your Todos</h3>
        <div className="max-w-lg bg-white p-5 rounded-xl  mx-auto">
          <TodoEditForm onSubmit={addTodo} />
          <TodoList
            todos={todos}
            onCompletedChange={setTodoCompleted}
            onDelete={onDeleted}
          />
        </div>
        <AddSummary todos={todos} deleteAllCompleted={removeAllCompleted} />
      </main>
    </>
  );
}

export default App;

import { Todo } from "../types/todo";

interface TodoSummary {
  todos: Todo[];
  deleteAllCompleted: () => void;
}

const AddSummary = ({ todos, deleteAllCompleted }: TodoSummary) => {
  const completedTodos = todos.filter((todo) => todo.completed);
  return (
    <>
      <div className="text-center space-y-2">
        <p>
          {completedTodos.length}/{todos.length} todo completed
        </p>
        {completedTodos.length > 0 && (
          <button
            onClick={deleteAllCompleted}
            className="text-red-400 hover:underline text-sm"
          >
            Delete All Completed
          </button>
        )}
      </div>
    </>
  );
};

export default AddSummary;

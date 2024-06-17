
import TodoItem from './todoItem' 
import { Todo } from '../types/todo'

interface TodoListProps {
    todos: Todo[],
    onCompletedChange: (id:number, completed:boolean)=> void
    onDelete: (id: number)=> void
} 

const TodoList = ({todos, onCompletedChange, onDelete}:TodoListProps) => {
    const TodoAssorted = todos.sort((a,b)=>{
        if(a.completed === b.completed){
            return b.id - a.id
        }
        return a.completed? 1 : -1
    })
  return (
   <>
    <div className="space-y-3 ">
            {TodoAssorted.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onCompletedChange={onCompletedChange}
                onDelete={onDelete  }
              />
              // <p className="" key={todo.id}>
              //   {todo.title}

              //   </p>
            ))}
          </div>

          {todos.length === 0 &&(
            <p className='text-center text-xl text-gray-700'>
                No Todo Added yet, ad
            </p>
          )}
   </>
  )
}

export default TodoList
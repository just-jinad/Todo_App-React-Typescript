import { useState } from "react";
interface TodoEditFormProps {
    onSubmit: (title:string) => void
}

const TodoEditForm = ({onSubmit} :TodoEditFormProps) => {
    const [input, setInput] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();

        if (!input.trim()) return;
        onSubmit(input)
        setInput("")
    }

  return (
    <form action="" onSubmit={handleSubmit}>
      <input
        className="border border-black mb-3 rounded-s  p-2  "
        placeholder="Enter your todo 😊"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" className="w-16 bg-slate-600 p-2 rounded-e-md hover:bg-pink-800">
        Add
      </button>
    </form>
  );
};

export default TodoEditForm;

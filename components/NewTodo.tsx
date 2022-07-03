import { useRef, useContext } from "react"
import { TodosContext } from "../store/todos-context"

const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext)
  const todoTextInputRef = useRef<HTMLInputElement>(null)
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault()

    const enteredText = todoTextInputRef.current!.value

    if (enteredText.trim().length === 0) {
      return
    }
    todosCtx.addTodo(enteredText)
  }

  return (
    <form className="flex flex-col gap-3 " onSubmit={submitHandler}>
      <label className="text-lg font-semibold" htmlFor="text">
        Todo text
      </label>
      <input
        type="text"
        id="text"
        ref={todoTextInputRef}
        className="p-1 rounded-sm bg-stone-300"
      />
      <button className="px-4 py-1 rounded w-36 bg-amber-400">Add Todo</button>
    </form>
  )
}
export default NewTodo

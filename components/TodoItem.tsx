import React from "react"
import { AiOutlineDelete } from "react-icons/ai"

const TodoItem: React.FC<{
  text: string
  onRemoveTodo: (event: React.MouseEvent) => void
}> = (props) => {
  return (
    <li className="flex justify-between gap-3 ">
      <div className="w-[100%] bg-stone-300 p-1 flow break-words rounded-sm shadow-md text-ellipsis">
        {props.text}
      </div>
      <div
        onClick={props.onRemoveTodo}
        className="grid w-10 place-content-center"
      >
        <AiOutlineDelete />
      </div>
    </li>
  )
}

export default TodoItem

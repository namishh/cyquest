import { toast } from 'react-toastify';
import { useState } from 'react';

const Todo = () => {
  const [todo, setTodo] = useState([
    {
      task: "game night with homie atharva",
      completed: true
    },
    {
      task: "bookstore visit",
      completed: true,
    },
    {
      task: "atharva summary note",
      completed: true,
    },
    {
      task: "groceries",
      completed: false
    },
    {
      task: "talk to maya",
      completed: true
    }
  ])
  const [input, setInput] = useState("")
  const handle = (e) => {
    e.preventDefault()
    setTodo([...todo, { task: input, completed: false }])
    toast("Remember that adding todos wont do anything for progress, it is just for more completeness of the Operating System")
    setInput("")
  }
  const toggle = (i) => {
    const newState = !i.completed
    const newArr = todo.filter(a => a.task !== i.task)
    const n = { task: i.task, completed: newState }
    console.log(n)
    setTodo([...newArr, { task: i.task, completed: newState }])
  }
  const remove = (i) => {
    const newArr = todo.filter(a => a.task !== i.task)
    setTodo(newArr)
  }
  return <div className="todo p-8 min-h-[30rem]">
    <form action="#" onSubmit={handle}>
      <input className='bg-[#111] p-4 w-[30rem] h-[4rem] outline-none mb-4' type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      {todo.map((i, j) => {
        return <div className="p-2 flex justify-between" key={j}>
          <p className={`text-xl ${i.completed && "line-through"}`}>{i.task}</p>
          <div className="flex gap-4">
            <p onClick={() => toggle(i)} className='cursor-pointer'>✔️</p>
            <p onClick={() => remove(i)} className='cursor-pointer'>❌</p>
          </div>
        </div>
      })}
    </form>
  </div>
}

export default Todo

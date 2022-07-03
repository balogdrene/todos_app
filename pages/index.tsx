import type { NextPage } from "next"

import Head from "next/head"

import NewTodo from "../components/NewTodo"
import Todos from "../components/Todos"

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center min-h-screen ">
      <Head>
        <title>Todo App</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main>
        <div className="flex flex-col w-screen max-w-3xl gap-10 p-5 rounded-sm shadow-md bg-slate-200">
          <NewTodo />
          <Todos />
        </div>
      </main>
    </div>
  )
}

export default Home

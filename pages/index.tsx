import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import Todos from "../components/Todos"
import Todo from "../models/todo"

const Home: NextPage = () => {
  const todos = [new Todo("Learn React"), new Todo("Learn TypeScript")]
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Todo App</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Todos items={todos} />
    </div>
  )
}

export default Home

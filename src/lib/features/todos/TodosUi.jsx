"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { errorTodos, getTodos, successTodos } from "./todosSlice";
import axios from "axios";

export default function TodosUi() {
  const { todos, isLoading, error } = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTodos());
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        dispatch(successTodos(res.data));
      })
      .catch((error) => {
        dispatch(errorTodos(error.message));
      });
  }, []);
  console.log(todos);

  return (
    <div className=" container mx-auto py-10">
      <h1 className=" text-3xl font-bold text-center pb-8">Todos RTK</h1>
      <div className=" grid grid-cols-12 gap-6">
        {isLoading && (
          <div className=" col-span-12 lg:col-span-4 2xl:col-span-3 border shadow-md rounded-sm overflow-hidden">
            <h4 className=" text-center bg-gray-500 px-6 py-2 text-white font-bold">
              State
            </h4>
            <p className=" text-center px-6 py-3">Loading...</p>
          </div>
        )}
        {error && (
          <div className=" col-span-12 lg:col-span-4 2xl:col-span-3 border shadow-md rounded-sm overflow-hidden">
            <h4 className=" text-center bg-gray-500 px-6 py-2 text-white font-bold">
              State
            </h4>
            <p className=" text-center px-6 py-3">{error.message}</p>
          </div>
        )}
        {todos &&
          todos.map((todo) => (
            <div
              key={todo.id}
              className=" col-span-12 lg:col-span-4 2xl:col-span-3 border shadow-md rounded-sm overflow-hidden"
            >
              <h4 className=" text-center bg-gray-500 px-6 py-2 text-white font-bold">
                {todo.id}
              </h4>

              <p className=" text-center px-6 py-3">{todo.title}</p>
            </div>
          ))}
      </div>
      <footer className=" flex gap-5 justify-center pt-8">
        <Link
          href="/"
          className=" hover:underline hover:text-red-500 transition-all duration-300"
        >
          Home
        </Link>
        <Link
          href="/counter"
          className=" hover:underline hover:text-red-500 transition-all duration-300"
        >
          Counter
        </Link>
      </footer>
    </div>
  );
}

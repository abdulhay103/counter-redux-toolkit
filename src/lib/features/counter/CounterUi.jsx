"use client";

import { useDispatch, useSelector } from "react-redux";
import { decrement, increaseByValue, increment, reset } from "./counterSlice";
import Link from "next/link";

export default function CounterUi() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className=" container mx-auto">
      <div className=" w-full min-h-screen flex justify-center items-center">
        <div className=" w-2/5 rounded-lg shadow-md py-5 px-10 border">
          <h1 className=" text-center text-2xl font-bold py-5">Counter RTK</h1>
          <div className="px-5 py-2 bg-emerald-50 rounded-md border shadow-inner ">
            <p className=" text-right">{count}</p>
          </div>
          <div className=" flex justify-around py-5">
            <button
              onClick={() => dispatch(increment())}
              className=" px-5 py-2 bg-stone-600 rounded text-white "
            >
              Increment
            </button>
            <button
              onClick={() => dispatch(reset())}
              className=" px-5 py-2 bg-red-600 rounded text-white "
            >
              Reset
            </button>
            <button
              onClick={() => dispatch(decrement())}
              className=" px-5 py-2 bg-stone-600 rounded text-white "
            >
              Decrement
            </button>
            <button
              onClick={() => dispatch(increaseByValue(5))}
              className=" px-5 py-2 bg-stone-600 rounded text-white "
            >
              + 5
            </button>
          </div>
          <footer className=" flex gap-5 justify-center pt-8">
            <Link
              href="/"
              className=" hover:underline hover:text-red-500 transition-all duration-300"
            >
              Home
            </Link>
            <Link
              href="/todos"
              className=" hover:underline hover:text-red-500 transition-all duration-300"
            >
              Todos
            </Link>
          </footer>
        </div>
      </div>
    </div>
  );
}

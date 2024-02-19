import CounterUi from "@/lib/features/counter/CounterUi";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div className=" container mx-auto">
      <div className=" w-full min-h-screen outline-offset-0 flex justify-center items-center">
        <div className="border rounded shadow-lg overflow-hidden">
          <h1 className=" bg-lime-500 text-white text-xl font-bold px-6 py-3">
            Wellcome to RTK Analysis Point
          </h1>
          <div className=" flex justify-around py-10">
            <Link
              href="/counter"
              className="px-5 py-2 bg-blue-500 border-2 border-blue-500 rounded-md text-white text-lg font-bold hover:bg-white hover:text-blue-500 transition-all duration-300"
            >
              Counter
            </Link>
            <Link
              href="/todos"
              className="px-5 py-2 bg-blue-500 border-2 border-blue-500 rounded-md text-white text-lg font-bold hover:bg-white hover:text-blue-500 transition-all duration-300"
            >
              Todos
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

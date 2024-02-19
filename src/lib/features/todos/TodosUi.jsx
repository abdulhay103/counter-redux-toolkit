import Link from "next/link";
import React from "react";

export default function TodosUi() {
  return (
    <div className=" container mx-auto">
      <div className=" w-full min-h-screen flex justify-center items-center">
        <div className=" w-2/5 rounded-lg shadow-md py-5 px-10 border">
          <h1 className=" text-center text-2xl font-bold py-5">Todos RTK</h1>
          <div className="px-5 py-2 bg-emerald-50 rounded-md border shadow-inner ">
            <p className=" text-right">0</p>
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
      </div>
    </div>
  );
}

"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./postSlice";

export default function PostUi() {
  const { isLoading, posts, error } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div className=" container mx-auto py-10">
      <h1 className=" text-3xl font-bold text-center pb-8">Post Advance RTK</h1>
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
            <p className=" text-center px-6 py-3">eroro</p>
          </div>
        )}
        {posts &&
          posts.map((post) => (
            <div
              key={post.id}
              className=" col-span-12 lg:col-span-4 2xl:col-span-3 border shadow-md rounded-sm overflow-hidden"
            >
              <h4 className=" text-center bg-gray-500 px-6 py-2 text-white font-bold">
                {post.title}
              </h4>

              <p className=" px-6 py-3 text-justify">{post.body}</p>
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
        <Link
          href="/todos"
          className=" hover:underline hover:text-red-500 transition-all duration-300"
        >
          Todos
        </Link>
      </footer>
    </div>
  );
}

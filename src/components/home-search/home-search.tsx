"use client";

import { ChangeEvent, FormEvent, useState } from "react";

import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
import { twMerge } from "tailwind-merge";
import { useRouter } from "next/navigation";

export const HomeSearch = () => {
  const [input, setInput] = useState("");
  const [randomSearchLoading, setRandomSearchLoading] = useState(false);
  const router = useRouter();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) return;
    router.push(`/search/web?searchTerm=${input}`);
  };

  const handleButtonSubmit = (e: any) => {
    e.preventDefault();
    if (!input.trim()) return;
    router.push(`/search/web?searchTerm=${input}`);
  };

  const handleInputClick = (e: ChangeEvent<HTMLInputElement>) =>
    setInput(e.target.value);

  const randomSearch = async () => {
    setRandomSearchLoading(true);
    const resp = await fetch("https://random-word-api.herokuapp.com/word");
    const data = await resp.json();
    const search = data[0];

    if (!search) return;
    router.push(`/search/web?searchTerm=${search}`);
    setRandomSearchLoading(false);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className={twMerge(
          "flex w-full mt-5 mx-auto max-w-[90%]",
          "border border-gray-200 px-5 py-3 rounded-full hover:shadow-md focus-within:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl"
        )}
      >
        <AiOutlineSearch className="text-xl text-gray-500 mr-3" />
        <input
          type="text"
          className="flex-grow focus:outline-none"
          onChange={handleInputClick}
        />
        <BsFillMicFill className="text-lg" />
      </form>
      <div className="flex flex-col space-y-2 sm:space-y-0 justify-center sm:flex-row mt-8 sm:space-x-4">
        <button
          className={twMerge(
            "w-36 h-10",
            "bg-[#f8f9fa] rounded-md text-sm text-gray-800 hover:ring-gray-200",
            "focus:outline-none active:ring-gray-300 hover:shadow-md transition-shadow"
          )}
          onClick={handleButtonSubmit}
        >
          Google Search
        </button>
        <button
          disabled={randomSearchLoading}
          className={twMerge(
            "w-36 h-10",
            "bg-[#f8f9fa] rounded-md text-sm text-gray-800 hover:ring-gray-200",
            "focus:outline-none active:ring-gray-300 hover:shadow-md transition-shadow disabled:opacity-80 disabled:shadow-sm"
          )}
          onClick={randomSearch}
        >
          {randomSearchLoading ? "Loading..." : "I am feeling lucky"}
        </button>
      </div>
    </>
  );
};

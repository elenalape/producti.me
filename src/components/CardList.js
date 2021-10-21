import { useState } from "react";

import { PlusIcon } from "@heroicons/react/outline";

import TimeCard from "./TimeCard";

const CardList = () => {
  const [{ cards }, setCards] = useState({ cards: [] });
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleNameChange = (e) => setName(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);

  const addCard = () => {
    cards.unshift(
      <div key={cards.length}>
        <TimeCard name={name} description={description} />
      </div>
    );
    setCards({ cards: [...cards] });
    setName("");
    setDescription("");
    console.log(cards);
  };

  return (
    <div>
      <div className="md:flex md:items-stretch">
        <div className="flex-none h-10 w-25 my-3 md:mx-5 md:my-0">
          <input
            placeholder="Task"
            type="text"
            value={name}
            onChange={handleNameChange}
            className="bg-white shadow-md rounded px-2 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-600"
          ></input>
        </div>
        <div className="flex-grow mr-10">
          <input
            placeholder="Description (optional)"
            type="text"
            value={description}
            onChange={handleDescriptionChange}
            className="bg-white shadow-md rounded px-2 py-2 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-purple-600"
          ></input>
        </div>
        <div className="flex-none mr-5">
          <PlusIcon
            className="h-10 w-10 text-purple-600 hover:text-purple-400 text-center"
            onClick={addCard}
          />
        </div>
      </div>
      <div className="mt-10 flex flex-col gap-5">{cards}</div>
    </div>
  );
};

export default CardList;

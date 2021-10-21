import { useState, useEffect, useContext } from "react";
import userContext from "./userContext";

import { PlayIcon } from "@heroicons/react/outline";
import { StopIcon } from "@heroicons/react/outline";
import { PauseIcon } from "@heroicons/react/outline";
import { TrashIcon } from "@heroicons/react/outline";

const TimeCard = ({ name, description }) => {
  const [time, setTime] = useState(0);

  const [start, setStart] = useState(false);
  const [ended, setEnded] = useState(false);

  const [deleted, setDeleted] = useState(false);

  const { activeTimer, setActiveTimer } = useContext(userContext);

  useEffect(() => {
    let interval = null;
    if (start) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1000);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [start]);

  if (deleted === true) {
    return null;
  }

  const handleStop = () => {
    if (start === false) {
      setEnded(true);
    } else if (start === true) {
      setStart(false);
      setEnded(true);
      setActiveTimer(false);
    }
  };

  if (ended) {
    return (
      <div className="p-6 max-w-3xl mx-auto bg-white rounded-xl shadow-md grid grid-cols-12 space-x-4 bg-gray-900">
        <div className="col-span-8">
          <div>
            <div className="text-xl font-medium text-gray-300">
              {name === "" ? "Untitled" : name}
            </div>
            <p className="text-gray-500">
              {description === "" ? "..." : description}
            </p>
          </div>
        </div>
        <div className="col-span-3">
          <div className="text-center text-gray-100 text-xl italic">
            <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}</span>
            <span>:</span>
            <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
          </div>
        </div>
        <div className="col-span-1">
          <TrashIcon
            className="h-6 w-6 text-gray-400 hover:text-white"
            onClick={() => setDeleted(true)}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded-xl shadow-md grid grid-cols-12 space-x-4 bg-gray-900">
      <div className="col-span-8">
        <div>
          <div className="text-xl font-medium text-gray-300">
            {name === "" ? "Untitled" : name}
          </div>
          <p className="text-gray-500">
            {description === "" ? "..." : description}
          </p>
        </div>
      </div>
      <div className="col-span-3">
        <div className="text-center text-gray-100 text-xl">
          <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}</span>
          <span>:</span>
          <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
        </div>
      </div>
      <div className="col-span-1">
        {start === false && activeTimer === false ? (
          <PlayIcon
            className="h-6 w-6 mb-2 text-green-500 hover:text-green-900"
            onClick={() => {
              setStart(true);
              setActiveTimer(true);
            }}
          />
        ) : start === true && activeTimer === true ? (
          <PauseIcon
            className="h-6 w-6 mb-2 text-yellow-500 hover:text-yellow-700"
            onClick={() => {
              setStart(false);
              setActiveTimer(false);
            }}
          />
        ) : null}
        <StopIcon
          className="h-6 w-6 mb-2 text-red-600 hover:text-red-800"
          onClick={() => {
            handleStop();
          }}
        />
        <TrashIcon
          className="h-6 w-6 text-gray-400"
          onClick={() => setDeleted(true)}
        />
      </div>
    </div>
  );
};

export default TimeCard;

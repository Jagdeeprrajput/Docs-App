import React, { useState } from "react";
import { FaFileAlt } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Card({ data, reference, onDescriptionChange }) {
  const [description, setDescription] = useState(data.des || "");
  const toggleCompletion = () => setIsCompleted(!isCompleted);
  const [isCompleted, setIsCompleted] = useState(false);

  const titleBackgroundColor = isCompleted ? "bg-green-600" : "bg-red-600";

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
    if (onDescriptionChange) {
      onDescriptionChange(event.target.value);
    }
  };

  return (
    <>
      <motion.div
        drag
        dragConstraints={reference}
        className="w-60 h-72 rounded-[35px] bg-zinc-950 text-white p-5 relative overflow-hidden flex-shrink-0"
      >
        <FaFileAlt />
        <div>
          <textarea 
            className="text-sm leading-normal mt-6 h-36 w-full font-semibold resize-none bg-zinc-950 outline-none"
            value={description}
            placeholder="Add a description..."
            spellCheck="false"
        
            
            onChange={handleDescriptionChange}
          />
        </div>
        <div className="footer absolute bottom-8 w-full h-10 left-0">
          <div className="flex items-center justify-between py-0.5 px-5">
            <h5 className="font-medium text-sm tracking-wider">
              Push Your Limits Today...
            </h5>
          </div>
          <div
            className={`tag w-full h-10 mt-2 flex items-center justify-center ${titleBackgroundColor}`}
          >
            <h2 className="text-xs font-semibold" onClick={toggleCompletion}>
              {isCompleted ? "Work Completed" : "Mark As Completed"}
            </h2>
          </div>
        </div>
      </motion.div>
    </>
  );
}

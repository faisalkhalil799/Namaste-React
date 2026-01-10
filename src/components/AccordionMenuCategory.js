import { useState } from "react";
import ItemsList from "./ItemsList";

const AccordionMenuCategory = ({ id, title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mx-auto my-6 w-full max-w-2xl rounded-lg border border-slate-200 bg-white shadow-sm">
      {/* HEADER */}
      <div
        className="flex cursor-pointer items-center justify-between px-5 py-4 hover:bg-slate-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-lg font-semibold text-slate-800">
          {title} ({items.length})
        </h2>

        <span
          className={`transform text-xl transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          ⬇️
        </span>
      </div>

      {/* BODY */}
      {isOpen && <ItemsList items={items} />}
    </div>
  );
};

export default AccordionMenuCategory;

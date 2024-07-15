import React, { useState } from "react";
import { mockAccordionData } from "../../mockData";
import AccordionItem from "./AccordionItem";
import "./Accordion.css";

const Accordion = () => {
  const [accordionOpenIndex, setAccordionOpenIndex] = useState(0);

  const setAccordionIndex = (id) => {
    if (id === accordionOpenIndex) {
      setAccordionOpenIndex(null);
    } else {
      setAccordionOpenIndex(id);
    }
  };
  return (
    <div className="accordion-wrapper">
      {mockAccordionData &&
        mockAccordionData?.length > 0 &&
        mockAccordionData?.map((entry, index) => (
          <AccordionItem
            title={entry.title}
            body={entry.body}
            id={index}
            isOpen={index === accordionOpenIndex}
            setAccordionIndex={setAccordionIndex}
          />
        ))}
    </div>
  );
};

export default Accordion;

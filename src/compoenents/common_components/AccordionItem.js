import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./AccordionItem.css";

const AccordionItem = ({ title, body, isOpen, id, setAccordionIndex }) => {
  const accordionClickHandler = () => {
    setAccordionIndex(id);
  };
  return (
    <div className="accordion-item-wrapper">
      <div className="accordion-item-header" onClick={accordionClickHandler}>
        <span>{title}</span>
        <span>
          <KeyboardArrowDownIcon className="down-key-icon" />
        </span>
      </div>
      {isOpen && <div className="accordion-item-body">{body}</div>}
    </div>
  );
};

export default AccordionItem;

import React, { useState } from "react";

export default ({
  title,
  icon,
  defaultOpen,
  css,
  headerCss,
  containerCss,
  children
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen || false);
  const chevIcon = () => (isOpen ? "fa-chevron-up" : "fa-chevron-down");
  const toggleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={`accordion mb-2 ${css}`}>
      <div className={`accordion-header ${headerCss}`} onClick={toggleClick}>
        {icon && <i className={icon}></i>}
        {title}
        <span className="float-right">
          <i className={`fas ${chevIcon()} accordion-chev`}></i>
        </span>
      </div>
      <div
        className={`accordion-container ${
          isOpen ? "open" : ""
        } ${containerCss}`}
      >
        {children}
      </div>
    </div>
  );
};

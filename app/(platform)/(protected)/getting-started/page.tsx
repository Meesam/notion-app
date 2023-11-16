"use client";
import React from "react";
import ContentEditable, { ContentEditableEvent } from "react-contenteditable";

const GettingStarted = () => {
  const headingText = React.useRef(
    "<h1 class='font-bold text-4xl'>Getting Started</h1>"
  );

  const handleChange = (evt: ContentEditableEvent) => {
    headingText.current = evt.target.value;
  };

  const handleBlur = () => {
    console.log(headingText.current);
  };

  return (
    <div className="flex justify-center mt-40">
      <div className="flex-col justify-center items-center">
        <ContentEditable
          html={headingText.current}
          onBlur={handleBlur}
          onChange={handleChange}
          className=" outline-none"
        />
      </div>
    </div>
  );
};

export default GettingStarted;

import "./side.css";
import React, { useState, useEffect } from "react";
function ListNames({ anchorId, itemName, active }) {
  const [anchorTarget, setAnchorTarget] = useState(null);

  useEffect(() => {
    setAnchorTarget(document.getElementById(anchorId));
  }, [anchorId]);

  function handleClick(e) {
    e.preventDefault();
    const yOffset = -90;
    const y =
      anchorTarget.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  }

  return (
    <li className="box">
      <a
        href={`#${itemName}`}
        onClick={handleClick}
        aria-label={`Scroll to ${itemName}`}
      >
        <div className="item">{itemName}</div>
      </a>
    </li>
  );
}

export default ListNames;

import ListNames from "./ListNames";
import "./side.css";
import React, { useState, useEffect } from "react";
const listnamess = {
  pos_1: null,
  pos_2: null,
  pos_3: null,
  pos_4: null,
  pos_5: null,
  pos_6: null,
  pos_7: null,
  pos_8: null,
  pos_9: null,
  pos_10: null,
  pos_11: null,
  pos_12: null,
};

const listnamesNames = {
  pos_1: "Convener",
  pos_2: "Content Team",
  pos_3: "Design",
  pos_4: "Event",
  pos_5: "Marketing",
  pos_6: "Publicity",
  pos_7: "Finance",
  pos_8: "Social Media",
  pos_9: "Tech",
  pos_10: "E-Sports",
  pos_11: "Workshop",
};
function List() {
  const [Curr, setCurr] = useState("pos_1");

  const Scroll = () => {
    const curPos = window.scrollY;
    for (const section in listnamess) {
      if (listnamess[section] < curPos + 40) {
        // curSection = section;
        setCurr(section);
        console.log(section);
        console.log(listnamess);
        console.log(curPos);
        // break;
      } else if (listnamess[section] >= curPos) {
        break;
      }
    }
  };

  useEffect(() => {
    setTimeout(getitem, 1000);
    const observer = new MutationObserver(getitem);
    observer.observe(document.getElementById("root"), {
      childList: true,
      subtree: true,
    });
    window.addEventListener("scroll", Scroll);
    return () => {
      window.removeEventListener("scroll", Scroll);
    };
  }, []);

  const getitem = () => {
    const curScroll = window.scrollY - 80;
    for (const key in listnamess) {
      try {
        listnamess[key] =
          document.getElementById(key).getBoundingClientRect().top + curScroll;
      } catch (e) {
        console.error(e);
      }
    }
    Scroll();
  };
  const Liste = Object.keys(listnamess).map((e, i) => (
    <ListNames
      itemName={listnamesNames[e]}
      anchorId={e}
      key={`listnamess_${i}`}
      active={e === Curr}
      id="menu-item"
    />
  ));
  return (
    <section className="item">
      <ul style={{ listStyle: "none", padding: "0" }}>{Liste}</ul>
    </section>
  );
}

export default List;

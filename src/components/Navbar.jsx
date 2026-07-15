import { useState } from "react";
import RoseMark from "./RoseMark.jsx";

const NAV_ITEMS = [
  ["home", "Home"],
  ["about", "About"],
  ["images", "Images"],
];

export default function Navbar({ page, setPage }) {
  const [open, setOpen] = useState(false);

  const go = (p) => {
    setPage(p);
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="navbar">
      <div className="brand" onClick={() => go("home")} style={{ cursor: "pointer" }}>
        <RoseMark /> Rosa
      </div>

      <button className="nav-toggle" onClick={() => setOpen(!open)}>
        {open ? "✕" : "☰"}
      </button>

      <ul className={"nav-links" + (open ? " open" : "")}>
        {NAV_ITEMS.map(([id, label]) => (
          <li key={id}>
            <a className={page === id ? "active" : ""} onClick={() => go(id)}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

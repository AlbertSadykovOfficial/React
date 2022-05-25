import React from "react";
import { FaStar } from "react-icons/fa";

/* onSelect = f => f  - заглушка, если функцию не передали */
export default function Star({ selected = false, onSelect = f => f }) {
  return <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />;
}

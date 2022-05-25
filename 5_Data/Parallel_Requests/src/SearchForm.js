import React, { useState } from "react";

export default function ({ value, onSearch = (f) => f }) {
  const [login, setValue] = useState(value);

  return (
    <input
      value={login}
      onChange={(e) => {
        setValue(e.target.value);
        onSearch(e.target.value);
      }}
    />
  );
}

import React from "react";
import ColorList from "./ColorList.js";
import AddColorForm from "./AddColorForm";

/** 
* Рендер нескольких шаблонов без использования дочернего узла:
* <React.Fragment>
*   ...
* <React.Fragment/>
* или
* <>
*   ...
* </>
*/
export default function App() {
  return (
    <>
      <AddColorForm />
      <ColorList />
    </>
  );
}

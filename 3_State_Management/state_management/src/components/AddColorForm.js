import React from "react";
import { useInput } from "../addons/hooks";
import { useColors } from "../statement/ColorProvider";
import { css } from "emotion";

export default function AddColorForm() {
  /** 
  * Импортируем: 
  * 1) Параметры для полей ввода (Используется для props в input)
  * 2) Функцию сброса (потребуется после подтверждения формы) 
  */
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#000000");
  const { addColor } = useColors();

  const submit = e => {
    /** Прерываем событие, иначе отправится POST-запрос */
    e.preventDefault();
    addColor(titleProps.value, colorProps.value);
    resetTitle();
    resetColor();
  };

  /** 
  * Отправляем парметры:
  * <input {...titleProps} />
  */
  return (
    <form
      className={css`
        display: flex;
        justify-content: space-around;
        margin: 0.25em;
        button {
          margin: 0.25em;
        }
        input {
          margin: 0.25em;
          &:first-child {
            flex: 1;
          }
        }
      `}
      onSubmit={submit}
    >
      <input
        {...titleProps}
        type="text"
        placeholder="color title..."
        required
      />
      <input {...colorProps} type="color" required />
      <button>ADD</button>
    </form>
  );
}

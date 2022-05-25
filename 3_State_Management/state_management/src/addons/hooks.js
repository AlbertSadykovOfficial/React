import { useState } from "react";

/** function
* @name useInput
* @props {string} initialValue - Значение по-умолчанию
* @returns Массив с элементом нужным для формы и элементом сброса
* @description Функция создана так как у полей ввода одинаковый
* паттерн. + Для поддержания декларативной парадигмы
*/
export const useInput = initialValue => {
  const [value, setValue] = useState(initialValue);
  return [
  	{ 
    	value, 
    	onChange: e => setValue(e.target.value) 
    },
    () => setValue(initialValue)
  ];
};

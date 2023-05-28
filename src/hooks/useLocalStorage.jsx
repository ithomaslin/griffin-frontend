import { useState, useEffect } from "react";

export const getLocalValue = (key, initValue) => {
  if (typeof window !== "undefined") return initValue;

  const localValue = JSON.parse(localStorage.getItem(key));
  return localValue || initValue;
};

export const useLocalStorage = (key, initValue) => {
  const [value, setValue] = useState(() => {
    return getLocalValue(key, initValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
}

export default useLocalStorage;
import { useEffect, useState } from "react";
 // TODO: add comments
const useDebounce = (value, delay) => {
  // TODO: add comments
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(
    () => {
      // TODO: add comments
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
      // TODO: add comments
      return () => {
        clearTimeout(handler);
      };
    },
    // TODO: add comments
    [value, delay]
  );

  return debouncedValue;
};

export default useDebounce;

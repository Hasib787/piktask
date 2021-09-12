import { useEffect, useState } from "react";

// type SearchType = {
//   value: string;
//   timeout: number;
//   callback: () => void;
// };

export const useDebounce = (
  value: string,
  timeout: number,
  callback: () => void
): void => {
  const [timer, setTimer] = useState("");

  const clearTimer = () => {
    if (timer) clearTimeout(timer);
  };

  useEffect(() => {
    clearTimer();

    if (value && callback) {
      const newTimer = setTimeout(callback, timeout);
      setTimer(newTimer);
    }
  }, [value]);
};

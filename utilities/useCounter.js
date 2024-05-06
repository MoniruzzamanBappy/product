import { useEffect, useState } from "react";

export default function useCounter(timer) {
  const [count, setCount] = useState(timer);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return count;
}

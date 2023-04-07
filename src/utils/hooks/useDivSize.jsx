import {useState, useEffect} from "react";

export function useDivSize(divRef) {
  const [divSize, setDivSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    function handleResize() {
      setDivSize({
        width: divRef?.current?.clientWidth,
        height: divRef?.current?.clientHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [divRef]);

  return divSize;
};

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

function ExperienceCounter() {
  const [counter, setCounter] = useState(0);
  const finalValue = 6;
  const { ref, inView } = useInView({  triggerOnce: true,
  rootMargin: "0px 0px -20% 0px", }); // detecta se o componente entrou na tela

  useEffect(() => {
     console.log("inView:", inView);
    if (inView && counter < finalValue) {
      const timer = setTimeout(() => {
        setCounter((prev) => prev + 1);
      }, 130);
      return () => clearTimeout(timer);
    }
  }, [inView, counter]);

  return (
    <div ref={ref} className="text-5xl font-bold">
      {counter}+
    </div>
  );
}

export default ExperienceCounter;

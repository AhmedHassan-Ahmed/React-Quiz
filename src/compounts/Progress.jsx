import { useEffect, useState } from "react";

export default function Progress({ timer, ontimeout }) {
  const [value, setValue] = useState(timer);
  
  useEffect(() => {
   
    const tim = setTimeout(ontimeout

      , timer);
    return () => clearTimeout(tim);
  }, [timer, ontimeout]);

useEffect(() => {
  const inter = setInterval(() => {
    setValue(prev => {

      if (prev <= 0) {
         clearInterval(inter);
        return timer;
      }
      return prev - 100;
    });
  }, 100);

  return () => clearInterval(inter);
}, []);


  return <progress id="qu" value={value} max={timer} className="answered" />;
}

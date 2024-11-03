import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import { useEffect, useState } from "react";
import PreLoader from "./preLoader/PreLoader";

const App = () => {
  const [preLoader, setPreLoader] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPreLoader(false);
    }, 1000);
  
    return () => clearTimeout(timer);
  }, []);
  
  if (preLoader) {
    return <PreLoader/>
  }
  return <>
    <RouterProvider router={router}/>
  </>;
};

export default App;

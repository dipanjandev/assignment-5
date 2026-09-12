// App.tsx

import { Suspense, useState } from "react";
import Banner from "./Components/Banner";
import NavBar from "./Components/NavBar";
import { Technologies } from "./Components/Technologies";
import type { DataType } from "./Type/Type";
import { Footer } from "./Components/Footer";

const technologiesFetch = async (): Promise<DataType[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

function App() {
  // const technologiesPromise = technologiesFetch();

  const [technologiesPromise] = useState(() => technologiesFetch());

  const [stack, setStack] = useState<DataType[]>([]);
  // console.log(setStack);

  return (
    <>
      <NavBar />
      <Banner />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Technologies
          technologiesPromise={technologiesPromise}
          stack={stack}
          setStack={setStack}
        />
      </Suspense>
      <Footer />
    </>
  );
}

export default App;

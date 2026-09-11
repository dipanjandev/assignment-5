import { Suspense } from "react";
import Banner from "./Components/Banner";
import NavBar from "./Components/NavBar";
import { Technologies } from "./Components/Technologies";
import type { DataType } from "./Type/Type";

const technologiesFetch = async (): Promise<DataType[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

function App() {
  const technologiesPromise = technologiesFetch();
  return (
    <>
      <NavBar />
      <Banner />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Technologies technologiesPromise={technologiesPromise} />
      </Suspense>
    </>
  );
}

export default App;

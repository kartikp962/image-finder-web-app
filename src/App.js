import { createContext, useState } from "react";
import ImageComponent from "./components/ImageComponent";
import Jumbotron from "./components/Jumbotron";
import SearchField from "./components/SearchField";
import useAxios from "./hooks/useAxios";

export const ImageCompContext = createContext();

function App() {
  const [searchImage, setSearchImage] = useState("");
  const { response, isLoading, error, fetchData } = useAxios(
    `search/photos?page=1&query=random&client_id=${process.env.REACT_APP_ACCESS_KEY}`
  );

  const value = {
    response,
    isLoading,
    error,
    fetchData,
    searchImage,
    setSearchImage,
  };

  return (
    <ImageCompContext.Provider value={value}>
      <Jumbotron>
        <SearchField />
      </Jumbotron>
      <ImageComponent />
    </ImageCompContext.Provider>
  );
}

export default App;

import { useState } from "react";
import Products from "./Products";
import NavBar from "./NavBar";
import { Provider } from "react-redux";
import { store } from "./store";


function App() {
  
  
  return (
    <>
    <Provider store={store}>
    <NavBar/>
    {/* <Products/> */}
    </Provider>
    </>
  );
}

export default App;

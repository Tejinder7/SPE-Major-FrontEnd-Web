import React from "react";
import AddDishOverlay from "./components/Overlay/AddDishOverlay";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import LoginScreen from "./screens/LoginScreen";

function App() {
  return (
    <React.Fragment>
      {/* <AddDishOverlay /> */}
      <Header />
      <main>
        {/* <Meals /> */}
        <LoginScreen />
      </main>
    </React.Fragment>
  );
}

export default App;

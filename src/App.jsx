import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";
import TitleComponent from "./components/TitleComponent";

function App() {
  return (
    <>
      <TitleComponent />
      <div id="cardContainer">
        <ImageComponent src="../src/assets/react.svg" alt="logoReact" />
        <ButtonComponent text="React" />
        <ImageComponent src="../public/vite.svg" alt="logoReact" />
        <ButtonComponent text="Vite" />
      </div>
    </>
  );
}

export default App;

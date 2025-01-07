import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";

function App() {
  return (
    <>
    
      <ImageComponent
        src="../src/assets/react.svg"
        alt="logoReact"
      />
      <ButtonComponent text="React" />
      <ImageComponent
        src="../public/vite.svg"
        alt="logoReact"
      />
      <ButtonComponent text="Vite" />
    </>
  );
}

export default App;

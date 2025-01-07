import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";

function App() {

  return (
    <>
      <ButtonComponent text="Bottone Creato" />
      <ButtonComponent text="Secondo Bottone"/>
      <ImageComponent src="https://miro.medium.com/v2/resize:fit:2000/1*y6C4nSvy2Woe0m7bWEn4BA.png" alt="logoReact" />
      
    </>
  );
}

export default App;

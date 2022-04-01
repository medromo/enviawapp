import "./styles/global.scss";
import "./styles/fonts.scss";
import { CountrySelect } from "./components/molecules/CountrySelect/CountrySelect";

function App() {
  function handleClick() {
    let codigoPais = document.getElementById("codigo_pais").value;
    let telNum = document.getElementById("tel").value;
    let telString = telNum.replace(/\s+/g, "");
    console.log(telString);
    let telCompleto = codigoPais + telString;
    window.open(`https://api.whatsapp.com/send?phone=${telCompleto}`);
  }

  return (
    <div className="wrapper">
      <header>
        <div>
          <h1 className="titulo">EnviaWapp</h1>
        </div>
      </header>
      <main>
        <div className="hero">
          <div className="label_container">
            <span className="label1">¡NO MÁS CONTACTOS INNECESARIOS!</span>
            <span className="label2">
              Envía mensajes sin agregar contactos nuevos
            </span>
          </div>
          <div className="input-container">
            <CountrySelect />
            <button className="boton" id="ir_chat" onClick={handleClick}>
              Ir al chat
            </button>
          </div>
        </div>
      </main>
      <footer>Copyright Chachito</footer>
    </div>
  );
}

export { App };

import { useState } from "react";
import "./App.css";
import { Banner } from "./components/Banner";
import { CardEvento } from "./components/CardEvento";
import { FormularioDeEvento } from "./components/FormularioDeEvento";
import { Tema } from "./components/Tema";

function App() {
  const temas = [
    { id: 1, nome: "front-end" },
    { id: 2, nome: "back-end" },
    { id: 3, nome: "devops" },
    { id: 4, nome: "inteligência artificial" },
    { id: 5, nome: "data science" },
    { id: 6, nome: "cloud" },
  ];

  const [eventos, setEventos] = useState([
    {
      capa: "https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png",
      tema: temas[0],
      data: new Date(),
      titulo: "Mulheres no front-end",
    },
  ]);

  function adicionarEvento(evento) {
    console.log("evento criado ->", eventos);

    setEventos([...eventos, evento]);
  }

  return (
    <main>
      <header>
        <img src="/logo.png" alt="" />
      </header>
      <Banner />

      <FormularioDeEvento temas={temas} aoSubmeter={adicionarEvento} />

      {temas.map(function (item) {
        return (
          <section key={item.id}>
            <Tema temas={item} />
            {eventos.map(function (item, indice) {
              return <CardEvento evento={item} key={indice} />;
            })}
          </section>
        );
      })}
    </main>
  );
}

export default App;

import "./titulo-formulario-styles.css";

//Usando diferentes tipos de parâmetros para testes e ver como funciona (com passagem de props)

export function TituloFormulario(props) {
  return <h2 className="titulo-form">{props.children}</h2>;
}

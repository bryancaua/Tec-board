import "./campo-entrada-styles.css";

//Usando diferentes tipos de parâmetros para testes e ver como funciona (com passagem de props)

export function CampoDeEntrada(props) {
  return <input {...props} className="campo-entrada-form" />
}
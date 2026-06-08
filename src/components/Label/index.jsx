import "./label-estilos.css";

//Usando diferentes tipos de parâmetros para testes e ver como funciona (com passagem de props)

export function Label({ children, htmlfor }) {
  return <label htmlFor={htmlfor} className="label">{children}</label>; // Qquando vamos retornar um único elemento, podemos utilizar este formato
}

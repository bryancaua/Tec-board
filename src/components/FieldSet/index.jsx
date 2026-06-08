import "./campo-formulario-style.css";

//Usando diferentes tipos de parâmetros para testes e ver como funciona (com passagem de props)

export function FieldSet({ children }) {
  return (
    <fieldset className="campo-form">
      {children}
    </fieldset>
  )
}
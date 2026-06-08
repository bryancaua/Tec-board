import "./formulario-de-evento-style.css"
import { CampoDeEntrada } from "../CampoDeEntrada";
import { FieldSet } from "../FieldSet";
import { Label } from "../Label";
import { TituloFormulario } from "../TituloFormulario";

export function FormularioDeEvento() {
  return (
    <form className="form-evento">
      <TituloFormulario>Preencha para criar um evento:</TituloFormulario>

      <FieldSet>
        <Label htmlFor="nome">Qual o nome do evento?</Label>
        <CampoDeEntrada type="text" name="" id="nome" placeholder="Summer dev hits" />
      </FieldSet>
    </form>
  );
}
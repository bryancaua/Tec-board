import "./formulario-de-evento-style.css";
import { CampoDeEntrada } from "../CampoDeEntrada";
import { FieldSet } from "../FieldSet";
import { Label } from "../Label";
import { TituloFormulario } from "../TituloFormulario";
import { ListaSuspensa } from "../ListaSuspensa";
import { BotaoSubmeter } from "../Botao";

export function FormularioDeEvento() {
  return (
    <form className="form-evento">
      <TituloFormulario>Preencha para criar um evento:</TituloFormulario>

      <div className="campos">
        <FieldSet>
          <Label htmlFor="nomeEvento">Qual o nome do evento?</Label>
          <CampoDeEntrada
            type="text"
            name="nomeEvento"
            id="nomeEvento"
            placeholder="Summer dev hits"
          />
        </FieldSet>
        <FieldSet>
          <Label htmlFor="nomeEvento">Qual a data do evento?</Label>
          <CampoDeEntrada type="date" name="dataEvento" id="dataEvento" />
        </FieldSet>

        <FieldSet>
          <Label htmlFor="nomeEvento">Qual o tipo do evento?</Label>
          <ListaSuspensa name="nomeEvento" id="nomeEvento"></ListaSuspensa>
        </FieldSet>
      </div>

      <div className="actions">
        <BotaoSubmeter>
          Criar evento
        </BotaoSubmeter>
      </div>
    </form>
  );
}

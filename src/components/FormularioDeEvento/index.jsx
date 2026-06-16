import "./formulario-de-evento-style.css";
import { CampoDeEntrada } from "../CampoDeEntrada";
import { FieldSet } from "../FieldSet";
import { Label } from "../Label";
import { TituloFormulario } from "../TituloFormulario";
import { ListaSuspensa } from "../ListaSuspensa";
import { BotaoSubmeter } from "../Botao";

export function FormularioDeEvento({ temas, aoSubmeter }) {
  
  function aoFormSubmetido(formData) {
    console.log("olá");

    const evento = {
      capa: formData.get('capa'),
      tema: temas.find(function (item) {
        return item.id == formData.get('tema')
      }),
      data: new Date(formData.get('dataEvento')),
      titulo: formData.get('nomeEvento')
    };

    aoSubmeter(evento);
  }

  return (
    <form className="form-evento" action={aoFormSubmetido}>
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
          <Label htmlFor="capa">Qual o endereço da imagem?</Label>
          <CampoDeEntrada
            type="text"
            name="capa"
            id="capa"
            placeholder="https://..."
          />
        </FieldSet>
        <FieldSet>
          <Label htmlFor="dataEvento">Qual a data do evento?</Label>
          <CampoDeEntrada type="date" name="dataEvento" id="dataEvento" />
        </FieldSet>

        <FieldSet>
          <Label htmlFor="tema">Tema do evento</Label>
          <ListaSuspensa name="tema" id="tema" itens={temas} />
        </FieldSet>
      </div>

      <div className="actions">
        <BotaoSubmeter>Criar evento</BotaoSubmeter>
      </div>
    </form>
  );
}

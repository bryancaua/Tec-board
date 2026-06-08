import "./lista-suspensa-style.css";

export function ListaSuspensa(props) {
  return (
    <select {...props} className="lista-suspensa-form">
      <option value="front">front</option>

      <option value="back">back</option>
    </select>
  );
}

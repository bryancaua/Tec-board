import "./botao-style.css";

export function BotaoSubmeter( {children} ) {
    return (
        <button className="botao">
            {children}
        </button>
    );
}
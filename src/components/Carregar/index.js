import carregarIcone from "../../assets/Reload.gif"

export default function Carregar() {
  return (
    <div className="carregar">
      <img src={carregarIcone} />
      <span>Carregando</span>
    </div>
  );
}
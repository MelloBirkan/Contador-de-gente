export default function GraficoPizza(props) {
  return (
    <div className="flex-col justify-center outline outline-slate-100 outline-offset-8 rounded">
      <div className="flex justify-between">
        <div className="mb-4">{props.nome}</div>
        <div>
          <p className="outline outline-slate-100 rounded-md">Mês</p>
        </div>
      </div>
      <div className="flex justify-center">
        <img className="w-full" src={props.imagem} />
      </div>
    </div>
  );
}

import { useParams } from "react-router-dom";

const Contato = () => {
  let { contatoId } = useParams();
  return (
    <>
      <h1>Página Contato</h1>
      <span>O id do contato é: {contatoId}</span>
    </>
  );
};
export default Contato;

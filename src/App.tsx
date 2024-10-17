import './App.css';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function App() {
  const listaDeAlunos = [
    {nome: "João Kenji", dataNascimento: "15/10/2001", sexo: "Masculino"},
    {nome: "Bruno", dataNascimento: "15/10/2001", sexo: "Masculino"},
    {nome: "Cristhian", dataNascimento: "15/10/2001", sexo: "Masculino"},
    {nome: "Isaac", dataNascimento: "15/10/2001", sexo: "Masculino"},
    {nome: "Felipe", dataNascimento: "15/10/2001", sexo: "Masculino"},
    {nome: "Anderson", dataNascimento: "15/10/2001", sexo: "Masculino"},
    {nome: "Anadir", dataNascimento: "15/10/2001", sexo: "Masculino"},
    {nome: "Gabriel", dataNascimento: "15/10/2001", sexo: "Masculino"},
    {nome: "Lorenza", dataNascimento: "15/10/2001", sexo: "Masculino"},
    {nome: "Pedro Longo", dataNascimento: "15/10/2001", sexo: "Masculino"},
    {nome: "João", dataNascimento: "15/10/2001", sexo: "Masculino"},
    {nome: "Rafael Petelin", dataNascimento: "15/10/2001", sexo: "Masculino"}
  ];
  return (
    <>
    <ul>
      {listaDeAlunos.map((item) => {return (<li>{item.nome}</li>)})}
    </ul>
    <Button variant="contained">Exemplo Botão</Button>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nome do Aluno</TableCell>
            <TableCell align="right">Data de Nascimento</TableCell>
            <TableCell align="right">Sexo</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {listaDeAlunos.map((item, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {item.nome}
              </TableCell>
              <TableCell align="right">{item.dataNascimento}</TableCell>
              <TableCell align="right">{item.sexo}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}

export default App;

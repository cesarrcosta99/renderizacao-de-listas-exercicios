import { useState } from "react";
import {
  InputContainer,
  ListaContainer,
  ListaTarefasContainer,
  Tarefa,
  TaskInput,
  AddTaskButton,
  RemoveButton,
  LinhaHorizontal
} from "./styled";
import bin from "../../assets/bin.png";
import { ListaCompleta } from "../ListaCompleta";

export function ListaTarefas() {
  const [lista, setLista] = useState(["Fazer exercícios", "Estudar React"]);
  const [novaTarefa, setNovaTarefa] = useState("");
  const[listaCompletada,setListaCompletada]=useState([])

  const onChangeTarefa = (event) => {
    setNovaTarefa(event.target.value);
  };


  const adicionaTarefa = () => {
    const novaLista = [...lista, novaTarefa];
    setLista(novaLista);
    setNovaTarefa("");
  };


  const removeTarefa = (tarefa,indice) => {
    const listaFiltrada = lista.filter((elemento,i)=>{
      return i !== indice
    })
    setLista(listaFiltrada)

   /*  const listaRisco=lista.filter((elemento,i)=>{
      return i ===indice
    }) */
    //podia ser listaRisco no lugar de tarefa também
    setListaCompletada([...listaCompletada,tarefa])
  };
  console.log(listaCompletada)

  const adicionarEnter=(event)=>{
    if(event.key === "Enter") {
      adicionaTarefa()
    }
  }

  return (
    <ListaTarefasContainer>
      <InputContainer>
        <TaskInput
          placeholder="Digite aqui uma tarefa"
          value={novaTarefa}
          onChange={onChangeTarefa}
          onKeyDown={adicionarEnter}
        />
        <AddTaskButton onClick={adicionaTarefa}>Adicionar</AddTaskButton>
      </InputContainer>
      <ListaContainer>
        <ul>
          {lista.map((tarefa, index) => {
            return (
              <Tarefa key={index}>
                <p>{tarefa}</p>
                <RemoveButton onClick={() => removeTarefa(tarefa,index)}>
                  <img src={bin} alt="" width="16px" />
                </RemoveButton>
              </Tarefa>
            );
          })}
        </ul>
      </ListaContainer>
      <LinhaHorizontal/>
      <ListaCompleta listaCompletada={listaCompletada}/>
    </ListaTarefasContainer>
  );
}

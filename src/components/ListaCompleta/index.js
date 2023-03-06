import { useState } from "react";
import { Elemento,ListaTracado} from "./styled";

export function ListaCompleta(props){
    const {listaCompletada}=props
  return(
    <ListaTracado>
        <ul>
        {listaCompletada.map((tarefa,index)=>{
          return(
            <Elemento key={index}>
                <p>{tarefa}</p>
            </Elemento>
          )
        })}

        </ul>


    </ListaTracado>

  )

}


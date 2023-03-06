import styled from "styled-components";

export const ListaTracado = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

export const Elemento = styled.li`
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 1rem;
border: 1px solid black;
border-radius: 10px;
padding: 6px 8px;
transition: background-color 0.3s;
&:hover {
  background-color: lightblue;
}
p{
  text-decoration:line-through;
  opacity:0.5;
}
`;

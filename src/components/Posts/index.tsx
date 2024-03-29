import { Outlet, useParams, useSearchParams } from 'react-router-dom';
//Outlet -> para carregar componentes de rotas aninhadas (ver main.tsx)
import './style.css'

export const Posts = () => {
  const {id} = useParams() //hook do react para pegar o id do post pela rota
  const [queryString, setQueryString] = useSearchParams() //hook para pegar o que vem depois de ? na rota (127.0.0.1:5173/posts/10?page=101)

  return (
    <div>
      <h1>Post: {`Params: ${id}`} - {`QS: ${queryString.get('page')}`}</h1>
      <Outlet/> 
    </div>
  );
};

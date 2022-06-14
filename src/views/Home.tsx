import React, {useState, useEffect} from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import Button from '../components/Button';
import CardItem from '../components/Home/CardItem';
import Carrousel from '../components/Home/Carrousel';
import { Loader } from '../components/Loader';
import { useContext } from 'react';
import { productsContext } from '../context/ProductsContext';

interface Productos {
  id: number,
  name: string,
  image: string,
  price: number,
  description: string,
  quantity: number,
  category: string,
  }

function Home() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const {productos} = useContext(productsContext);
  
 
  useEffect(() => {
    setLoading(false);
    console.log(productos);
  }
  , [productos])
  

  const handleClick = (category:string ,id:number) => {
    navigate(`/item/${category}/${id}`);
  }
  return (
      <div className='container mx-auto flex flex-col gap-2'>
        <Button text='Save changes'/>
        <Carrousel/>
        <h2 className='font- text-2xl text-center p-5'>Productos destacados</h2>
        <div className='flex gap-5 my-5 flex-wrap self-center justify-center'>
          {
            loading 
            ? <Loader/>
            : productos.map(
              (producto: Productos, index: number) =>
              <CardItem key={'a'+ index} handleClick={() => handleClick(producto.category, producto.id)} title={producto.name} image={producto.image} />
              )
          }
        </div>
      </div>
  )
}

export default Home
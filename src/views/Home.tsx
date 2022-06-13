import React, {useState, useEffect} from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import Button from '../components/Button';
import CardItem from '../components/Home/CardItem';
import Carrousel from '../components/Home/Carrousel';
import { Loader } from '../components/Loader';
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
  const [producto, setProducto] = useState<Productos[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setProducto([
      {
        id: 1,
        name: 'Producto 1',
        price: 100,
        description: 'Descripcion del producto 1',
        image: 'https://picsum.photos/200/300',
        category: 'remeras',
        quantity: 1,
    },
    {   id: 2,
        name: 'Producto 2',
        price: 200,
        description: 'Descripcion del producto 2',
        image: 'https://picsum.photos/200/400',
        category: 'remeras',
        quantity: 1,
    },
    {   id: 3,
        name: 'Producto 3',
        price: 300,
        description: 'Descripcion del producto 3',
        image: 'https://picsum.photos/200/500',
        category: 'remeras',
        quantity: 1,
    },
    {   id: 4,
        name: 'Producto 4',
        price: 400,
        description: 'Descripcion del producto 4',
        image: 'https://picsum.photos/200/600',
        category: 'remeras',
        quantity: 1,
    },
    {   id: 4,
        name: 'Producto 5',
        price: 400,
        description: 'Descripcion del producto 4',
        image: 'https://picsum.photos/200/700',
        category: 'remeras',
        quantity: 1,
    },
    {   id: 4,
        name: 'Producto 6',
        price: 400,
        description: 'Descripcion del producto 4',
        image: 'https://picsum.photos/200/800',
        category: 'remeras',
        quantity: 1,
    },
    {   id: 4,
        name: 'Producto 7',
        price: 400,
        description: 'Descripcion del producto 4',
        image: 'https://picsum.photos/200/900',
        category: 'remeras',
        quantity: 1,
    },
    {   id: 4,
        name: 'Producto 8',
        price: 400,
        description: 'Descripcion del producto 4',
        image: 'https://picsum.photos/100/300',
        category: 'remeras',
        quantity: 1,
    }
    ])
    setLoading(false);
  },[])
 

  const handleClick = (category:string ,name:string) => {
    navigate(`/item/${category}/${name}`);
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
            : producto.map(
              producto =>
              <CardItem handleClick={() => handleClick(producto.category, producto.name)} title={producto.name} image={producto.image} />
              )
          }
        </div>
      </div>
  )
}

export default Home
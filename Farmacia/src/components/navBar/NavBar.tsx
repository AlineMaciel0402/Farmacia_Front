import { Link } from 'react-router-dom'



function Navbar() {

  

  return (
    <>
     <div className='w-full bg-orange-500 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
          <Link to='/home' className='text-2xl font-bold uppercase'>Farmacia do Povo</Link>

            <div className='flex gap-4'>
            <div className='hover:underline'>Produtos</div>
            <Link to='/temas' className='hover:underline'>Categorias</Link>
              <div className='hover:underline'>Cadastrar Categorias</div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar
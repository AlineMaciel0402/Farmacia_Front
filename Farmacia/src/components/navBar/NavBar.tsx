import { Link } from 'react-router-dom'



function Navbar() {

  

  return (
    <>
     <div className='w-full bg-indigo-900 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
          <Link to='/home' className='text-2xl font-bold uppercase'>Blog Pessoal</Link>

            <div className='flex gap-4'>
            <div className='hover:underline'>Postagens</div>
            <Link to='/temas' className='hover:underline'>Temas</Link>
              <div className='hover:underline'>Cadastrar tema</div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar
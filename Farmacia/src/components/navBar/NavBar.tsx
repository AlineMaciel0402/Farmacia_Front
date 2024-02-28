import React from 'react'


function Navbar() {
 
  

  return (
    <>
     <div className='w-full bg-orange-500 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
            <div className='text-2xl font-bold uppercase'>Farmacia do Povo</div>

            <div className='flex gap-4'>
              <div className='hover:underline'>Produtos</div>
              <div className='hover:underline'>Categorias</div>
              <div className='hover:underline'>Cadastrar Categoria</div>
              <div className='hover:underline'>Sair</div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar
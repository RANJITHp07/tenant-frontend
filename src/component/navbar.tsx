import ListIcon from '@mui/icons-material/List';

function Navbar() {

  return (
    <div>
        <nav className='bg-indigo-950 w-full p-3 flex justify-between items-center'>
            <div className='flex items-center'>
            <p className='text-white font-bold md:text-4xl text-2xl lg:text-6xl mx-3'>LoGo</p>
            <p className='text-white mx-3 hidden md:block'>Home</p>
            </div>
            <div className='md:hidden'><ListIcon className='text-white text-xl'/></div>
            <div className='hidden md:block'>
                <a href='#' className='bg-indigo-300 px-4 py-1 rounded-lg mx-3 hover:text-lg'>Login</a>
                <a href='#' className='bg-indigo-300 px-2 py-1 mx-3 rounded-lg hover:text-lg'>Sign Up</a>
                
            </div>
              
        </nav>
    </div>
  )
}

export default Navbar
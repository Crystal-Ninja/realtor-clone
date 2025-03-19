import { useLocation, useNavigate } from "react-router-dom"

export default function Header() {
    const location=useLocation()
    const navigate=useNavigate()
    function pathmatch(route){
        if(route==location.pathname){
            return true
        }
    }
  return (
    <div className='bg-white border-b shadow-sm sticky top-0 z-50'>
        <header className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
            <div>
                <img src="https://static.rdc.moveaws.com/rdc-ui/logos/logo-brand.svg" alt="logo" className='h-5 cursor-pointer' onClick={()=>navigate("/")} />
            </div>
            <div >
                <ul className='flex space-x-10'>
                    <li className={`py-3 text-gray-400 border-b-[5px] text-sm cursor-pointer font-semibold border-b-transparent ${pathmatch("/") && `border-b-red-500 text-black`}`}onClick={()=>navigate("/")}>Home</li>
                    <li className={`py-3 text-gray-400 border-b-[5px] text-sm cursor-pointer font-semibold border-b-transparent ${pathmatch("/offers") && `border-b-red-500 text-black`}`}onClick={()=>navigate("/offers")}>Offers</li>
                    <li className={`py-3 text-gray-400 border-b-[5px] text-sm cursor-pointer font-semibold border-b-transparent ${pathmatch("/sign-in") && `border-b-red-500 text-black`}`}onClick={()=>navigate("/sign-in")}>Sign In</li>
                </ul>
            </div>
        </header>
    </div>
  )
}

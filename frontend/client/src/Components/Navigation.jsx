import { menuItems } from '../utils/menuItems'
import avatar from "../images/avatar.avif"
import { signout } from '../utils/icons'

function Navigation({active , setActive}) {
  return (
    <div className="h-[50vh] w-[100vw] overflow-hidden rounded-lg flex justify-between items-baseline border-2 border-solid border-slate-400 lg:h-[100vh] lg:flex-col lg:justify-center lg:items-center lg:w-64 pr-7">
        <div className="flex jusitfy-center items-center gap-3 mt-20 ml-4 ">
        <img className= "h-[70px] w-[70px] rounded-full bg-white shadow-sm shadow-slate-50 border-2 border-solid border-white"src={avatar} alt=""/>
          <div className="flex-col justify-center items-center">
              <h2 className="font-bold text-xl">Kunal</h2>
              <span className="font-black">My Money</span>
          </div>
        </div>
        <div className="mt-20 ml-5">
          <ul className="gap-5">
            {menuItems.map((items)=>{
               return <li className="mb-3" key={items.id} onClick={()=>{
                setActive(items.id)
               }}> {items.icon} <span className="cursor-pointer">{items.title}</span></li>
            })} 
          </ul>

          <div className="cursor-pointer lg:mt-56">
           {signout} Sign out
          </div>
        </div>

    </div>
    
  )
}

export default Navigation
import { menuItems } from '../utils/menuItems'
import avatar from "../images/avatar.avif"
import { signout } from '../utils/icons'

function Navigation() {
  return (
    <div className="h-[50vh] w-full overflow-hidden rounded-lg border-2 border-solid border-slate-400 lg:h-[100vh] lg:w-52 lg:flex-col lg:justify-center lg:items-center ">
        <div className="flex jusitfy-center items-center gap-3 mt-20 ml-4 ">
        <img className= "h-[70px] w-[70px] rounded-full"src={avatar} alt=""/>
          <div className="flex-col justify-center items-center">
              <h2 className="font-bold text-xl">Kunal</h2>
              <span className="font-black">My Money</span>
          </div>
        </div>
        <div className="mt-10 ml-5">
          <ul>
            {menuItems.map((items)=>{
               return <li className="mb-3" key={items.id}> {items.icon} <span>{items.title}</span></li>
            })}
          </ul>

          <div>
           {signout} Sign out
          </div>
        </div>

    </div>
    
  )
}

export default Navigation
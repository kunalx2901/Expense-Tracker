import { menuItems } from '../utils/menuItems'
import avatar from "../images/3d-cartoon-character.jpg"

function Navigation() {
  return (
    <div>
        <img className= "h-20 w-20 rounded-full"src={avatar} alt=""/>
        <div>
            {menuItems.map((items)=>{
                return items.icon
            })}
        </div>

    </div>
    
  )
}

export default Navigation
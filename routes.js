import Character from "./src/views/Character";
import Home from "./src/views/Home";
const routes = [{
  Path:'/',
  Element: Home
},{
  Path:'/character/:id',
  Element:Character
}
]
export default routes
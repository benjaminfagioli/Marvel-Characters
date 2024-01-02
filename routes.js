import Character from "./src/views/Character";
import Home from "./src/views/Home";
import Test from "./src/views/Test";
const routes = [{
  Path:'/',
  Element: Home
},{
  Path:'/character/:id',
  Element:Character
},{
  Path:'/test',
  Element:Test
}
]
export default routes
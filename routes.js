import Character from "./src/views/Character";
import Comic from "./src/views/Comics";
import Home from "./src/views/Home";
import Series from "./src/views/Series";

const routes = [{
  Path:'/',
  Element: Home
},{
  Path:'/character/:id',
  Element:Character
},{
  Path:'/comics/:id',
  Element: Comic
},{
  Path:'/series/:id',
  Element: Series
}
]
export default routes
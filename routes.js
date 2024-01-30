import Character from "./src/views/Character";
import Comic from "./src/views/Comics";
import Home from "./src/views/Home";
import Index from "./src/views/Index";
import Series from "./src/views/Series";

const routes = [{
  Path:'/',
  Element: Index
},{
  Path:'/character/:id',
  Element:Character
},{
  Path:'/comics/:id',
  Element: Comic
},{
  Path:'/series/:id',
  Element: Series
},{
  Path:'/home',
  Element: Home
}
]
export default routes
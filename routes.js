import Character from "./src/views/Character";
import Comic from "./src/views/Comics";
import Home from "./src/views/Home";
import Index from "./src/views/Index";
import Series from "./src/views/Series";
import AboutMe from "./src/views/AboutMe";
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
},{
  Path:'/aboutMe',
  Element: AboutMe
}
]
export default routes
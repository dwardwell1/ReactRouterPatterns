
import './App.css';

import { BrowserRouter } from "react-router-dom";
import ColorRoutes from './ColorRoutes';
import Routes from "./Routes";
import NavBar from "./NavBar";
import DogList from "./DogList";
import whiskey from "./whiskey.jpg";
import tubby from "./tubby.jpg";
import duke from "./duke.jpg";
import perry from "./perry.jpg";


//Both dog and colors app are here, uncomment the one you want to use

// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <NavBar dogs={dogs} />
//         <div className="container">
//           <Routes dogs={dogs} />
//         </div>
        
//       </BrowserRouter>
      
//     </div>
//   );
// }
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ColorRoutes />
      </BrowserRouter>
      
    </div>
  );
}




export const dogs = [
  {
    name: "Whiskey",
    age: 5,
    src: whiskey,
    facts: [
      "Whiskey loves eating popcorn.",
      "Whiskey is a terrible guard dog.",
      "Whiskey wants to cuddle with you!"
    ]
  },
  {
    name: "Duke",
    age: 3,
    src: duke,
    facts: [
      "Duke believes that ball is life.",
      "Duke likes snow.",
      "Duke enjoys pawing other dogs."
    ]
  },
  {
    name: "Perry",
    age: 4,
    src: perry,
    facts: [
      "Perry loves all humans.",
      "Perry demolishes all snacks.",
      "Perry hates the rain."
    ]
  },
  {
    name: "Tubby",
    age: 4,
    src: tubby,
    facts: [
      "Tubby is really stupid.",
      "Tubby does not like walks.",
      "Angelina used to hate Tubby, but claims not to anymore."
    ]
  }
];

App.defaultProps = {dogs}

export default App;
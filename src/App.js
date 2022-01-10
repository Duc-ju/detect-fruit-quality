import { useState } from "react";
import Fruit from './Fruit';
import appleTree from './appleTree';
import ChooseFruit from './ChooseFruit';
import bananaTree from "./bananaTree";
import plumTree from "./plumTree"


function App(){
  const [currentfruit, setCurrentFruit] = useState()

  const refreshFruit = ()=>{
    setCurrentFruit()
  }
  return <div>
      
      {!currentfruit&&<ChooseFruit callback={(fruit)=>{setCurrentFruit(fruit)}}/>}
      {currentfruit&&currentfruit==='QUẢ TÁO'&&<Fruit node={appleTree} fruit={currentfruit} callback={refreshFruit} />}
      {currentfruit&&currentfruit==='QUẢ CHUỐI'&&<Fruit node={bananaTree} fruit={currentfruit} callback={refreshFruit} />}
      {currentfruit&&currentfruit==='QUẢ MẬN TAM HOA'&&<Fruit node={plumTree} fruit={currentfruit} callback={refreshFruit} />}
  </div>
}

export default App;
import { useState } from "react";
import './styles.scss'
import Fruit from './Fruit';
import ChooseFruit from './ChooseFruit';
import {
  appleTree,
  bananaTree,
  plumTree,
  longanTree,
  sapodillaTree,
  jackfruitTree,
  litchiTree,
  passionFruitTree,
  rambutanTree,
  ripeMangoTree
} from './tree'


function App(){
  const [currentfruit, setCurrentFruit] = useState()

  const refreshFruit = ()=>{
    setCurrentFruit()
  }
  
  return (<div>
      {!currentfruit&&<ChooseFruit callback={(fruit)=>{setCurrentFruit(fruit)}}/>}
      {currentfruit&&currentfruit.name==='QUẢ TÁO'&&<Fruit node={appleTree} fruit={currentfruit} callback={refreshFruit} />}
      {currentfruit&&currentfruit.name==='QUẢ CHUỐI'&&<Fruit node={bananaTree} fruit={currentfruit} callback={refreshFruit} />}
      {currentfruit&&currentfruit.name==='QUẢ MẬN TAM HOA'&&<Fruit node={plumTree} fruit={currentfruit} callback={refreshFruit} />}
      {currentfruit&&currentfruit.name==='QUẢ NHÃN'&&<Fruit node={longanTree} fruit={currentfruit} callback={refreshFruit} />}
      {currentfruit&&currentfruit.name==='QUẢ MÍT'&&<Fruit node={jackfruitTree} fruit={currentfruit} callback={refreshFruit} />}
      {currentfruit&&currentfruit.name==='QUẢ HỒNG XIÊM'&&<Fruit node={sapodillaTree} fruit={currentfruit} callback={refreshFruit} />}
      {currentfruit&&currentfruit.name==='QUẢ VẢI'&&<Fruit node={litchiTree} fruit={currentfruit} callback={refreshFruit} />}
      {currentfruit&&currentfruit.name==='QUẢ XOÀI CHÍN'&&<Fruit node={ripeMangoTree} fruit={currentfruit} callback={refreshFruit} />}
      {currentfruit&&currentfruit.name==='QUẢ CHANH LEO'&&<Fruit node={passionFruitTree} fruit={currentfruit} callback={refreshFruit} />}
      {currentfruit&&currentfruit.name==='QUẢ CHÔM CHÔM'&&<Fruit node={rambutanTree} fruit={currentfruit} callback={refreshFruit} />}
  </div>)
}

export default App;

import fruits from './fruits.js'

function ChooseFruit({callback}){
    
    return <div>
    <div className="card-deck p-4">
      {fruits.map((fruit, index) => {
        return <div onClick={()=>{callback(fruit.name)}} className="card bg-dark text-white" key={index} style={{cursor:"pointer"}}>
          <img className="card-img" src={fruit.image} alt="Card image" style={{opacity:0.5}} />
          <div className="card-img-overlay">
            <h5 className="card-title">{fruit.name}</h5>
          </div>
      </div>
      })}
      </div>
    </div>
}
export default ChooseFruit
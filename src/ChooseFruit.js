import fruits from './fruits'

function ChooseFruit({callback}){
    
    return <div>
      <div className="container-fluid bg-warning p-2">
            <h2 className="text-center m-0 text-white">NHẬN DIỆN TÌNH TRẠNG HOA QUẢ</h2>
      </div>
      {fruits.map((fruitrow,i)=>{
        return <div className="card-deck p-4 mr-0 ml-0" key={i}>
          {fruitrow.map((fruit, index) => {
            return <div onClick={()=>{callback(fruit)}} className="card bg-dark text-white" key={index} style={{cursor:"pointer"}}>
              <img className="card-img" src={fruit.image} alt="Card image" style={{opacity:0.5}} />
              <div className="card-img-overlay">
                <h5 className="card-title">{fruit.name}</h5>
              </div>
          </div>
          })}
        </div>
      })}
      
    </div>
}
export default ChooseFruit
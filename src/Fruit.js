import { useState } from "react";
const notice = {
  bad: 'Tình trạng tệ!',
  medium : 'Tình trạng khá!',
  good: 'Tình trạng tốt!'
}
const noticeClass = {
  bad: 'text-danger',
  medium : 'text-default',
  good: 'text-success'
}
function Fruit({ node,fruit,callback }) {
  const [value, setValue] = useState(node)
  const [now, setNow] = useState()
  const [listValues, setListValues] = useState([])
  const [result, setResult] = useState()
  const [prevValue, setPrevValue] = useState()

  const handleNextNode = ()=>{
    if(now!==undefined){
      setListValues([...listValues,{
        name: value.name,
        value: value.results[now]
      }]) 
      
      let nextNote = value['node'+now]
      if(nextNote.isLeave===true){
        setResult(nextNote.value)
      }
      else{
        setPrevValue(value);
        setValue(nextNote);
        setNow();
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        })
      }
    }
    else{
      alert('Vui lòng chọn một giá trị trước khi nhấn tiếp tục')
    }
  }
  const handleNew = ()=>{
    setValue(node)
    setNow()
    setListValues([])
    setResult()
    setPrevValue()
  }

  const handlePrev = ()=>{
    setValue(prevValue)
    setNow()
    listValues.pop()
    setListValues(listValues)
    setPrevValue()
  }
  return (
      <div>
        <div className="container-fluid bg-warning p-2">
            <h2 className="text-center m-0 text-white">NHẬN BIẾT TÌNH TRẠNG {fruit}</h2>
        </div>
        <div>
            <button onClick={()=>{callback()}} className="btn btn-default m-1">Về trang chủ</button>
        </div>
        <div id="wrapper" className="jumbotron">
        {result?
        <div className="text-center bg-white p-4">
            <ul className="list-group list-group-flush">
            {listValues.map((item,index) => {
                return <li key={index} className="list-group-item">
                {item.name} : {item.value}
                </li>
            })}
            </ul>
            <div className="mt-4">
            <h3 className={[noticeClass[result]]}>Kết luận: {result==='bad'&&'Tình trạng tệ!'}{result==='medium'&&'Tình trạng khá!'}{result==='good'&&'Tình trạng tốt!'}</h3>
            <div className="text-center">
                <button onClick={handleNew} className="btn btn-primary mt-1">
                Xem lại
                </button>
            </div>
            </div>
        </div>
        :<div>
            <h2 className="mb-4 text-center">{value.name}</h2>
            {prevValue&&<div className="text-right">
            <button onClick={handlePrev} className="btn btn-success">&#8592;</button>
            </div>}
            <div className="card-deck">
            {value.results.map((item, index) => {
            return (
                <div className="card" key={index}>
                    {value.images&&value.images[index]!==''&&<img className="card-img-top" src={value.images[index]} alt="Card image cap" />}
                    <div className="card-body">
                        <h5 className="card-title">{item}</h5>
                        {value.descriptions&&value.descriptions[index]!==''&&<p className="card-text">{value.descriptions[index]}</p>}
                    </div>
                    <div className="card-footer">
                    <div className="form-check d-flex align-items-center w-100">
                        <input  onChange={()=>setNow(index)} className="form-check-input" type="radio" id={index} checked={now==index}/>
                        <label className="form-check-label p-2 w-100" htmlFor={index}>{item}</label>
                    </div>
                    </div>
                </div>
                
            );
            })}
            </div>
            <div className="text-center">
            <button onClick={handleNextNode} className="btn btn-success mt-4">
                Tiếp tục
            </button>
            </div>
            <ul className="mt-2">
            {listValues.map((item,index) => {
                return <li key={index}>
                {item.name} : {item.value}
                </li>
            })}
            </ul>
        </div>}
        
        </div>
        <div className="container-fluid">
            <p className="text-center" style={{opacity:0.5}}>Defined by Đức</p>
        </div>
      </div>
  );
}

export default Fruit;

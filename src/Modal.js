
function Modal({fruit}){

    
    return (<div className="modal fade w-100" id="tree" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog" style={{maxWidth:1200}} role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">CÂY QUYẾT ĐỊNH CỦA {fruit.name}</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <img 
          src={fruit.tree} 
          style={{
            width: "100%"
          }}
          />
        </div>
      </div>
    </div>
  </div>)
}

export default Modal;
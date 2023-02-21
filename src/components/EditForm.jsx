import '../Styles/EditForm.css'
import { FaTimes } from "react-icons/fa";


function EditForm() {

  function hide() {
    document.querySelector(".editForm").style.display = "none";
  }


  return (
    <div className="editForm">
    <FaTimes id='close' onClick={hide}/>
      <form action="" className="">
        <input id='titleForm' type="text" placeholder='hola'/>
        <input id='yearForm' type="text" placeholder='hola'/>
        <input id='dataForm' type="text" placeholder='hola'/>
        <div className='btnDiv'>
          <button id='btnForm'>Send</button>
        </div>
      </form>
    </div>
  )
}

export default EditForm

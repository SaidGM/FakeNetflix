import '../Styles/EditForm.css'
import moviesData from '../data/MoviesData.js'
import { FaTimes } from "react-icons/fa";


function EditForm() {

// hacer funcion handle clic para que cuando cliques el lapiz el display de editform sea block
// y que cuando hagas click en la x el display sea none



  return (
    <div className="editForm">
    <FaTimes id='close'/>
      <form action="" className="">
        <input id='titleForm' type="text" placeholder={moviesData[0].title}/>
        <input id='yearForm' type="text" placeholder={moviesData[0].year}/>
        <input id='dataForm' type="text" placeholder={moviesData[0].info}/>
        <div className='btnDiv'>
          <button id='btnForm'>Send</button>
        </div>
      </form>
    </div>
  )
}

export default EditForm

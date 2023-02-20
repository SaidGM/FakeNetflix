import '../Styles/EditForm.css'
import { FaTimes } from "react-icons/fa";
import { useState, useEffect } from 'react';
import allMoviesService from '../apiServices/allMoviesServices';


function EditForm() {

  function hide() {
    document.querySelector(".editForm").style.display = "none";
  }

  // const [editMovie, setEditMovie] = useState([])
  // useEffect(()=>{
  //   allMoviesService.putMovieEdit(id).then((data)=>{
  //     setEditMovie(data)
  //   })},[]);

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

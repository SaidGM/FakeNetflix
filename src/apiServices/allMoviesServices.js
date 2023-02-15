import  axios  from "axios"

const url = 'https://63ea1eb13363c87003620d7f.mockapi.io/movies'

const allMoviesService = {
    
    getAllMovies() {
        return axios.get(url)
            .then((res)=>res.data)
            .catch((err)=>console.log(err))
    },

}

export default allMoviesService
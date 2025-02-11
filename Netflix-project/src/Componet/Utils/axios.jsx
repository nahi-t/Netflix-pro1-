import axios from"axios"
const instance=axios.create({
    baseURL:"http://api.themoviebd.org/3",                                                                                                                  
});
export default instance;
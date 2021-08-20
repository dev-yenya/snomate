import axios from 'axios';

const BOARD_API_BASE_URL = "http://localhost:8080";

class ProjectListService {
    getProjectList() {
       return axios.get(BOARD_API_BASE_URL+"/article");
    }

    getCategoryList(no) {
        return axios.get(BOARD_API_BASE_URL+"/article/category/"+no);
    }

    createOneProject(article) {
        return axios.post(BOARD_API_BASE_URL+"/article", article);
    }

    getOneProject(no){
        return axios.get(BOARD_API_BASE_URL+"/article/"+no);
    }

    deleteOneProject(no){
        return axios.get(BOARD_API_BASE_URL+"/delete/article/"+no);
    }

    updateOneProject(article){
        return axios.put(BOARD_API_BASE_URL+"/article", article);
    }
    
    getMyProject(no){
        return axios.get(BOARD_API_BASE_URL+"/article/user/"+no);
    }
}

export default new ProjectListService();
import axios from 'axios';

const BOARD_API_BASE_URL = "http://localhost:8080/article";

class ProjectListService {
    getBoards() {
       return axios.get(BOARD_API_BASE_URL);
    }

    createArticle(article) {
        return axios.post(BOARD_API_BASE_URL, article);
    }

    getOnArticle(no){
        return axios.get(BOARD_API_BASE_URL+"/"+no);
    }

}

export default new ProjectListService();
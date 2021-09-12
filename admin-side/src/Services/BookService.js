import axios from 'axios';

export const getCategoriesCollection=()=>([
    {id: '1', title: 'Action'},
    {id: '2', title: 'Adventure'},
    {id: '3', title: 'Comedy'},
    {id: '4', title: 'Thriller'},
    {id: '5', title: 'Detective'},
    {id: '6', title: 'Drama'},
])

const book_rest_api_url = 'http://localhost:8080/admin/books';

class BookService{
    getUrl(){
        return axios.get(book_rest_api_url);
    }
}

export default new BookService();
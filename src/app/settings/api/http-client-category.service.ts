import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Category} from "../model/category/category.model";

export class HttpClientCategoryService {
    headers = new HttpHeaders();
    url = 'http://localhost:8080/category';
    constructor(protected http: HttpClient) {
        this.headers = this.headers.set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    }
    getAll() {
        return this.http.get(this.url + '/all');
    }
    getOne(id: number) {
        return this.http.get(this.url + '/' + id);
    }
    create(category: Category) {
        return this.http.post(this.url + '/create', category);
    }
    update(category: Category) {
        return this.http.put(this.url + 'update', category);
    }
    delete(id: number) {
        return this.http.delete(this.url + '/delete/' + id);
    }
}

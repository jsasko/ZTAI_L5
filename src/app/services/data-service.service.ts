import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private url = 'http://localhost:8080/api/posts';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(this.url);
  }

  getPost(postId) {
    return this.http.get(`${this.url}/${postId}`);
  }

  createPost(data) {
    console.log("dataService");
    console.log(data);
    return this.http.post(this.url,data);
  }
}

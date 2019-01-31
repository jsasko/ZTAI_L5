import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {

  post = {
    title: '',
    url: ''
  }

  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
  }

  createPost(post) {
    this.dataService.createPost(post);
  }

  submit(e) {
    console.log('działa');
    this.post.title = e.target.title.value;
    this.post.url = e.target.url.value;
    //this.createPost(this.post);
    fetch("http://localhost:3000/api/posts", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin", //
      body: JSON.stringify(this.post), // body data type must match "Content-Type" header
      headers: {
          "Content-Type": "application/json"
      }
  }).then( (response) => { 
    console.log("Odpowiedź z serwera: ",response);
    //  this.router.navigate(['/blog']);
}).catch((err)=>{
  console.log("Błąd: ",err);
});
  }

}

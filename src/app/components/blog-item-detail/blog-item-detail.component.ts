import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-blog-item-detail',
  templateUrl: './blog-item-detail.component.html',
  styleUrls: ['./blog-item-detail.component.css']
})
export class BlogItemDetailComponent implements OnInit {

  id;
  post;

  constructor(private activatedRoute: ActivatedRoute, private dataService: DataServiceService) { 
    activatedRoute.paramMap.subscribe(params => {
      this.id = params.get("id");
    })
  }

  ngOnInit() {
    this.dataService.getPost(this.id).subscribe(result => {
      this.post = result;
    })
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { DataServiceService } from '../../services/data-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  @Input() filterText: string;
  items: any;

  constructor(private dataService: DataServiceService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.dataService.getAll().subscribe(result => {
      this.items = result;
      console.log(result);
    })
    this.activatedRoute.queryParams.subscribe(params => {
    	this.filterText = params['title'];
    }); 
  }

  setQuery() {
    this.router.navigate(['/blog'],
    {queryParams: {title: this.filterText}
  });
}

}

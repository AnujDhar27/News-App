import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { NewscategoryService } from '../services/newscategory.service';
import { NewslistService } from '../services/newslist.service';
import { AddNewsPage } from '../add-news/add-news.page';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
phn:any;
catArray:any;
nm_category:string='World';
newsArray:any;
selectedSegment: string = 'dashboard'; 
  constructor(private router: Router,private activated:ActivatedRoute,private apiService:NewscategoryService,private apiService2:NewslistService) {
   }

  ngOnInit() {
    this.activated.queryParams.subscribe((params)=>{
      if(params&&params['phn'])
      {
        this.phn=JSON.parse(params['phn']);
        this.apiService2.isLoading.next(true);
    this.apiService2.newsList(
    this.phn,
    this.nm_category,
    )
    .subscribe(
      (response)=>{
        console.log('Registration response:', response)
        if(response.Msg.en==='Login Successful.')
        this.apiService2.isLoading.next(false);
        this.newsArray=response.Ds.Table;
      }
    )
      }
    }
    )
  }
fab(phn:string){
  // console.log('fab pressed');
  // console.log(cat.lov_value);
  // console.log(phn);
 
  const params ={
    queryParams:{phn:phn}
 }
  this.router.navigate(['/add-news'],params)
}

segmentChanged(event:CustomEvent) {
  // Update the selected segment when the segment changes
  const params ={
    queryParams:{phn:this.phn}
 }
  this.selectedSegment = event.detail.value;

  // Navigate to the selected page
  this.router.navigate([`/${this.selectedSegment}`],params);
}
}

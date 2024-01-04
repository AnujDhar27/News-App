import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewslistService } from '../services/newslist.service';

@Component({
  selector: 'app-environment',
  templateUrl: './environment.page.html',
  styleUrls: ['./environment.page.scss'],
})
export class EnvironmentPage implements OnInit {
  phn:any;
  selectedSegment: string = 'environment'; 
  catArray:any;
  nm_category:string='Environment';
  newsArray:any;
  constructor(public router:Router,private activated:ActivatedRoute,private apiService2:NewslistService) { }

  ngOnInit() {
    this.activated.queryParams.subscribe((params)=>{
      if(params&&params['phn'])
      {
        this.phn=JSON.parse(params['phn']);
    this.apiService2.newsList(
    this.phn,
    this.nm_category,
    )
    .subscribe(
      (response)=>{
        console.log('Registration response:', response)
        if(response.Msg.en==='Login Successful.')
        this.newsArray=response.Ds.Table;
      }
    )
      }
    }
    )
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
  fab(phn:string){
    // console.log('fab pressed');
    // console.log(cat.lov_value);
    // console.log(phn);
   
    const params ={
      queryParams:{phn:phn}
   }
    this.router.navigate(['/add-news'],params)
  }
}

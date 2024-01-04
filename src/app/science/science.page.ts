import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewslistService } from '../services/newslist.service';

@Component({
  selector: 'app-science',
  templateUrl: './science.page.html',
  styleUrls: ['./science.page.scss'],
})
export class SciencePage implements OnInit {
  phn:any;
  catArray:any;
  nm_category:string='Science';
  newsArray:any;
  selectedSegment: string = 'science'; 
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
    this.selectedSegment = event.detail.value;
    const params ={
      queryParams:{phn:this.phn}
   }
    // Navigate to the selected page
    this.router.navigate([`/${this.selectedSegment}`],params);
  }
  fab(phn:string){
    const params ={
      queryParams:{phn:phn}
   }
    this.router.navigate(['/add-news'],params)
  }
}

import { Component, OnInit } from '@angular/core';
import { AddnewsService } from '../services/addnews.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.page.html',
  styleUrls: ['./add-news.page.scss'],
})
export class AddNewsPage implements OnInit {
  headline:string='';
  desc:string='';
  image:string='';
  captured:string='';
  phn:string='';
  cat:string='';
  id:any;
  isAlertOpen = false;
  alertButtons = ['OK'];
  isToastOpen = false;
  constructor(public apiService:AddnewsService,public router:Router,private activated:ActivatedRoute) { }

  ngOnInit() {
    this.activated.queryParams.subscribe((params)=>{
      if(params&&params['phn'])
      {
        this.phn=JSON.parse(params['phn']);
        // this.cat=String(params['cat']);-
        console.log(this.phn)
      }
      console.log(this.phn);
      console.log(this.cat);
    })
  }
  // setOpen(isOpen: boolean) {
  //   this.isAlertOpen = isOpen;
  // }
  setOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }
submit(){
  console.log('hi')
  if(this.captured&&this.headline&&this.desc&&this.image&&this.cat){
  this.apiService.AddNews(
    this.id='0',
    this.phn,
    this.cat,
    this.headline,
    this.desc,
    this.image,
    this.captured,
  )
  .subscribe(
    (response) => {
      console.log('Registration response:', response);
      if(response.Msg.en=='News Submitted Successfully.')
      {
        console.log('Success!');
      }
    }
    )
  }
  else{
    console.log('Please fill in all required fields.')
     this.setOpen(true)

  }
}
}

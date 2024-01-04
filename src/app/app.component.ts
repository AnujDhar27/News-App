import { ChangeDetectorRef, Component } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { NewslistService } from './services/newslist.service';
register();
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  loader: boolean=false;
  constructor(private common: NewslistService,private ref:ChangeDetectorRef) {}
  ngOnInit(){
    this.common.isLoading.subscribe((res:any) => {
      this.loader = res;
      console.log("App component Loader", this.loader);
      this.ref.detectChanges();
    })
  }
}

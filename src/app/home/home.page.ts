import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public buffer = 0.06;
  public progress = 0;
  constructor() {
    setInterval(() =>{
      this.buffer += 0.06;
      this.progress += 0.06;

      if (this.progress > 1){
        setTimeout(() =>{
          this.buffer = 0.06;
          this.progress = 0;
        },1000);
      }

    },1000);
  }

}

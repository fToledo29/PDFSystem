import { Component, Inject, Input } from '@angular/core';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2';

@Component({
    selector: 'content-component',
   templateUrl: './content.component.html',
//     template: `
//  <li class="text" *ngFor="let item of items | async">
//     <img [src]="item.url" style="max-width:100px;max-height:100px;">
//   </li>
//   `,
    styleUrls: ['./content.component.css']
})
export class ContentComponent  {

  public items: FirebaseListObservable<any[]>;

  constructor(public db: AngularFireDatabase) {
  }
  
  ngOnInit() {
       this.items = this.db.list('/Thumbs');
    }
}





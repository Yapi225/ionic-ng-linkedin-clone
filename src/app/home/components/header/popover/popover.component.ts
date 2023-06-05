import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
  imports: [IonicModule],
  standalone:true
})
export class PopoverComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  onSignOut(){
    console.log(1,'onSignOut() called !');
    
  }
}

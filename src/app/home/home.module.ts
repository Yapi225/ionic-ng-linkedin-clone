import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { ProfileSummaryComponent } from './components/profile-summary/profile-summary.component';
import { StartPostComponent } from './components/start-post/start-post.component';
import { AdvertisingComponent } from './components/advertising/advertising.component';

@NgModule({
  imports: [CommonModule, FormsModule, HomePageRoutingModule, IonicModule],
  declarations: [
    HomePage,
    HeaderComponent,
    ProfileSummaryComponent,
    StartPostComponent,
    AdvertisingComponent,
  ],
})
export class HomePageModule {}

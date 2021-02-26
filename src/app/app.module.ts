import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { IamgesliderswithsidebarComponent } from './iamgesliderswithsidebar/iamgesliderswithsidebar.component';
import { HomeComponent } from './home/home.component';
import { NewwithimagesliderComponent } from './newwithimageslider/newwithimageslider.component';
import { YoutubevideosComponent } from './youtubevideos/youtubevideos.component';
import { PresidentsandmlasectionsComponent } from './presidentsandmlasections/presidentsandmlasections.component';
import { FooterComponent } from './footer/footer.component';
import { AboutussectionComponent } from './aboutussection/aboutussection.component';
import { OurInspirationComponent } from './our-inspiration/our-inspiration.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    IamgesliderswithsidebarComponent,
    HomeComponent,
    NewwithimagesliderComponent,
    YoutubevideosComponent,
    PresidentsandmlasectionsComponent,
    FooterComponent,
    AboutussectionComponent,
    OurInspirationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

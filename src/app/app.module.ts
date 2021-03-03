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
import { AddImageSliderComponent } from './iamgesliderswithsidebar/add-image-slider/add-image-slider.component';
import { EditImageSliderComponent } from './iamgesliderswithsidebar/edit-image-slider/edit-image-slider.component';
import { AddNewsImagesComponent } from './newwithimageslider/add-news-images/add-news-images.component';
import { EditNewsImagesComponent } from './newwithimageslider/edit-news-images/edit-news-images.component';
import { AddNavigationComponent } from './navigation/add-navigation/add-navigation.component';
import { EditNavigationComponent } from './navigation/edit-navigation/edit-navigation.component';
import { OrganizationComponent } from './home/organization/organization.component';
import { ProgrammesComponent } from './home/programmes/programmes.component';
import { DocumentsComponent } from './home/documents/documents.component';
import { MembersComponent } from './home/members/members.component';
import { DonateComponent } from './home/donate/donate.component';
import { MyAlappuzhaComponent } from './home/my-alappuzha/my-alappuzha.component';
import { ContactUsComponent } from './home/contact-us/contact-us.component';
import { GalleryComponent } from './iamgesliderswithsidebar/gallery/gallery.component';
import { MartyrsComponent } from './iamgesliderswithsidebar/martyrs/martyrs.component';
import { CongressSandeshComponent } from './iamgesliderswithsidebar/congress-sandesh/congress-sandesh.component';
import { VolunteerComponent } from './iamgesliderswithsidebar/volunteer/volunteer.component';
import { BloodDonateComponent } from './iamgesliderswithsidebar/blood-donate/blood-donate.component';
import { FrontierOrganizationComponent } from './iamgesliderswithsidebar/frontier-organization/frontier-organization.component';
import { VeekshanamOnlineComponent } from './iamgesliderswithsidebar/veekshanam-online/veekshanam-online.component';
import { IncComponent } from './iamgesliderswithsidebar/inc/inc.component';
import { KpccComponent } from './iamgesliderswithsidebar/kpcc/kpcc.component';
import { FeedBacksComponent } from './iamgesliderswithsidebar/feed-backs/feed-backs.component';
import { LoginComponent } from './login/login.component';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { BannerImagesComponent } from './adminpanel/banner-images/banner-images.component';
import { GalleryImagesComponent } from './adminpanel/gallery-images/gallery-images.component';
import { DccPresidentNewsComponent } from './adminpanel/dcc-president-news/dcc-president-news.component';
import { AlappuzhaNewsComponent } from './adminpanel/alappuzha-news/alappuzha-news.component';
import { DccPresidentsComponent } from './adminpanel/dcc-presidents/dcc-presidents.component';
import { OurMlaComponent } from './adminpanel/our-mla/our-mla.component';
import { OurMpComponent } from './adminpanel/our-mp/our-mp.component';
import { AdminHeaderComponent } from './adminpanel/admin-header/admin-header.component';
import { AdminFooterComponent } from './adminpanel/admin-footer/admin-footer.component';
import { AdminSidebarComponent } from './adminpanel/admin-sidebar/admin-sidebar.component';

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
    OurInspirationComponent,
    AddImageSliderComponent,
    EditImageSliderComponent,
    AddNewsImagesComponent,
    EditNewsImagesComponent,
    AddNavigationComponent,
    EditNavigationComponent,
    OrganizationComponent,
    ProgrammesComponent,
    DocumentsComponent,
    MembersComponent,
    DonateComponent,
    MyAlappuzhaComponent,
    ContactUsComponent,
    GalleryComponent,
    MartyrsComponent,
    CongressSandeshComponent,
    VolunteerComponent,
    BloodDonateComponent,
    FrontierOrganizationComponent,
    VeekshanamOnlineComponent,
    IncComponent,
    KpccComponent,
    FeedBacksComponent,
    LoginComponent,
    AdminpanelComponent,
    BannerImagesComponent,
    GalleryImagesComponent,
    DccPresidentNewsComponent,
    AlappuzhaNewsComponent,
    DccPresidentsComponent,
    OurMlaComponent,
    OurMpComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
    AdminSidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

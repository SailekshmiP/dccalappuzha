import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { AlappuzhaNewsComponent } from './adminpanel/alappuzha-news/alappuzha-news.component';
import { BannerImagesComponent } from './adminpanel/banner-images/banner-images.component';
import { DccPresidentNewsComponent } from './adminpanel/dcc-president-news/dcc-president-news.component';
import { DccPresidentsComponent } from './adminpanel/dcc-presidents/dcc-presidents.component';
import { GalleryImagesComponent } from './adminpanel/gallery-images/gallery-images.component';
import { OurMlaComponent } from './adminpanel/our-mla/our-mla.component';
import { OurMpComponent } from './adminpanel/our-mp/our-mp.component';
import { ContactUsComponent } from './home/contact-us/contact-us.component';
import { DocumentsComponent } from './home/documents/documents.component';
import { DonateComponent } from './home/donate/donate.component';
import { HomeComponent } from './home/home.component';
import { MembersComponent } from './home/members/members.component';
import { MyAlappuzhaComponent } from './home/my-alappuzha/my-alappuzha.component';
import { OrganizationComponent } from './home/organization/organization.component';
import { ProgrammesComponent } from './home/programmes/programmes.component';
import { BloodDonateComponent } from './iamgesliderswithsidebar/blood-donate/blood-donate.component';
import { CongressSandeshComponent } from './iamgesliderswithsidebar/congress-sandesh/congress-sandesh.component';
import { FeedBacksComponent } from './iamgesliderswithsidebar/feed-backs/feed-backs.component';
import { FrontierOrganizationComponent } from './iamgesliderswithsidebar/frontier-organization/frontier-organization.component';
import { GalleryComponent } from './iamgesliderswithsidebar/gallery/gallery.component';
import { IncComponent } from './iamgesliderswithsidebar/inc/inc.component';
import { KpccComponent } from './iamgesliderswithsidebar/kpcc/kpcc.component';
import { MartyrsComponent } from './iamgesliderswithsidebar/martyrs/martyrs.component';
import { VeekshanamOnlineComponent } from './iamgesliderswithsidebar/veekshanam-online/veekshanam-online.component';
import { VolunteerComponent } from './iamgesliderswithsidebar/volunteer/volunteer.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'organization', component: OrganizationComponent },
  { path: 'programes', component: ProgrammesComponent },
  { path: 'Document', component: DocumentsComponent },
  { path: 'Membership', component: MembersComponent },
  { path: 'Donate', component: DonateComponent },
  { path: 'my-alapuzha', component: MyAlappuzhaComponent },
  { path: 'contactus', component: ContactUsComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'volunteer', component: VolunteerComponent },
  { path: 'veekshanam-online', component: VeekshanamOnlineComponent },
  { path: 'martyrs', component: MartyrsComponent },
  { path: 'kpcc', component: KpccComponent },
  { path: 'inc', component: IncComponent },
  { path: 'frontier-organization', component: FrontierOrganizationComponent },
  { path: 'feed-backs', component: FeedBacksComponent },
  { path: 'congress-sandesh', component: CongressSandeshComponent },
  { path: 'blood-donate', component: BloodDonateComponent },
  {path:'login', component:LoginComponent},
  {path:'admin', component:AdminpanelComponent},
  {path:'alappuzhanews', component:AlappuzhaNewsComponent},
  {path:'bannerimages', component:BannerImagesComponent},
  {path:'dcc-presidentnews', component:DccPresidentNewsComponent},
  {path:'dccpresidents', component:DccPresidentsComponent},
  {path:'galleryimages', component:GalleryImagesComponent},
  {path:'ourmla', component:OurMlaComponent},
  {path:'ourmp', component:OurMpComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

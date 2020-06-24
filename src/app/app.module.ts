import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './Components/accueil/accueil.component';
import { ProduitsComponent } from './Components/produits/produits.component';
import { NoschoixComponent } from './Components/noschoix/noschoix.component';
import { LejournalplaneteComponent } from './Components/lejournalplanete/lejournalplanete.component';
import { NoustrouverComponent } from './Components/noustrouver/noustrouver.component';
import { AdminComponent } from './Components/admin/admin.component';
import { DashboardadminComponent } from './Components/admin/dashboardadmin/dashboardadmin.component';
import { PostDetailComponent } from './Components/admin/post-detail/post-detail.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { PostListComponent } from './Components/admin/post-list/post-list.component';
import { SignupComponent } from './Components/admin/signup/signup.component';
import { NouscontacterComponent } from './Components/nouscontacter/nouscontacter.component';
import { MentionlegalComponent } from './Components/mentionlegal/mentionlegal.component';
import { BebeComponent } from './Components/bebe/bebe.component';
import { EnfantComponent } from './Components/enfant/enfant.component';
import { AdulteComponent } from './Components/adulte/adulte.component';
import {Chaussuresdetails1Component} from './Components/chaussuresdetails1/chaussuresdetails1.component';
import {Chaussuresdetails2Component} from './Components/chaussuresdetails2/chaussuresdetails2.component';
import {Chaussuresdetails3Component} from './Components/chaussuresdetails3/chaussuresdetails3.component';
const routes: Routes = [
  {path: 'Articles', component: PostListComponent},
  {path: 'Articles/:id', component: PostDetailComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ProduitsComponent,
    NoschoixComponent,
    LejournalplaneteComponent,
    NoustrouverComponent,
    AdminComponent,
    DashboardadminComponent,
    PostDetailComponent,
    NavbarComponent,
    PostListComponent,
    Chaussuresdetails1Component,
    Chaussuresdetails2Component,
    Chaussuresdetails3Component,
    SignupComponent,
    NouscontacterComponent,
    MentionlegalComponent,
    BebeComponent,
    EnfantComponent,
    AdulteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

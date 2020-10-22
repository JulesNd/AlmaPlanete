import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AccueilComponent} from './Components/accueil/accueil.component';
import {NoschoixComponent} from './Components/noschoix/noschoix.component';
import {ProduitsComponent} from './Components/produits/produits.component';
import {LejournalplaneteComponent} from './Components/lejournalplanete/lejournalplanete.component';
import {NoustrouverComponent} from './Components/noustrouver/noustrouver.component';
import {AdminComponent} from './Components/admin/admin.component';
import {PostListComponent} from './Components/admin/post-list/post-list.component';
import {PostDetailComponent} from './Components/admin/post-detail/post-detail.component';
import {NouscontacterComponent} from './Components/nouscontacter/nouscontacter.component';
import {MentionlegalComponent} from './Components/mentionlegal/mentionlegal.component';
import {BebeComponent} from './Components/bebe/bebe.component';
import {EnfantComponent} from './Components/enfant/enfant.component';
import {AdulteComponent} from './Components/adulte/adulte.component';
import {Chaussuresdetails1Component} from './Components/chaussuresdetails1/chaussuresdetails1.component';
import {Chaussuresdetails2Component} from './Components/chaussuresdetails2/chaussuresdetails2.component';
import {Chaussuresdetails3Component} from './Components/chaussuresdetails3/chaussuresdetails3.component';
import {ConditionsComponent} from './conditions/conditions.component';
import { DansnoschaussuresComponent } from './Components/dansnoschaussures/dansnoschaussures.component';
import { ActionexterieuresComponent } from './Components/actionexterieures/actionexterieures.component';



const routes: Routes = [
  {path: 'Accueil', component: AccueilComponent},
  {path: 'Nos-choix', component: ProduitsComponent},
  {path: 'Produits', component: NoschoixComponent},
  {path: 'Le-Journal-Planète', component: LejournalplaneteComponent},
  {path: 'EtikRose', component: Chaussuresdetails1Component},
  {path: 'EtikBleue', component: Chaussuresdetails2Component},
  {path: 'EtikNoire', component: Chaussuresdetails3Component},
  {path: 'Nous-trouver' , component: NoustrouverComponent},
  {path: 'Admin' , component: AdminComponent},
  {path: 'Le-Journal-Planète', component: PostListComponent},
  {path: 'Le-Journal-Planète/:id', component: PostDetailComponent},
  {path: 'Nous-Contacter', component: NouscontacterComponent},
  {path: 'Mentions-Legales', component: MentionlegalComponent},
  {path: 'Conditions-de-ventes', component: ConditionsComponent},
  {path: 'Ligne-Bébé', component: BebeComponent},
  {path: 'Ligne-Enfant', component: EnfantComponent},
  {path: 'Ligne-Adulte' , component: AdulteComponent},
  {path: 'Dans-nos-chaussures', component: DansnoschaussuresComponent},
  {path: 'Actions-exterieures', component: ActionexterieuresComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {EntryouUiGroupButtonModule} from "@web/entryou/shared/ui";
import {ScoreComponent} from './components/score/score.component';
import {MenuComponent} from './components/menu/menu.component';
import {EntryComponent} from "./components/entry/entry.component";

@NgModule({
  declarations: [HomeComponent, ScoreComponent, MenuComponent, EntryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: HomeComponent,
        children: [
          {path: '', redirectTo: 'score'},
          {path: 'score', component: ScoreComponent},
          {path: 'menu', component: MenuComponent},
          {path: 'entry', component: EntryComponent},
        ]
      }
    ]),
    EntryouUiGroupButtonModule
  ],
})
export class EntryouFeatureClientEntryModule {
}

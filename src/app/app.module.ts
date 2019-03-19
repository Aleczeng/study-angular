import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {AuthorListComponent} from './pages/author/author-list/author-list.component';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {AuthorDetailsComponent} from './pages/author/author-details/author-details.component';
import {DataBindingComponent} from './pages/data-binding/data-binding.component';
import {ServicesModule} from './service/services.module';
import {PagesModule} from './pages/pages.module';
import {PipesComponent} from './pages/pipes-example/pipes.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'author', component: AuthorListComponent},
  {path: 'author/:id/:name', component: AuthorDetailsComponent},
  {path: 'data-binding', component: DataBindingComponent},
  {path: 'pipes', component: PipesComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    PagesModule,
    ServicesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

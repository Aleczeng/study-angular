import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormBuilder, FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {AuthorListComponent} from './pages/author/author-list/author-list.component';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {NavBarComponent} from './pages/nav-bar/nav-bar.component';
import {AuthorModule} from './pages/author/author.module';
import {AuthorService} from './service/author.service';
import {AuthorDetailsComponent} from './pages/author/author-details/author-details.component';
import {DataBindingModule} from './pages/data-binding/data-binding.module';
import {DataBindingComponent} from './pages/data-binding/data-binding.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'author', component: AuthorListComponent},
  {path: 'author/:id/:name', component: AuthorDetailsComponent},
  {path: 'data-binding', component: DataBindingComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    AuthorModule,
    DataBindingModule
  ],
  providers: [AuthorService, FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule {
}

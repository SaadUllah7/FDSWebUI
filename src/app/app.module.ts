import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PackageListComponent } from './package-list/package-list.component';
import { PackageListService } from './package-list/service/package-list.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: '',   redirectTo: '/packagelist', pathMatch: 'full' },
  { path: 'packagelist', component: PackageListComponent },
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    PackageListComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [PackageListService],
  bootstrap: [AppComponent]
})
export class AppModule { }

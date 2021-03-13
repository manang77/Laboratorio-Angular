import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UsersMaintenanceComponent } from './users-maintenance/users-maintenance.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { ImageRotateComponent } from './image-rotate/image-rotate.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'user-profile', component: UserProfileComponent },
  { path: 'users-maintenance', component: UsersMaintenanceComponent },
  { path: 'photo-gallery', component: PhotoGalleryComponent },
  { path: 'image-rotate', component: ImageRotateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

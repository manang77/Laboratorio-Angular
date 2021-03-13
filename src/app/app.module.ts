import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './layout/header/header.component';
import { MaterialModule } from './material-module';
import { MenuComponent } from './layout/menu/menu.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ItemHighlightDirective } from './directives/item-highlight.directive';
import { FormsModule } from '@angular/forms';
import { MatToolbar } from '@angular/material/toolbar';
import { PrivateHeaderComponent } from './layout/private-header/private-header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PrivateMenuComponent } from './layout/private-menu/private-menu.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UsersMaintenanceComponent } from './users-maintenance/users-maintenance.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersAddComponent } from './users-add/users-add.component';
import { UsersEditComponent } from './users-edit/users-edit.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { GalleryButtonsComponent } from './gallery-buttons/gallery-buttons.component';
import { ImageRotateComponent } from './image-rotate/image-rotate.component';
import { RotatImageDirective } from './directives/rotat-image.directive';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    HomeComponent,
    LoginComponent,
    AboutComponent,
    ItemHighlightDirective,
    PrivateHeaderComponent,
    DashboardComponent,
    PrivateMenuComponent,
    UserProfileComponent,
    UsersMaintenanceComponent,
    UsersListComponent,
    UsersAddComponent,
    UsersEditComponent,
    PhotoGalleryComponent,
    GalleryButtonsComponent,
    ImageRotateComponent,
    RotatImageDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

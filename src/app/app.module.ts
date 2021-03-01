import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import {HttpClientModule} from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './Services/user.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetpwdComponent } from './resetpwd/resetpwd.component';
import { AuthService } from './Services/auth.service';
import { HomeComponent } from './home/home.component';
import { ObserviceService } from './Services/observice.service';


const appRoutes: Routes = [
  
  {path: 'user' ,component:UserComponent},
  {path: 'login',component:LoginComponent},
  {path: 'Register',component:RegisterComponent},
  {path : 'resetpwd', component:ResetpwdComponent},
  {path : 'Home', component:HomeComponent},
  {path : '', component:LoginComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    RegisterComponent,
    ResetpwdComponent,
    HomeComponent,
    
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService,AuthService,ObserviceService],
  bootstrap: [AppComponent,]
})
export class AppModule { }

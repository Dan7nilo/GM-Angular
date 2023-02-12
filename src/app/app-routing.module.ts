import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './views/header/header.component';
import { HomeComponent } from './views/home/home.component';
import { FooterComponent } from './views/footer/footer.component';
import { LoginComponent } from './views/login/login.component';
import { BannerComponent } from './views/banner/banner.component';
import { ComprasComponent} from './views/compras/compras.component';
import { LoginpageComponent } from './views/loginpage/loginpage.component';


const routes: Routes = [
{path:"header", component: HeaderComponent},
{path:"", component: HomeComponent},
{path:"footer", component: FooterComponent},
{path:"login", component: LoginComponent},
{path:"banner", component: BannerComponent},
{path:"compras", component: ComprasComponent},
{path:"loginpage", component: LoginpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CatalogComponent } from "./catalog/catalog.component";
import { HomeComponent } from "./home/home.component";
import { PagesComponent } from "./pages.component";
import { ShopSingleComponent } from "./shop-single/shop-single.component";


const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'home', component: HomeComponent },
            { path: 'shop-catalog', component: CatalogComponent },
            { path: 'shop-single', component: ShopSingleComponent },
            { path: '', redirectTo: '/home', pathMatch: 'full' },

        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PagesRoutingModule { }
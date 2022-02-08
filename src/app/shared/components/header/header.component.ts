import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit {

    constructor(
        private _router: Router,
    ) { }

    ngOnInit() { }


    home(){
        this._router.navigate(['/home'])
    }

    shopCatalog(){
        this._router.navigate(['/shop-catalog'])
    }

    shopSingle(){
        this._router.navigate(['/shop-single'])
    }
}
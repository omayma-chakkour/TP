import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { CatalogueService } from '../catalogue.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public products:any;

  constructor(public catalogueService:CatalogueService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(){
    
    this.router.events.subscribe(value => {
      if(value instanceof NavigationEnd){
        let url=value.url;
        console.log(url);
        let p1 = this.route.snapshot.params.p1;
        if(p1==1){
          this.getProducts('/products');
        }else if (p1==2){
          let idCat= this.route.snapshot.params.p2;
          this.getProducts('/categories/'+idCat+'/products');
        }
      }
    });
    let p1= this.route.snapshot.params.p1;
    if(p1==1){
      this.getProducts('/products');
    }
  }

  private getProducts(url:any) {
    this.catalogueService.getResource(url)
      .subscribe(data => {
        this.products = data;
      })


  }  }
import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  data:string="hi welcome to the restuarant"
  placeholderData:string="Search for products"
  productName:string=""
  productList:any=[]

  constructor(private ds:DataService){}

  ngOnInit(): void {
  //  methods are defined here
  this.ds.getProducts().subscribe((data:any)=>{
   this.productList=data
   console.log(this.productList);
   
    
  })
  
  }

  // two way binnding
  method1(){
    alert(this.productName)
    this.productName="hi"
   }
 

}

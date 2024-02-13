import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-view',
  templateUrl: './single-view.component.html',
  styleUrls: ['./single-view.component.css']
})
export class SingleViewComponent  implements OnInit{
  id:any=""
  singleProduct:any={}
 
 constructor(private service:DataService,private route:ActivatedRoute){}


  ngOnInit(): void {
    this.route.params.subscribe((data:any)=>{
     this.id=data.id
    //  console.log(this.id);

    this.service.getProducts().subscribe((response:any)=>{
      console.log(response);
      
      this.singleProduct=response.find((i:any)=>i.id==this.id)
      console.log(this.singleProduct);
      
    })
     
    })
   
  }

}

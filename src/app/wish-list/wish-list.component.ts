import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service'
import { DogBreedModel } from './wish-list.model';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {

  breed: DogBreedModel[] = [];
  dog = [];
  dogBreed;
  constructor(public service: BackendService) { }

  ngOnInit(): void {
    this.service.getDogData().subscribe((res) => {
      this.breed = res["message"];
      //this.dog = JSON.stringify(this.breed);
      console.log("working", this.breed)
      for(let i in this.breed){
        this.dog.push(i)
      }
    });
    
  }

  displayBreedImg(dog: string){
    console.log("name:",this.dogBreed);
    this.service.getBreedImg().subscribe((res) => {
      this.breed = res;      
    });
    
  }
}

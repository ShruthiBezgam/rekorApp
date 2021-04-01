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
  subDogBreed;
  image;
  breedsArray = [];
  option: any;
  show: boolean = false;
  constructor(public service: BackendService) { }

  ngOnInit(): void {
    this.service.getDogData().subscribe((res) => {
      this.breed = res["message"];
      //this.dog = JSON.stringify(this.breed);
      console.log("working", this.breed)
      for (let i in this.breed) {
        this.dog.push(i)
      }
      //this.breedsArray = Object.keys(this.breed);
      //this.breedsArray = res["message"];
      console.log("this.length",this.breed.length) 
       for (let i = 0; i < this.breed.length; i++) {
         this.option = this.breedsArray[i];
        }      
        console.log("this.option",this.option) 
      this.show = true;       
    });

  }

  displayBreedImg(dog: string) {
    console.log("name:", this.dogBreed);
    this.service.getBreedImg(this.dogBreed).subscribe((res) => {
      this.breed = res["message"];
      console.log("this.breed",this.breed) 
      this.image = this.breed;
           
    });
  }
  displaySubBreedImg(subBreed: string) {
    // this.service.getSubBreedImg(this.subDogBreed).subscribe((res) => {
    //   this.breed = res;
    //   console.log("this.subbreed",this.breed) 
    // });   
  }
}

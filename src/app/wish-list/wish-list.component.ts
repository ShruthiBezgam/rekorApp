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
  subDogBreed : String;
  image;
  subBreed = [];
  breedsArray = [];
  
  dogName: any;
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
     
      this.show = false;
    });
  }

  displayBreedImg(dog: string) {
    console.log("name:", this.dogBreed);
    this.service.getBreedImg(this.dogBreed).subscribe((res) => {
      this.breed = res["message"];
      console.log("this.breed", this.breed)
      this.image = this.breed;
    });
  }
  displaySubBreedList(dog: string) {
    console.log("data", dog)
    this.dogName = dog;
    this.show = true;
    console.log(this.show)
    this.service.getSubBreedList(dog).subscribe((res) => {
      this.subDogBreed = res["message"];
      if(this.subDogBreed.length == 0){
        this.displayBreedImg(dog);
        this.show = false;
      }     
    });
  }
  displaySubBreedImg(subBreedName: String){
    console.log("sub breed name:", subBreedName);
    this.service.getSubBreedImg(this.dogName,subBreedName).subscribe((res) => {
      this.breed = res["message"];
      this.image = this.breed;
    });
  }

}

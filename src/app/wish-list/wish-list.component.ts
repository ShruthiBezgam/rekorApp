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
  subBreed = [];
  breedsArray = [];
  breedList= [];

  dogName: any;
  show: boolean = false;
  constructor(public service: BackendService) { }

  ngOnInit(): void {
    this.service.getDogData().subscribe((res) => {
      this.breed = res["message"];
      //this.dog = JSON.stringify(this.breed);
      console.log("Breed Array", this.breed)
      for (let i in this.breed) {
        this.dog.push(i)
      }
      this.show = false;
    });
  }

  displayBreedImg(dog: string) {
    this.service.getBreedImg(this.dogBreed).subscribe((res) => {
      this.breed = res["message"];
      this.image = this.breed;
    });
  }
  displaySubBreedList(dog: string) {
    this.dogName = dog;
    this.show = false;
    this.service.getSubBreedList(dog).subscribe((res) => {
      this.subDogBreed = res["message"];
      if (this.subDogBreed.length > 0) {
        this.subBreed = [];
        for (let i in this.subDogBreed) {
          this.subBreed.push(this.subDogBreed[i])
        }
        this.show = true;
      } else {
        this.displayBreedImg(dog)
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
  //
  getDogList() {
    return this.breedList.slice();
  }

  getDogBreedList(index: number) {
    return this.breedList[index];
  }

  addDogBreedList(dog: string){
    if(dog != '' && dog === dog )
    this.breedList.push(dog);

  }
  deleteBreedList(index: number) {
    this.breedList.splice(index, 1);

  }

}

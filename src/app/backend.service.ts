import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DogBreedModel } from './wish-list/wish-list.model';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private _dogdataUrl: string = "https://dog.ceo/api/breeds/list/all";
  private _breedImgUrl: string =  "https://dog.ceo/api/breed/";
  private _subBreedImgUrl: string = "https://dog.ceo/api/breed/";


  constructor(private http: HttpClient) { }
  //service call to get Dog Breed data
  getDogData(): Observable<DogBreedModel[]> {
    return this.http.get<DogBreedModel[]>(this._dogdataUrl);
  }
  getBreedImg(dog: String): Observable<DogBreedModel[]> {
    const breedImg =  this._breedImgUrl + dog +"/images/random"
    console.log("img",breedImg)
    return this.http.get<DogBreedModel[]>(breedImg);
  }
  getSubBreedList(subBreed: String): Observable<DogBreedModel[]> {
    const subBreedList =  this._subBreedImgUrl + subBreed +"/list"
    console.log("img",subBreedList)
    return this.http.get<DogBreedModel[]>(subBreedList);
  }
  getSubBreedImg(dog: String,subDogBreed: String): Observable<DogBreedModel[]> {
    const subBreedImg =  this._subBreedImgUrl + dog +"/"+ subDogBreed +"/images/random"
    console.log("img",subBreedImg)
    return this.http.get<DogBreedModel[]>(subBreedImg);
  }
}


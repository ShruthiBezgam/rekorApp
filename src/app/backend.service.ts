import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DogBreedModel } from './wish-list/wish-list.model';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private _dogdataUrl: string = "https://dog.ceo/api/breeds/list/all";
  private _breedImgUrl: string =  "https://dog.ceo/api/breed/hound/images";

  constructor(private http: HttpClient) { }
  //service call to get Dog Breed data
  getDogData(): Observable<DogBreedModel[]> {
    return this.http.get<DogBreedModel[]>(this._dogdataUrl);
  }
  getBreedImg(): Observable<DogBreedModel[]> {
    return this.http.get<DogBreedModel[]>(this._breedImgUrl);
  }
}



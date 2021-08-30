import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DigidigitsService {

  constructor(private http: HttpClient) { }

  getDigidigits() {
    return this.http.get("../../assets/data/digidigits.json")
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';



const API_URL = environment.apiURL;
const API_KEY = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class NaujienosService {

skaitomaNaujiena: any;

  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get('https://newsapi.org/v2/top-headlines?country=lt&apiKey=859fabdcaefd4abbaad6774c1e17a44c')
  }
}

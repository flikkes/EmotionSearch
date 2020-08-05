import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmotionService {
  private REST_API_SERVER = "http://localhost:9200";

  constructor(private httpClient: HttpClient) {
  }

  findEmotionsByAlias(alias: String) {
    return this.httpClient.get(this.REST_API_SERVER+"/emotion/_search?q="+alias+"~2");
  }



}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';
import { Data } from '../model/data';


@Injectable({
  providedIn: 'root'
})
export class DataService {
 private dataUrl = 'assets/data/data.json';
  private data$: Observable<Data>;

  constructor(private http: HttpClient) {
    this.data$ = this.http.get<Data>(this.dataUrl);
  }

  // Obtener todo el objeto tipado
  getData(): Observable<Data> {
    return this.data$;
  }

 
}

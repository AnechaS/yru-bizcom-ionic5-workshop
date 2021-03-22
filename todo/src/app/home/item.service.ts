import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Item } from './item.model';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  constructor(private httpClient: HttpClient) {}

  getAll(): Promise<{ results: Array<Item> }> {
    return this.httpClient
      .get<{ results: Array<Item> }>('http://localhost:8080/items')
      .toPromise();
  }

  create(data: object): Observable<Item> {
    return this.httpClient.post<Item>('http://localhost:8080/items', data);
  }

  update(id: number, data: object) {
    return this.httpClient.put<Item>(`http://localhost:8080/items/${id}`, data);
  }

  delete(id: number) {
    return this.httpClient.delete(`http://localhost:8080/items/${id}`);
  }
}

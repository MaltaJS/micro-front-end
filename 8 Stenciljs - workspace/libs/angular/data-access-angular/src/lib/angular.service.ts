import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AngularService {
  private api = '/api/sports';

  constructor(private http: HttpClient) { }

  getSports() {
    return this.http.get(this.api);
  }
}

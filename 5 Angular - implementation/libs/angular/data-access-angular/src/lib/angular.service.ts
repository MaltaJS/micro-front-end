import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AngularService {
  private api = '/api/angular';

  constructor(private http: HttpClient) { }

  getSports() {
    //return this.http.get(this.api);

    return of([{
      id: 1,
      type: 'football',
      start: '2020-12-17T03:24:00',
      home: 'Japan',
      away: 'Venezuela',
      home_odd: '351/1',
      draw_odd: '32/1',
      away_odd: '29/1'
    }, {
      id: 2,
      type: 'football',
      start: '2020-12-17T03:24:00',
      home: 'Japan',
      away: 'Venezuela',
      home_odd: '351/1',
      draw_odd: '32/1',
      away_odd: '29/1'
    }, {
      id: 3,
      type: 'football',
      start: '2020-12-17T03:24:00',
      home: 'Japan',
      away: 'Venezuela',
      home_odd: '351/1',
      draw_odd: '32/1',
      away_odd: '29/1'
    }])
  }
}

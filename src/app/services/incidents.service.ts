import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class IncidentsService {

  endpoints: any;
  constructor(private _http: HttpClient) {
    this.endpoints = environment.endpoints;
  }

  getIncidents() {
    return this._http.get<any>(this.endpoints.getIncidents);
  }

  getFilteredIncidents() {
    return this._http.get<any>(this.endpoints.getFilteredIncidents);
  }
}

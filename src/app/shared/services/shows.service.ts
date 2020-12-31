import { Injectable } from '@angular/core';

import { ShowResult } from '../../core/models/show-results.interface';
import { ShowDetailedInfo } from '../../core/models/show.interface';
import { catchError, map, retry } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpHeaders, HttpClient, HttpResponse, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { API_URLS } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShowsService {

  private headers: HttpHeaders;

  constructor(
    private httpClient: HttpClient
  ) {
    this.headers = new HttpHeaders({});
  }

  searchSerie(query: string): Observable<ShowResult[]> {
    const params = new HttpParams().set('q', query);
    return this.httpClient
      .get(API_URLS.search, { headers: this.headers, params })
      .pipe(
        map((response: HttpResponse<ShowResult[]>) => {
          return response as unknown as ShowResult[];
        }),
        retry(2),
        catchError((error: any) => this.handleError(error))
      );
  }

  getShow(id: number) {
    return this.fetchShow(id)
  }

  fetchShow(id: number): Observable<ShowDetailedInfo> {
    return this.httpClient
      .get(API_URLS.shows + '/' + id)
      .pipe(
        map((response: HttpResponse<ShowDetailedInfo>) => {
          return response as unknown as ShowDetailedInfo;
        }),
        retry(2),
        catchError((error: any) => this.handleError(error))
      );
  }

  private handleError(error: any) {
    if (error instanceof HttpErrorResponse) {
      return throwError(error.message || 'backend server error');
    }
    return throwError(error || 'backend server error');

  }
}

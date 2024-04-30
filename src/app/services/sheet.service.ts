import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Sheet } from '../models/sheet.model';

@Injectable({
  providedIn: 'root'
})
export class SheetService {

  constructor(private http: HttpClient) { }

  createSheet(
    fullname: string,
    email: string,
    mobile: string,
    timeZone: string,
    courseName: string,
  ): Observable<Sheet> {
    return this.http.post<Sheet>(`${environment.CONNECTION_URL}`, {
      fullname, email, mobile, timeZone, courseName
    });
  }
}

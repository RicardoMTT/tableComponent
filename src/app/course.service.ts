import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http:HttpClient) { }

  getCourses() {
    return this.http.get('https://run.mocky.io/v3/6fa6e26d-a9f7-4d17-8546-017237d68e14');
  }
}

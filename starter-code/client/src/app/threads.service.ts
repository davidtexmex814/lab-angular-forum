import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs";
import 'rxjs/add/operator/map';

@Injectable()
export class ThreadsService {
  BASE_URL: string = "http://localhost:3000";

  constructor(private http: Http) {}

  getThreads() {
    return this.http.get(`${this.BASE_URL}/api/threads`)
  }
}
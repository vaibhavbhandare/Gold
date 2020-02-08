import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';


@Injectable()

export class ObService {

  private url: string = 'http://localhost:3000/post'
  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {                   // get all data
    return this.http.get(this.url);

  }

  postCustomer(customer): Observable<any> {        // save data
    return this.http.post(this.url, customer);
  }

  deleteCustomer(id): Observable<any> {           // delete data

    return this.http.delete(this.url + '/' + id);
  }

  putcustomer(update): Observable<any>              // update data
  {
    return this.http.put(this.url + '/' + update.id, update)
  }

}
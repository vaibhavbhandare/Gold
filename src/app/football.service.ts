import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class FootballService {

  private FootUrl: string = "http://localhost:3000/post";
  constructor(private http: HttpClient) {
    
  }

  readdata(){
    return  this.getAllData().subscribe(data=>{
      return this.data = data
    })
  }

  public data:any=[]
  getAllData(): Observable<any> {
    return this.http.get(this.FootUrl)
  }

  postData(data): Observable<any> {
    return this.http.post(this.FootUrl, data)
  }

  deletedata(id): Observable<any> {
    return this.http.delete(this.FootUrl + '/' + id);
  }

  updatedata(value):Observable<any>{
    return this.http.put(this.FootUrl+'/'+value.id , value)
  }
}

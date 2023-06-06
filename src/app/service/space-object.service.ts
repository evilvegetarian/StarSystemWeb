import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SpaceObject } from 'src/app/models/space-object';


@Injectable({
  providedIn: 'root'
})
export class SpaceObjectService {
  private baseApiUrl:string;
  constructor(private http:HttpClient,
    @Inject('Base_Url') private  ApiUrl:string) {
      this.baseApiUrl=this.ApiUrl+ "SpaceObjects"
    }

    getSpaceObjects() : Observable<SpaceObject[]> {
      return this.http.get<SpaceObject[]>(this.baseApiUrl)
    }

    getSpaceObject(id: number): Observable<SpaceObject> {
      return this.http.get<SpaceObject>(`${this.baseApiUrl}/${id}`);
    }

    addSpaceObject(spaceObject:SpaceObject):Observable<SpaceObject>{
        return this.http.post<SpaceObject>(this.baseApiUrl,spaceObject)
    }

    updateSpaceObject(spaceObject: SpaceObject): Observable<void> {
      return this.http.put<void>(`${this.baseApiUrl}/${spaceObject.id}`, spaceObject);
    }

    deleteSpaceObject(id: number): Observable<void> {
      return this.http.delete<void>(`${this.baseApiUrl}/${id}`);
    }
  }    


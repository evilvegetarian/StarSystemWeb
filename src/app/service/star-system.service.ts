import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StarSystem } from 'src/app/models/star-system';

@Injectable({
  providedIn: 'root'
})
export class StarSystemService {

  private baseApiUrl:string;

  constructor(private http:HttpClient,
    @Inject('Base_Url') private readonly ApiUrl:string) {
      this.baseApiUrl=this.ApiUrl+"StarSystems"
    }
        
    getStarSystems() : Observable<StarSystem[]> {
      return this.http.get<StarSystem[]>(this.baseApiUrl)
    }

    getStarSystem(id: number): Observable<StarSystem> {
      return this.http.get<StarSystem>(`${this.baseApiUrl}/${id}`);
    }

    addStarSystems(starsystem:StarSystem):Observable<StarSystem>{
        return this.http.post<StarSystem>(this.baseApiUrl,starsystem)
    }

    updateStarSystem(starSystem: StarSystem): Observable<void> {
      return this.http.put<void>(`${this.baseApiUrl}/${starSystem.id}`, starSystem);
    }

    deleteStarSystem(id: number): Observable<void> {
      return this.http.delete<void>(`${this.baseApiUrl}/${id}`);
    }
}

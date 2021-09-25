import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IBase} from "@web/websites/shared/model";

export abstract class StrapiService<T extends IBase> {

  protected constructor(private http: HttpClient, private basePath: string) {
  }

  getSingle(path?: string): Observable<T> {
    return this.http.get<T>(`${this.basePath}/${path}`, {observe: "body"});
  }
}

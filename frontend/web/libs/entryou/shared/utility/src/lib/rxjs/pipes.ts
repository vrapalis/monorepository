import {map, Observable} from "rxjs";

export function getClientEntryId() {
  return function (source: Observable<string>) {
    return source.pipe(
      map((url: string) => url.split('/client/entries/')[1]),
      map(id => id !== undefined ? id : null)
    );
  }
}

import {filter, map, Observable} from "rxjs";

export function getRouterParam(routerParamName: string) {
  return function <T>(source: Observable<T>) {
    return source
      .pipe(
        // @ts-ignore
        filter(params => params[routerParamName] !== null),
        // @ts-ignore
        map(param => param[routerParamName])
      );
  }
}

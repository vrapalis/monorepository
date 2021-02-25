import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectAuthUserState, State, tryToSignInAction } from '@web-browser/shared/auth/state';
import { map } from 'rxjs/operators';
import { UserModel } from '@web-browser/shared/auth/model';

export abstract class AbstractGuardService {
  isAuth$: Observable<boolean>;

  // TODO DISPATCH ACTION ONLY ONCE AND NOT IF SERVICE IS CREATED (NOT IN THE CONSTRUCTOR MAYBE)
  protected constructor(state: Store<State>) {
    state.dispatch(tryToSignInAction());
    this.isAuth$ = state.select(selectAuthUserState)
      .pipe(
        map(this.isUserAuthenticated)
      );
  }

  isUserAuthenticated = (user: UserModel): boolean => {
    if (user.email == null) {
      return false;
    }
    return true;
  };
}

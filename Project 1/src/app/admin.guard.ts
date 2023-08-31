import { ActivatedRouteSnapshot, CanActivateFn } from '@angular/router';

export const adminGuard: CanActivateFn = (route, state) => {
  const isAdmin = true;

  if (isAdmin) {
    return true;
  } else {
    return false;
  }

};

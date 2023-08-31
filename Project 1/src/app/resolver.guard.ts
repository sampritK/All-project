import { CanActivateFn, Resolve } from '@angular/router';
import { any } from 'cypress/types/bluebird';

export const resolverGuard: Resolve<any> = (route, state) => {
  return true;
};

export class HeroResolver implements Resolve<any> {
  constructor(private service: resolvreGuard) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Hero>|Promise<Hero>|Hero {
    return this.service.getHero(route.paramMap.get('id'));
  }
}
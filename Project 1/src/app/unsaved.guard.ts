import { CanDeactivateFn } from '@angular/router';
import { ClientComponent } from './client/client.component';

export const unsavedGuard: CanDeactivateFn<ClientComponent> = (component, currentRoute, currentState, nextState) => {
  if(component.isDirty)
  {
    return window.confirm(" Are you sure to leave this page??")
  }
  return true;
};

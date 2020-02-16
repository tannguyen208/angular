import { Injectable } from '@angular/core';

import { Map } from 'ol';

@Injectable({ providedIn: 'root' })
export class OpenLayersService {
  map$: Map;

  constructor() {}

  createMap(): void {
    this.map$ = new Map({});
  }

  get map(): Map {
    return this.map$;
  }
}

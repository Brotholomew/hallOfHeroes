import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsoleService {

  log: string[] = [];

  constructor() { }
}

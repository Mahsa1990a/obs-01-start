import { Injectable, EventEmitter } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({ providedIn: 'root' }) //providedIn: 'root' => INSTEAD OF ADDING IT INSIDE PROVIDERS IN APP.MODULE
export class UserService {
  // activatedEmmiter = new EventEmitter<boolean>(); UPDATE with subject:
  activatedEmmiter = new Subject<boolean>();
}

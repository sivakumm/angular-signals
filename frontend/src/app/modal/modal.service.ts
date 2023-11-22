import { Injectable, Signal, signal } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ModalService {

  private _isOpened = signal(false);

  constructor() {
  }

  open(): void {
    this._isOpened.set(true);
  }

  close(): void {
    this._isOpened.set(false);
  }

  isOpened(): Signal<boolean> {
    return this._isOpened.asReadonly();
  }
}

import { Injectable, Signal, signal } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ModalService {

  private opened = signal(false);
  private title = signal("");
  private content = signal("");

  open(): void {
    this.opened.set(true);
  }

  close(): void {
    this.opened.set(false);
    this.title.set("");
    this.content.set("");
  }

  isOpened(): Signal<boolean> {
    return this.opened.asReadonly();
  }

  getTitle(): Signal<string> {
    return this.title.asReadonly();
  }

  getContent(): Signal<string> {
    return this.content.asReadonly();
  }

  setTitle(title: string): void {
    this.title.set(title);
  }

  setContent(content: string): void {
    this.content.set(content);
  }
}

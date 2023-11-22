import { ChangeDetectionStrategy, Component, HostListener, Signal } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ModalService } from "./modal.service";

@Component({
  selector: "app-modal",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./modal.component.html",
  styleUrl: "./modal.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalComponent {

  isOpened: Signal<boolean>;

  constructor(private modalService: ModalService) {
    this.isOpened = this.modalService.isOpened();
  }

  @HostListener("document:keydown.ESC")
  closeModal(): void {
    this.modalService.close();
  }
}

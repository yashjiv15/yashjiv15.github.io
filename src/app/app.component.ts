import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Portfolio';
  email = "yashjiv1502@gmail.com";
  modalOpen = [false, false, false,false,false,false,false, false,false]; // Array to keep track of modal states

  openModal(event: MouseEvent, index: number) {
    event.preventDefault();
    this.modalOpen[index] = !this.modalOpen[index]; // Toggle modal state
  }

  closeModal(index: number) {
    this.modalOpen[index] = false; // Close the modal
  }
  downloadCV() {
    const link = document.createElement('a');
    link.href = 'assets/pdf/Yash-Cv.pdf';
    link.download = 'Yash-Cv.pdf';
    link.click();
  }

}

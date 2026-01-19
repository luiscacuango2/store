import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';


import { Counter } from "../../../shared/components/counter/counter";
import { WaveAudio } from "../../components/wave-audio/wave-audio";

@Component({
  selector: 'app-about',
  imports: [CommonModule, Counter, WaveAudio],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  duration = signal(1000);
  message = signal('Hola');

  changeDuration(event: Event) {
    const input = event.target as HTMLInputElement;
    this.duration.set(Number(input.value));
  }

  changeMessage(event: Event) {
    const input = event.target as HTMLInputElement;
    this.message.set(input.value);
  }


}

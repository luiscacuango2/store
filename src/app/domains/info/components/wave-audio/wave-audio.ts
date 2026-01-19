import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import WaveSurfer from 'wavesurfer.js';

@Component({
  selector: 'app-wave-audio',
  imports: [CommonModule],
  templateUrl: './wave-audio.html',
  styleUrl: './wave-audio.css',
})
export class WaveAudio {
  @Input({required: true}) audioUrl = '';
  @ViewChild('wave') container!: ElementRef;

  ngAfterViewInit() {
    const wave = WaveSurfer.create({
      url: this.audioUrl,
      container: this.container.nativeElement,
      waveColor: 'violet',
      progressColor: 'purple'
    });
    wave.load('https://www.kozco.com/tech/piano2-CoolEdit.mp3');
  }
}

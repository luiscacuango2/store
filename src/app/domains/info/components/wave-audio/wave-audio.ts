import { Component, ElementRef, Input, signal, ViewChild } from '@angular/core';
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
  private waveSurfer!: WaveSurfer;
  isPlaying = signal(false);

  ngAfterViewInit() {
    this.waveSurfer = WaveSurfer.create({
      url: this.audioUrl,
      container: this.container.nativeElement,
      waveColor: '#4F4A85',
      progressColor: '#383351',
    });
    // Escuchamos los eventos de WaveSurfer para sincronizar nuestro Signal
    this.waveSurfer.on('play', () => {
      this.isPlaying.set(true);
    });
    this.waveSurfer.on('pause', () => {
      this.isPlaying.set(false);
    });
  }

  ngOnDestroy() {
    this.waveSurfer.destroy();
  }

  playPause() {
    this.waveSurfer.playPause();
  }
}
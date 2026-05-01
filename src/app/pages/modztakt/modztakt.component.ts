import { Component } from '@angular/core';

type DetailBlock = {
  title: string;
  text: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
};

@Component({
  standalone: true,
  selector: 'app-modztakt',
  templateUrl: './modztakt.component.html',
  styleUrl: './modztakt.component.css',
})
export class ModztaktComponent {

  sections: DetailBlock[] = [
    {
      title: 'LFO ENGINE',
      text: 'LFO with Sine, Saw, Square and Random waveforms. \n Bipolar, Invert Phase and One-shot cycle options. \nSyncable to MIDI clock or Host clock. \nLFO can be send to up to 3 independant destination routes. A destination route is a pair of MIDI channel and CC number. \nLFO can be shaped by Envelope Generator.\n LFO note-On restart, note-Off stop',
      image: 'assets/modztakt-lfo.png',
      imageAlt: 'LFO interface',
    },
    {
      title: 'ENVELOPE GENERATOR',
      text: 'A.H.D.S.R ENVELOPE with Log, Exponential and Linear curves. \n Envelope Attack and Release with "Long" option for long pad textures. \nEnvelope can be send to up to 3 independant destination routes. A destination route is a pair of MIDI channel and CC number. \n Envelope Follower available on standalone Linux version: Envelope can be driven from audio from Tracks 1-12. \nEnvelope can also modulate the LFO depth and rate',
      image: 'assets/modztakt-eg.png',
      imageAlt: 'Middle part of the ModzTakt interface',
      // reverse: true,
    },
    {
      title: 'MIDI NOTES DELAY',
      text: 'MIDI NOTES DELAY can be synced to MIDI or Host clock. Delay lines can be send to up to 3 independant MIDI channels. \n Echoed notes can be muted/unmuted using per-route step sequencers. \n Delay notes can be transposed and shaped by Envelope. \n Delay Auto-pan',
      image: 'assets/modztakt-delay.png',
      imageAlt: 'Right part of the ModzTakt interface',
    },
    {
      title: 'OVERBRIDGE AUDIO RECORDER',
      text: 'For the Linux OB standalone build only, the app can record OverBridge audio channels and expose a monitoring area for the tracks. \nSee README to setup the required permissions and to install "libusb" library needed for this mode.',
      image: 'assets/modztakt-recorder.png',
      imageAlt: 'Bottom recorder section of the ModzTakt interface',
      reverse: true,
    },
  ];
}

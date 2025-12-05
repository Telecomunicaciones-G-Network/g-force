export class Sounder {
  private readonly audio: HTMLAudioElement | null;

  constructor(audioUrl: string) {
    if (!audioUrl) return;
    this.audio = new Audio(audioUrl);
  }

  public playAudio() {
    if (!this.audio) return;

    this.audio.play().catch((error) => {
      if (error.name === 'NotAllowedError') return;

      console.error('Error playing audio:', error);
    });
  }
}

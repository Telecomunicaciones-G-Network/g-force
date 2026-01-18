/**
 * Sounder class
 *
 * This class is used to play audio files.
 */
export class Sounder {
  private readonly audio: HTMLAudioElement | null;

  /**
   * Constructor
   *
   * @param audioUrl - The URL of the audio file to play
   */
  constructor(audioUrl: string) {
    if (!audioUrl) {
      console.warn('Audio URL is required for Sounder class constructor');

      return;
    }

    this.audio = new Audio(audioUrl);
  }

  /**
   * Play audio
   *
   * This method plays the audio file.
   */
  public playAudio() {
    if (!this.audio) {
      console.warn(
        'Audio is not initialized for Sounder class playAudio method',
      );

      return;
    }

    this.audio.play().catch((error) => {
      if (error.name === 'NotAllowedError') {
        console.warn('Audio is not allowed to play');

        return;
      }

      console.error('Error playing audio:', error);
    });
  }
}

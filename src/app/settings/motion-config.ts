export class MotionConfig {
  recordMotion: boolean;
  captureWidth: string;
  captureHeight: string;
  captureFrameRate: number;
  captureBrightness: number;
  captureContrast: number;
  imageQuality: string;

  constructor(recordMotion?: boolean, captureWidth?: string, captureHeight?: string, captureFrameRate?: number,
              captureBrightness?: number, captureContrast?: number, imageQuality?: string) {
    this.recordMotion = recordMotion;
    this.captureWidth = captureWidth;
    this.captureHeight = captureHeight;
    this.captureFrameRate = captureFrameRate;
    this.captureBrightness = captureBrightness;
    this.captureContrast = captureContrast;
    this.imageQuality = imageQuality;
  }
}

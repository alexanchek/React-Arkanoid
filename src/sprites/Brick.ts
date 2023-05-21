import { IVector } from '../interfaces/Vector.interface';

export class Brick {
  private brickImage: HTMLImageElement = new Image();

  constructor(
    private brickWidth: number,
    private brickHeight: number,
    private position: IVector,
    private brickEnergy: number,
    image: string,
  ) {
    this.brickWidth = brickWidth;
    this.brickHeight = brickHeight;
    this.position = position;
    this.brickEnergy = brickEnergy;
    this.brickImage.src = image;
  }

  // GETTERS
  get width(): number {
    return this.brickWidth;
  }

  get height(): number {
    return this.brickHeight;
  }

  get pos(): IVector {
    return this.position;
  }

  get image(): HTMLImageElement {
    return this.brickImage;
  }

  get energy(): number {
    return this.brickEnergy;
  }

  set energy(energy: number) {
    this.brickEnergy = energy;
  }
}
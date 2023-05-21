import { IVector } from '../interfaces/Vector.interface';

export class Ball {
  private ballImage: HTMLImageElement = new Image();
  private ballSpeed: IVector;

  constructor(
    speed: number,
    private ballSize: number,
    private position: IVector,
    image: string,
  ) {
    this.ballImage.src = image,
    this.ballSize = ballSize;
    this.ballSpeed = {
      x: speed,
      y: -speed,
    };
    this.position = position;
  }

  get pos() {
    return this.position;
  }

  get image() {
    return this.ballImage;
  }

  get width() {
    return this.ballSize;
  }

  get height() {
    return this.ballSize;
  }

  changeYDirection() {
    this.ballSpeed.y = -this.ballSpeed.y;
  }

  changeXDirection() {
    this.ballSpeed.x = -this.ballSpeed.x;
  }

  moveBall() {
    this.pos.x += this.ballSpeed.x;
    this.pos.y += this.ballSpeed.y;
  }
}
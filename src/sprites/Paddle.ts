import { IVector } from '../interfaces/Vector.interface';

export class Paddle {
  private paddleImage: HTMLImageElement = new Image();
  private moveLeft: boolean;
  private moveRight: boolean;

  constructor (
    private speed: number,
    private paddleWidth: number,
    private paddleHeight: number,
    private position: IVector,
    image: string,
  ) {
    this.speed = speed;
    this.paddleHeight = paddleHeight;
    this.position = position;
    this.moveLeft = false;
    this.moveRight = false;
    this.paddleImage.src = image;

    document.addEventListener('keydown', this.handleKeyDown)
    document.addEventListener('keyup', this.handleKeyUp)
  }

  // Event listeners
  get width() {
    return this.paddleWidth;
  }

  get height () {
    return this.paddleHeight;
  }

  get pos(): IVector {
    return this.position;
  }

  get image() {
    return this.paddleImage
  }

  get isMovingLeft() {
    return this.moveLeft;
  }

  get isMovingRight() {
    return this.moveRight;
  }

  movePaddle() {
    if (this.moveLeft) {
      this.pos.x -= this.speed;
    }

    if (this.moveRight) {
      this.pos.x += this.speed;
    }
  }

  handleKeyUp = (e: KeyboardEvent) => {
    if (e.code === 'ArrowLeft' || e.key === 'ArrowLeft') {
      this.moveLeft = false;
    } 

    if (e.code === 'ArrowRight' || e.key === 'ArrowRight') {
      this.moveRight = false;
    }
  }

  handleKeyDown = (e: KeyboardEvent) => {
    if (e.code === 'ArrowLeft' || e.key === 'ArrowLeft') {
      this.moveLeft = true;
    }

    if (e.code === 'ArrowRight' || e.key === 'ArrowRight') {
      this.moveRight = true;
    }
  }
}
/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite3 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("dn", "./Sprite3/costumes/dn.svg", {
        x: 8.985915492957616,
        y: 7.533333333333275
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite3/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(-250, -200);
    this.clearPen();
    this.penDown = true;
    while (true) {
      this.penSize = 500 / this.stage.vars.resolution;
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    this.penColor = Color.rgb(75, 195, 255);
    while (true) {
      yield* this.sky();
      yield* this.sky();
      yield* this.sky();
      yield* this.sky();
      yield* this.sky();
      yield* this.sky();
      yield* this.sky();
      yield* this.sky();
      yield* this.sky();
      yield* this.sky();
      yield* this.sky();
      yield* this.sky();
      yield* this.sky();
      yield* this.sky();
      yield* this.sky();
      yield* this.sky();
      yield* this.sky();
      yield* this.sky();
      yield* this.sky();
      yield* this.sky();
      yield* this.sky();
      yield* this.sky();
      yield* this.sky();
      yield* this.sky();
      yield* this.sky();
      yield* this.sky();
      yield* this.sky();
      yield* this.sky();
      yield* this.sky();
      yield* this.sky();
      yield* this.sky();
      yield* this.sky();
      yield* this.sky();
      yield* this.sky();
      yield* this.sky();
      yield* this.sky();
      yield* this.sky();
      yield* this.sky();
      yield* this.sky();
      yield* this.sky();
      yield* this.sky();
      yield* this.sky();
      yield* this.sky();
      yield* this.sky();
      yield* this.sky();
      yield* this.sky();
      yield* this.sky();
      yield* this.sky();
      yield* this.sky();
      yield* this.sky();
      yield* this.sky();
      yield* this.sky();
      yield;
    }
  }

  *sky() {
    if (this.stage.costumeNumber == 5) {
      this.x += 500 / this.stage.vars.resolution;
      if (this.x > 240) {
        this.y += 400 / this.stage.vars.resolution;
        this.x = -240;
        if (this.y < 180) {
          this.penColor.h += 15 / this.stage.vars.resolution;
          this.penColor.s += 30 / this.stage.vars.resolution;
        } else {
          this.y = -200;
          this.penColor = Color.rgb(75, 195, 255);
        }
      }
    }
  }
}

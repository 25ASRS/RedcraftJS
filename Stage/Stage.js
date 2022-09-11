/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Loading screen", "./Stage/costumes/Loading screen.svg", {
        x: 243,
        y: 185.18418201516795
      }),
      new Costume("Start UI1", "./Stage/costumes/Start UI1.svg", {
        x: 243,
        y: 181.00000201516795
      }),
      new Costume("SinglePlayerUI1", "./Stage/costumes/SinglePlayerUI1.svg", {
        x: 241.50000000000006,
        y: 178.99999999999997
      }),
      new Costume("Settings", "./Stage/costumes/Settings.svg", {
        x: 241.44329896907215,
        y: 180.00000000000003
      }),
      new Costume("Play", "./Stage/costumes/Play.svg", { x: 0, y: 0 })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4)
    ];

    this.vars.myVariable = 0;
    this.vars.loadPart = 143;
    this.vars.loadAmount = 20;
    this.vars.loading = 100;
    this.vars.maxFramerate = 300;
    this.vars.time = 0;
    this.vars.frames = 216;
    this.vars.fps = 312;
    this.vars.resolution = 500;

    this.watchers.loading = new Watcher({
      label: "Loading...",
      style: "slider",
      visible: false,
      value: () => this.vars.loading,
      setValue: value => {
        this.vars.loading = value;
      },
      x: 388,
      y: -38
    });
    this.watchers.maxFramerate = new Watcher({
      label: "Max Framerate",
      style: "slider",
      visible: true,
      value: () => this.vars.maxFramerate,
      setValue: value => {
        this.vars.maxFramerate = value;
      },
      x: 240,
      y: 180
    });
    this.watchers.fps = new Watcher({
      label: "FPS",
      style: "normal",
      visible: true,
      value: () => this.vars.fps,
      x: 629,
      y: -158
    });
    this.watchers.resolution = new Watcher({
      label: "Resolution",
      style: "slider",
      visible: true,
      value: () => this.vars.resolution,
      setValue: value => {
        this.vars.resolution = value;
      },
      x: 240,
      y: 145
    });
  }

  *whenGreenFlagClicked() {
    this.watchers.loading.visible = true;
    /* TODO: Implement looks_switchbackdroptoandwait */ null;
    yield* this.wait(1 / this.vars.maxFramerate);
    while (true) {
      if (this.vars.loading == 100 && this.stage.costumeNumber == 1) {
        /* TODO: Implement looks_switchbackdroptoandwait */ null;
        this.watchers.loading.visible = false;
      }
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    this.vars.loadPart = 0;
    this.vars.loadAmount = 20;
    while (true) {
      this.vars.loadPart += 1;
      if (this.vars.loadPart < this.vars.loadAmount + 1) {
        this.vars.loading = (this.vars.loadPart / this.vars.loadAmount) * 100;
      }
      yield* this.wait(1 / this.vars.maxFramerate);
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    while (true) {
      if (this.timer > 1) {
        this.vars.fps = this.vars.frames;
        this.vars.frames = 0;
        this.restartTimer();
      } else {
        this.vars.frames += 1;
        if (this.vars.maxFramerate > this.vars.fps && this.keyPressed("o")) {
          this.vars.maxFramerate = this.vars.fps;
        }
      }
      yield;
    }
  }

  *whenGreenFlagClicked4() {
    while (!(this.timer < 1)) {
      yield;
    }
    yield* this.wait(0.05);
    this.vars.maxFramerate = this.vars.fps;
  }
}

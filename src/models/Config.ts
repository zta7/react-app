/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable class-methods-use-this */

class PlayMode {
  len = 2
  value = 0
  next() {
    if (this.value + 1 <= this.len) this.value += 1
    else this.value = 0
  }
}

type TooglePropKeys = {
   isShuffling: boolean
}

type QueuePropKeys = {
  playingMode: PlayMode
}

export class Config {
  @observable isShuffling = false
  @observable playingMode = 0

  @action
  toogle(prop: keyof TooglePropKeys) {
    this[prop] = !this[prop]
  }

  @action
  next(prop: keyof QueuePropKeys) {
    this[prop] += 1
    console.log(this[prop])
  }

  constructor() {
    makeObservable(this)
  }
}

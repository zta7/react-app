/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
import {
  types,
} from 'mobx-state-tree'

type TooglePropKeys = {
  isShuffling: boolean
}

type PropKeys = {
 playingMode: number
 volume: number
 nowPlayingMusicId: string
}

const app = types
  .model('app', {
    a: true,
    isShuffling: false,
    playingMode: 0,
    volume: 0,
    nowPlayingMusicId: '',
  })
  .actions((self) => ({
    toogle(k: keyof TooglePropKeys) {
      self[k] = !self[k]
    },

    set(tuple: [keyof PropKeys, string | number]) {
      const [k, v] = tuple
      if (typeof v === typeof self[k]) self[k] = v
    },
  }))

export default app

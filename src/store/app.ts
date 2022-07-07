/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
import {
  types,
} from 'mobx-state-tree'

const app = types
  .model('app', {
    a: true,
  })
  .actions((self) => ({
    toogle(k: 'a') {
      self[k] = !self[k]
    },
  }))

export default app

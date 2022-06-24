export class Music {
  id = Math.random();
  title = 'Blank Account'
  album = 'Issa Album'
  artists = ['21 Savage']

  @observable during = 50000
  @observable finished = false

  constructor() {
    setInterval(() => {
      this.id += 1;
    }, 1000);
  }
}

export class MusicList {
  @observable list = []
  @computed get unfinishedTodoCount() {
    return 1
  }
}
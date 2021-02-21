import MainStore from './Main';


class RootStore {
  constructor() {
    this.storeMain = new MainStore(this);
  }
}

export default RootStore;
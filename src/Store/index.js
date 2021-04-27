import MainStore from './Main';
import ItemStore from './Item';


class RootStore {
  constructor() {
    this.storeMain = new MainStore(this);
    this.storeItem = new ItemStore(this);
  }
}

export default RootStore;
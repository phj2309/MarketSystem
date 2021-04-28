import MainStore from './Main';
import ItemStore from './Item';
import ChatStore from './Chat';


class RootStore {
  constructor() {
    this.storeMain = new MainStore(this);
    this.storeItem = new ItemStore(this);
    this.storeChat = new ChatStore(this);
  }
}

export default RootStore;
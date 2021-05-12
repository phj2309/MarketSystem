import { observable, action } from 'mobx';

export default class Main {

  @observable
  menu = 'main';

  @observable
  isLogin = false;
  
	@observable
	visible = true;

  @observable
  id = '';

  @observable
	name = '';
	
	@observable
	userIdx = -1;

  @observable
  stompClient = null;

  @action login = (id, name, userIdx) => {
    this.isLogin = true;
    this.id = id;
    this.name = name;
    this.userIdx = userIdx;
  }

  @action logout = () => {
    this.isLogin = false;
    this.id = '';
    this.name = '';
  }
	

	@action setVisible = (visible) => {
		this.visible = visible;
  }
  
  @action setMenu = (menu) => {
    this.menu = menu;
  }

  @action setStomp = (stompClient) => {
    this.stompClient = stompClient;
  }

}

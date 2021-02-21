import { observable, action } from 'mobx';

export default class Main {

  @observable
  menu = 'main';
  
	@observable
	visible = true;
	

	@action setVisible = (visible) => {
		this.visible = visible;
  }
  
  @action setMenu = (menu) => {
    this.menu = menu;
  }

}

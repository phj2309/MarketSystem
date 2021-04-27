import { observable, action } from 'mobx';

export default class Item {
    @observable
    selectItem = null;

    @action setSelectItem = (item) => {
        this.selectItem = item;
    }

}
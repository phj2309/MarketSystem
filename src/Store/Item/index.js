import { observable, action } from 'mobx';

export default class Item {
    @observable
    selectItem = null;

    @observable
    itemUserIdx = null;

    @action setSelectItem = (item) => {
        this.selectItem = item;
    }

    @action setItemUserIdx = (idx) => {
        this.itemUserIdx = idx;
    }

}
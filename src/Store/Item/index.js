import { observable, action } from 'mobx';

export default class Item {
    @observable
    selectItem = null;

    @observable
    itemUserIdx = null;

    @observable
    editItemIdx = '';

    @action setSelectItem = (item) => {
        this.selectItem = item;
    }

    @action setItemUserIdx = (idx) => {
        this.itemUserIdx = idx;
    }

    @action setEditItemIdx = (idx) => {
        this.editItemIdx = idx;
    }

}
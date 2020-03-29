import TreeViewItemValue from './TreeViewItemValue.vue';
import TreeViewItem from './TreeViewItem.vue';
import TreeView from './TreeView.vue';
import VueInputAutowidth from 'vue-input-autowidth'

export default function install(Vue) {
	Vue.use(VueInputAutowidth)
	Vue.component('tree-view-item-value', TreeViewItemValue);
	Vue.component('tree-view-item', TreeViewItem);
	Vue.component('tree-view', TreeView);
}

export { TreeView };

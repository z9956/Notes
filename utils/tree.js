/**
 * 转一维数组
 */
const readNodes = (tree = [], results = []) => {
	for (let item of tree) {
		results.push(item);
		if (item.children && item.children.length) readNodes(item.children);
	}
};

const getTreeItem = (tree = [], id) => {
	for (let item of tree) {
		if (item.id === id) return item;

		if (item.children && item.children.length) {
			const result = getTreeItem(item.children, id);

			if (result) return result;
		}
	}
	return null;
};

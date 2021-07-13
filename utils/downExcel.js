/**
 * 前端下载表格
 * @param  {Array} data      [数据数组]
 * @param  {String[]} tableHead [表头字符串]
 */
function downExcel(data, tableHead) {
	data.forEach((item) => {
		for (let i in item) {
			tableHead += `${item[i] + '\t'},`;
		}
		tableHead += '\n';
	});
	const url =
		'data:text/csv;charset=utf-8,\ufeff' + encodeURIComponent(tableHead);
	const link = document.createElement('a');
	link.href = url;
	link.download = '我的EXCEL表格.csv';
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
}

// examples
// excel 数据
let tableData = [
	{
		name: '你好啊',
		time: 130000000000,
		pre: '127.130',
		source: '淘宝',
		otherTime: 1571276232000,
	},
];
// excel 头部
let str = `用户名,时间,坐标,来源,授权时间\n`;
// 下载表格执行
downExcel(tableData, str);

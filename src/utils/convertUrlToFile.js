//将URL转换为File
async function convertUrlToFile(url) {
	try {
		const response = await fetch(url);
		const blob = await response.blob();

		const fileName = url.split('/').pop();

		return new File([blob], fileName, { type: blob.type });
	} catch (error) {
		console.error('转换失败:', error);
		return null;
	}
}

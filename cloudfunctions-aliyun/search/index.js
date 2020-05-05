'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	console.log(event);
	const collection = db.collection('article')
	const res = await collection.where({
		title:new RegExp('.*' + event.title)
		
	}).limit(10).get()
	return res
	
};

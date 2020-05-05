'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	const collection = db.collection('article')
	const res = await collection.limit(10).get()
	return res
};

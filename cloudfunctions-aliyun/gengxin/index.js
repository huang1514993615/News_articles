'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	console.log(event);
	db.collection('article').where({
		_id: event._id
	}).update({
		view_count:event.view_count+1
	}).then(function(res) {
		return res
	})
};
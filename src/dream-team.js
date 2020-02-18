module.exports = function createDreamTeam(/* members */) {
 	if (Array.isArray(members)) {
		let arrMembers = members.filter(member => typeof(member) === "string" && member.trim()).map(member => member.trim()).map(member => member[0].toUpperCase()).sort().join('');
		return arrMembers;
	} else{
		return false
	}
};

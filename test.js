let Man = function(userName = '', age = 0) {
	this.name = userName;
	this.age = age;
	}
	Man.prototype.getFullInfo = function () {
		return 'Name: ' + this.name + '\nAge:' + this.age;
	}
	let bill = new Man('Bill', 17);
	let sam = new Man('Sam', 15);
	let other = new Man();
	console.log(other.__proto__.getFullInfo());
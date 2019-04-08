class Time {

	constructor(){
		this.start = new Date().getTime();
		this.spent;
	}

	init(){
		this.start = new Date().getTime();
	}

	count(){
		let end = new Date().getTime();
		this.spent = end - this.start;
		this.start = new Date().getTime();
		return this.spent;
	}
}
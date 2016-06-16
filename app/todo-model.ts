export class TodoModel {
	status:boolean = false;
	isEditable:boolean = false;

	constructor(public title:string = '') {
		this.id = Date.now();
		this.createdOn = Date().slice(0, 24);
	}
}
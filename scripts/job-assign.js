class localStorageHandler {
	constructor() {
		let ls = window.localStorage;
		this.get = ((key) => {
			return ls.getItem(key);
		});
		this.set = ((key, val) => {
			ls.setItem(key, val);
		});
	}
}
const unassigned = [{
		"id": "1",
        "job":"Testing",
        "time":"12Hrs"
	},
	{
		"id": "2",
        "job":"Coding",
        "time":"20Hrs"
	},
	{
		"id": "3",
        "job":"Design",
        "time":"8Hrs"
	},
	{
		"id": "4",
        "job":"Analysis",
        "time":"12Hrs"
	}]
let local = new localStorageHandler();
$(document).ready(() => {
	local.set("job-data", JSON.stringify(unassigned));
});
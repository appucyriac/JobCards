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
let cards = [{
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
	local.set("cards", JSON.stringify(cards));
	p=JSON.parse(local.get("unassigned"));
	_.forEach(p, function(value) {
		 newRow=_.template('<li draggable="true" ondragstart="drag(event)" id="<%=id%>"><div class="card card<%=id%>" id="card<%=id%>" ondrop=""><p id="id"><%=id%></p><p id="job"><b><%=job%></b></p><p id="time"><%=time%></p></div></li>');
		 newRow=newRow({'id':value.id,'job':value.job,'time':value.time});
		 $(".card-stack").append(newRow);
    });

});

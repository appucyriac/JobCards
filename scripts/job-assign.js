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
let assigned = [
	[{
		'name': 'tony'
	}],
	[{
		'name': 'hulk'
	}],
	[{
		'name': 'peter'
	}],
	[{
		'name': 'vision'
	}],
	[{
		'name': 'widow'
	}]
]

let cards = [{
	"id": "1",
	"job": "Testing",
	"time": "12Hrs"
}, {
	"id": "2",
	"job": "Coding",
	"time": "20Hrs"
}, {
	"id": "3",
	"job": "Design",
	"time": "8Hrs"
}, {
	"id": "4",
	"job": "Analysis",
	"time": "12Hrs"
}]
let local = new localStorageHandler();
$(document).ready(() => {
	if(local.get("assigned")==null)
		local.set("assigned",JSON.stringify(assigned));
	displayJobCard();
	displayAssignedJob();
});

displayJobCard = () => {
	local.set("cards", JSON.stringify(cards));
	p = JSON.parse(local.get("unassigned"));
	_.forEach(p, function(value) {
		newRow = _.template('<li draggable="true" ondragstart="drag(event)" id="<%=id%>"><div class="card card<%=id%>" id="card<%=id%>" ondrop=""><p id="id"><%=id%></p><p id="job"><b><%=job%></b></p><p id="time"><%=time%></p></div></li>');
		newRow = newRow({
			'id': value.id,
			'job': value.job,
			'time': value.time
		});
		$(".card-stack").append(newRow);
	});
}
displayAssignedJob = () => {
	p = JSON.parse(local.get("assigned"));
	temp = document.getElementsByClassName("card-stack-container");
	_.forEach(p, function(value) {
		_.forEach(temp, function(block) {
			if (block.id == value[0].name) {
				_.forEach(value, function(data) {
					if (data.id != null) {
						newRow = _.template('<li draggable="true" ondragstart="drag(event)" id="<%=id%>"><div class="card card<%=id%>" id="card<%=id%>" ondrop=""><p id="id"><%=id%></p><p id="job"><b><%=job%></b></p><p id="time"><%=time%></p></div></li>');
						newRow = newRow({
							'id': data.id,
							'job': data.job,
							'time': data.time
						});
						$("#" + block.id).append(newRow);
					}
				});
			}
		});
	});
}
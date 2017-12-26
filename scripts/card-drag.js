
let lsh = new localStorageHandler();
allowDrop = (ev) => {
	ev.preventDefault();
}

drag = (ev) => {
	p=ev.target.parentElement;
	if(p.parentElement.id == "unassignedStack")
	{
	ev.dataTransfer.setData("card", ev.target.id);
	getData(ev.target);
	unassigned = JSON.parse(lsh.get("unassigned"));
	_.forEach(unassigned, function(value) {
		if(value.id == ev.target.id)
		{
           index=unassigned.indexOf(value);
           unassigned.splice(index,1);
           lsh.set("unassigned",JSON.stringify(unassigned));
		}
	});

	}
else
	{
		ev.dataTransfer.setData("card", ev.target.id);
	getData(ev.target);
	popOutJobCard(ev);
}
}

drop = (ev) => {
	ev.preventDefault();
    unassigned = JSON.parse(lsh.get("unassigned"));
	let data = ev.dataTransfer.getData("card");
	ev.srcElement.children[1].appendChild(document.getElementById(data));
	
		if(ev.target.id=="unassignedStack" || ev.target.className == "card-stack")
	        unassigned.push(JSON.parse(lsh.get("jobCard")));
	    else
	        pushInJobCard(ev);
}
getData = (ctrl) => {
	let id = ctrl.getElementsByTagName('p')[0].innerHTML,
		job = ctrl.getElementsByTagName('b')[0].innerHTML,
		time = ctrl.getElementsByTagName('p')[2].innerHTML;
	jobCard = {
		id: id,
		job: job,
		time: time
	}
	lsh.set("jobCard", JSON.stringify(jobCard));
}

popOutJobCard = (ev) => {
	assigned=JSON.parse(lsh.get("assigned"));
	_.forEach(assigned, function(value) {
		p = _.filter(value, {
			'id': ev.target.id
		});
		if (p.length != 0) {
			index = value.findIndex(i => i.id === ev.target.id);
			value.splice(index, 1);
		lsh.set("assigned",JSON.stringify(assigned));
		}
	});
}

pushInJobCard = (ev) => {
	p=JSON.parse(lsh.get("assigned"));
	_.forEach(p, function(value) {
		if (ev.target.id == value[0].name) {
			value.push(JSON.parse(lsh.get("jobCard")));
			lsh.set("assigned",JSON.stringify(p));
		}
		
	});
}

saveData = () =>{
lsh.set("unassigned",JSON.stringify(unassigned));	
}
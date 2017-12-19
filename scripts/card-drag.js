
let assigned =[
              [{'name':'tony'}],
              [{'name':'hulk'}],
              [{'name':'peter'}],
              [{'name':'vision'}],
              [{'name':'widow'}]
              ]
let lsh = new localStorageHandler();


allowDrop =(ev) => {
    ev.preventDefault();
}

drag = (ev) => {
    ev.dataTransfer.setData("card", ev.target.id);
    getData(ev.target);
}

drop = (ev) => {
    ev.preventDefault();

    let data = ev.dataTransfer.getData("card");
    ev.srcElement.children[1].appendChild(document.getElementById(data));
    _.forEach(assigned, function(value) {
    	if(ev.target.id == value[0].name)
    	{
          value.push(JSON.parse(lsh.get("jobCard")));
    	}
});
}
getData = (ctrl)=> {
  let id = ctrl.getElementsByTagName('p')[0].innerHTML,
      job = ctrl.getElementsByTagName('b')[0].innerHTML,
      time = ctrl.getElementsByTagName('p')[2].innerHTML;
  jobCard ={
  	id:id,
  	job:job,
  	time:time
  }
  lsh.set("jobCard",JSON.stringify(jobCard));
}
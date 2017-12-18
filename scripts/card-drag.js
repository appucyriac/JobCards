allowDrop =(ev) => {
    ev.preventDefault();
}

drag = (ev) => {
    ev.dataTransfer.setData("card", ev.target.id);
}

drop = (ev) => {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("card");
    ev.target.appendChild(document.getElementById(data));
}

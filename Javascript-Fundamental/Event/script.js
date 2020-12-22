function getName() {
    console.log("Dennis Jason");
}

function setName() {
    document.getElementById("nama").innerHTML = "Dennis Jason";
}

function setName2() {
    let txtName = document.getElementById("txtName");
    document.getElementById("nama").innerHTML = txtName.value;
}
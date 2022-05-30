var packagesPage = document.getElementById("packages-page");
var loginPage = document.getElementById("login-page");
var logOut = document.getElementById("logOut");
var logIn = document.getElementById("logIn");
var activities = [];
var costOfActvities = [];


var subscriptionType = "standard";


var package1Details = document.getElementById("package1-details");

// var pck1Dst1Activities = document.getElementById("pck1-dst1-activities");
// var addActivities1 = document.getElementById("add-activities-1");
// var saveActivities1 = document.getElementById("save-activities-1");
var package1 = document.getElementById("package-1");
var pck1_cost = document.getElementById("pck1-cost");
var pck1TotalCost = document.getElementById("pck1-cost-total");
var save1El = document.getElementById("save1");


function getPackage(packId){
    var packageId = "package" + packId;
    sessionStorage.setItem("package",packageId);
    var packagePicked = sessionStorage.getItem("package");
    console.log(packagePicked);
}



const package1_activities_table = {
    "Scuba Diving": 3500,
    "Speed Boating": 2500
};

// viewDetails1.addEventListener("click", function() {
//     package1Details.classList.remove("d-none");
//     packagesPage.classList.add("d-none");
// });

function homePage() {
    // package1Details.classList.add("d-none");
    packagesPage.classList.remove("d-none");
    // pck1Dst1Activities.classList.add("d-none");
    loginPage.classList.add("d-none");
}

function addCost(list, addItem,activity, cost, removeEl) {
    let baseCost = parseInt(cost.textContent);
    let addOnCost = list[addItem.id];
    cost.textContent = baseCost + addOnCost;
    activities.push(activity);
    costOfActvities.push(list[activity]);
    removeEl.classList.remove("d-none");
    addItem.classList.add("d-none");

    removeEl.onclick = function() {
        removeEl.classList.add("d-none");
        addItem.classList.remove("d-none");
        cost.textContent = parseInt(cost.textContent) - addOnCost;
        let actIndex = activities.indexOf(activity);
        activities.splice(actIndex,1);
        costOfActvities.splice(actIndex,1)
        console.log(activities,costOfActvities);
    };





    // let baseCost = parseInt(cost.textContent);
    // let addOnCost = list[addItem.id];
    // cost.textContent = baseCost + addOnCost;
    // activities.push(activity);
    // costOfActvities.push(list[activity]);
    // removeEl.classList.remove("d-none");
    // console.log(activities,costOfActvities);
    // addItem.classList.add("d-none");

    // removeEl.onclick = function() {
    //     removeEl.classList.add("d-none");
    //     addItem.classList.remove("d-none");
    //     cost.textContent = parseInt(cost.textContent) - addOnCost;
    //     let actIndex = activities.indexOf(activity);
    //     activities.splice(actIndex,1);
    //     costOfActvities.splice(actIndex,1)
    //     console.log(activities,costOfActvities);



    
}

function getActivities() {
    // pck1Dst1Activities.classList.remove("d-none");
    package1Details.classList.add("d-none");
    packagesPage.classList.add("d-none");
}

function showActivities(activitiesList, pack, cost, total) {
    let pck_activities = document.createElement("ul");
    pck_activities.classList.add("pck_activities", "pl-0");
    for (let activity in activitiesList) {
        let listItem = document.createElement("li");
        let actEl = document.createElement("p");
        actEl.textContent = activity;
        actEl.classList.add("mr-4");
        let divEl = document.createElement("div");
        divEl.classList.add("d-flex", "flex-row", "add-size");
        let costEl = document.createElement("p");
        costEl.textContent = activitiesList[activity];
        costEl.classList.add("ml-3");
        let addItem = document.createElement("button");
        addItem.textContent = "Add";
        addItem.setAttribute("id", activity);
        addItem.classList.add("btn", "btn-primary", "ml-3", "ml-md-0");

        let removeEl = document.createElement("button");
        removeEl.textContent = "Remove";
        removeEl.classList.add("btn", "btn-danger", "ml-3", "ml-md-0", "d-none");

        addItem.onclick = function() {
            addCost(activitiesList, addItem,activity, cost, removeEl);
        };

        divEl.appendChild(costEl);
        divEl.appendChild(addItem);
        divEl.appendChild(removeEl);
        listItem.appendChild(actEl);
        listItem.appendChild(divEl);
        listItem.classList.add("d-flex", "justify-content-between", "align-content-center", "mb-3", "mt-3");
        pck_activities.appendChild(listItem);
    }
    total.classList.remove("d-none");
    pack.appendChild(pck_activities);
    // saveAct.classList.remove("d-none");
}
function getAct1(){
    showActivities(package1_activities_table, package1, pck1_cost, pck1TotalCost);
    var viewDetailsBtn = document.getElementById("viewDetails1");
    viewDetailsBtn.classList.add("d-none");
}
// addActivities1.addEventListener("click", function() {
//     showActivities(package1_activitie_table, package1, addActivities1, saveActivities1, pck1_cost, pck1TotalCost);
// });


/* login page js */
var signInEl = document.getElementById("signIn");
var signUpEl = document.getElementById("signUp");
var registerEl = document.getElementById("register");
var sigInPage = document.getElementById("sigInPage");
var packagesPage = document.getElementById("packages-page");
var loginPage = document.getElementById("login-page");
var logOut = document.getElementById("logOut");
var logIn = document.getElementById("logIn");

signUpEl.addEventListener("click", function() {
    registerEl.classList.remove("d-none");
    sigInPage.classList.add("d-none");
    signInEl.classList.remove("btn-success");
    signInEl.classList.add("btn-dark");
    signUpEl.classList.remove("btn-dark");
    signUpEl.classList.add("btn-success");
});

signInEl.addEventListener("click", function() {
    registerEl.classList.add("d-none");
    sigInPage.classList.remove("d-none");
    signInEl.classList.add("btn-success");
    signInEl.classList.remove("btn-dark");
    signUpEl.classList.add("btn-dark");
    signUpEl.classList.remove("btn-success");
});

function getUsers() {
    let usersData = localStorage.getItem("users");
    let parsedUsers = JSON.parse(usersData);
    if (parsedUsers === null) {
        return [];
    } else {
        return parsedUsers;
    }
}
let currentUser;
let usersList = getUsers();

function store() {
    var name = document.getElementById('name');
    var pw = document.getElementById('pw');
    var pswrdCriteria = document.getElementById("pswrd-strength");
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;

    if (name.value.length === 0) {
        alert('Please fill in email');

    } else if (pw.value.length === 0) {
        alert('Please fill in password');
        pswrdCriteria.classList.remove("d-none");


    } else if (name.value.length === 0 && pw.value.length === 0) {
        alert('Please fill in email and password');

    } else if (pw.value.length <= 6) {
        alert('Password too short');
        pswrdCriteria.classList.remove("d-none");

    } else if (!pw.value.match(numbers)) {
        pswrdCriteria.classList.remove("d-none");

    } else if (!pw.value.match(upperCaseLetters)) {
        pswrdCriteria.classList.remove("d-none");

    } else if (!pw.value.match(lowerCaseLetters)) {
        pswrdCriteria.classList.remove("d-none");

    } else {
        let userId = name.value;
        let pswrd = pw.value;
        let userExists = false;
        for (let eachUser of usersList) {
            if (Object.values(eachUser).includes(userId)) {
                userExists = true;
                break;
            }
        }
        if (userExists === false) {
            pswrdCriteria.classList.add("d-none");
            var userType = document.getElementById('userType');
            var subscription = userType.options[userType.selectedIndex].value;
            let balance = subscription === "premium" ? 500000 : subscription === "gold" ? 250000 : 100000;
            console.log(subscription);
            let user = {
                userId: userId,
                pswrd: pswrd,
                userType: subscription,
                balance: balance,
                packAct: []
            };
            usersList.push(user);
            localStorage.setItem("users", JSON.stringify(usersList));
            alert('Your account has been created');
        } else {
            alert('User Already Exists');
        }
    }
}

//checking
function check() {
    var storedList = getUsers();
    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');
    var userFound = false;
    var passwordMatched = false;

    for (let user of storedList) {
        let existingUser = user.userId;
        let validPswrd = user.pswrd;
        if (userName.value === existingUser && userPw.value === validPswrd) {
            userFound = true;
            passwordMatched = true;
            activities = user.packAct;
            subscriptionType = user.userType;
            break;
        }
    }

    if (userFound && passwordMatched) {
        currentUser = userName.value;
        loginPage.classList.add("d-none");
        packagesPage.classList.remove("d-none");
        logIn.classList.add("d-none");
        logOut.classList.remove("d-none");
        console.log(currentUser);
        localStorage.setItem("activeUser",JSON.stringify(currentUser));
        localStorage.setItem("subscription",JSON.stringify(subscriptionType))
    } else {
        alert('Invalid Credentials');
    }
}

function validateLogin(){
    userLog = localStorage.getItem("activeUser");
    let currntUser = JSON.parse(userLog);
    console.log(currntUser);
    if (currntUser !== null){
        logIn.classList.add("d-none");
        logOut.classList.remove("d-none");
    }
    else{
        logIn.classList.remove("d-none");
        logOut.classList.add("d-none");
        console.log(currntUser)
    }
}


function getLogin() {
    packagesPage.classList.add("d-none");
    loginPage.classList.remove("d-none");
}

function getLogout() {
    logIn.classList.remove("d-none");
    logOut.classList.add("d-none");
    localStorage.removeItem("activeUser");
}


function addItemsToList() {

}

// save1El.addEventListener("click", function() {
//     if (currentUser !== "") {
//         addItemsToList()
//     } else {
//         loginPage.classList.remove("d-none");
//     }
// });



function checkOut(){
    // let jsonData = localStorage.getItem("selectedAct");
    // let selectedActivities = JSON.parse(jsonData);
    localStorage.setItem("selectedAct",JSON.stringify(activities));
    localStorage.setItem("selectedCost",JSON.stringify(costOfActvities));
    localStorage.setItem("cartValue",JSON.stringify(pck1_cost.textContent));

    console.log("Hello in ");
    console.log(selectedActivities);
}



function addAct(){
    var activityCart  = document.getElementById("activiti");
    var activityCost = document.getElementById("costi");
    var totalValue = document.getElementById("totalValue");
    
    let totalCartValuejson = localStorage.getItem("cartValue");
    var totalCartValue = JSON.parse(totalCartValuejson);
    

    var subscriptionJson = localStorage.getItem("subscription");
    var subscriptionOfUser = JSON.parse(subscriptionJson);

    
    totalCartValue
    totalValue.textContent = subscriptionOfUser==="premium" ? 0: subscriptionOfUser==="gold" ? parseInt(totalCartValue)*0.9 : totalCartValue


    console.log(`This is ${activityCart}`);
    let jsonData = localStorage.getItem("selectedAct");
    let selectedActivities = JSON.parse(jsonData);
    console.log(selectedActivities);
    let data = localStorage.getItem("selectedCost");
    let selectedActivitiesCost = JSON.parse(data);

    for (let activiti of selectedActivities){
        console.log(activiti);
        let actEl = document.createElement("li");
        actEl.textContent = activiti;
        console.log(actEl);
        activityCart.appendChild(actEl);
        console.log(activiti);
    }
    for (let price of selectedActivitiesCost){
    let costEl = document.createElement("li");
    costEl.textContent = price;
    activityCost.appendChild(costEl);
    }
}


function getPassengerCount(){
    var pack1Count = JSON.parse(localStorage.getItem("pack1"));
    var pack2Count = JSON.parse(localStorage.getItem("pack2"));

    var pack1SlotsLeft = document.getElementById("pack1slots");
    pack1SlotsLeft.textContent = pack1Count;

    var pack2SlotsLeft = document.getElementById("pack2slots");
    pack2SlotsLeft.textContent = pack2Count;

}


localStorage.setItem("pack1",5);
localStorage.setItem("pack2",5);

//end of program
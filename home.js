var packagesPage = document.getElementById("packages-page");
var loginPage = document.getElementById("login-page");
var activities = [];
var costOfActvities = [];
var pack1SlotsText = document.getElementById("pack1SlotsText");
var subscriptionType = "standard";
var userBalance = 0;

var package1Details = document.getElementById("package1-details");

// var pck1Dst1Activities = document.getElementById("pck1-dst1-activities");
// var addActivities1 = document.getElementById("add-activities-1");
// var saveActivities1 = document.getElementById("save-activities-1");
var package1 = document.getElementById("package1");

var save1El = document.getElementById("save1");

let packagePicked

function getPackage(packId){
    var packageId = "package" + packId;
    sessionStorage.setItem("package",packageId);
    packagePicked = sessionStorage.getItem("package");
}



const allActivitiesUserRegister = [
    {"Scuba Diving": "usersRegisterAct1"},
    {"Speed Rafting": "usersRegisterAct2"},
    {"Wine Tasting": "usersRegisterAct3"},
    {"Kayaking":"usersRegisterAct4"},
    {"Rain Dance":"usersRegisterAct5"},
    {"Water Park":"usersRegisterAct6"},
    {"Speed Boat":"usersRegisterAct7"},
    {"Surfing":"usersRegisterAct8"},
    {"Horse Riding":"usersRegisterAct9"},
    {"Bird Watching":"usersRegisterAct10"},
    {"Bungee Jump":"usersRegisterAct11"},
    {"River Rafting":"usersRegisterAct12"},
    {"Rope Gliding":"usersRegisterAct13"},
    {"Mountaineering":"usersRegisterAct14"},
    {"Forest Camping":"usersRegisterAct15"},
    {"Rock Climbing":"usersRegisterAct16"}
]

const allActivitiesSlots = [
    {"Scuba Diving": "act1Slots"},
    {"Speed Rafting": "act2Slots"},
    {"Wine Tasting": "act3Slots"},
    {"Kayaking":"act4Slots"},
    {"Rain Dance":"act5Slots"},
    {"Water Park":"act6Slots"},
    {"Speed Boat":"act7Slots"},
    {"Surfing":"act8Slots"},
    {"Horse Riding":"act9Slots"},
    {"Bird Watching":"act10Slots"},
    {"Bungee Jump":"act1S1ots"},
    {"River Rafting":"act12Slots"},
    {"Rope Gliding":"act13Slots"},
    {"Mountaineering":"act14Slots"},
    {"Forest Camping":"act15Slots"},
    {"Rock Climbing":"act16Slots"}
]



function homePage(){
    // package1Details.classList.add("d-none");
    packagesPage.classList.remove("d-none");
    // pck1Dst1Activities.classList.add("d-none");
    loginPage.classList.add("d-none");
    for (let i=1; i < 9 ; i++){
        let activityId = `activity${i}`
        sessionStorage.removeItem(activityId);
    }
}


var pckCost1 = document.getElementById("pck1Cost");
var pckCost2 = document.getElementById("pck2Cost");

function addActivity1(id){
    var activityCost = document.getElementById(`cost${id}`);
    var addActBtn = document.getElementById(`addActBtn${id}`);
    var removeActBtn = document.getElementById(`removeActBtn${id}`);
    var activityEl = document.getElementById(`act${id}`);
    var proceed = document.getElementById("proceed1");
    proceed.classList.remove("d-none")
    pckCost1 = document.getElementById("pck1Cost");
    pckCost2 = document.getElementById("pck2Cost");
    sessionStorage.setItem(`activity${id}`, activityEl.textContent);

    let basePrice = parseInt(pckCost1.textContent);
    let subTotal = parseInt(activityCost.textContent) + basePrice;
    pckCost1.textContent = subTotal;
    activities.push(activityEl.textContent);
    costOfActvities.push(activityCost.textContent);

    var currentUser = JSON.parse(localStorage.getItem("activeUser"));
    console.log(currentUser);


    if(subTotal === 0 || currentUser === null || currentUser === undefined) {
        var proceed = document.getElementById("proceed1");
        proceed.classList.add("d-none")
    }

    addActBtn.classList.add("d-none");
    removeActBtn.classList.remove("d-none");
}

function removeActivity1(id){
   
    var activityCost = document.getElementById(`cost${id}`);
    var addActBtn = document.getElementById(`addActBtn${id}`);
    var removeActBtn = document.getElementById(`removeActBtn${id}`);
    var activityEl = document.getElementById(`act${id}`);
    sessionStorage.removeItem(`activity${id}`);

    


    var activityIndex =  activities.indexOf(activityEl.textContent);
    activities.splice(activityIndex,1);
    costOfActvities.splice(activityIndex);

    let basePrice = parseInt(pckCost1.textContent);
    let subTotal = basePrice - parseInt(activityCost.textContent);
    pckCost1.textContent = subTotal;
    var currentUser = JSON.parse(localStorage.getItem("activeUser"));
    

    if(subTotal === 0 || currentUser === null || currentUser === undefined) {
        var proceed = document.getElementById("proceed1");
        proceed.classList.add("d-none")
    }

    addActBtn.classList.remove("d-none");
    removeActBtn.classList.add("d-none");

}

function addActivity2(id){
    var activityCost = document.getElementById(`cost${id}`);
    var addActBtn = document.getElementById(`addActBtn${id}`);
    var removeActBtn = document.getElementById(`removeActBtn${id}`);
    var activityEl = document.getElementById(`act${id}`);
    
    pckCost1 = document.getElementById("pck1Cost");
    pckCost2 = document.getElementById("pck2Cost");
    sessionStorage.setItem(`activity${id}`, activityEl.textContent);

    let basePrice = parseInt(pckCost2.textContent);
    let subTotal = parseInt(activityCost.textContent) + basePrice;
    pckCost2.textContent = subTotal;
    activities.push(activityEl.textContent);
    costOfActvities.push(activityCost.textContent);
    var proceed = document.getElementById("proceed2");
    proceed.classList.remove("d-none")

    var currentUser = JSON.parse(localStorage.getItem("activeUser"));
    console.log(currentUser);

    if(subTotal === 0 || currentUser === null || currentUser === undefined) {
        var proceed = document.getElementById("proceed2");
        proceed.classList.add("d-none")
    }

    addActBtn.classList.add("d-none");
    removeActBtn.classList.remove("d-none");
}

function removeActivity2(id){
   
    var activityCost = document.getElementById(`cost${id}`);
    var addActBtn = document.getElementById(`addActBtn${id}`);
    var removeActBtn = document.getElementById(`removeActBtn${id}`);
    var activityEl = document.getElementById(`act${id}`);
    sessionStorage.removeItem(`activity${id}`);


    var activityIndex =  activities.indexOf(activityEl.textContent);
    activities.splice(activityIndex,1);
    costOfActvities.splice(activityIndex);

    let basePrice = parseInt(pckCost2.textContent);
    let subTotal = basePrice - parseInt(activityCost.textContent);
    pckCost2.textContent = subTotal;
    var currentUser = JSON.parse(localStorage.getItem("activeUser"));
    console.log(currentUser);

    if(subTotal === 0 || currentUser === null || currentUser === undefined) {
        var proceed = document.getElementById("proceed2");
        proceed.classList.add("d-none")
    }

    addActBtn.classList.remove("d-none");
    removeActBtn.classList.add("d-none");

}

function viewActivity(id){
    var buttonId = `viewDetails${id}`;
    var viewDetail = document.getElementById(buttonId);
    viewDetail.classList.add("d-none");

    k = id <= 4 ? 1 : 2;
    
    var actsId = `pack${k}Dst${id}Acts`
    var viewActs = document.getElementById(actsId);
    viewActs.classList.remove("d-none");

}


/* login page js */
var signInEl = document.getElementById("signIn");
var signUpEl = document.getElementById("signUp");
var registerEl = document.getElementById("register");
var sigInPage = document.getElementById("sigInPage");
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


function uniqueNumber() {
    var date = Date.now();
   
    if (date <= uniqueNumber.previous) {
        date = ++uniqueNumber.previous;
    } else {
        uniqueNumber.previous = date;
    }

    return date;
}

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
    var fname =document.getElementById("fname");
    var pswrdCriteria = document.getElementById("pswrd-strength");
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;
    packagesPage.classList.add("d-none");

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
        let firstname = fname.value
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
            let user = {
                userId: userId,
                fname: firstname,
                pswrd: pswrd,
                userType: subscription,
                balance: balance,
                packAct: [],
                userNumber : uniqueNumber()
            };
            usersList.push(user);
            sigInPage.classList.remove("d-none");
            registerEl.classList.add("d-none");
            packagesPage.classList.add("d-none");

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
            currentUser = user.fname;
            break;
        }
    }

    if (userFound && passwordMatched) {
        loginPage.classList.add("d-none");
        packagesPage.classList.remove("d-none");
        logIn.classList.add("d-none");
        logOut.classList.remove("d-none");
        localStorage.setItem("activeUser",JSON.stringify(currentUser));
        localStorage.setItem("subscription",JSON.stringify(subscriptionType))
        
    } else {
        alert('Invalid Credentials');
    }
}

function validateLogin(){
    userLog = localStorage.getItem("activeUser");
    let currntUser = JSON.parse(userLog);
    if (currntUser !== null){
        logIn.classList.add("d-none");
        logOut.classList.remove("d-none");
    }
    else{
        logIn.classList.remove("d-none");
        logOut.classList.add("d-none");
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
    localStorage.removeItem("subscription");
}


function checkOut(id){
    var pckCost = document.getElementById(`pck${id}Cost`);
    localStorage.setItem("selectedAct",JSON.stringify(activities));
    localStorage.setItem("selectedCost",JSON.stringify(costOfActvities));
    localStorage.setItem("cartValue",JSON.stringify(pckCost.textContent));
}



function addAct(){
    var activityCart  = document.getElementById("activiti");
    var activityCost = document.getElementById("costi");
    var totalValue = document.getElementById("totalValue");
    
    let totalCartValuejson = localStorage.getItem("cartValue");
    var totalCartValue = JSON.parse(totalCartValuejson);
    

    var subscriptionJson = localStorage.getItem("subscription");
    var subscriptionOfUser = JSON.parse(subscriptionJson);
    var discountEl = document.createElement("li");
    var discountValue = document.createElement("li");
    discountEl.textContent= "Discount Applied";
    discountEl.classList.add("discount");
    discountValue.classList.add("discount");
    

    totalValue.textContent = subscriptionOfUser==="premium" ? 0: subscriptionOfUser==="gold" ? parseInt(totalCartValue)*0.9 : totalCartValue;
    discountValue.textContent = subscriptionOfUser==="premium" ? parseInt(totalCartValue) : subscriptionOfUser==="gold" ? parseInt(totalCartValue)*0.1 : 0;


    var jsonData = localStorage.getItem("selectedAct");
    var selectedActivities = JSON.parse(jsonData);
    var data = localStorage.getItem("selectedCost");
    var selectedActivitiesCost = JSON.parse(data);

    localStorage.setItem("cartValue",JSON.stringify(totalValue.textContent ));

    for (let activiti of selectedActivities){
        let actEl = document.createElement("li");
        actEl.classList.add("mt-2","mb-2");
        actEl.textContent = activiti;
        activityCart.appendChild(actEl);
    }
    for (let price of selectedActivitiesCost){
        let costEl = document.createElement("li");
        costEl.classList.add("mt-2","mb-2");
        costEl.textContent = price;
        activityCost.appendChild(costEl);
    }
    activityCart.appendChild(discountEl);
    activityCost.appendChild(discountValue);

}


function getPassengerCount(){
    var pack1Count = JSON.parse(localStorage.getItem("pack1"));
    var pack2Count = JSON.parse(localStorage.getItem("pack2"));

    var pack1SlotsLeft = document.getElementById("pack1slots");
    var pack1SlotsText = document.getElementById("pack1SlotsText");
    
    if(pack1Count > 0){
        pack1SlotsLeft.textContent = pack1Count;
    }else{
        pack1SlotsText.textContent = "All Slots Full";
        pack1SlotsLeft.textContent = "";
    }

    var pack2SlotsLeft = document.getElementById("pack2slots");
    var pack2SlotsText = document.getElementById("pack2SlotsText");

    if(pack2Count > 0){
        pack2SlotsLeft.textContent = pack2Count;
    }else{
        pack2SlotsText.textContent = "All Slots Full";
        pack2SlotsLeft.textContent = "";
    }


}

function getUserRegisterActivity(start,end){
    for (let k = start; k < end ; k++){
        var activitySlotsEl = document.getElementById(`act${k}Slots`);
        var actSlots = JSON.parse(localStorage.getItem(`act${k}Slots`));
        var packActSlot = document.getElementById(`packActSlots${k}`)
        if(actSlots > 0 ){
            activitySlotsEl.textContent = actSlots;
        }
        else{
            activitySlotsEl.textContent = "";
            packActSlot.textContent = "All Slots Full"
        }
         
    }
}

function validateBalance(){
    var userList = JSON.parse(localStorage.getItem("users"));
    var logUser = JSON.parse(localStorage.getItem("activeUser"));
    var getUserBalance = null;

    for (let userDetails of userList){
        console.log(userDetails["fname"])
        if(userDetails["fname"] === logUser){
            getUserBalance = userDetails["balance"];
        }
    }


    var userUnsedBalance = document.getElementById("userUnsedBal");
    console.log(getUserBalance)
    userUnsedBalance.textContent = getUserBalance;
    var selectedItemsCost = JSON.parse(localStorage.getItem("selectedCost"));
    
    console.log(logUser);

    var totalCostItem = selectedItemsCost.reduce(function (accumVariable, curValue) {
        return parseInt(accumVariable) + parseInt(curValue)
        }, 0);


    if(getUserBalance < totalCostItem ){
        document.getElementById("pay").disabled = true;
        alert("user balance insufiecient");
    }
    else{
        document.getElementById("pay").disabled = false;
        alert("user balance okay");
        console.log(parseInt(userUnsedBalance));
    }

}




function saveUserAct() {
    var pack1Count = JSON.parse(localStorage.getItem("pack1"));
    var pack2Count = JSON.parse(localStorage.getItem("pack2"));
    var packageSelected = sessionStorage.getItem("package");

    //  for (let k=1; k < 17 ; k++){
    //         localStorage.setItem(`usersRegisterAct${k}`,JSON.stringify([]));
    //     }
    // packageSelected === "package1" ? localStorage.setItem("pack1", 5):localStorage.setItem("pack2", 5);

    // for (let k=1; k < 17 ; k++){
    //         localStorage.setItem(`act${k}Slots`,JSON.stringify(5));
    //     }

    packageSelected === "package1" ? localStorage.setItem("pack1", pack1Count-1):localStorage.setItem("pack2", pack2Count-1);
    
    console.log("Hi");
    var activities = JSON.parse(localStorage.getItem("selectedAct"));
    var currentUser = JSON.parse(localStorage.getItem("activeUser"));
    
    for (let eachActivityRegister of allActivitiesUserRegister){
        var registerId = Object.keys(eachActivityRegister);
        console.log(...registerId);
        if (activities.includes(...registerId)){
            var regKey = Object.values(eachActivityRegister)[0];
            var jsObjt = localStorage.getItem(regKey);
            var getRegister = JSON.parse(jsObjt); 
            getRegister.push(currentUser);
            localStorage.setItem(`${regKey}`,JSON.stringify(getRegister));
        }
    }
    for (let eachSlot of allActivitiesSlots){
        var slotId = Object.keys(eachSlot);

        if (activities.includes(...slotId)){
            var actKey = Object.values(eachSlot)[0];
            var getSlots = JSON.parse(localStorage.getItem(actKey));
            getSlots = parseInt(getSlots) - 1;
            localStorage.setItem(`${actKey}`,JSON.stringify(getSlots));
        }
    }
    
}

function actDisableAdd1(){
    for (let i=1; i< 9; i++){
        actSlotsBtn = JSON.parse(localStorage.getItem(`act${i}Slots`));
        if (actSlotsBtn < 1){
            document.getElementById(`addActBtn${i}`).disabled = true;
        }else{
            document.getElementById(`addActBtn${i}`).disabled = false;
        }

    }
}

function actDisableAdd2(){
for (let i=9; i< 17; i++){
        var actSlotsBtn = JSON.parse(localStorage.getItem(`act${i}Slots`));
        if (actSlotsBtn < 1){
            document.getElementById(`addActBtn${i}`).disabled = true;
        }else{
            document.getElementById(`addActBtn${i}`).disabled = false;
        }

    }
}

function disableCheckout(id){
    var checkoutDisable = JSON.parse(localStorage.getItem(`pack${id}`));
    if (checkoutDisable < 1){
        document.getElementById(`proceed${id}`).disabled = true;
        alert("This package id already full please choose another");
    }
    else{
        document.getElementById(`proceed${id}`).disabled = false;
    }
}


function updateBalance(){
    var userList = JSON.parse(localStorage.getItem("users"));
    var logUser = JSON.parse(localStorage.getItem("activeUser"));

    var selectedItemsCost = JSON.parse(localStorage.getItem("cartValue"));
    
    console.log(logUser);

    var totalCostItem = parseInt(selectedItemsCost);
    
    console.log(totalCostItem);
    for (let userDetails of userList){
        console.log(userDetails["fname"])
        if(userDetails["fname"] === logUser){
            var newBalance = userDetails["balance"] - totalCostItem;
            userDetails["balance"] = newBalance;
            console.log(userDetails["balance"]);
            localStorage.setItem("users",JSON.stringify(userList));
        }

    }

    

    // console.log(userList);
    
}

// function updateBalance(){
//     var userList = JSON.parse(localStorage.getItem("users"));
//    

//     for (let user )


// }


// function temp(){
//     console.log("Hi");
//     let currentUser = JSON.parse(localStorage.getItem("activeUser"));
//     for (let eachActivityRegister of allActivitiesUserRegister){
//         var registerId = Object.keys(eachActivityRegister);
//         activities.includes(registerId);
//         console.log(Object.values(eachActivityRegister)[0]);
//         console.log(currentUser);
//         var jsObjt = localStorage.getItem(Object.values(eachActivityRegister)[0]);
//         var getRegister = JSON.parse(jsObjt);
//         console.log(getRegister);
//         getRegister.push(currentUser);
//         console.log(getRegister);
//         localStorage.setItem(`${registerId}`,JSON.stringify(getRegister));
//     }
//     for (let eachSlot of allActivitiesSlots){
//         var slotId = Object.keys(eachSlot);
//         console.log(slotId);
//         activities.includes(slotId);
//         var getSlots = JSON.parse(localStorage.getItem(Object.values(eachSlot)[0]));
//         getSlots = parseInt(getSlots) - 1;
//         localStorage.setItem(`${slotId}`,JSON.stringify(getSlots));
//     }
// }

// for (let k=1; k < 17 ; k++){
        
//     localStorage.setItem(`act${k}Slots`,JSON.stringify(5));
// }
// for (let k=1; k < 17 ; k++){
//     localStorage.setItem(`usersRegisterAct${k}`,[]);
// }








//end of program
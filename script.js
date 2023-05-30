let firstDate = new Date('2017-03-14')
let engaged = new Date('2018-03-26')
let married = new Date('2018-05-30')
let today = new Date()

let diffDate = today.getTime() - firstDate.getTime()
let diffEng = today.getTime() - engaged.getTime()
let diffMarried = today.getTime() - married.getTime()

let daysDate = Math.floor(diffDate / (1000 * 60 * 60 * 24))
let daysEng = Math.floor(diffEng / (1000 * 60 * 60 * 24))
let daysMarried = Math.floor(diffMarried / (1000 * 60 * 60 * 24))
let yearsMarried = Math.floor(diffMarried / (1000 * 60 * 60 * 24 * 365))



let openMess = 'Dear Husband'
let twoMess = `${daysDate} days ago we had our first date.  We spend the time we had talking for hours`
let threeMess = 'As time went on I found that you were not like the others'
let fourMess = 'You introduced me to your son and your family welcomed me and mine into their home for Thanksgiving'
let fiveMess = `More time passed and I continued to feel loved by until ${daysEng} days ago you asked me to marry you`
let sixMess = 'Being this would not be a first marriage for either of us I knew that you did not ask me this with out meaning it.'
let sevenMess = `${daysMarried} days ago on a lovely afternoon under a covered bridge we not only made promises to love and care for each other`
let eightMess = 'But also to our kids.'
let finalMess = `It has been ${yearsMarried} years now and I am still glad we met.  We have had some interesting times and I am looking forward to many more years with you.`
let part = 'I love you!'


// Get the message element
var messageElement = document.getElementById("message");

setTimeout(function() {
  // Change the message
    messageElement.textContent = openMess;
    console.log("shoould be 1",openMess)
}, 1000);

setTimeout(function() {
  // Change the message
    messageElement.textContent = twoMess;
    console.log("should be 2",twoMess)
}, 5000);

setTimeout(function() {
    // Change the message
    messageElement.textContent = threeMess;
    console.log("should be 2",threeMess)
}, 10000);

setTimeout(function() {
    // Change the message
    messageElement.textContent = fourMess;
    console.log("should be 2",fourMess)
}, 15000);

setTimeout(function() {
    // Change the message
    messageElement.textContent = fiveMess;
    console.log("should be 2",fiveMess)
}, 20000);

setTimeout(function() {
    // Change the message
    messageElement.textContent = sixMess;
    console.log("should be 2",sixMess)
}, 25000);

setTimeout(function() {
    // Change the message
    messageElement.textContent = sevenMess;
    console.log("should be 2",sevenMess)
}, 30000);

setTimeout(function() {
    // Change the message
    messageElement.textContent = eightMess;
    console.log("should be 2",eightMess)
}, 35000);

setTimeout(function() {
    // Change the message
    messageElement.textContent = finalMess;
    console.log("should be 2",finalMess)
}, 40000);

setTimeout(function() {
    // Change the message
    messageElement.textContent = part;
    console.log("should be 2",part)
}, 45000);

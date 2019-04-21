// Write your code in this file!

function scuberGreetingForFeet(ride) {
  let response
  if (ride < 400) {
    response = 'This one is on me!'
  }
  else if (ride > 2500) {
    response = 'No can do.'
  }
  else if (ride > 2000) {
    response = 'I will gladly take your thirty bucks.'
  }
  return response
}

function ternaryCheckCity(city) {
    return (city === "NYC" ? "Ok, sounds good." : "No go.");

}

function switchOnCharmFromTip(tip) {
  let response
  switch(tip) {
  case "generous":
    response = ""
    break;
  case "not as generous:
    // code block
    break;
  default:
    // code block
}
  
}
// Write your code in this file!

function scuberGreetingForFeet(ride) {
  let response
  if (ride < 400) {
    response = 'This one is on me!'
  }
  else if (ride > 2000) {
    response = 'I will gladly take your thirty bucks.'
  }
  else if (ride >= 2500) {
    response ='No can do.'
  }
  return response
 
}
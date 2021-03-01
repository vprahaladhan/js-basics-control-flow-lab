function scuberGreetingForFeet(feet){
  // Write your code here!
  if (feet <= 400) {
    return "This one is on me!"
  }
  if (feet >= 2000 && feet <= 2500) {
    return "I will gladly take your thirty bucks."
  }
  if (feet > 2500) {
    return "No can do."
  }
}

function ternaryCheckCity(city){
  // Write your code here!
  return (city === 'NYC') ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  if (tip === 'generous') {
    return "Thank you so much."
  }
  if (tip === 'not as generous') {
    return "Thank you."
  }
  return 'Bye.';
}
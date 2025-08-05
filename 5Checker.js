const age = 18;
const nation = false;

if (age >= 18) {
  if (nation) {
    console.log("Elgible to vote");
  } else {
    console.log("Not indian so cannot vote");
  }
} else if (age > 0 && age < 18) {
  console.log("Cannot vote(underage)");
} else {
  console.log("Invalid ");
}

const mark = 75;
if (mark > 100 || mark < 0) {
  console.log("Invalid mark");
} else {
  if (mark >= 75) {
    console.log("Passed with distinction");
  } else if (mark >= 35) {
    console.log("Passed");
  } else {
    console.log("Failed");
  }
}

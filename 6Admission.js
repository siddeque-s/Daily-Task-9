const math = 100;
const science = 90;
const english = 80;

let avg = (math + science + english) / 3;

if (
  math > 100 ||
  math < 0 ||
  science > 100 ||
  science < 0 ||
  english > 100 ||
  english < 0
) {
  console.log("Invalid mark");
} else if (math >= 40 && science >= 40 && english >= 40 && avg >= 60) {
  console.log("Eligible for admission");
} else {
  console.log("Not eligible for admission");
}

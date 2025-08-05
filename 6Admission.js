const math = 40;
const science = 40;
const english = 40;

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
} else {
  if (math >= 40 && science >= 40 && english >= 40) {
    if (avg >= 60) {
      console.log("eligible for admission");
    } else {
      console.log("not eligible for admission");
    }
  } else {
    console.log("not eligible for admission");
  }
}

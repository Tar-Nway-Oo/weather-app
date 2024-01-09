export const iconMap: Map<number, string> = new Map();

setMap([0, 1], "sun");
setMap([2], "cloud-sun");
setMap([3], "cloud");
setMap([45, 48], "smog");
setMap(
  [51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82],
  "cloud-showers-heavy"
);
setMap([71, 73, 75, 77, 85, 86], "snowflake");
setMap([95, 96, 99], "cloud-bolt");

function setMap(values: number[], icon: string) {
   values.forEach(value => {
      iconMap.set(value, icon)
   });
}
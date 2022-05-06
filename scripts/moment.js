// MADE BY LANKY 
function moment(date) {
  let days = ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue'];
  let day;
    j = date.length - 2;
    a = date.length - 1;
    if (date.slice(1, -j) == "/") {
      day = days[date.slice(0, -a)];
    }else{
      day = days[date.slice(0, -j)];
    }
    return day + " at " + date.slice(-11, -6) + " " + date.slice(date.length - 2);
}
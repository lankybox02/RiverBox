// MADE BY LANKY

function dateOrdinal(dom) {
    if (dom == 31 || dom == 21 || dom == 1) return dom + "st";
    else if (dom == 22 || dom == 2) return dom + "nd";
    else if (dom == 23 || dom == 3) return dom + "rd";
    else return dom + "th";
};

function moment(date) {
  // let days = ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue'];
  // let day;
  //   day = days[date.slice(3, 5)];
  //   return day + " at " + date.slice(-11, -6) + " " + date.slice(date.length - 2);
  let months = ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Jan", "Sept", "Oct", "Nov", "Dec"];
  return dateOrdinal(date.slice(2, 4)) + " of " + months[date.slice(0, 1)] + " at " + date.slice(-11, -6) + " " + date.slice(-2);
}
let day = "   friday  ";

// You Need To Remove Spaces And Make First Letter Capital => Friday
day = day.trim();
day = day.charAt(0).toUpperCase() + day.slice(1);

switch (day) {
  case "Friday": //  day = "Friday";
  case "Saturday": //  day = "Saturday";
  case "Sunday": //  day = "Sunday";
    console.log("No Appointments Available"); // Output => "No Appointments Available"
    break;

  case "Monday": //  day = "Monday";
  case "Thursday": //  day = "Thursday";
    console.log("From 10:00 AM To 5:00 PM"); // Output => "From 10:00 AM To 5:00 PM"
    break;

  case "Tuesday": //  day = "Tuesday";
    console.log("From 10:00 AM To 6:00 PM"); // Output => "From 10:00 AM To 6:00 PM"
    break;

  case "Wednesday": //  day = "Wednesday";
    console.log("From 10:00 AM To 7:00 PM"); // Output => "From 10:00 AM To 7:00 PM"
    break;

  default: //  day = "World";
    console.log("Its Not A Valid Day"); // Output => "Its Not A Valid Day"
}

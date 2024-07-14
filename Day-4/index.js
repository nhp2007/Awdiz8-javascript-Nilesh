function CheakAgeLicence(age) {
  if (age > 18 && age <= 60) {
    console.log("Your ELLIGIBLE for driving licence");
  } else if (age <= 17 || age > 60) {
    console.log("You are NOT ELLIGIBLE for driving licence");
  } else {
    console.log("You are ELLIGIBLE for LERARNING licence ");
  }
}
CheakAgeLicence(61);

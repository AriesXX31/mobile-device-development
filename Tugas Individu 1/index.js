//Name: Lawongan, Renaldy Richard

//Soal Nomor 1
//arrow function
export const cToF = (celsius) => {
  //export biasa
  let cTemp = celsius;
  let cToFahr = (cTemp * 9) / 5 + 32;
  let message = cTemp + " Celcius = " + cToFahr + " Farenheit";
  console.log(message);
};

//arrow function
export const fToC = (fahrenheit) => {
  //export biasa
  let fTemp = fahrenheit;
  let fToCel = ((fTemp - 32) * 5) / 9;
  let message = fTemp + " Farenheit = " + fToCel + " Celcius";
  console.log(message);
};

//Soal Nomor 2
//Using Arrow Function
const bmi = (weight = 90, height = 2) => {
  //Default Parameters
  let bmi = weight / height ** 2;
  console.log(bmi);

  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi < 25) {
    return "Normal";
  } else if (bmi < 30) {
    return "Overweight";
  } else {
    return "Obese";
  }
};

//Menggunakan export default
export default bmi;

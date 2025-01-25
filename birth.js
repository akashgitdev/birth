var birth=require("./date")
console.log(birth("29/02/2024")); // Valid date of birth (if today is before 29/02/2024)
console.log(birth("31/04/2023")); // Invalid date. Check day, month, or year.
console.log(birth("01/13/2023")); // Invalid date. Check day, month, or year.
console.log(birth("25/01/2025")); // Invalid date. Date of birth cannot be in the future.
console.log(birth("abc/12/2023")); // Invalid format. Use DD/MM/YYYY.
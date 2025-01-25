function birth(dob) {
    // Regular expression to match DD/MM/YYYY format
    const dobRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
  
    if (!dobRegex.test(dob)) {
      return "Invalid format. Use DD/MM/YYYY.";
    }
  
    // Split the date components
    const [day, month, year] = dob.split("/").map(Number);
  
    // Create a date object for the input DOB
    const date = new Date(year, month - 1, day); // JavaScript months are 0-indexed
  
    // Get the current date
    const today = new Date();
  
    // Check if the date is valid
    if (
      date.getFullYear() !== year ||
      date.getMonth() !== month - 1 ||
      date.getDate() !== day
    ) {
      return "Invalid date. Check day, month, or year.";
    }
  
    // Check if the date is in the future
    if (date > today) {
      return "Invalid date. Date of birth cannot be in the future.";
    }
  
    // If all checks pass
    return "Valid date of birth.";
  }
  module.exports=birth;
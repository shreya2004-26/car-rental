const regexs: any = {
  name: /^[a-zA-Z ]{3,20}$/,
  email:
    /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
  password: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
  cPassword: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
  fname: /^[a-zA-Z ]{3,20}$/,
  lname: /^[a-zA-Z ]{3,30}$/,
  address1: /^[a-zA-Z0-9\s,.'-]{3,50}$/,
  address2: /^[a-zA-Z0-9\s,.'-]{3,50}$/,
  city: /^[a-zA-Z ]{3,30}$/,
  state: /^[a-zA-Z ]{3,30}$/,
  phoneNumber: /^[6-9]\d{9}$/,
  contactNumber: /^[6-9]\d{9}$/,
  dlNumber:
    // /^(([A-Z]{2}[0-9]{2}[A-Z]{1})( )|([A-Z]{2}-[0-9]{2}))((19|20)[0-9][0-9])[0-9]{7}$/,
    /^(([A-Z]{2}[0-9]{2}[A-Z]{1}(-))((19|20)[0-9]{2}(-)[0-9]{7}))$/,
  aadharNumber: /^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$/,
  pickUpTime: /^([0-1][0-9]|2[0-3]):([0-5][0-9])$/,
  dropOffTime: /^([0-1][0-9]|2[0-3]):([0-5][0-9])$/,
};

export const isValid = (field: any, value: any) => {
  const regex = regexs[field];
  const res = regex.test(value);
  if (field === "fname") {
    if (value.length === 0) {
      return { valid: false, message: "First name cannot be blank." };
    } else if (value.length < 3 || value.length > 20) {
      return {
        valid: false,
        message: "Name must be b/w 3 and 20 characters.",
      };
    } else if (res) {
      return { valid: true, message: null };
    } else {
      return { valid: false, message: "Invalid Name." };
    }
  } else if (field === "lname") {
    if (value.length === 0) {
      return { valid: true, message: null };
    } else if (value.length < 3 || value.length > 20) {
      return {
        valid: false,
        message: "Name must be b/w 3 and 20 characters.",
      };
    } else {
      if (res) {
        return { valid: true, message: null };
      } else {
        return { valid: false, message: "Invalid Name." };
      }
    }
  } else if (field === "address1") {
    if (value.length === 0) {
      return { valid: false, message: "Address cannot be blank." };
    } else if (value.length < 3 || value.length > 20) {
      return {
        valid: false,
        message: "Address must be b/w 3 and 50 characters.",
      };
    } else if (res) {
      return { valid: true, message: null };
    } else {
      return { valid: false, message: "Invalid Address." };
    }
  } else if (field === "address2") {
    if (value.length === 0) {
      return { valid: true, message: null };
    } else if (value.length < 3 || value.length > 20) {
      return {
        valid: false,
        message: "Address must be b/w 3 and 20 characters.",
      };
    } else {
      if (res) {
        return { valid: true, message: null };
      } else {
        return { valid: false, message: "Invalid Address." };
      }
    }
  } else if (field === "city") {
    if (value.length === 0) {
      return { valid: false, message: "City  cannot be blank." };
    } else if (value.length < 3 || value.length > 20) {
      return {
        valid: false,
        message: "City must be b/w 3 and 20 characters.",
      };
    } else if (res) {
      return { valid: true, message: null };
    } else {
      return { valid: false, message: "Invalid City name." };
    }
  } else if (field === "state") {
    if (value.length === 0) {
      return { valid: false, message: "State cannot be blank." };
    } else if (value.length < 3 || value.length > 20) {
      return {
        valid: false,
        message: "State must be b/w 3 and 20 characters.",
      };
    } else if (res) {
      return { valid: true, message: null };
    } else {
      return { valid: false, message: "Invalid State name." };
    }
  } else if (field === "phoneNumber" || field === "contactNumber") {
    if (value.length === 0) {
      return { valid: false, message: "Contact number cannot be blank." };
    } else if (value.length < 10 || value.length > 10) {
      return {
        valid: false,
        message: "Contact number must be 10 digits.",
      };
    } else if (res) {
      return { valid: true, message: null };
    } else {
      return { valid: false, message: "Invalid phone number." };
    }
  } else if (field === "dlNumber") {
    if (res) {
      return { valid: true, message: null };
    } else {
      return { valid: false, message: "Invalid driving license number." };
    }
  } else if (field === "aadharNumber") {
    if (res) {
      return { valid: true, message: null };
    } else {
      return { valid: false, message: "Invalid Aadhar Number." };
    }
  } else if (field === "pickUpTime") {
    if (value.length === 0) {
      return { valid: false, message: "Pickup Time cannot be blank." };
    } else if (res) {
      return { valid: true, message: null };
    } else {
      return { valid: false, message: "Invalid pickup time" };
    }
  } else if (field === "dropOffTime") {
    if (value.length === 0) {
      return { valid: false, message: "Dropoff Time cannot be blank." };
    } else if (res) {
      return { valid: true, message: null };
    } else {
      return { valid: false, message: "Invalid dropoff time" };
    }
  } else if (field === "name") {
    if (value.length === 0) {
      return { valid: false, message: "Name cannot be blank." };
    } else if (value.length < 3 || value.length > 20) {
      return {
        valid: false,
        message: "Name must be b/w 3 and 20 characters.",
      };
    } else if (res) {
      return { valid: true, message: null };
    } else {
      return { valid: false, message: "Invalid Name." };
    }
  } else if (field === "email") {
    if (value.length === 0) {
      return { valid: false, message: "Email cannot be blank." };
    } else if (value.length < 3) {
      return {
        valid: false,
        message: "Email must be b/w 3 and 20 characters.",
      };
    } else if (res) {
      return { valid: true, message: null };
    } else {
      return { valid: false, message: "Invalid Email." };
    }
  } else if (field === "password" || field === "cPassword") {
    if (value.length === 0) {
      return { valid: false, message: "Password cannot be blank." };
    } else if (res) {
      return { valid: true, message: null };
    } else {
      return {
        valid: false,
        message:
          "Minimum eight characters, at least one letter, one number and one special character.",
      };
    }
  }
};

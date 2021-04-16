function validate(event) {
  // TODO - write custom validation logic to validate the longitude and latitude
  // values. The latitude value must be a number between -90 and 90; the
  // longitude value must be a number between -180 and 180. If either/both are
  // invalid, show the appropriate error message in the form, and stop the
  // form from being submitted. If both values are valid, allow the form to be
  // submitted.

  const formRef = document.querySelector("form");
  const latitude = formRef.Latitude.value;
  var latitude_err = document.querySelector(".latitude_err");
  latitude_err.innerHTML = "*";
  const longitude = formRef.Longitude.value;
  var longitude_err = document.querySelector(".longitude_err");
  longitude_err.innerHTML = "*";
  var flag = false;
  if (parseFloat(latitude) == latitude) {
    if (parseFloat(latitude) >= -90 && parseFloat(latitude) <= 90) {
      flag = true;
    } else {
      flag = false;
      latitude_err.innerHTML = "* must be a valid Latitude(-90 to 90)";
      return flag;
    }
  } else {
    flag = false;
    latitude_err.innerHTML = "* must be a valid Latitude(-90 to 90)";
    return flag;
  }

  if (parseFloat(longitude) == longitude) {
    if (parseFloat(longitude) >= -180 && parseFloat(longitude) <= 180) {
      flag = true;
    } else {
      flag = false;
      longitude_err.innerHTML = "* must be a valid Longitude(-180 to 180)";
      return flag;
    }
  } else {
    flag = false;
    longitude_err.innerHTML = "* must be a valid longitude(-180 to 180)";
    return flag;
  }
  return flag;
  console.log(
    "TODO - validate the longitude, latitude values before submitting"
  );
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function () {
  const form = document.querySelector("form");
  form.onsubmit = validate;
};

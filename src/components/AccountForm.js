import React, { useState } from "react";
import "./AccountForm.css";
import { Link } from "react-router-dom";

const AccountForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    dob: "",
    password: "",
    agreed: false,
  });

  const [errors, setErrors] = useState({});
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState("weak");
  const [isFormVisible, setIsFormVisible] = useState(true);

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
    if (name === "password") {
      const strength = checkPasswordStrength(value);
      setPasswordStrength(strength);
    }
  };
  // Function to check password strength
  const checkPasswordStrength = (password) => {
    if (
      password.length >= 8 &&
      /[A-Z]/.test(password) &&
      /[a-z]/.test(password) &&
      /\d/.test(password) &&
      /[!@#$%^&*]/.test(password)
    ) {
      return "strong";
    } else if (password.length >= 6) {
      return "medium";
    } else {
      return "weak";
    }
  };
  // Validate form
  const validateForm = () => {
    let formErrors = {};
    const namePattern = /^[A-Za-z ]+$/;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;

    // Name validation
    if (!formData.name.trim()) {
      formErrors.name = "Name is required.";
    } else if (!namePattern.test(formData.name)) {
      formErrors.name = "Name should contain only letters.";
    }

    // Surname validation
    if (!formData.surname.trim()) {
      formErrors.surname = "Surname is required.";
    }

    // Date of Birth validation (must be at least 18 years old)
    if (!formData.dob) {
      formErrors.dob = "Date of Birth is required.";
    } else {
      const age =
        new Date().getFullYear() - new Date(formData.dob).getFullYear();
      if (age < 18) {
        formErrors.dob = "You must be at least 18 years old.";
      }
    }

    // Password validation
    if (!formData.password) {
      formErrors.password = "Password is required.";
    } else if (!passwordPattern.test(formData.password)) {
      formErrors.password =
        "Password must be at least 8 characters, include one uppercase letter, one lowercase letter, and one special character.";
    }

    // Agreement checkbox validation
    if (!formData.agreed) {
      formErrors.agreed = "You must agree to the terms.";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted successfully!", formData);
      // You can submit the form data to the server here using fetch/axios
    } else {
      console.log("Form has errors.");
    }
  };

  const handleCloseForm = () => {
    setIsFormVisible(false); // Set form visibility to false to hide the form
  };

  if (!isFormVisible) {
    return null; // If form is not visible, render nothing
  }

  return (
    <div className="form-container">
      <div class="content">
        <div class="head">
          <header class="headert">
            <h2 class="h2t">Create Account</h2>
            <button className="close-btn" onClick={handleCloseForm}>
              close: x
            </button>{" "}
          </header>
        </div>
      </div>
      <form class="formt" onSubmit={handleSubmit}>
        <div class="flex justfy-start">
          <button type="button" class="btn ml-0">
            <span class="back"> ! Back</span>
          </button>
        </div>

        <label className="labelt">YOUR NAME</label>
        <input
          type="text"
          name="name"
          class="border-4 border-gray-700 p-2"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Your name"
          className="inputt"
        />
        {errors.name && <p className="error-text">{errors.name}</p>}

        <label className="labelt">SURNAME</label>
        <input
          type="text"
          name="surname"
          value={formData.surname}
          onChange={handleInputChange}
          placeholder="Surname"
          className="inputt"
        />

        <p class="flex justfy-start">
          This should match the name on your government issued ID.
        </p>

        {errors.surname && <p className="error-text">{errors.surname}</p>}

        <label class="labelt">DATE OF BIRTH</label>
        <input
          type="text"
          name="dob"
          value={formData.dob}
          onChange={handleInputChange}
          placeholder="YYYY-MM-DD"
          className="inputt"
        />
        <p className="password-hint ">
          You need to be 18+ to use our platform .This information is for
          internal use only and won't <br></br>be shared with other users of
          RealHubAfrica
        </p>

        {errors.dob && <p className="error-text">{errors.dob}</p>}

        <label class="labelt">CREATE PASSWORD</label>

        <div
          className="password-input-wrapper"
          style={{ position: "relative" }}
        >
          <input
            type={passwordVisible ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Create a new password"
            className="password-input"
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="password-toggle-btn"
          >
            {passwordVisible ? "Hide" : "Show"}
          </button>
        </div>
        {errors.password && <p className="error-text">{errors.password}</p>}
        <div class="mainFlex">
          <div class="mainOne">
            <p className="password-hint">
              Password must contain at least 8 characters, uppercase and
              lowercase letters,<br></br> and a special character.
            </p>
            <br></br>
          </div>
          <div class="mainTwo">
            {" "}
            <p>
              Password strength:{" "}
              <i
                id="wifi-icon"
                className={`fas fa-wifi ${passwordStrength}`}
              ></i>
              <span className={`strength-text ${passwordStrength}`}>
                {passwordStrength.toUpperCase()}
              </span>
            </p>
          </div>
        </div>
        <p class="policy">
          By selecting "I agree below, I agree to RealHubAfrica's{" "}
          <Link to={"#"}>Terms of service,</Link>
          <Link to={"#"}>Payments Terms of service,</Link>and{" "}
          <Link to={"#"}>Privacy Policy.</Link>
        </p>
        <label class="labelt">
          <input
            type="checkbox"
            name="agreed"
            checked={formData.agreed}
            onChange={handleInputChange}
            className="inputt"
          />
          <span class="agree">I agree</span>
        </label>
        {errors.agreed && <p className="error-text">{errors.agreed}</p>}

        <button type="submit" className="submit-btn">
          Agree and continue
        </button>
      </form>
      {/* </div> */}
    </div>
  );
};

export default AccountForm;

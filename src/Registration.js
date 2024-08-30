import React, { useState } from 'react';
import './App.css'; 

function Register() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [enrollTerm, setEnrollTerm] = useState('');
    const [emergencyContactName, setEmergencyContactName] = useState('');
    const [emergencyNumber, setEmergencyNumber] = useState('');
    const [comment, setComment] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Submitted', {
            fullName,
            email,
            birthDate,
            age,
            gender,
            phoneNumber,
            enrollTerm,
            emergencyContactName,
            emergencyNumber,
            comment
        });
        setSubmitted(true);
    };

    return (
        <div className="Registration">
            <div className="registration-form-wrapper">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKGG2a29C5tLZSqsXuSXw_IgkWnqdwbVMmGw&s"
                    alt="School Logo"
                    className="school-logo"
                />
                <form onSubmit={handleSubmit} className="registration-form">
                    <h1>School Registration Form</h1>

                    <div>
                        <label htmlFor="fullname">Full Name:</label>
                        <input
                            type="text"
                            id="fullname"
                            placeholder="Enter Full Name"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="birthDate">Birth Date:</label>
                        <input
                            type="date"
                            id="birthDate"
                            placeholder="Enter Date of Birth"
                            value={birthDate}
                            onChange={(e) => setBirthDate(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="age">Age:</label>
                        <input
                            type="number"
                            id="age"
                            placeholder="Enter Age"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="gender">Gender:</label>
                        <select
                            id="gender"
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                            required
                        >
                            <option value="" disabled>Select</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="phoneNumber">Phone Number:</label>
                        <input
                            type="tel"
                            id="phoneNumber"
                            placeholder="Enter Phone Number"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="enrollTerm">Enrollment Term:</label>
                        <input
                            type="text"
                            id="enrollTerm"
                            placeholder="Enter Enrollment Term"
                            value={enrollTerm}
                            onChange={(e) => setEnrollTerm(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="emergencyContactName">Emergency Contact Name:</label>
                        <input
                            type="text"
                            id="emergencyContactName"
                            placeholder="Enter Emergency Contact Name"
                            value={emergencyContactName}
                            onChange={(e) => setEmergencyContactName(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="emergencyNumber">Emergency Contact Number:</label>
                        <input
                            type="tel"
                            id="emergencyNumber"
                            placeholder="Enter Emergency Number"
                            value={emergencyNumber}
                            onChange={(e) => setEmergencyNumber(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="comment">Comments:</label>
                        <textarea
                            id="comment"
                            placeholder="Comment..."
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                        />
                    </div>

                    <div className="button-wrapper">
                        <button type="submit">Register</button>
                    </div>
                </form>

                {submitted && <p>Form successfully submitted!</p>}
            </div>
        </div>
    );
}

export default Register;

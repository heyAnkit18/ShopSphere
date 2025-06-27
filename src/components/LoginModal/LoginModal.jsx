import React, { useState } from 'react';
import './LoginModal.css';

const LoginModal = ({ onClose }) => {
  const [phone, setPhone] = useState('');
  const [step, setStep] = useState(1);
  const [otp, setOtp] = useState('');

  const handleContinue = () => {
    if (phone.length === 10) {
      setStep(2);
      alert(`OTP sent to ${phone}`); // Simulated
    }
  };

  const handleVerify = () => {
    if (otp === '123456') {
      alert('Login successful!');
      onClose();
    } else {
      alert('Invalid OTP');
    }
  };

  return (
    <div className="modal-overlay">
      <div className="login-modal">
        <button className="back-btn" onClick={onClose}>←</button>
        <h2>India's last minute app</h2>
        <p>Log in or Sign up</p>

        {step === 1 ? (
          <div className="input-group">
            <span className="prefix">+91</span>
            <input
              type="tel"
              placeholder="Enter mobile number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              maxLength={10}
            />
          </div>
        ) : (
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
        )}

        <button className="continue-btn" onClick={step === 1 ? handleContinue : handleVerify}>
          {step === 1 ? 'Continue' : 'Verify OTP'}
        </button>

        <p className="terms">
          By continuing, you agree to our <a href="#">Terms of service</a> & <a href="#">Privacy policy</a>
        </p>
      </div>
    </div>
  );
};

export default LoginModal;
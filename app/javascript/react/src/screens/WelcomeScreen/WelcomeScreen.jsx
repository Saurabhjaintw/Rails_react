import React, { useState, useEffect } from "react";
import { Button, TextField } from "@mui/material";

export const WelcomeScreen = () => {
  const [email, setEmail] = useState("");
  const [csrfToken, setCsrfToken] = useState("");

  useEffect(() => {
    const token = document.querySelector('meta[name="csrf-token"]').getAttribute("content");
    setCsrfToken(token);
  }, []);

  const sendReferralEmail = async () => {
    try {
      const response = await fetch("/referrals", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-Token": csrfToken,
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        console.log("Referral email sent to:", email);
      } else {
        console.error("Failed to send referral email");
      }
    } catch (error) {
      console.error("Error sending referral email:", error);
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div>
      <h1>Welcome to the Welcome Page!</h1>
      <p>Thank you for joining us.</p>

      <TextField label="Email Address" value={email} onChange={handleEmailChange} />

      <Button variant="contained" onClick={sendReferralEmail}>
        Send Referral Email
      </Button>
    </div>
  );
};

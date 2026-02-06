# Yellow.ai Software Engineer Intern Assignment

## Overview
AI Loan Assistant for secure loan information retrieval.

## Features
- OTP Authentication
- Loan Account Listing
- Loan Details Retrieval
- CSAT Feedback
- Token Optimization Layer

## Tech Stack
- Node.js
- Express.js

## API Endpoints

### Trigger OTP
POST /api/trigger-otp

### Verify OTP
POST /api/verify-otp

### Get Loan Accounts
GET /api/loan-accounts

### Get Loan Details
GET /api/loan-details/:id

## Architecture
User → Chatbot → Authentication → OTP → Loan APIs → Projection Layer → Response

## Edge Case Handling
- OTP retry
- Phone number change reset
- API failure fallback

## Token Optimization
Projection layer removes unnecessary backend fields before LLM processing.

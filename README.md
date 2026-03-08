# React Mini Bank App

A simple **banking simulation application** built with **React and TypeScript**.
The application allows users to create accounts, manage balances, and perform banking operations such as deposits, withdrawals and trasnfers.

---

## Features

- Create two types of accounts:
  - **Normal Account**
  - **Savings Account**
- View all created accounts
- Deposit money
- Withdraw money
- Transfer money between accounts
- Validation rules for account operations
- Dynamic UI depending on account type

### Accounty Types

#### Normal Account

- Owner
- Account Number
- Balance
- Minimal balance: **-500** euro

#### Savings Account

- Owner
- Account Number
- Balance
- **Interest Rate**

---

## Technologies Used

- React
- TypeScript
- Vite
- CSS

---

## Example Features Implemented

### Automatic ID formatting

Account numbers are automatically formatted while typing: 000-0000000-00

---

### Transfer Validation

Transfers include checks such as:

- Source and destination accounts cannot be the same
- Insufficient balance validation
- Normal accounts cannot go below **-500 euros** and savings accounts cannot go below **0 euros**.

---

## Getting Started

### Clone the repository

```bash
git clone https://github.com/stoky123/react-homework.git
```

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

then open:

```
http://localhost:5173
```

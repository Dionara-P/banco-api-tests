# banco-api-tests

Automated API testing project for the [Banco API](https://github.com/juliodelimas/banco-api), focused on validating banking operations such as login, transfers, and account queries.

## 🚀 Objective

Ensure the reliability, security, and correctness of the Banco REST API through automated tests using JavaScript and modern testing libraries.

## 🛠️ Tech Stack

- **JavaScript**
- **Mocha** – Test runner  
  [Mocha Docs](https://mochajs.org/)
- **Chai** – Assertion library  
  [Chai Docs](https://www.chaijs.com/)
- **Supertest** – HTTP assertions for APIs  
  [Supertest Docs](https://github.com/visionmedia/supertest)
- **Mochawesome** – HTML report generator  
  [Mochawesome Docs](https://github.com/mochawesome/mochawesome)
- **Dotenv** – Environment variable loader  
  [Dotenv Docs](https://github.com/motdotla/dotenv)

## 📁 Project Structure
banco-api-tests/ 
├── test/ │   
├── login.test.js │   
├── transferencia.test.js   
├── mochawesome-report/   
├── .gitignore   
├── package.json   
└── README.md  


## ⚙️ .env File Format

Create a `.env` file in the root directory with the following content: 
BASE_URL=http://localhost:3000


> Replace the URL with the actual endpoint where the Banco API is running.

## 🧪 Running Tests

Install dependencies:

```bash
npm install

Run all tests:
npm test


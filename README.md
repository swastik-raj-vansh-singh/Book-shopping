# Book-shopping
5.1 Prerequisites
-Node.js (v14+ recommended)
-PostgreSQL installed and running locally (or any remote DB).
-Nest.js CLI (optional, but recommended)
-Yarn or npm

5.2 Backend
Navigate to backend folder:

bash
cd urban-company-booking/backend
Install dependencies:

bash
npm install
or
yarn install
Configure your PostgreSQL in typeorm.config.ts or .env:

ts
host: 'localhost',
port: 5432,
username: 'postgres',
password: 'postgres',
database: 'urban_company_db',
synchronize: true,
// ...
Run the development server:

bash
npm run start:dev
or
yarn start:dev
Project will be running on http://localhost:3000.

5.3 Frontend
Navigate to frontend folder:

bash
cd urban-company-booking/frontend
Install dependencies:

bash
npm install
or
yarn install
Start the development server:

bash
pm start
or
yarn start
Open http://localhost:3000 in your browser to view the React app.

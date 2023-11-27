Tour Travel Project




Welcome to the Tour Travel Project! This project provides a simple web application for a tour and travel company. It includes information about destinations, tour packages, and a chatbot feature for user interaction.

Table of Contents
Technologies Used
Project Structure
Setting Up the Development Environment
Running the Application Locally
Deployment on Azure
Azure App Service
Azure Blob Storage
Azure Virtual Network (VNet)
Contributing
License
Technologies Used
Frontend:

HTML
CSS
JavaScript
Backend:

Node.js
SQLite3
Deployment:

Azure App Service
Azure Blob Storage
Azure Virtual Network (VNet)
Project Structure
csharp
Copy code
tour-travel-project/
│
├── public/           # Frontend HTML, CSS, JS files
├── server/           # Node.js server files
│   ├── app.js        # Backend server logic
│   ├── db.sqlite     # SQLite database file
│   └── ...            # Other backend files
│
├── README.md         # Project documentation
└── ...               # Other project files
Setting Up the Development Environment
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/tour-travel-project.git
Navigate to the project directory:

bash
Copy code
cd tour-travel-project
Install dependencies:

bash
Copy code
npm install
Running the Application Locally
Start the Node.js server:

bash
Copy code
node server/app.js
Open your web browser and go to http://localhost:3002 to view the application.

Deployment on Azure
Azure App Service
Create an Azure App Service for Node.js.

Set up continuous deployment from your Git repository.

Configure the following environment variables in the Azure App Service:

PORT (e.g., 3000)
NODE_ENV (e.g., production)
Other relevant configuration variables for your project.
Azure Blob Storage
Create an Azure Storage account.

Create a Blob Container to store static assets (e.g., images).

Update your application to use the Azure Blob Storage URL for serving static assets.

Azure Virtual Network (VNet)
Set up a Virtual Network in the Azure Portal.

Integrate your Azure App Service and Azure Blob Storage with the Virtual Network for enhanced security.

Configure the necessary network rules and security groups.

Contributing
We welcome contributions! If you find any issues or have suggestions for improvement, please create an issue or submit a pull request.

License
This project is licensed under the MIT License.

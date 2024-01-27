# newsApp
Introduction

This project is a full-stack web application that provides users with access to the latest news articles from various sources. It utilizes Django on the backend to handle data storage and retrieval, while Angular is used on the frontend to create an interactive user interface.
Features

    Browse latest news articles
    Search for specific topics
    Filter news articles by category
    Pagination for navigating through multiple pages of news articles

Technologies Used

    Django
    Angular
    HTML/CSS
    JavaScript/TypeScript
    Bootstrap
    Tailwind CSS

Installation

To install and run the project locally, follow these steps:

    Clone the repository: git clone <repository-url>
    Navigate to the backend directory: cd backend
    Install Django and other dependencies: pip install -r requirements.txt
    sudo apt-get update
    sudo apt-get install postgresql postgresql-contrib
    create db names news
    sudo apt-get update
    sudo apt-get install redis-server
    Run migrations to create the database: python manage.py migrate
    Start the Django server: python manage.py runserver
    to start celery for priodic update :: 
    celery -A your_project worker --loglevel=info
    celery -A your_project beat --loglevel=info
    Navigate to the frontend directory: cd frontend
    Install Angular CLI globally: npm install -g @angular/cli
    Install project dependencies: npm install
    Start the Angular development server: ng serve
    start angualar documentation :: npm run compodoc

Usage

Once the installation is complete, you can access the application by navigating to http://localhost:4200 in your web browser. From there, you can browse news articles, search for specific topics, and filter news by category.
Contributing

Contributions to the project are welcome! If you encounter any issues or have suggestions for improvements, please feel free to submit a pull request or open an issue on the GitHub repository.
License

This project is licensed under the MIT License.
Contact

    Author: ARAB MOHAMMED
    Email: gm_arab@esi.dz
    GitHub: Your GitHub Profile

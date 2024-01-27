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

    Clone the repository: git clone [<repository-url>](https://github.com/iron2017/newApp.git)
    Navigate to the backend directory: cd ./
    Install Django and other dependencies: pip install -r requirements.txt
    sudo apt-get update
    sudo apt-get install postgresql postgresql-contrib
    create db names news
    sudo apt-get update
    sudo apt-get install redis-server
    pip install drf-yasg
    Run migrations to create the database: python manage.py migrate
    Start the Django server: python manage.py runserver
    visit http://localhost:8000/swagger/ for swagger
    to start celery for priodic update :: 
    celery -A your_project worker --loglevel=info
    celery -A your_project beat --loglevel=info
    Navigate to the frontend directory: cd news_front
    Install Angular CLI globally: npm install -g @angular/cli
    Install project dependencies: npm install
    Start the Angular development server: ng serve
    run angualar documentation  :: npm run compodoc
    visite angular documentation by open index.html that you find in /Documentation

    for database optmization we used sharding for big data for optimization we use indexing and normalization , 
    for caching we used daatabse caching in one table 
    for tasking and automated thread we use celery and redis server 

    in general News API has protected his api by not letting developers scrapping all the news , there was two method 
    one is top headlines which is limited to 36 articles at maximum with some filter options
    for everything aritclies we cannot get everything unless we set at least two filter as domain and sources 
    and there is no category filter when we deal with every article .
    the best way to use news api freindly and free is to use scrapping but that is too limited 
   
    another business case is whene we make news app based on news api but based on user client we can store his search on our database 
    and then make suggestio based on his criteriia and matching pattern . 

    for celery it was good invesetesment so that how we can automate tasks and discuss with the hardware by threads . it is good way that can connect the web developpment with 
    system engineers or auomatization.
    

    thank you very much 

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

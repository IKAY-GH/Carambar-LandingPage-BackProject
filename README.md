🍬 API Carambar - Blagues

Bienvenue sur l'API RESTful dédiée aux blagues Carambar   

🔗 Liens

-API : [https://carambar-landingpage-backproject.onrender.com](https://carambar-landingpage-backproject.onrender.com)
-Documentation Swagger : [https://carambar-landingpage-backproject.onrender.com/api-docs](https://carambar-landingpage-backproject.onrender.com/api-docs)
-GitHub Pages : [Carambar-LandingPage-FrontProject](https://github.com/ikay-gh/Carambar-LandingPage-FrontProject-)

⚙️ Stack technique

- Node.js
- Express.js
- Sequelize 
- SQLite
- Swagger
- Render

📚 Endpoints disponibles

| Méthode | URL                                     | Description                      |
|--------:|-----------------------------------------|----------------------------------|
| `POST`  | `/api/v1/blagues`                       | Ajouter une nouvelle blague     |
| `GET`   | `/api/v1/blagues`                       | Récupérer toutes les blagues    |
| `GET`   | `/api/v1/blagues/:id`                   | Récupérer une blague par ID     |
| `GET`   | `/api/v1/blagues/random`                | Récupérer une blague aléatoire  |

▶️ Lancer le projet en local

git clone https://github.com/ikay-gh/Carambar-LandingPage-BackProject.git
cd Carambar-LandingPage-BackProject
npm install
npm run dev

📂 Structure
arduino
Copier
├── src/
│   ├── app.js
│   ├── routes/
│   ├── models/
│   ├── config/
│   └── seed.js
└── carambar.sqlite

✨ Autrice
CAYUELA Annick

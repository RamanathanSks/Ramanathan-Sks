
# Ramanathan Sks - Portfolio

This is the source code for my personal portfolio, showcasing my skills, projects, and experiences. The project is built using **Angular 16**, integrated with **Firebase** for hosting and backend services, and **Node.js** for server-side functionality.

## 🚀 Deployed Application

You can view the live version of my portfolio here: [RamanathanSks 👀](https://ramanathan-sks.web.app)

---

## 👨‍💻 Tech Stack

- **Frontend**: Angular 16
- **Backend**: Node.js
- **Database**: Firebase Firestore
- **Hosting**: Firebase Hosting
- **Other Integrations**: Firebase Cloud Functions

---

## 📂 Project Structure

```
|-- src/
|   |-- app/
|   |   |-- components/      # Angular components
|   |   |-- services/        # Angular services
|   |-- assets/              # Static assets
|   |-- environments/        # Environment configurations
|-- functions/               # Node.js Cloud Functions
|-- firebase.json            # Firebase configuration
|-- angular.json             # Angular CLI configuration
|-- package.json             # Project dependencies
```

---

## 🔧 Setup and Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/<your-username>/ramanathan-sks-portfolio.git
   cd ramanathan-sks-portfolio
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Set Up Firebase**
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
   - Add your Firebase configuration to `src/environments/environment.ts`:
     ```typescript
     export const environment = {
       production: false,
       firebase: {
         apiKey: "your-api-key",
         authDomain: "your-auth-domain",
         projectId: "your-project-id",
         storageBucket: "your-storage-bucket",
         messagingSenderId: "your-messaging-sender-id",
         appId: "your-app-id",
       },
     };
     ```

4. **Run Locally**
   ```bash
   ng serve
   ```

   The app will run at `http://localhost:4200`.

5. **Deploy to Firebase**
   - Build the project:
     ```bash
     ng build --prod
     ```
   - Deploy to Firebase:
     ```bash
     firebase deploy
     ```

---

## 🌟 Features

- Interactive UI built with Angular 16.
- Hosted on Firebase for fast and reliable delivery.
- Firebase Firestore for real-time database needs.
---

## 🛡 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## 🙋🏻‍♂️ Author

**Ramanathan Sks**  
Feel free to reach out via [LinkedIn](https://www.linkedin.com/in/ramanathan-sks) or email at `ramanathan.sks@gmail.com`.
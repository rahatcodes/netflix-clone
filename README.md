# 🎬 R-FLIX – Netflix Clone

A high-quality, responsive Netflix clone built with modern web technologies. R-FLIX allows users to browse and watch trailers of trending movies and TV shows, leveraging the TMDB (The Movie Database) API for real-time content data. It also includes Firebase Authentication for secure login and registration.

> 🌐 **Live Preview**: [r-flix.netlify.app](https://r-flix.netlify.app)

---

## 📌 Features

* 📄 Detailed movie info and trailer modal
* 🔒 User authentication via Firebase (Sign up / Login / Logout)
* ❤️ Play Trailer form TMDB
* 📱 Fully responsive and optimized for mobile, tablet, and desktop
* 🌙 Dark-themed UI inspired by Netflix

---

## 🔧 Tech Stack

* **React** – Component-based frontend library
* **Firebase Auth** – Authentication and user state management
* **TMDB API** – Source of movie and TV show data
* **Tailwind CSS** – Utility-first CSS for modern styling
* **React Router DOM** – Routing and navigation
* **React Icons** – Iconography

---

## 📦 Installation & Setup

To run the project locally:

1. **Clone the repository**

   ```bash
   git clone https://github.com/rahatcodes/netflix-clone.git
   cd netflix-clone
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Create Firebase project**

   * Go to [Firebase Console](https://console.firebase.google.com/)
   * Set up a new project
   * Enable **Email/Password Authentication**
   * Create a **Realtime Database** (or Firestore) and set rules
   * Add a new Web App and grab your Firebase config

4. **Configure environment**

   * Create a `.env` file in the root and add:

     ```env
     VITE_FIREBASE_API_KEY=your_api_key
     VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
     VITE_FIREBASE_PROJECT_ID=your_project_id
     VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
     VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
     VITE_FIREBASE_APP_ID=your_app_id
     VITE_TMDB_API_KEY=your_tmdb_api_key
     ```

5. **Run the app**

   ```bash
   npm run dev
   ```

---

## 🔐 Authentication (Firebase)

This project uses Firebase Authentication to handle user sign-up, login, and logout using email and password. The user state is managed globally, ensuring persistent login and seamless user experience across components.

---

## 🎥 Movie Data (TMDB)

Movie and TV show data is fetched from [The Movie Database API](https://www.themoviedb.org/documentation/api). You’ll need an API key to fetch the following:

* Trending movies
* Top rated movies
* Movie trailers (via YouTube)
* Search results

---

## 📁 Project Structure

```
src/
├── components/       # UI components (Navbar, Row, MovieCard, etc.)
├── context/          # Auth context provider
├── pages/            # Page components (Home, Login, Signup, Account)
├── services/         # Firebase config and utility functions
├── App.jsx           # Main app component and routes
└── main.jsx          # Entry point
```

---

## ✅ To-Do / Improvements

* Add pagination and lazy loading
* Integration with payment gateway (for demo)
* Add user profile customization
* Implement real-time chat for community discussions
* Add watch history feature

---


## 🙌 Contributing

Contributions are welcome! Feel free to fork the repository, submit issues, or open pull requests.

---

## 📃 License

This project is open-source and available under the [MIT License](LICENSE).

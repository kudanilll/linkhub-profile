# LinkHub

<p align="center">
  <img src="public/icon-512.png" alt="LinkHub Logo" width="200"/>
</p>

<p align="center">
  Your personal hub for social media links, built with modern web technologies.
</p>

## 🚀 About

LinkHub is a sleek, minimalist web application designed to centralize and streamline your online presence. Similar to Linktree, it provides a single landing page for all your important links, making it easier for your audience to connect with you across various platforms.

## ✨ Features

- 🎨 Minimalist design
- 🌓 Dark mode
- 📱 Fully responsive
- ⚡ Lightning-fast performance
- 🔗 Easy link management

## 🛠️ Built With

- [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript at Any Scale
- [Aceternity UI](https://ui.aceternity.com/) - Modern UI components for React

## 🏁 Getting Started

1. Clone the repository

```bash
https://github.com/achmaddaniel24/linkhub-profile.git linkhub
```

2. Navigate to the project directory

```bash
cd linkhub
```

3. Install dependencies

```bash
npm install
```

4. Start the development server

```bash
npm run dev
```

5. Setup your profile

Enter the style data you want, your social media url in `config.ts`

```typescript
screen: {
  style: "lamp", // "beam" | "lamp" (default)
},
profile: {
  name: "Achmad Daniel",
  list_social_media: [
    {
      title: "Instagram",
      description: "username",
      url: "url profile",
      img: "icon",
    },
}

```

6. Open your browser and visit `http://localhost:5173`

## 🚧 Project Structure

```text
linkhub/
├── src/
│   ├── components/
│   ├── lib/
│   ├── sections/
│   ├── App.tsx
│   ├── config.ts
│   └── main.tsx
├── public/
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## 📝 License

This project is licensed under the Apache-2.0 - see the [LICENSE.md](LICENSE.md) file for details.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check [issues page](https://github.com/yourusername/linkhub/issues).

## 👨‍💻 Author

**Achmad Daniel**

- GitHub: [@achmaddaniel24](https://github.com/achmaddaniel24)

## 🌟 Show your support

If you like my work, you can [buy me a coffee](https://www.buymeacoffee.com/kudanil) and share your thoughts 🎉 ☕

Give a ⭐️ if you like this project!

---

<p align="center">Made with ❤️ and ☕</p>

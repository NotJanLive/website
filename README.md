# NotJan - Modern Portfolio

A high-performance, cinematic personal website and portfolio built with **Next.js 15**, **React 19**, and **Framer Motion**. This project showcases a modern, high-end aesthetic tailored for Minecraft modding and Hytale development.

## 🚀 Features

- **Cinematic Hero Section:** Features a dynamic typing effect with high-intensity glowing accents and a blurred coding background.
- **Bento Grid Projects:** A sophisticated gallery layout for showcasing work, including "Hytems" and "ItemBattle," with interactive glass-morphism cards.
- **Modern UI/UX:** Built with **Tailwind CSS v4** and **shadcn/ui**, featuring a seamless glass-morphism design and responsive navigation.
- **Premium Animations:** Staggered reveals, parallax effects, and smooth transitions powered by **Framer Motion**.
- **Integrated Branding:** Dedicated sections for Hytale, Minecraft modding, and a personalized "Let's Connect" area with interactive social buttons.
- **Automated Deployment:** Integrated with **Drone CI** for seamless build and deployment to Docker.

## 🛠️ Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS, shadcn/ui
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Drone CI, Docker

## 🏁 Getting Started

### Prerequisites

- Node.js 20+
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/NotJanLive/website.git
   cd website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🚢 Deployment

This project uses **Drone CI** for automated deployment. On every commit to the main branch:
1. The project is built in standalone mode.
2. Production assets are uploaded to the server via SCP.
3. The Docker container is automatically recreated and exposed on ports **880 (HTTP)** and **7443 (HTTPS)**.

---

Made with ❤️ by [NotJan](https://github.com/notjanlive)

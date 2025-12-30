# Brasília Augmented Reality 🌍✨

Augmented Reality project developed using **WebXR**, **Three.js**, and **Vite**.

## 📋 Description

An interactive web application that uses augmented reality (AR/XR) technologies to visualize 3D content in real time through the browser.

## 🚀 Technologies Used

- **Three.js** – 3D library for WebGL  
- **WebXR** – Standard API for augmented and virtual reality  
- **Vite** – Bundler and development server  
- **JavaScript (ES6+)** – Main programming language  

## 📦 Installation

### Prerequisites
- Node.js 14+ installed

### Steps

1. Clone or navigate to the project directory:
```bash
cd Realidade-Aumentada-Brasilia
```

2. Install dependencies:
```bash
npm install
```

## 🎮 How to Use

### Development Mode
To start the development server with hot reload:
```bash
npm run dev
```
The app will be available at `http://localhost:5173`

### Production Build
To generate an optimized production build:
```bash
npm run build
```

### Preview
To preview the production build locally:
```bash
npm run preview
```

## 📁 Project Structure

```
├── index.html          # Main page with WebXR
├── marker.html         # Page for AR markers
├── package.json        # Project configuration
├── vite.config.js      # Vite configuration
├── public/             # Static assets
└── src/
    ├── main.js         # Main script
    ├── counter.js      # Counter component
    └── style.css       # CSS styles
```

## 🎯 Main Features

- ✅ One-click WebXR session activation  
- ✅ 3D rendering with Three.js  
- ✅ Integration with GLTFLoader for 3D models  
- ✅ Dynamic lighting  
- ✅ Responsive interface  

## 🔌 Compatibility

This application requires a browser with **WebXR** support:

- Chrome 79+
- Edge 79+
- Firefox 55+
- Safari 12.2+ (on compatible devices)

For the best experience, use a device with native AR support.

## 📝 Notes

- The project uses ES6 modules  
- Make sure to access via `https://` or `localhost` to use WebXR  
- Some browsers may require experimental flags enabled  

## 🤝 Contributions

Contributions are welcome! Feel free to:

- Report bugs  
- Suggest new features  
- Submit pull requests  



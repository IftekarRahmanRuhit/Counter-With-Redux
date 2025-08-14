# 🚀 Professional Redux Counter

A modern, professional counter application built with React, Redux Toolkit, and TypeScript. Features a stunning dark-themed UI with glass morphism effects, smooth animations, and comprehensive state management.

![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Redux](https://img.shields.io/badge/Redux_Toolkit-2.8.2-764ABC?style=for-the-badge&logo=redux&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.0.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.11-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## ✨ Features

### 🎯 Core Functionality
- **Increment/Decrement Counter**: Add or subtract values by 1 or 5
- **Real-time State Management**: Powered by Redux Toolkit
- **Type Safety**: Full TypeScript implementation
- **Responsive Design**: Works seamlessly on all devices

### 🎨 UI/UX Features
- **Dark Theme**: Professional dark color scheme
- **Glass Morphism**: Modern backdrop blur effects
- **Smooth Animations**: Floating elements and pulse effects
- **Gradient Backgrounds**: Animated gradient backgrounds
- **Professional Typography**: Inter font family
- **Interactive Elements**: Hover effects and transitions
- **Status Indicators**: Shows counter status (Positive/Negative/Zero)
- **Number Type Display**: Indicates if number is Even or Odd

### 🛠️ Technical Features
- **Redux Toolkit**: Modern Redux with simplified boilerplate
- **TypeScript**: Full type safety and better development experience
- **Vite**: Lightning-fast build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **DaisyUI**: Component library for enhanced styling
- **ESLint**: Code quality and consistency

## 🚀 Quick Start

### Prerequisites

- **Node.js**: Version 16 or higher
- **npm** or **yarn**: Package manager

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/counter-with-redux.git
   cd counter-with-redux
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5173`

## 📁 Project Structure

```
counter-with-redux/
├── public/
│   ├── counter image.jpeg    # App icon
│   └── vite.svg             # Vite logo
├── src/
│   ├── redux/
│   │   ├── features/
│   │   │   └── counter/
│   │   │       └── counterSlice.ts    # Redux slice for counter logic
│   │   ├── hook.ts                   # Typed Redux hooks
│   │   └── store.ts                  # Redux store configuration
│   ├── assets/
│   │   └── react.svg                 # React logo
│   ├── App.tsx                       # Main application component
│   ├── App.css                       # Custom styles and animations
│   ├── index.css                     # Global styles and utilities
│   ├── main.tsx                      # Application entry point
│   └── vite-env.d.ts                 # Vite type definitions
├── index.html                        # HTML template
├── package.json                      # Dependencies and scripts
├── tsconfig.json                     # TypeScript configuration
├── vite.config.ts                    # Vite build configuration
└── eslint.config.js                  # ESLint configuration
```

## 🛠️ Tech Stack

### Frontend Framework
- **React 19.1.0**: Latest React with concurrent features
- **TypeScript 5.8.3**: Type-safe JavaScript

### State Management
- **Redux Toolkit 2.8.2**: Modern Redux with simplified API
- **React Redux 9.2.0**: React bindings for Redux

### Styling & UI
- **Tailwind CSS 4.1.11**: Utility-first CSS framework
- **DaisyUI 5.0.50**: Component library for Tailwind
- **Custom CSS**: Glass morphism and animations

### Build Tools
- **Vite 7.0.4**: Fast build tool and dev server
- **ESLint**: Code linting and formatting

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 🎨 Design System

### Color Palette
- **Primary**: Blue gradients (#3b82f6 to #6366f1)
- **Secondary**: Purple gradients (#8b5cf6 to #ec4899)
- **Background**: Dark theme with gray/black gradients
- **Accents**: Orange and red for decrement actions

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800, 900
- **Gradient Text**: Applied to headings and important text

### Animations
- **Floating Elements**: Background decorative elements
- **Pulse Effects**: Counter display glow
- **Hover Transitions**: Button interactions
- **Fade-in**: Page load animations

## 🔄 State Management

### Redux Store Structure
```typescript
{
  counter: {
    count: number
  }
}
```

### Actions
- `increment(amount: number)`: Increase counter by specified amount
- `decrement(amount: number)`: Decrease counter by specified amount

### Reducers
- **counterSlice**: Manages counter state and logic
- **Type-safe**: Full TypeScript integration

## 🎯 Key Components

### App Component
- **Main Container**: Glass morphism card design
- **Header**: Professional branding and status
- **Counter Display**: Animated number display
- **Control Buttons**: Increment/decrement with icons
- **Status Panel**: Real-time counter information

### Redux Integration
- **Typed Hooks**: `useAppSelector` and `useAppDispatch`
- **Slice Pattern**: Feature-based state organization
- **Immer Integration**: Immutable updates with mutable syntax

## 🌟 Features in Detail

### Counter Functionality
- **Flexible Increment**: Add 1 or 5 to counter
- **Flexible Decrement**: Subtract 1 or 5 from counter
- **Real-time Updates**: Instant state synchronization
- **Status Tracking**: Positive/Negative/Zero detection
- **Number Analysis**: Even/Odd number identification

### UI/UX Excellence
- **Responsive Design**: Mobile-first approach
- **Accessibility**: Proper focus states and ARIA labels
- **Performance**: Optimized animations and transitions
- **Cross-browser**: Modern browser compatibility

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy Options
- **Netlify**: Drag and drop `dist` folder
- **Vercel**: Connect GitHub repository
- **GitHub Pages**: Deploy from GitHub Actions
- **Any Static Host**: Upload built files

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Maintain consistent code formatting
- Add proper comments and documentation
- Test functionality thoroughly


## 🙏 Acknowledgments

- **Redux Toolkit**: For simplified Redux development
- **Tailwind CSS**: For utility-first styling
- **DaisyUI**: For beautiful component library
- **Vite**: For lightning-fast development experience

---

<div align="center">

**Made with ❤️ by IftekarRahmanRuhit**

</div>
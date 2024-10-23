import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { TaskProvider } from './contexts/TaskContext.jsx';
import { ModalProvider } from './contexts/ModalContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TaskProvider>
      <ModalProvider>
        <App />
      </ModalProvider>
    </TaskProvider>
  </StrictMode>
);

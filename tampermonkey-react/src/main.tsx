import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// 1. Create a container element dynamically for the Tampermonkey script
const container = document.createElement('div');
container.id = 'tampermonkey-react-root';
document.body.appendChild(container);

// 2. Mount React into the newly created container
createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

import React from 'react'
import { createRoot } from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
import App from './App';

import './styles/style.css'

export default function index() {
  return (
    <div>index</div>
  )
}
const root = createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App></App>
    </BrowserRouter>
)
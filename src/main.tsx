/** @jsx hansCreateElement */
/** @jsxFrag hansFragment */
/** @jsxRuntime classic */
import { hansCreateElement } from '@/mini-react-hooks/hans-jsx-runtime';
import './style.css';
import { App } from './App';
import { render } from '@/mini-react-hooks/render';

const app = <App />;
const root = document.getElementById('root');
if (root) render(app, root);

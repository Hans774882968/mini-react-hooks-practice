/** @jsx myCreateElement */
/** @jsxFrag myFragment */
/** @jsxRuntime classic */
import { myCreateElement } from '@/mini-react-hooks/my-jsx-runtime';
import './style.css';
import { App } from './App';
import { render } from '@/mini-react-hooks/render';

const app = <App />;
const root = document.getElementById('root');
if (root) render(app, root);

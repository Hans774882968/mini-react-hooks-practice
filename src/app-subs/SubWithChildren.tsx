/** @jsx hansCreateElement */
/** @jsxFrag hansFragment */
/** @jsxRuntime classic */
import { hansCreateElement, hansFragment } from '@/mini-react-hooks/hans-jsx-runtime';
import './SubWithChildren.css';

interface SubWithChildrenProps {
  children?: Array<Element>
}

export default function SubWithChildren({ children }: SubWithChildrenProps) {
  return (
    <div className="sub-with-children">
      <h1>SubWithChildren</h1>
      <span className="child0">我是白色的</span>
      <div className="children-container">
        {children}
      </div>
    </div>
  );
}

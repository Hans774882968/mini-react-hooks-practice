/** @jsx myCreateElement */
/** @jsxFrag myFragment */
/** @jsxRuntime classic */
import { myCreateElement, myFragment } from '@/mini-react-hooks/my-jsx-runtime';
import SubDemo from './app-subs/SubDemo';
import SubDemoWithFragment from './app-subs/SubDemoWithFragment';
import SubWithChildren from './app-subs/SubWithChildren';

export function App() {
  return (
    <>
      <h1 class="title">Hello World</h1>
      <p>This is a custom JSX implementation</p>
      <ul>
        {
          [11, 45, 14].map(item => (
            <li>{`Item ${item}`}</li>
          ))
        }
      </ul>
      <SubDemo className="sub-demo" title="Sub Demo 1" />
      <SubDemoWithFragment title="Sub Demo 2" />
      <SubWithChildren>
        <span className="child0">我是天蓝色的0</span>
        <span className="child1">我是天蓝色的1</span>
        <span className="child2">我是蓝色的2</span>
      </SubWithChildren>
    </>
  );
}

/** @jsx hansCreateElement */
/** @jsxFrag hansFragment */
/** @jsxRuntime classic */
import { hansCreateElement, hansFragment } from '@/mini-react-hooks/hans-jsx-runtime';
import './SubDemoWithFragment.css';

interface SubDemoWithFragmentProps {
  title: string
}

export default function SubDemoWithFragment({ title }: SubDemoWithFragmentProps) {
  return (
    <>
      <h2>{title}</h2>
      <p className="sub-demo2-p">
        子组件SubDemoWithFragment调用成功
      </p>
    </>
  );
}

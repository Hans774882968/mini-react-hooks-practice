/** @jsx myCreateElement */
/** @jsxFrag myFragment */
/** @jsxRuntime classic */
import { myCreateElement, myFragment } from '@/mini-react-hooks/my-jsx-runtime';
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

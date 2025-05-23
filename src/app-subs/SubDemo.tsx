/** @jsx myCreateElement */
/** @jsxFrag myFragment */
/** @jsxRuntime classic */
import { myCreateElement } from '@/mini-react-hooks/my-jsx-runtime';
import './SubDemo.css';

interface SubDemoProps {
  className?: string
  title: string
}

export default function SubDemo({ className, title }: SubDemoProps) {
  return (
    <div className={className}>
      <h2>{title}</h2>
      <p>
        子组件SubDemo调用成功
      </p>
    </div>
  );
}

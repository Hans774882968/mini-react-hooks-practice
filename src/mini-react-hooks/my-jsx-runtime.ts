import { FRAGMENT_NAME } from '../consts';

type SubElement = Element | string
type Children = Array<SubElement>
type Props = (Record<string, any>) | null

interface Element {
  type: string | Function
  props: Props
  children: Children
}

export function myCreateElement(
  type: string | Function,
  props: Props,
  ...children: Children
): Element {
  if(typeof type !== 'string') {
    const mergedProps = {
      ...props,
      children
    };
    return type(mergedProps);
  }
  // 处理子元素中的原始值（字符串、数字等）
  const flattenedChildren = children.flat().map(child => 
    typeof child === 'string' || typeof child === 'number' 
      ? String(child) 
      : child
  );

  const { className, ...propsRes } = props || {};
  if(className) {
    propsRes['class'] = className;
  }

  return {
    type,
    props: propsRes,
    children: flattenedChildren
  };
}

export function myFragment(props: Props): Element {
  const { children, ...restProps } = props;
  return myCreateElement(FRAGMENT_NAME, restProps, ...children);
}

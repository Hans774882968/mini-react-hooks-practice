import { FRAGMENT_NAME } from '../consts';

export function render(element: any, container: HTMLElement) {
  // 简单的渲染逻辑（实际项目需要更完整的实现）
  if (typeof element === 'string') {
    container.appendChild(document.createTextNode(element));
    return;
  }

  if (element.type === FRAGMENT_NAME) {
    element.children.forEach(child => render(child, container));
    return;
  }

  const el = document.createElement(element.type);

  for (const [key, value] of Object.entries(element.props)) {
    if (key === 'class') {
      el.className = value;
    } else {
      el.setAttribute(key, String(value));
    }
  }
  
  // 渲染子元素
  element.children.forEach(child => render(child, el));
  
  container.appendChild(el);
}

import { ComponentProps, MouseEvent } from 'react';

interface ButtonProps extends ComponentProps<'a'> {
  children: string;
  href?: string;
  anchor?: string;
}

export function Button(props: ButtonProps) {
  const { href, anchor, children, ...rest } = props;
  const link = href ? href : `#${anchor}`;
  
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (anchor) {
      event.preventDefault();
      const targetElement = document.getElementById(anchor);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <a href={link} {...rest} className="font-bold text-gray-300 text-[18px] font-K2D" onClick={handleClick}>
      {children}
    </a>
  );
}

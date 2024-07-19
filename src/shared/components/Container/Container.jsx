import clsx from 'clsx';
import s from './Container.module.scss';

const Container = ({ className, children }) => {
  <div className={clsx(s.container, className && className)}>{children}</div>;
};

export default Container;

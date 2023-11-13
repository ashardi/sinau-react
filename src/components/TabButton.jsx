export default function TabButton({children, isSelected, ...propsies}) {
  return (
    <li><button className={isSelected ? 'active' : ''} {...propsies}>{children}</button></li>
  );
}
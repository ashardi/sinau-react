export default function Section({title, children, ...propsies}) {
  return (
    <section {...propsies}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
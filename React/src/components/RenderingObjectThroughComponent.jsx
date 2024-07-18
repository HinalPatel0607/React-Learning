function RenderingObjectThroughComponent({ name, price, emoji }) {
  return (
    <li>
      {emoji} {name} ${price}
    </li>
  );
}
export default RenderingObjectThroughComponent;

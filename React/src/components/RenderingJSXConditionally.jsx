function RenderingJSXConditionally() {
  const display = true;
  if (display) {
    return (
      <div>
        <h3>This is a conditional jsx rendering.</h3>
      </div>
    );
  } else {
    return (
      <div>
        <h3>Code Everyday</h3>
      </div>
    );
  }
}
export default RenderingJSXConditionally;

function Objectprop(props) {
  return (
    <div>
      <h1>
        {props.person.name} {props.person.message} {props.person.emoji}
        {props.person.seatNumbers}
      </h1>
    </div>
  );
}

export default Objectprop;

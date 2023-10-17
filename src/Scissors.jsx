function Scissors(props) {
    return (
  
      <div className='control' onClick={() => { props.click(0) }}>
        {/* onClick={props.click} */}
        <img src='http://ggoreb.com/images/react/scissors.png' />
      </div>
    );
  }
  export default Scissors;
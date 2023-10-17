function Rock(props) {
  return (
    <div className='control' onClick={() => { props.click(1) }}>
      <img src='http://ggoreb.com/images/react/rock.png'></img>
    </div>
  );
}

export default Rock;
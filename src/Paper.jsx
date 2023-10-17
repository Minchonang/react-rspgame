function Paper(props) {
    return (
      <div className='control' onClick={() => { props.click(2) }}>
        <img src='http://ggoreb.com/images/react/paper.png'></img>
      </div>
    );
  }

  export default Paper;

function Result(props) {
    // 가위바위보 로직 기억이 안나서 ;; 임시로
    
    // console.log(props , com)
    return (
      <div className='result'>
        <h1>Com: {props.com}</h1>
        <h1>Player: {props.player}</h1>
        <h1>{props.result}</h1>
      </div>
    );
  
  
  }
  export default Result;
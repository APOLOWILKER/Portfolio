import React from 'react';
import { Link } from 'react-router-dom';
// import Lottie from 'react-lottie';
import '../styles/Header.css';
// import animationData from './animation.json';

function Header() {
  // export const LikeButton = () => {
  //   const [isLiked, setLikeState] = useState(false);
  //   const [ animationState, setAnimationState ] = useState({
  //     isStopped: true, isPaused: false
  //   });
  // https://www.youtube.com/watch?v=dZH9aDX8T-0&ab_channel=DevSoutinho
  
  //   const defaultOptions = {
  //     loop: false,
  //     autoplay: false, 
  //     animationData: animationData,
  //     rendererSettings: {
  //       preserveAspectRatio: 'xMidYMid slice'
  //     }
  //   };
  // };

  
  return ( 
    <nav className='container-header'>
      {/* <ButtonWrapper onClick={() => {
          const reverseAnimation = -1;
          const normalAnimation = 1;
        setAnimationState({
          ...animationState,
          isStopped: false,
          direction: animationState.direction === normalAnimation 
            ? reverseAnimation
            : normalAnimation,
        });
        setLikeState(!isLiked);
      }}>
        <Lottie options={defaultOptions}
          height={400}
          width={400}
          isStopped={animationState.isStopped}
          isPaused={setAnimationState.isPaused}/>
      </ButtonWrapper>
      <span>{isLiked ? 1 : 0}</span> */}
      <ul className='list-container-header'>
        <Link to="/"><li className='item-header'>HOME</li></Link>
        <Link to="/projects"><li className='item-header'>PROJETOS</li></Link>
        <Link to="/tecnologie"><li className='item-header'>TECNOLOGIAS</li></Link>
      </ul>
    </nav>
  );
}

export default Header;

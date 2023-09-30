import React from 'react'
import styles from './Home.module.css'
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom'
import Card from '../../Components/shared/Card/Card';
import Button from '../../Components/shared/Button/Button';
const Home = () => {
 
   
  const signInLinkStyle = {
    color: "#9D2235",
    fontWeight : "bold" ,
    textDecoration : "none" ,
    marginLeft: "10px"
  }

  const history = useNavigate();
  function startRegister () {
    console.log("button is clicked...");
     history("/authenticate");
  }




  return (
    <div className={styles.cardWrapper}>
        <Card title="Welcome to GeekVoice!!" icon="smile">
        <p className={styles.text}>we're proud that you chose to join our team. We were thrilled to find someone with your abilities, ideas and great attitude.</p>
       <div>
        <Button onClick={startRegister} text="Let's Go." />
       </div>
         <div className={styles.siginWrapper}>
             <span className={styles.hasInvite}>Have an invite text?</span>
         </div>
        </Card>
    </div>
  );
}

export default Home
import React from 'react';
import '../components/styles/IdleScreen.css'
import Carousel from 'react-material-ui-carousel'
import translations from "../translations.json"
import { Navigate, useNavigate, Link } from "react-router-dom";

function ShowTranslated(props) {

    return (
        <div className='loading--needhelp'>
            <h1>{props.item?.name}</h1>
        </div>
  )
  }

function IdleScreen(props) {
    const navigate = useNavigate();
    const redirectMain = () => {
      navigate('/main');
    };

    
    var needHelpTranslations = [
        {
            name: "Need Help?"
        },
        {
            name: "Besoin d'aide?"
        },
        {
            name: "¿Necesitas ayuda?"
        },
        {
            name: "Kailangan ng tulong?"
        },
        {
            name: "مدد چاہیے؟"
        }
    ]

  return (
    <div className='loading--screen' onClick={redirectMain}>
        <div className='loading--needhelp'>
                {/* <h1>Need Help?</h1> */}

            <Carousel autoPlay indicators={false} interval={4000} swipe={false} animation={"slide"} duration={500} navButtonsAlwaysInvisible={true}>
                {
                    needHelpTranslations.map( (item, i) => <ShowTranslated item={item} />)

                }
            </Carousel>


        </div>


        <img src='../public/YYCioskLogo.png' alt='yyciosklogo'/>
    </div>
  );
}

export default IdleScreen;
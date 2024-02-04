import React from 'react';
import '../styles/Dashboard.css'

function DashboardIcon(props) {
  return (
    <div style={{ backgroundColor: '#C8102E', height: '12rem', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column'}}>
          <img  src={props?.imageIcon} onClick={props.handleClick} id={props?.iconLabel} alt={props?.iconLabel + ' Icon'} style={{height: '6rem', width: '6rem'}} />
          <span style={{fontWeight: '600', color: 'white', fontFamily: 'sans-serif', fontSize: '1.25rem', marginTop: '0.5rem'}}>{props?.iconLabel}</span>
        </div>
    </div>
  );
}

export default DashboardIcon;






import React from 'react'
import MainModal from '../MainModal/MainModal.jsx'
import LoginLayout from './LoginLayout/LoginLayout.jsx'
import DashBoard from './DashBoard/DashBoard.jsx'
import styles from './Layout.module.css';

const Layout = (props) => {
  // Determine mode and rendered accordingly
  let layout = null;
  switch (props.mode) {
    case "login": layout = <DashBoard />;break;
    default: layout = <LoginLayout />; break;
  }

  // Determine whether or not to show modal
  let modal = null;
  if (props.useModal) {
    modal = <MainModal />;
  }
  
  return (
    // Modal
    <div className={styles.mainLayout}>
      {modal}
      {layout}  
    </div>
  )
}

export default Layout

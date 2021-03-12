import {useState, useEffect, useRef} from 'react'
import styles from './../../styles/components/banner-consulation.module.scss'
import ModalRequest from './resquest'

const component = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className={styles.btn} onClick={() => handleShow()}><span>Написать</span></button>
      <ModalRequest show={show} onHide={handleClose}/>
    </>
  )
}

export default component
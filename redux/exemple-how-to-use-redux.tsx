import {useState, useEffect, useRef} from 'react'
import {connect} from 'react-redux'




const Component = (props) => {
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  

  return (
    <>
      
    </>
  )
}




export default connect(
  state => ({
    /*
    *appStore in component props
    */
    appStore: state
  }),

   /*
   *Evry function in dispatch also can be using in component before return (Exemple: onClick={() => props.OpenModale()})
   */
  dispatch => ({
    OpenModale: () => {
      console.log('open')
      dispatch({
        type: 'OPEN_MODALE',
        playload: true
      })
    },
    CloseModale: () => {
      console.log('close')
      dispatch({
        type: 'CLOSE_MODALE',
        playload: false
      })
    },
  })
)(Component)
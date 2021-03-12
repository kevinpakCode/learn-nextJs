import {useState, useEffect, useRef} from 'react'
import {connect} from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Modal from 'react-bootstrap/Modal'

import styles from './../../styles/components/modal.module.scss'

const ModalRequest = (props) =>{
  const modale = useRef(null)


  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      company: '',
      message:''
    },

    validationSchema: Yup.object({
      name: Yup.string().required('Обязательно поля'),
      email: Yup.string().email('Введите правильный адрес электронной почты').required('Обязательно поля'),
      phone: Yup.string().required('Обязательно поля'),
      company: Yup.string().required('Обязательно поля'),
      message: Yup.string().required('Обязательно поля'),
    }),

    onSubmit: values => {
      alert(JSON.stringify(values, null, 2))
    },
  })


  useEffect(() =>{
    //console.log(modale.current)
  })




  return (
    <>
      <Modal className={styles.modal} show={props.show} onHide={props.onHide} ref={modale}>
        <Modal.Header closeButton className="btn-close"></Modal.Header>
        <Modal.Body className={styles.body}>
          <form onSubmit={formik.handleSubmit} className={styles.form}>
            <div className="cpn-form-row">
              <label htmlFor="user-name" className="cpn-form-row__label">Имя <span className="cpn-form-row__label-required" >*</span></label>
              <input
                type="text"
                id="user-name"
                className={`cpn-field ${formik.touched.name && formik.errors.name ? 'cpn-field--error': 'cpn-field--valid'}`}
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
              {formik.touched.name && formik.errors.name ? (<div className="cpn-field-message">{formik.errors.name}</div>) : null}
            </div>

            <div className="cpn-form-row">
              <label htmlFor="user-phone" className="cpn-form-row__label">Телефон <span className="cpn-form-row__label-required" >*</span></label>
              <input
                type="text"
                id="user-phone"
                className={`cpn-field ${formik.touched.phone && formik.errors.phone ? 'cpn-field--error': 'cpn-field--valid'}`}
                name="phone"
                onChange={formik.handleChange}
                value={formik.values.phone}
              />
              {formik.touched.phone && formik.errors.phone ? (<div className="cpn-field-message">{formik.errors.phone}</div>) : null}
            </div>

            <div className="cpn-form-row">
              <label htmlFor="user-email" className="cpn-form-row__label">E-mail <span className="cpn-form-row__label-required" >*</span></label>
              <input
                type="text"
                id="user-email"
                className={`cpn-field ${formik.touched.email && formik.errors.email ? 'cpn-field--error': 'cpn-field--valid'}`}
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (<div className="cpn-field-message">{formik.errors.email}</div>) : null}
            </div>

            <div className="cpn-form-row">
              <label htmlFor="user-company" className="cpn-form-row__label">Компания <span className="cpn-form-row__label-required" >*</span></label>
              <input
                type="text"
                id="user-company"
                className={`cpn-field ${formik.touched.company && formik.errors.company ? 'cpn-field--error': 'cpn-field--valid'}`}
                name="company"
                onChange={formik.handleChange}
                value={formik.values.company}
              />
              {formik.touched.company && formik.errors.company ? (<div className="cpn-field-message">{formik.errors.company}</div>) : null}
            </div>

            <div className="cpn-form-row">
              <label htmlFor="user-message" className="cpn-form-row__label">Ваше сообщение <span className="cpn-form-row__label-required" >*</span></label>
              <textarea 
                id="user-message" 
                className={`cpn-field ${formik.touched.message && formik.errors.message ? 'cpn-field--error': 'cpn-field--valid'}`}
                placeholder="Необязательный пункт"
                name="message" 
                onChange={formik.handleChange}
                value={formik.values.message}
              ></textarea>
              {formik.touched.message && formik.errors.message ? (<div className="cpn-field-message">{formik.errors.message}</div>) : null}
            </div>

            <div className="cpn-form-row cpn-form-row--btns">
              <button type="submit" className={styles.btn+' cpn-form-row__btn-submit cpn-form-row__btn-submit--block'}><span>Отправить</span></button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  )
}
export default ModalRequest
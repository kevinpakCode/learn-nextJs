import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import styles from './../styles/components/header.module.scss'

const Header = () => {
  return (
    <header className={styles.Header}>
      <Container>
        <Row>
          <Col sm={12}>
            <div className={styles.HeaderInnner}>
              <div className={styles.HeaderLogo}>
                <a href="/" className={styles.HeaderLogoLink}>
                  <img src="/images/svg/datahub_logo.svg" alt="logo"/>
                </a>
              </div>
              <ul className={styles.HeaderMenu}> </ul>
              <ul className={styles.HeaderBtns}> </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  )
}

export default Header
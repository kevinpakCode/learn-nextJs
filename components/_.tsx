import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import styles from './../styles/components/header.module.scss'
import link from 'next/link'

const MyComponent = () => {
  return (
    <>
      <header className={styles.component}>
        <Container>
          <Row>
            <Col sm={12}>
              <div className={styles.inner}>
              </div>
            </Col>
          </Row>
        </Container>
      </header>
    </>
  )
}

export default MyComponent
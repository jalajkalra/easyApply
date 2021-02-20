import React from 'react';
import classes from './body.module.css';
import {Container,Row,Col} from 'react-bootstrap';
import body1 from '../../assets/body1.jpg';
import body2 from '../../assets/body2.jpg';
import body3 from '../../assets/body3.jpg';
import body4 from '../../assets/body4.jpg';

const Body = ()=>{
    return(
        <Container>
            <Row className={classes.Background}>
                <Col>
                    <img src={body1} alt="Office" className={classes.Img}/>
                </Col>
                <Col>
                    <div className={classes.Centered}>
                        <h5 className={classes.P}>Find Your Work Fam</h5>
                        <p>
                            Learn what makes a company unique from the perspective of the people who work there — in their own words.
                        </p>
                    </div>
                </Col>
            </Row>
            <Row className={classes.Background}>
                <Col>
                    <div className={classes.Centered}>
                        <h5 className={classes.P}>Spotlight on Values</h5>
                        <p>
                            Chart a career with meaning — find companies whose mission, vision, and values align with yours.
                        </p>
                    </div>
                </Col>
                <Col>
                    <img src={body2} alt="Office" className={classes.Img}/>
                </Col>
            </Row>
            <Row className={classes.Background}>
                <Col>
                    <img src={body3} alt="Office" className={classes.Img}/>
                </Col>
                <Col>
                    <div className={classes.Centered}>
                        <h5 className={classes.P}>Benefits & Beyond</h5>
                        <p>
                            Find a workplace that fits your lifestyle with up-to-date information about what a company has to offer.
                        </p>
                    </div>
                </Col>
            </Row>
            <Row className={classes.Background}>
                <Col>
                    <div className={classes.Centered}>
                        <h5 className={classes.P}>Spotlight on Values</h5>
                        <p>
                            Chart a career with meaning — find companies whose mission, vision, and values align with yours.
                        </p>
                    </div>
                </Col>
                <Col>
                    <img src={body4} alt="Office" className={classes.Img}/>
                </Col>
            </Row>
        </Container>
    )
}
export default Body;
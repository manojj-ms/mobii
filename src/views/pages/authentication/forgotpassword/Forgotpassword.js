import React from "react"
import {
  Button,
  Card,
  CardBody,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Label
} from "reactstrap"
import { Mail} from "react-feather"
//import { history } from "../../../../history"
//import Checkbox from "../../../../components/@vuexy/checkbox/CheckboxesVuexy"
//import googleSvg from "../../../../assets/img/svg/google.svg"
import loginImg from "../../../../assets/img/pages/login.png"


import "../../../../assets/scss/pages/authentication.scss"


class Login extends React.Component {
  state = {
    activeTab: "1",
    email : "",
    password: ""
  }
  toggle = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      })
    }
  }
  render() {
    return (
      <Row className="m-0 justify-content-center">
        <Col
          sm="8"
          xl="7"
          lg="10"
          md="8"
          className="d-flex justify-content-center"
        >
          <Card className="bg-authentication login-card rounded-0 mb-0 w-100">
            <Row className="m-0">
              <Col
                lg="6"
                className="d-lg-block d-none text-center align-self-center px-1 py-0"
              >
                <img src={loginImg} alt="loginImg" />
              </Col>
              <Col lg="6" md="12" className="p-0">
                <Card className="rounded-0 mb-0 px-2">
                      <CardBody>
                        <h4>Forgot password</h4>
                        <p>please reset to your account.</p>
                        <Form onSubmit={e => e.preventDefault()}>
                          <FormGroup className="form-label-group position-relative has-icon-left">
                            <Input
                              type="email"
                              placeholder="Email"
                              value={this.state.email}
                              onChange={e => this.setState({ email: e.target.value })}
                            />
                            <div className="form-control-position">
                              <Mail size={15} />
                            </div>
                            <Label>Email</Label>
                          </FormGroup>
                          
                         
                          <div className="d-flex justify-content-between">
                            <Button.Ripple color="primary" outline>
                             Reset password                           
                            </Button.Ripple>
                            
                          </div>
                        </Form>
                      </CardBody>
                     
                </Card>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    )
  }
}
export default Login

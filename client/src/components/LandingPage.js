import React from "react";


// reactstrap components
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import HomeNavbar from "../components/Navbars/HomeNavbar.js";
import HomePageHeader from "components/Headers/HomePageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";

function LandingPage() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <HomeNavbar />
      <div className="wrapper">
        <HomePageHeader />
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="text-center" md="12">
                <h2 className="title">Business Details</h2>
                <div class="row">
                  <form class="col s6">
                    <div class="row">
                    <div class="input-field col s6">
                        <label for="textarea1"> Business Name</label>
                        <input placeholder="" id="first_name" type="longtext" class="form-control"/>
                        <label for="textarea1">Address</label>
                        <input placeholder="" id="first_name" type="longtext" class="form-control"/>
                        <label for="textarea1">Zip Code</label>
                        <input placeholder="" id="first_name" type="longtext" class="form-control"/>
                        <label for="textarea1">Username</label>
                        <input placeholder="" id="first_name" type="longtext" class="form-control"/>
                        <label for="textarea1">Image Url</label>
                        <input placeholder="" id="first_name" type="longtext" class="form-control"/>
                      </div>
                      <div class="input-field col s6">                        
                        <div class="input-field col s6">
                        <label for="textarea1">Owner</label>
                        <input placeholder="" id="first_name" type="longtext" class="form-control"/>
                      </div>
                      <div class="input-field col s3">
                        <label for="textarea1">Website</label>
                        <input placeholder="" id="first_name" type="longtext" class="form-control"/>
                      </div>
                      <div class="input-field col s6">
                        <label for="textarea1">Phone Number</label>
                        <input placeholder="" id="first_name" type="longtext" class="form-control"/>
                      </div>
                      <div class="input-field col s6">
                        <label for="textarea1">Email</label>
                        <input placeholder="" id="first_name" type="longtext" class="form-control"/>
                      </div>
                      <div class="input-field col s6">
                        <label for="textarea1">Current Location</label>
                        <input placeholder="" id="first_name" type="longtext" class="form-control"/>
                      </div>
                      </div>
                    </div>
                  </form>
                </div>
                <form class="col s12">
                  <div class="row">
                    <div class="input-field col s4"> 
                    <br/>
                    <h4 className="title">Hours of Operation</h4>                  
                    <label for="textarea1">Monday</label> <br/>
                      <input placeholder="" id="first_name" type="text" class="form" /> <br/>
                      <label for="textarea1">Tuesday</label> <br/>
                      <input placeholder=" " id="first_name" stype="text" class="form" /> <br/>
                      <label for="textarea1">Wednesday</label> <br/>
                      <input placeholder=" " id="first_name" type="text" class="form" /> <br/>
                      <label for="textarea1">Thursday</label> <br/>
                      <input placeholder=" " id="first_name" type="text" class="form" /><br/>
                      <label for="textarea1">Friday</label><br/>
                      <input placeholder=" " id="first_name" type="text" class="form" /><br/>
                      <label for="textarea1">Saturday</label><br/>
                      <input placeholder=" " id="first_name" type="text" class="form" /><br/>
                      <label for="textarea1">Sunday</label><br/>
                      <input placeholder=" " id="first_name" type="text" class="form" /><br/> 
                     </div>
                  </div>
                  <button type="submit" class="btn btn-info">Submit</button>
                </form>
              </Col>
            </Row>
            <a href="">Go Back</a>
            <div className="separator separator-primary"></div>
          </Container>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default LandingPage;

import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import colorSharp2 from "../assets/img/color-sharp2.png";
import mobile1 from "../assets/img/mobile1.png";
import web1 from "../assets/img/web-pmm-1.png";
import uiux1 from "../assets/img/uiux1.png"
import uiux2 from "../assets/img/uiux2.png"
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {

  const mobile = [
    {
      title: "Github User",
      description: "Kotlin",
      imgUrl: mobile1,
    }
  ];

  const web = [
    {
      title: "Schools Website",
      description: "PHP framework CI3",
      imgUrl: web1,
    },
  ];

  const ui = [
    {
      title: "Food Mobile Design",
      description: "Figma",
      imgUrl: uiux1,
    },
    {
      title: "Staycation Website Design",
      description: "Figma",
      imgUrl: uiux2,
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">UI/UX</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Web Development</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Mobile Development</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {ui.map((ui, index) => {
                            return <ProjectCard key={index} {...ui} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {web.map((web, index) => {
                            return <ProjectCard key={index} {...web} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {mobile.map((mobile, index) => {
                            return <ProjectCard key={index} {...mobile} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};

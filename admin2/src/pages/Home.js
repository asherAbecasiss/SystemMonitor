import React from "react";

import { getInfo } from "../redux/reducers/HostInfoSlice";
import { useSelector, useDispatch } from "react-redux";
import NavBar from "../component/NavBar/NavBar";

import "./Home.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NodeTable from "../component/NodeTable/NodeTable";
import TabInfo from "../component/TabInfo/TabInfo";
import Card from "react-bootstrap/Card";
function Home() {
  const info = useSelector((state) => state.info);
  const dispatch = useDispatch();

  React.useEffect(() => {
    //running the api call on first render/refresh
    dispatch(getInfo());
    //running the api call every one minute
    const interval = setInterval(() => {
      dispatch(getInfo());
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
 
          {info.isSuccess ? (
            <Container fluid>
              <Row>
                <div className="justify-content-center">
                  <NodeTable />
                  {/* <TabInfo /> */}
                </div>
              </Row>
            </Container>
          ) : (
            <p>empty</p>
          )}
      
        {/* <div className="down">
          <TabInfo />
        </div> */}
     
    </>
  );
}

export default Home;

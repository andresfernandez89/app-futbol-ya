import data from "../../db/mockData.json";
import styles from "./Fixture.module.scss";
import { Row, Col } from "antd";

const Fixture = () => {
  let aux = [];
  for (let i = 1; i < 4; i++) {
    aux.push(i);
  }

  return (
    <>
      <h4 className={styles.title}>FIXTURE</h4>
      {aux.map((i, index) => {
        return (
          <div key={i} className={styles.container}>
            <Row justify="center" align="middle">
              <Col className={styles.time}>12:30 hs</Col>
            </Row>
            <Row justify="center" wrap={false}>
              <Col xs={24} sm={24} md={24}>
                <Row
                  className={styles.match}
                  justify="center"
                  wrap={false}
                  align="middle"
                >
                  <Col
                    xs={11}
                    sm={11}
                    md={10}
                    lg={10}
                    className={`${styles.containerTeam} ${styles.containerTeamA}`}
                  >
                    <span className={styles.team}>
                      {data.country[0].leagues[0].teams[i].name}
                    </span>
                    <img
                      src={data.country[0].leagues[0].teams[i].logo}
                      className={styles.logo}
                      alt="logo club"
                    />
                    <span className={styles.result}>2</span>
                  </Col>
                  <Col xs={2} sm={2} className={styles.versus}>
                    vs
                  </Col>
                  <Col
                    xs={11}
                    sm={11}
                    md={10}
                    lg={10}
                    className={`${styles.containerTeam} ${styles.containerTeamB}`}
                  >
                    <span className={styles.result}>0</span>
                    <img
                      src={data.country[0].leagues[0].teams[index].logo}
                      className={styles.logo}
                      alt="logo club"
                    />
                    <span className={styles.team}>
                      {data.country[0].leagues[0].teams[index].name}
                    </span>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        );
      })}
    </>
  );
};

export default Fixture;

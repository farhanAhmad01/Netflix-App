import React from "react";
import {
  Container,
  CustomStyled,
  Grid,
  ImgMobo,
  ContentCustom,
} from "./styles/Container.styled";

const Custom = () => {
  return (
    <>
      <CustomStyled>
        <Container>
          <Grid>
            <div className="auto">
              <ImgMobo src="/images/moboNetflix.jpg" alt="" />
            </div>
            <ContentCustom>
              <h1>Download your shows to watch offline.</h1>
              <p>
                Save your favorites easily and always have something to watch.
              </p>
            </ContentCustom>
          </Grid>
        </Container>
      </CustomStyled>

      <CustomStyled>
        <Container>
          <ContentCustom>
            <h1>Watch everywhere.</h1>
            <p>
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV.
            </p>
          </ContentCustom>
        </Container>
      </CustomStyled>

      <CustomStyled>
        <Container>
          <Grid>
            <div className="auto">
              <ImgMobo src="/images/netflixKid.png" alt="" />
            </div>
            <ContentCustom>
              <h1>Create profiles for kids.</h1>
              <p>
                Send kids on adventures with their favorite characters in a
                space made just for them—free with your membership.
              </p>
            </ContentCustom>
          </Grid>
        </Container>
      </CustomStyled>

      <CustomStyled style={{ padding: "2rem 1%" }}>
        <Container>
          <footer
            style={{
              color: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "1.7rem",
              fontWeight: "600",
              textAlign: "center",
            }}
          >
            2021 ©️ All Rights Are Reserved . Created By Hayder Aly Jutt .{" "}
          </footer>
        </Container>
      </CustomStyled>
    </>
  );
};

export default Custom;

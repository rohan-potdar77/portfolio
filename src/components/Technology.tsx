import { Container, Grid, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { FC, memo } from "react";
import { Fragment } from "react/jsx-runtime";
import { technologies } from "../assets/data/data.json";

const useStyles = makeStyles((theme: Theme) => ({
  technologyContainer: {
    rowGap: "0.5rem",
    display: "flex",
    justifyContent: "space-between",
    padding: "3rem 1rem 3rem 1rem",
    backgroundColor: theme.palette.background.paper,
  },
  technology: {
    padding: "2rem",
    display: "flex",
    minHeight: "350px",
    borderRadius: "10px",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "ButtonShadow",
    "&:hover": {
      transform: "scale(1.04)",
      backgroundColor: "rgba(70, 130, 180, 0.4)",
      cursor: "pointer",
    },
    transition: "transform 0.3s ease-in-out, background-color 0.4s ease-in-out",
  },
  techImage: {
    height: "40%",
    maxWidth: "60%",
  },
}));

const handleClick = (url: string) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

const Technology: FC = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <Container maxWidth="xl">
        <Grid container className={classes.technologyContainer}>
          {technologies?.map((technology) => (
            <Fragment key={technology.id}>
              <Grid
                item
                xs={5.8}
                sm={3.9}
                md={1.9}
                className={classes.technology}
                onClick={() => handleClick(technology.details)}
              >
                <img
                  className={classes.techImage}
                  alt={technology.alt}
                  src={technology.src}
                  loading="lazy"
                />
                <Typography variant="body2" textAlign="center" fontWeight={550}>
                  {technology.description}
                </Typography>
              </Grid>
            </Fragment>
          ))}
        </Grid>
      </Container>
    </Fragment>
  );
};

export default memo(Technology);

import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { FC, Fragment, memo } from "react";
import Marquee from "react-fast-marquee";
import { projects } from "../assets/data/data.json";

const useStyles = makeStyles(() => ({
  main: {
    paddingTop: "0.5rem",
    paddingBottom: "2rem",
  },
  marqueeItem: {
    width: "350px",
    padding: "1rem",
    display: "flex",
    minHeight: "350px",
    color: "ActiveBorder",
    alignItems: "center",
    marginInline: "1.5rem",
    borderRadius: "0.5rem",
    flexDirection: "column",
    backgroundColor: "#A9A9A9",
    justifyContent: "space-between",
  },
}));

const Projects: FC = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <Container maxWidth="xl" className={classes.main}>
        <Marquee>
          {projects.map((item) => (
            <Fragment key={item.id}>
              <Box className={classes.marqueeItem}>
                <Typography variant="h6" textAlign="center" gutterBottom>
                  {item.heading}
                </Typography>
                <Typography variant="body2" textAlign="center" gutterBottom>
                  {item.description}
                </Typography>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Learn More
                </a>
              </Box>
            </Fragment>
          ))}
        </Marquee>
      </Container>
    </Fragment>
  );
};

export default memo(Projects);

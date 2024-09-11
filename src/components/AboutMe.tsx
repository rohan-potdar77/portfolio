import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import FlagIcon from "@mui/icons-material/Flag";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tab,
  Tabs,
  Theme,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { motion } from "framer-motion";
import {
  memo,
  ReactNode,
  SyntheticEvent,
  useCallback,
  useMemo,
  useState,
} from "react";
import { Fragment } from "react/jsx-runtime";

type TabPanelProps = {
  children?: ReactNode;
  index: number;
  value: number;
};

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    backgroundColor: theme.palette.background.default,
    color: "#FFFFFF",
  },
  tabStyle: {
    color: "#FFC65D",
    fontWeight: 600,
    textTransform: "uppercase",
    transition: "all 0.3s ease",
  },
}));

const tabProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

const CustomTabPanel = memo((props: TabPanelProps) => {
  const { children, value, index } = props;

  return (
    <Box
      padding={2}
      marginTop={2}
      color={(theme) => theme.palette.success.main}
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && <>{children}</>}
    </Box>
  );
});

const CustomTypography = memo(({ children }: { children: ReactNode }) => (
  <Typography
    gutterBottom
    variant="body1"
    lineHeight={2}
    letterSpacing={1}
    textAlign="justify"
    component={motion.p}
    transition={{ duration: 0.2 }}
    whileHover={{ scale: 1.05, color: "#F38568" }}
  >
    {children}
  </Typography>
));

const Education = memo(() => (
  <Fragment>
    <List>
      <ListItem>
        <ListItemIcon>
          <SchoolIcon
            sx={{ color: (theme) => theme.palette.secondary.light }}
          />
        </ListItemIcon>
        <ListItemText
          primary="Bachelor's of Engineering"
          secondary="Savitribai Phule Pune University"
          secondaryTypographyProps={{ color: "whitesmoke" }}
        />
      </ListItem>

      <ListItem>
        <ListItemIcon>
          <SchoolIcon
            sx={{ color: (theme) => theme.palette.secondary.light }}
          />
        </ListItemIcon>
        <ListItemText
          primary="Diploma"
          secondary="Maharashtra State Board Of Technical Education"
          secondaryTypographyProps={{ color: "whitesmoke" }}
        />
      </ListItem>

      <ListItem>
        <ListItemIcon>
          <SchoolIcon
            sx={{ color: (theme) => theme.palette.secondary.light }}
          />
        </ListItemIcon>
        <ListItemText
          primary="SSC"
          secondary="Maharashtra State Board Of Secondary & Higher Secondary Education"
          secondaryTypographyProps={{ color: "whitesmoke" }}
        />
      </ListItem>
    </List>
  </Fragment>
));

const Experience = memo(() => (
  <Fragment>
    <List>
      <ListItem>
        <ListItemIcon>
          <WorkIcon sx={{ color: (theme) => theme.palette.secondary.light }} />
        </ListItemIcon>
        <ListItemText
          primary="Full Stack Developer"
          secondary="NWS Software Private Limited, November 2022 - April 2024"
          secondaryTypographyProps={{ color: "whitesmoke" }}
        />
      </ListItem>
    </List>
  </Fragment>
));

const Objective = memo(() => (
  <Fragment>
    <List>
      <ListItem>
        <ListItemIcon>
          <FlagIcon sx={{ color: (theme) => theme.palette.secondary.light }} />
        </ListItemIcon>
        <ListItemText
          primary="Goal"
          secondary="My goal as a Full Stack Developer is to build robust, user-friendly applications that exceed expectations. I focus on creating efficient, scalable solutions that solve real-world problems while delivering a seamless user experience."
          primaryTypographyProps={{ fontWeight: "bold" }}
          secondaryTypographyProps={{
            color: "whitesmoke",
            textAlign: "justify",
          }}
        />
      </ListItem>

      <ListItem>
        <ListItemIcon>
          <EmojiObjectsIcon
            sx={{ color: (theme) => theme.palette.secondary.light }}
          />
        </ListItemIcon>
        <ListItemText
          primary="Vision"
          secondary="I envision staying ahead in the tech world by continuously learning and adapting to new technologies. My passion is to drive innovation, working collaboratively to create impactful solutions that push the boundaries of what's possible."
          primaryTypographyProps={{ fontWeight: "bold" }}
          secondaryTypographyProps={{
            color: "whitesmoke",
            textAlign: "justify",
          }}
        />
      </ListItem>
    </List>
  </Fragment>
));

const AboutMe = () => {
  const classes = useStyles();
  const [value, setValue] = useState<number>(0);

  const handleChange = useCallback((_: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  }, []);

  const AboutContent = useMemo(function () {
    return (
      <>
        <CustomTypography>
          Hello and welcome! I'm thrilled to have you here. I'm a passionate
          Full Stack Developer with a strong focus on the MERN stack. My journey
          in technology has been driven by a genuine love for solving problems
          and the excitement of creating solutions that make a difference. I
          believe in crafting applications that not only meet expectations but
          go beyond to deliver an exceptional user experience.
        </CustomTypography>
        <CustomTypography>
          Throughout my career, I've embraced the fast-paced world of
          technology, always staying curious and eager to learn. I thrive on
          challenges and am constantly exploring new tools and best practices to
          stay at the forefront of the ever-evolving tech landscape. Every
          project I take on is an opportunity to grow and improve, both
          personally and professionally.
        </CustomTypography>
        <CustomTypography>
          I'm always excited to connect with fellow tech enthusiasts,
          collaborators, and clients. If you're passionate about technology,
          have a project in mind, or just want to chat about the latest in web
          development, feel free to reach out. I'd love to hear from you!
        </CustomTypography>
      </>
    );
  }, []);

  return (
    <Fragment>
      <Container maxWidth="xl" className={classes.container}>
        <Grid container sx={{ padding: "3rem 1rem 3rem 1rem" }}>
          <Grid item xs={12} md={6}>
            {AboutContent}
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Box marginTop={{ xs: 4, sm: 4, md: 0 }}>
              <Tabs value={value} onChange={handleChange} aria-label="About Me">
                <Tab
                  className={classes.tabStyle}
                  label="Education"
                  {...tabProps(0)}
                />
                <Tab
                  className={classes.tabStyle}
                  label="Experience"
                  {...tabProps(1)}
                />
                <Tab
                  className={classes.tabStyle}
                  label="Objective"
                  {...tabProps(2)}
                />
              </Tabs>
            </Box>

            <CustomTabPanel value={value} index={0}>
              <Education />
            </CustomTabPanel>

            <CustomTabPanel value={value} index={1}>
              <Experience />
            </CustomTabPanel>

            <CustomTabPanel value={value} index={2}>
              <Objective />
            </CustomTabPanel>
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
};

export default memo(AboutMe);

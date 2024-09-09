import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Theme,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { motion } from "framer-motion";
import {
  FC,
  Fragment,
  memo,
  MouseEvent,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from "react";
import Logo from "/r_letter.svg";

type MyButton = {
  id: number;
  btnName: string;
};

type MyTypography = {
  variant: "h2" | "h3" | "h4";
  color: string;
  children: ReactNode;
};

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    position: "relative",
    zIndex: 1,
  },
  video: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: -1,
  },
  menuButton: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  buttonList: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
}));

const headerButtons: MyButton[] = [
  { id: 1, btnName: "home" },
  { id: 2, btnName: "about me" },
  { id: 3, btnName: "technology" },
  { id: 4, btnName: "projects" },
  { id: 5, btnName: "contact me" },
];

const ButtonList: FC = memo(() => (
  <Fragment>
    {headerButtons.map((button) => (
      <Button
        key={button.id}
        size="medium"
        component={motion.button}
        whileHover={{ scale: 1.2 }}
        sx={{
          color: "#FFFFFF",
          textTransform: "capitalize",
          "&: hover": { backgroundColor: "rgba(70, 130, 180, 0.4)" },
        }}
      >
        {button.btnName}
      </Button>
    ))}
  </Fragment>
));

const BackgroundVideo: FC = memo(() => {
  const classes = useStyles();
  return (
    <video className={classes.video} autoPlay loop muted>
      <source src="/coding_zoom.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
});

const LogoComponent: FC = memo(() => (
  <img src={Logo} alt="logo" width="30px" loading="lazy" />
));

const AnimatedTypography: FC<MyTypography> = memo(
  ({ variant, color, children }) => (
    <Typography
      variant={variant}
      component={motion[variant]}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.1 }}
      textTransform="capitalize"
      gutterBottom
      color={color}
    >
      {children}
    </Typography>
  )
);

const Home: FC = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuClick = useCallback((event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const handleMenuClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  const renderMenuItems = useMemo(
    () =>
      headerButtons.map((button) => (
        <MenuItem
          key={button.id}
          onClick={handleMenuClose}
          sx={{ textTransform: "capitalize" }}
        >
          {button.btnName}
        </MenuItem>
      )),
    []
  );

  return (
    <Fragment>
      <Container maxWidth="xl" className={classes.container}>
        <BackgroundVideo />
        <Grid container padding={2}>
          <Grid item xs={12}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <LogoComponent />
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleMenuClick}
                className={classes.menuButton}
              >
                <MenuIcon sx={{ color: "#FFFFFF" }} />
              </IconButton>
              <Box
                display="flex"
                justifyContent="flex-end"
                columnGap={4}
                className={classes.buttonList}
              >
                <ButtonList />
              </Box>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                {renderMenuItems}
              </Menu>
            </Box>
            <Divider
              sx={{ borderBottomWidth: 1, backgroundColor: "#FFC65D", mt: 2 }}
            />
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            marginTop={{ xs: 5, sm: 0 }}
          >
            <AnimatedTypography variant="h2" color="#FFFFFF">
              <Box component="span" color="#FFFFFF">
                hello!{" "}
              </Box>
              <Box component="span" color="#4CC3D9">
                i'm{" "}
              </Box>
              <Box component="span" color="#F16645">
                rohan{" "}
              </Box>
              <Box component="span" color="#FFC65D">
                potdar
              </Box>
            </AnimatedTypography>
            <AnimatedTypography variant="h3" color="#FFFFFF">
              a full stack developer
            </AnimatedTypography>
            <AnimatedTypography variant="h4" color="#4CC3D9">
              thanks for visiting my portfolio
            </AnimatedTypography>
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <Grid
              container
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <motion.img
                alt="asd"
                src="/guy_laptop_sitting_1.png"
                width="320px"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                loading="lazy"
              />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
};

export default memo(Home);

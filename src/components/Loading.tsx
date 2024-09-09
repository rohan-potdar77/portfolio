import {
  Container,
  Grid,
  Skeleton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { FC } from "react";

const Loading: FC = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Container maxWidth="xl">
        <Grid container paddingY={2} spacing={2}>
          <Grid item xs={3} sm={1}>
            <Skeleton variant="circular" height={"10vh"} />
          </Grid>
          <Grid item xs={9} sm={11}>
            <Skeleton variant="rounded" height={"10vh"} />
          </Grid>
          <Grid item xs={12} sm={7}>
            <Skeleton variant="rounded" height={"75vh"} />
          </Grid>
          {!isXs && (
            <Grid item xs={12} sm={5}>
              <Skeleton variant="rounded" height={"75vh"} />
            </Grid>
          )}
        </Grid>
      </Container>
    </>
  );
};

export default Loading;

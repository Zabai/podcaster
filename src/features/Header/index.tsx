import { ROUTES } from "@/constants/routes";
import { Link, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function Header() {
  return (
    <Stack borderBottom={1} paddingTop={1} paddingBottom={1.5}>
      <Link component={RouterLink} to={ROUTES.HOME} underline="none">
        <Typography>Podcaster</Typography>
      </Link>
    </Stack>
  );
}

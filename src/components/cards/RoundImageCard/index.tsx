import { Avatar, Paper, Typography } from "@mui/material";

interface Props {
  image: string;
  subtitle: string;
  title: string;
}

export default function RoundImageCard({ image, subtitle, title }: Props) {
  return (
    <Paper sx={{ paddingBottom: 2, paddingX: 1, textAlign: "center" }}>
      <Avatar
        src={image}
        sx={{ height: "64px", marginX: "auto", width: "64px" }}
      />

      <Typography color="textPrimary" fontSize={14} marginY={1} variant="h6">
        {title}
      </Typography>

      <Typography color="textSecondary" fontSize={12} variant="body2">
        {subtitle}
      </Typography>
    </Paper>
  );
}

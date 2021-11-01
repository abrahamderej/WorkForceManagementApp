import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useHistory } from "react-router";

export default function BasicCard({ title, body, linkText }) {
  const history = useHistory();
  const url = "" + linkText;
  const onVisitSubmit = () => {
    console.log("Clicked visit button");
    history.push("/company/" + url);
  };
  return (
    <Card sx={{ minWidth: 275, marginRight: 2 }}>
      <CardContent>
        <div className="titleBody">
          <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
            {title}
          </Typography>
        </div>
        <Typography variant="body2">{body}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={onVisitSubmit}>
          {linkText}
        </Button>
      </CardActions>
    </Card>
  );
}

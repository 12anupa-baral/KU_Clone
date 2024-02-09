import React from "react";
import "./styles/notice.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import groupImage from "../assets/group.png";

function Notice() {
  return (
    <div className="notice">
      <p>TO THE JOURNEY AHEAD</p>
      <h3>HIGHLIGHTS FOR STUDENTS</h3>
      <p>
        The University aspires to serve the nation by fulfilling the needs of
        the society through the motto of taking knowledge and skills “from the
        campus to the community.”
      </p>
      <Button variant="text">LEARN MORE</Button>
      <div className="noticeprovided">
        <div className="col1">
          <div className="newscard">
            <div className="firstcard">
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  alt="Group"
                  height="140"
                  image={groupImage} // Using the imported image variable
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    2024-01-28,SUNDAY
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit amet consectetur. Faucibus vitae
                    ullamcorper ac duis ipsum.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Read More</Button>
                </CardActions>
              </Card>
            </div>
            <div className="firstcard">
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  alt="Group"
                  height="140"
                  image={groupImage} // Using the imported image variable
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    2024-01-28,SUNDAY
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit amet consectetur. Faucibus vitae
                    ullamcorper ac duis ipsum.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Read More</Button>
                </CardActions>
              </Card>
            </div>
          </div>
        </div>
        <div className="col1">
          <div className="newscard">
            <div className="firstcard">
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  alt="Group"
                  height="140"
                  image={groupImage} // Using the imported image variable
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    2024-01-28,SUNDAY
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit amet consectetur. Faucibus vitae
                    ullamcorper ac duis ipsum.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Read More</Button>
                </CardActions>
              </Card>
            </div>
            <div className="firstcard">
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  alt="Group"
                  height="140"
                  image={groupImage} // Using the imported image variable
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    2024-01-28,SUNDAY
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit amet consectetur. Faucibus vitae
                    ullamcorper ac duis ipsum.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Read More</Button>
                </CardActions>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notice;

import React from "react";
import "./styles/news.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import groupImage from "../assets/group.png";

function News() {
  return (
    <>
      <div className="container">
        <div>
          <p>OUR LATEST NEWS</p>
          <h2>Checkout, what's going on! Latest News</h2>
        </div>

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
    </>
  );
}

export default News;

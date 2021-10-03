import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
 
export default function Recipe({ title, calories, image, ingredients }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  return (
    <Card >
      <CardHeader
     
        title={title}
      />
      <CardMedia
        component="img"
        // height="200"
        image={image}
        alt=""
      />
      <CardContent>
        <Typography variant="body2" color="text.black"> <br/>
         <b>Recipe Below  <CardActions >
         <ExpandMore
         display="flex"
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
         <ExpandMoreIcon >
  </ExpandMoreIcon>
           </ExpandMore>
      </CardActions></b>
     
        </Typography>
      </CardContent>

     
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Recipe:</Typography>
          <Typography paragraph>
          <ul>
              {ingredients.map(ingredient => (
              <li style={{ fontFamily: "Roboto", textAlign: "left" }}>
               {ingredient.text}
               </li>
                ))}
          </ul>
          </Typography>
            <Typography >
            <b> Calories : {calories} grams </b>
          </Typography>
        </CardContent>
      </Collapse>
     </Card>
  );
}

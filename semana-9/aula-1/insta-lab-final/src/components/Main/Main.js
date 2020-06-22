import React, { useState } from 'react';

import {
  Card,
  CardHeader,
  Avatar,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Collapse,
  Badge,
  TextField,
  Button,
  Divider,
  Paper,
} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import CommentIcon from '@material-ui/icons/Comment';
import AddCommentIcon from '@material-ui/icons/AddComment';
import { Grid, Typography } from '@material-ui/core';

function Main() {
  const [toggle, setToggle] = useState({
    favorite: false,
    showCommentList: false,
    showTextField: false,
  });

  const [commentList, setCommentList] = useState([]);
  const [comment, setComment] = useState('');

  const toggleFavorite = () => {
    setToggle({ ...toggle, favorite: !toggle.favorite });
  };

  const showCommentList = () => {
    setToggle({ ...toggle, showCommentList: !toggle.showCommentList });
  };

  const showTextField = () => {
    setToggle({ ...toggle, showTextField: !toggle.showTextField });
  };

  const handleComment = (e) => {
    setComment(e.target.value);
  };

  const postComment = () => {
    setCommentList([...commentList, comment]);
    setComment('');
  };

  return (
    <Paper style={{ padding: 16 }}>
      <Grid container>
        <Grid item xs={false} sm={4} />

        <Grid item xs={12} sm={4}>
          <Card>
            <CardHeader avatar={<Avatar>Y</Avatar>} title='Yuzo S. Okamoto' />
            <CardMedia
              style={{ height: 300 }}
              component='img'
              image={'https://picsum.photos/600'}
              title='Post'
            />
            <CardContent>
              <Typography paragraph>
                Imagem daora! Peguei no picsum.photos e achei super
                interessante, apesar de completamente aleatória.
              </Typography>
            </CardContent>
            <CardActions>
              <IconButton onClick={toggleFavorite}>
                {toggle.favorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
              </IconButton>
              <IconButton onClick={showCommentList}>
                <Badge badgeContent={0} color='secondary'>
                  <CommentIcon />
                </Badge>
              </IconButton>
              <IconButton onClick={showTextField}>
                <AddCommentIcon />
              </IconButton>
            </CardActions>
            <Collapse in={toggle.showCommentList}>
              <CardContent>
                <Typography paragraph>
                  Comentário super elegante que diz respeito ao post.
                </Typography>
                {commentList.map((comment) => (
                  <>
                    <Divider />
                    <Typography>{comment}</Typography>
                  </>
                ))}
              </CardContent>
            </Collapse>
            <Collapse in={toggle.showTextField}>
              <CardContent>
                <form noValidate autoComplete='off'>
                  <TextField
                    label='Adicionar comentário'
                    variant='outlined'
                    color='primary'
                    value={comment}
                    onChange={handleComment}
                  />
                  <Button
                    variant='contained'
                    color='primary'
                    onClick={postComment}
                  >
                    Enviar
                  </Button>
                </form>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>

        <Grid item xs={false} sm={4} />
      </Grid>
    </Paper>
  );
}

export default Main;

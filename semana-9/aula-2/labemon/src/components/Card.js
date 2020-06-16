import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';

import {
  Grid,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
  CircularProgress,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  card: {
    textTransform: 'capitalize',
  },
  spanOutter: {
    display: 'grid',
    gridTemplateRows: '1fr 1fr',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: 8,
  },
  spanInner: {
    fontStyle: 'italic',
  },
}));

const PokeCard = (props) => {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    fetchPokemon();
  }, [props.pokeName]);

  const fetchPokemon = async () => {
    try {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${props.pokeName}/`
      );

      setPokemon({
        name: res.data.name,
        image: res.data.sprites.front_default,
        types: res.data.types,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const classes = useStyles();

  return (
    <Grid item xs={12} sm={3}>
      <Card className={classes.card}>
        {pokemon ? (
          <>
            <CardHeader
              title={pokemon.name}
              subheader={`Generation ${props.pokeGen}`}
            />
            <CardMedia image={pokemon.image} style={{ height: 200 }} />
            <CardContent>
              <Typography>
                <span className={classes.spanOutter}>
                  {pokemon.types &&
                    pokemon.types.map((slot) => {
                      return (
                        <span key={Math.random()} className={classes.spanInner}>
                          {slot.type.name}
                        </span>
                      );
                    })}
                </span>
              </Typography>
            </CardContent>
          </>
        ) : (
          <CircularProgress />
        )}
      </Card>
    </Grid>
  );
};

export default PokeCard;

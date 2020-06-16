import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  Grid,
  FormControl,
  InputLabel,
  Select,
  Divider,
  CircularProgress,
} from '@material-ui/core';

import PokeLogo from './img/pokeapi.svg';

import PokeCard from './components/Card';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  img: {
    maxHeight: 50,
    justifySelf: 'center',
  },
  gridFormControl: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  divider: {
    marginTop: 32,
  },
  gridPokeCard: {
    marginTop: 32,
    padding: '0 32px',
  },
}));

function App() {
  const [pokeGen, setPokeGen] = useState(1);
  const [pokeList, setPokeList] = useState([]);

  useEffect(() => {
    fetchPokeList();
  }, [pokeGen]);

  const fetchPokeList = async () => {
    try {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/generation/${pokeGen}/`
      );
      setPokeList(res.data.pokemon_species);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePokeGen = (e) => {
    setPokeGen(e.target.value);
  };

  const classes = useStyles();

  return (
    <div>
      <AppBar position='static'>
        <Toolbar className={classes.toolbar}>
          <Typography>Developed by Yuzo Santana Okamoto</Typography>
          <img src={PokeLogo} alt='PokeApi' className={classes.img} />
          <Typography>https://pokeapi.co/</Typography>
        </Toolbar>
      </AppBar>
      <Grid container>
        <Grid item xs={12} className={classes.gridFormControl}>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor='gen-native-simple'>Generation</InputLabel>
            <Select
              native
              value={pokeGen}
              inputProps={{ name: 'gen', id: 'gen-native-simple' }}
              onChange={handlePokeGen}
            >
              <option value={1}>Gen 1</option>
              <option value={2}>Gen 2</option>
              <option value={3}>Gen 3</option>
              <option value={4}>Gen 4</option>
              <option value={5}>Gen 5</option>
              <option value={6}>Gen 6</option>
              <option value={7}>Gen 7</option>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Divider className={classes.divider} />
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={4} className={classes.gridPokeCard}>
            {pokeList ? (
              pokeList.map((pokemon, i) => (
                <PokeCard key={i} pokeName={pokemon.name} pokeGen={pokeGen} />
              ))
            ) : (
              <CircularProgress />
            )}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;

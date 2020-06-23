import React, { useState, useEffect } from 'react';

import { Grid } from '@material-ui/core';

import { fetchProfile, swipeAction, clearAction, safeReset } from './api';

import { Header, SwipeUI, MatchesUI } from './components';

import {
  StyledApp,
  SideGrid,
  StyledGridOutter,
  StyledGridInner,
} from './styles';

const App = () => {
  const [profile, setProfile] = useState({});
  const [matches, setMatches] = useState([]);
  const [activeScreen, setActiveScreen] = useState('swipe');

  const loadProfile = async () => {
    try {
      const newProfile = await fetchProfile();
      setProfile(newProfile);
    } catch (error) {
      console.error(error);
    }
  };

  const updateMatches = ({ clear }) => {
    if (clear) {
      setMatches([]);
    } else {
      alert('Match!');
      setMatches([...matches, profile]);
    }
  };

  const changeScreen = (id) => {
    id !== activeScreen && setActiveScreen(id);
  };

  const boost = () => {
    if (window.confirm('Deseja ativar o Boost?')) {
      alert('Boost Ativado!');
    }
  };

  const superLike = () => {
    if (window.confirm(`Dar um Super Like para ${profile.name}?`)) {
      alert('Super Liked!');
    }
  };

  useEffect(() => {
    // Função assíncrona imediatamente chamada (Immediately invoked async function)
    // Simula componentDidMount pegando o profile da API
    (async () => {
      await safeReset();
      const newProfile = await fetchProfile();
      setProfile(newProfile);
    })().catch((error) => {
      console.error(error);
    });
  }, []);

  return (
    <StyledApp>
      <Grid container>
        <SideGrid item xs={false} md={4} />

        <StyledGridOutter item xs={12} md={4}>
          <StyledGridInner container>
            <Header activeScreen={activeScreen} changeScreen={changeScreen} />

            {activeScreen === 'swipe' ? (
              <SwipeUI
                loadProfile={loadProfile}
                profile={profile}
                clearAction={clearAction}
                swipeAction={swipeAction}
                updateMatches={updateMatches}
                boost={boost}
                superLike={superLike}
              />
            ) : (
              <MatchesUI matches={matches} />
            )}
          </StyledGridInner>
        </StyledGridOutter>

        <SideGrid item xs={false} md={4} />
      </Grid>
    </StyledApp>
  );
};

export default App;

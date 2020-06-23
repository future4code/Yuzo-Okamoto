import axios from 'axios';

const fetchProfile = async () => {
  try {
    const res = await axios.get(
      'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/yuzo/person'
    );
    return res.data.profile;
  } catch (error) {
    console.error(error);
  }
};

const swipeAction = async (body) => {
  try {
    const res = await axios.post(
      'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/yuzo/choose-person',
      body
    );
    if (body.choice && res.data.isMatch) {
      return true;
    }
  } catch (error) {
    console.error(error);
  }
};

const clearAction = async () => {
  if (window.confirm('Deseja limpar seu histório de matches?')) {
    try {
      const res = await axios.put(
        'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/yuzo/clear'
      );
      console.log(`Clear ${res.data.message}`);
    } catch (error) {
      console.error(error);
    }
  }
};

// Limpa os Matches no mount para evitar o bloqueio da API
const safeReset = async () => {
  try {
    const res = await axios.put(
      'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/yuzo/clear'
    );
    console.log(`Clear ${res.data.message}`);
  } catch (error) {
    console.error(error);
  }
};

export { fetchProfile, swipeAction, clearAction, safeReset };

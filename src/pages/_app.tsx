import '../styles/global.css';

import { ChallengeProvider } from '../contexts/ChallengesContext';
import { CountDownContext } from '../contexts/CountDownContext';

function MyApp({ Component, pageProps }) {

  return (
    <Component {...pageProps} />
  )
}

export default MyApp

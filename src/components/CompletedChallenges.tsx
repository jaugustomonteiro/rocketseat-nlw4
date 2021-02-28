import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengesContext';
import sytles from '../styles/components/CompletedChallenges.module.css';

export function CompletedChallenges() {

    const { challengeCompleted } = useContext(ChallengeContext);

    return (
        <div className={sytles.completedChallengesContainer}>
            <strong>Desafios completos</strong>
            <strong>{challengeCompleted}</strong>
        </div>
    );
}
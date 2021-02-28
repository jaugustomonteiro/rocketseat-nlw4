import sytles from '../styles/components/CompletedChallenges.module.css';

export function CompletedChallenges() {
    return (
        <div className={sytles.completedChallengesContainer}>
            <strong>Desafios completos</strong>
            <strong>5</strong>
        </div>
    );
}
import { useState, useEffect, useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/CountDown.module.css';


let countDownTimeout: NodeJS.Timeout;

const countDown = 25;

export function CountDown() {

    const { startNewChallenge } = useContext(ChallengeContext);

    const [time, setTime] = useState(countDown * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);


    const minutes = Math.floor(time / 60);
    const secounds = time % 60;
    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secoundLeft, secoundRight] = String(secounds).padStart(2, '0').split('');

    useEffect(() => {
        if (isActive && time > 0) {
            countDownTimeout = setTimeout(() => {
                setTime(time - 1);
            }, 1000)
        }
        else if (isActive && time === 0) {
            setHasFinished(true);
            setIsActive(false);
            startNewChallenge();
        }

    }, [isActive, time]);

    function startCountDown() {
        setIsActive(true);
    }

    function resetCountDown() {
        clearTimeout(countDownTimeout);
        setIsActive(false);
        setTime(countDown * 60);
    }

    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secoundLeft}</span>
                    <span>{secoundRight}</span>
                </div>
            </div>

            {hasFinished ?
                (
                    <button
                        disabled
                        className={styles.countDownButton}

                    >
                        Ciclo encerrado
                    </button>
                )
                :
                (
                    <>
                        {
                            isActive ?
                                (
                                    <button
                                        type="button"
                                        className={`${styles.countDownButton} ${styles.countDownButtonActive}`}
                                        onClick={resetCountDown}
                                    >
                                        Abandonar ciclo
                                    </button>

                                )
                                :
                                (
                                    <button
                                        type="button"
                                        className={styles.countDownButton}
                                        onClick={startCountDown}
                                    >
                                        Iniciar um ciclo
                                    </button>
                                )
                        }
                    </>
                )
            }


        </div >
    );
}
import { useState, useEffect, useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengesContext';
import { CountDownContext } from '../contexts/CountDownContext';
import styles from '../styles/components/CountDown.module.css';

export function CountDown() {

    const {
        minutes,
        secounds,
        hasFinished,
        isActive,
        resetCountDown,
        startCountDown
    } = useContext(CountDownContext);

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secoundLeft, secoundRight] = String(secounds).padStart(2, '0').split('');


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
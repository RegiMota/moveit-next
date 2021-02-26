import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/completedChalleng.module.css';


export function CompletedChalleng() {
    const {challengesCompleted} = useContext (ChallengesContext);

return (
    <div className={styles.completedchallengcontainer}>
    <span>Desafios completos</span>
    <span>{challengesCompleted}</span>
    </div>
);
}
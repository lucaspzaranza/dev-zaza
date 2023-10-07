import LevelMeterContainer, { ProgressBar, ProgressBarUnit } from './meterStyles';
import { techLevel } from '../../data';
import { useContext } from 'react';
import { LangContext } from '../../context/LangContext';

export default function LevelMeter({lvl, expanded}) {
    const {lang} = useContext(LangContext)

    const clamp = (num, min, max) => Math.min(Math.max(num, min), max);
    const levelFill = clamp(lvl, 1, 3);

    function renderProgressBar() {
        var bars = [];

        for (let index = 0; index < levelFill; index++) {
            bars.push(<ProgressBarUnit/>)
        }

        return bars;
    }
    
    return (
        <LevelMeterContainer className={expanded? 'showContent' : 'hideContent'}>
            <ProgressBar>
                {
                    renderProgressBar()
                }
            </ProgressBar>

            {techLevel[lang][levelFill - 1]}
        </LevelMeterContainer>
    )
}
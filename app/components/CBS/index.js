import React, { Component } from 'react'
import CBSLogo from './cbs_logo.jpg'
import styles from './style.scss'

export default class CBS extends Component {
  render() {
    return (
        <div>
            <img className={styles.UniLogo} src={CBSLogo} />

            <h2>Studerer du på CBS?</h2>
            <p>
              Der er 14.690 gode grunde til at tilmelde sig en A-kasse som studerende på CBS - man kan nemlig få 14.690 kr. den første måned efter studiets ende. Mange studerende på CBS er medlem af en A-kasse netop af denne grund, og det er tilmed 100% gratis!
              Hvis man bliver medled af en A-kasse, mens man er under uddannelse, undgår man den normale karantæneperiode for nyuddannede, hvis man har været medlem i mindst ét år. Nyuddannede, der først melder sig i A-kasse efter de er blevet færdige, kan først få dagpenge efter en karantæneperiode på en måned.
            </p>

            <h2>Hvad er en A-kasse?</h2>
            <p>
              Ordet 'A-kasse' er en forkortelse for 'Arbejdsløshedskasse', og kan betegnes som en arbejdsløshedsforsikring.
              En A-kasse er ansvarlig for at udbetale dagpenge, i tilfælde af, at du står uden job efter studiets slutning. Dermed er du øknomisk sikret indtil du finder et job.
              Desuden kan du få vejledning til jobsøgning, udfyldelse af papirer osv. i forbindelse med at finde et job efter studiet.
            </p>

        </div>
    )
  }
}

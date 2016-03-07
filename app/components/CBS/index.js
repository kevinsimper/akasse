import React, { Component } from 'react'
import CBSLogo from './cbs_logo.jpg'
import styles from './style.scss'

export default class CBS extends Component {
  render() {
    return (
        <div>
            <img className={styles.UniLogo} src={CBSLogo} />

            <h2>Hvad er en a-kasse?</h2>
            <p>
                A-kasser er statsstøttede organisationer, hvis formål at give deres medlemmer arbejdsløshedsforsikring. Denne forsikring indebærer muligheden for at få udbetalt
                dagpenge i tilfælde, at a-kassens medlemmer bliver arbejdsløse. Hvis man ikke er medlem af en a-kasse, kan man kun få kontanthjælp i det uheldige tilfælde, at man står uden job -
                og kontanthjælpbeløbet er ikke nær så højt som dagpengesatsen. Desuden er der en masse krav man skal have opfyldt for at få udbetalt kontanthjælp. Det samme er ikke gældende med dagpenge.
            </p>

            <h2>Hvorfor skulle jeg melde mig ind i en a-kasse?</h2>
            <p>
                Der er 14.690 gode grunde til at tilmelde sig en a-kasse som studerende på CBS.
                I tilfælde af, at du står uden job efter studiets ende kan du nemlig få udbetalt 14.690 kr. den første måned efter studiets ophøren.
                Det er derfor en rigtig god idé for studerende at overveje at melde sig ind i en a-kasse.
                Samtidig tilbyder mange af a-kasserne gratis medlemskab til studerende.
                Man skal dog sørge for at melde sig ind i en a-kasse i god tid som studerende -
                der er nemlig en regel med, at man skal nemlig have været medlem af en a-kasse i et år, for at kunne modtage dagpenge fra den dag, studiet slutter.
                Hvis man melder sig ind i en a-kasse på et tidspunkt, hvor der er mindre end et år til, at ens studie er overstået, har man en karantæneperiode på en måned.
                Det betyder, at man ikke modtager dagpenge i en måned. Efter denne måned modtager man dog dagpenge regelmæssigt.
            </p>

            <h2>Hvad koster det mig som studerende?</h2>
            <p>
                Som studerende er de fleste a-kasser helt gratis at tilmelde sig!
            </p>

        </div>
    )
  }
}

import React from 'react'
import AktualityPageCard from '~/components/AktualityPageCard'

export const Aktuality = [
  {
    slug: 'rozsah-vyzivovacej-povinnosti',
    title: 'Rozsah výživovacej povinnosti',
    preview_text:
      'Rozsah vyživovacej povinnosti Základom pre určenie výšky výživného sú odôvodnené potreby oprávneného (ten, kto má nárok na výživné) a schopnosti, možnosti a majetkové pomery povinného (ten, kto má vyživovaciu povinnosť) ...',
  },
  {
    slug: 'dokazna-povinnost-danoveho-subjektu',
    title: 'Dôkazná povinnosť daňového subjektu v daňovej kontrole',
    preview_text:
      'Dôkazná povinnosť daňové subjektu v daňovej kontrole v prípade nadmerného odpočtu DPH V prípade, že firma ako daňový subjekt disponuje ...',
  },
  {
    slug: 'najom-priestoru-sluziaceho-na-podnikanie-podla-noveho-obcianskeho-zakonika-cr',
    title:
      'Nájom priestoru slúžiaceho na podnikanie podľa nového Občianskeho zákoníka v ČR',
    preview_text:
      'Ustanovení o nájmu prostoru sloužíciho k podnikání se vztahují na nájem prostoru nebo místnosti, je-li účelem nájmu provozování podnikatelské činnosti v tomto prostoru nebo v této místnosti a slouží-li pak prostor nebo místnost alespoň převážně podnikání, bez ohledu na to, zda je účel nájmu v nájemní smlouvě vyjádřen. ...',
  },
  {
    slug: 'rucitelsky-zavazok',
    title: 'Ručiteľský záväzok pri bankovom úvere',
    preview_text:
      'Ručiteľský záväzok pri bankovom úvere. Ručenie je jednostranný písomný právny úkon ručiteľa, ktorý musí spĺňať zákonné náležitosti z hľadiska formálnej aj obsahovej. ...',
  },
  {
    slug: 'ujma-na-zdravi',
    title: 'Ujma na zdraví',
    preview_text:
      'Odškodnenie za bolesť sa poskytuje nielen za bolesti spôsobené poškodením na zdraví, ale aj za bolesti spôsobené liečením poškodenia zdravia alebo odstraňovaním jeho následkov. ...',
  },
  {
    slug: 'skoda-sposobena-zacatim-trestneho-stihania',
    title: 'Škoda spôsobená začatím trestného stíhania',
    preview_text:
      'Nárok na náhradu škody spôsobenej začatím a vedením trestného stíhania, ktoré neskončilo právoplatným odsúdením je špecifickým prípadom zodpovednosti štátu podľa zákona č. 514/2003 Z.z. ...',
  },
  {
    slug: 'zmluvne-pokuty-v-zmluvach-s-mobilnymi-operatormi',
    title: 'Zmluvné pokuty v zmluvách s mobilnými operátormi',
    preview_text:
      'Súdna kontrola štandardných zmlúv je postavená na absolútnej neplatnosti neprijateľných klauzúl a bolo by v rozpore s cieľom smernice, ak by sa pred neprijateľnou podmienkou jeden spotrebiteľ ...',
  },
]

function AktualityPage() {
  return (
    <div className="flex flex-col space-y-5">
      <h1 className="flex text-2xl">Aktuality</h1>
      {Aktuality.map((aktualita, index) => (
        <AktualityPageCard
          key={index}
          title={aktualita.title}
          text={aktualita.preview_text}
          slug={aktualita.slug}
        />
      ))}
    </div>
  )
}

export default AktualityPage

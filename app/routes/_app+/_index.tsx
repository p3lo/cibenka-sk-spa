import { Link } from '@remix-run/react'
import React from 'react'
import { Autoplay } from 'swiper/modules'
import AktualityCard from '~/components/AktualityCard'
import InfoCard from '~/components/InfoCard'
import { Separator } from '~/components/ui/separator'
import slider1 from '../../images/slider1-2.jpg'
import slider2 from '../../images/slider22-1.jpg'
import slider3 from '../../images/slider33.jpg'
import rodinnepravo from '../../images/rodinne-pravo.jpeg'
import obcianskepravo from '../../images/obcianske-pravo.jpeg'
import obchodnepravo from '../../images/obchodne-pravo.jpeg'
import nehnutelnosti from '../../images/nehnutelnosti.jpeg'
import aktuality1 from '../../images/akt-1.jpeg'
import aktuality2 from '../../images/akt-2.jpeg'
import aktuality3 from '../../images/akt-3.jpeg'
import type { MetaFunction } from '@remix-run/node'
import 'swiper/css'
import 'swiper/css/autoplay'

export const meta: MetaFunction = () => {
  return [
    {
      title: 'Advokátska kancelária JUDr. Jaroslav Čibenka s.r.o.',
    },
    {
      name: 'description',
      content:
        'Sme advokátska kancelária poskytujúca právne služby a právne poradenstvo v oblasti slovenského a českého práva.',
    },
  ]
}

function Main() {
  const [Swiper, setSwiper] = React.useState<any>(null)
  const [SwiperSlide, setSwiperSlide] = React.useState<any>(null)

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      import('swiper/react').then(module => {
        setSwiper(() => module.Swiper)
        setSwiperSlide(() => module.SwiperSlide)
      })
    }
  }, [])

  // You can use a loading spinner or any placeholder here while waiting for the component to load
  if (!Swiper || !SwiperSlide) {
    return <div>Loading...</div>
  }

  return (
    <div className="flex w-full flex-col space-y-14">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        className="hidden h-full w-full border-b shadow lg:block"
      >
        <SwiperSlide>
          <div className="relative flex w-full items-center justify-center">
            <img alt="1" src={slider1} />
            <div className="absolute top-0 h-[100%] w-[60%] bg-stone-600/80 lg:top-[25%] lg:h-[50%] 2xl:top-[30%]">
              <div className="flex items-center justify-center text-slate-100">
                <div className="m-[1%] flex flex-col items-center space-y-1 lg:m-[3%] lg:space-y-3">
                  <h2 className="text-sm font-bold lg:text-3xl">
                    Právne služby a právne poraďenstvo
                  </h2>
                  <p className="lg:text-md text-xs font-semibold">
                    Sme advokátska kancelária poskytujúca právne služby a právne
                    poradenstvo v oblasti slovenského a českého práva
                  </p>
                  <Link to="/o-nas" className="lg:text-md text-xs">
                    Čítaj viac
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative flex w-full items-center justify-center">
            <img alt="1" src={slider2} />
            <div className="absolute top-0 h-[100%] w-[60%] bg-stone-600/80 lg:top-[25%] lg:h-[50%] 2xl:top-[30%]">
              <div className="flex items-center justify-center text-slate-100">
                <div className="m-[1%] flex flex-col items-center space-y-1 lg:m-[3%] lg:space-y-3">
                  <h2 className="text-sm font-bold lg:text-3xl">
                    Založenie spoločnosti
                  </h2>
                  <p className="lg:text-md text-xs font-semibold">
                    Pomôžeme Vám so založením spoločnosti
                  </p>
                  <Link
                    to="/sluzby/zalozenie-spolocnosti"
                    className="lg:text-md text-xs"
                  >
                    Čítaj viac
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative flex w-full items-center justify-center">
            <img alt="1" src={slider3} />
            <div className="absolute top-0 h-[100%] w-[60%] bg-stone-600/80 lg:top-[25%] lg:h-[50%] 2xl:top-[30%]">
              <div className="flex items-center justify-center text-slate-100">
                <div className="m-[1%] flex flex-col items-center space-y-1 lg:m-[3%] lg:space-y-3">
                  <h2 className="text-sm font-bold lg:text-3xl">
                    Pracovné právo
                  </h2>
                  <p className="lg:text-md text-xs font-semibold">
                    Podrobné informácie o Novele zákonníka práce
                  </p>
                  <Link
                    to="/podla-odvetvia/pracovne-pravo"
                    className="lg:text-md text-xs"
                  >
                    Čítaj viac
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="mx-2 grid max-w-full grid-cols-2 gap-2 md:mx-[15%] md:grid-cols-3 md:gap-8 lg:grid-cols-4 lg:gap-16">
        <InfoCard
          image={obcianskepravo}
          text="Pomáhame občanom s nájomnými zmluvami, darovacími zmluvami, s dedičským konaním, vymáhaním pohľadávok, so zastupovaním v súdnom, ako i exekučnom konaní."
          title="Občianske právo"
          link="/podla-odvetvia/obcianske-pravo"
        />

        <InfoCard
          image={obchodnepravo}
          text="Zaoberáme sa obchodnoprávnymi zmluvami a nárokmi, ktoré z nich vznikajú, vymáhaním pohľadávok vzniknutých z obchodnoprávnych vzťahov. Pracujeme na zakladaní spoločností, vykonávaní zmien v spoločnostiach, a tiež na ich rušení."
          title="Obchodné právo"
          link="/podla-odvetvia/obchodne-pravo"
        />

        <InfoCard
          image={rodinnepravo}
          text="Našich klientov zastupujeme pri rozvodoch, pri vyporiadaní majetku po rozvode, v konaniach o úprave pomerov neplnoletých detí pred a po rozvode manželstva, ako i v konaniach týkajúcich sa vyživovacej povinnosti a podobne."
          title="Rodinné právo"
          link="/podla-odvetvia/rodinne-pravo"
        />

        <InfoCard
          image={nehnutelnosti}
          text="Zabezpečujeme kompletný poradenský servis vo veciach prevodu nehnuteľností, pri zriadení vecného bremena a predkupného práva k nehnuteľnostiam, ale i pri realizácii záložného práva."
          title="Nehnuteľnosti"
          link="/podla-odvetvia/nehnutelnosti"
        />
      </div>

      <div className="flex h-40 w-full flex-col space-y-5 bg-slate-200">
        <h2 className="flex items-center justify-center py-5 text-3xl font-semibold">
          SLUŽBY PRE FIRMY
        </h2>
        <div className="flex justify-center space-x-1 md:space-x-5">
          <Link to="/sluzby/zalozenie-spolocnosti">
            Založenie spoločnosti (SRO)
          </Link>
          <Separator className="bg-black" orientation="vertical" />
          <Link to="/sluzby/zalozenie-zivnosti">Založenie živnosti (SZČO)</Link>
        </div>
      </div>
      <div className="flex flex-col">
        <h2 className="flex items-center justify-center py-2 text-2xl font-semibold">
          AKTUALITY
        </h2>
        <Separator className="mx-auto w-16 bg-black" orientation="horizontal" />
      </div>
      <div className="mx-2 grid max-w-full grid-cols-1 gap-16 sm:grid-cols-2 md:mx-[15%] lg:grid-cols-3">
        <AktualityCard
          image={aktuality1}
          link="/sluzby/kupna-zmluva"
          title="Kúpna zmluva a zodpovednosť predávajúceho za vady"
          text="Podľa § 596 zákona č.40/1964 Zb. Občiansky zákonník Ak vec má vady, o ktorých predávajúci vie, je povinný kupujúceho pri dojednávaní kúpnej zmluvy na ne upozorniť...."
        />
        <AktualityCard
          image={aktuality2}
          link="/aktuality/rozsah-vyzivovacej-povinnosti"
          title="Rozsah vyživovacej povinnosti"
          text="Rozsah vyživovacej povinnosti Základom pre určenie výšky výživného sú odôvodnené potreby oprávneného (ten, kto má nárok na výživné) a schopnosti, možnosti a majetkové..."
        />
        <AktualityCard
          image={aktuality3}
          link="/aktuality/dokazna-povinnost-danoveho-subjektu"
          title="Dôkazná povinnosť daňového subjektu v daňovej kontrole"
          text="Dôkazná povinnosť daňové subjektu v daňovej kontrole v prípade nadmerného odpočtu DPH V prípade, že firma ako daňový subjekt disponuje..."
        />
        {/* <AktualityCard
          image={aktuality1}
          link="/aktuality/rozsah-vyzivovacej-povinnosti"
          title="Rozsah vyživovacej povinnosti"
          text="Rozsah vyživovacej povinnosti Základom pre určenie výšky výživného sú odôvodnené potreby oprávneného (ten, kto má nárok na výživné) a schopnosti, možnosti a majetkové..."
        />
        <AktualityCard
          image={aktuality2}
          link="/aktuality/dokazna-povinnost-danoveho-subjektu"
          title="Dôkazná povinnosť daňového subjektu v daňovej kontrole"
          text="Dôkazná povinnosť daňové subjektu v daňovej kontrole v prípade nadmerného odpočtu DPH V prípade, že firma ako daňový subjekt disponuje..."
        />
        <AktualityCard
          image={aktuality3}
          link="/aktuality/najom-priestoru-sluziaceho-na-podnikanie-podla-noveho-obcianskeho-zakonika-cr"
          title="Nájom priestoru slúžiaceho na podnikanie podľa nového Občianskeho zákoníka v ČR"
          text="Ustanovení o nájmu prostoru sloužíciho k podnikání Ustanovení o nájmu prostoru sloužíciho k podnikání se vztahují na nájem prostoru nebo..."
        /> */}
      </div>
    </div>
  )
}

export default Main

import React from 'react'
import { MdEmail, MdPhone, MdFacebook } from 'react-icons/md'
import { Link } from '@remix-run/react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from './ui/navigation-menu'
import logo from '../images/cropped-cibo-2-2.png'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet'
import { RxHamburgerMenu } from 'react-icons/rx'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion'
import { Button } from './ui/button'

function Header() {
  const Drawer = () => (
    <div className="flex flex-col md:hidden">
      <div className="mx-5 flex items-center justify-between">
        <Link to="/">
          <img className="w-[60%]" alt="Logo" src={logo} />
        </Link>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <RxHamburgerMenu className="h-4 w-4" />
            </Button>
          </SheetTrigger>
          <SheetContent className="w-[400px] overflow-y-scroll" side="right">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <div className="my-10 flex w-full flex-col space-y-5">
              <Accordion type="single" collapsible className="w-full space-y-5">
                <AccordionItem value="item-1">
                  <AccordionTrigger className={navigationMenuTriggerStyle()}>
                    Služby pre občanov
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col">
                      <h2 className="mt-5 flex w-full items-center justify-center font-semibold">
                        NEHNUTEĽNOSTI
                      </h2>
                      <div className="flex w-full">
                        <Link
                          to="/sluzby/kupna-zmluva"
                          className={`grow ${navigationMenuTriggerStyle()}`}
                        >
                          Kúpna zmluva
                        </Link>
                      </div>
                      <div className="flex w-full">
                        <Link
                          to="/sluzby/darovacia-zmluva"
                          className={`grow ${navigationMenuTriggerStyle()}`}
                        >
                          Darovacia zmluva
                        </Link>
                      </div>
                      <div className="flex w-full flex-nowrap">
                        <Link
                          to="/sluzby/vysporiadanie-bezpodieloveho-spoluvlastnictva-manzelov"
                          className={`grow text-center ${navigationMenuTriggerStyle()}`}
                        >
                          Vysporiadanie podielového spoluvlastníctva
                        </Link>
                      </div>
                      <div className="flex w-full">
                        <Link
                          to="/sluzby/navrhy-na-kataster"
                          className={`grow ${navigationMenuTriggerStyle()}`}
                        >
                          Návrhy na kataster
                        </Link>
                      </div>
                      <div className="flex w-full">
                        <Link
                          to="/sluzby/vecne-bremena"
                          className={`grow ${navigationMenuTriggerStyle()}`}
                        >
                          Vecné bremená
                        </Link>
                      </div>
                      <div className="flex w-full">
                        <Link
                          to="/sluzby/najomna-zmluva"
                          className={`grow ${navigationMenuTriggerStyle()}`}
                        >
                          Nájomná zmluva
                        </Link>
                      </div>
                      <div className="flex w-full">
                        <Link
                          to="/sluzby/slovensky-pozemkovy-fond"
                          className={`grow text-center ${navigationMenuTriggerStyle()}`}
                        >
                          Slovenský pozemkový fond (SPF)
                        </Link>
                      </div>
                      <h2 className="mt-5 flex w-full items-center justify-center font-semibold">
                        RODINNÉ PRÁVO
                      </h2>
                      <div className="flex w-full">
                        <Link
                          to="/sluzby/navrh-na-rozvod"
                          className={`grow text-center ${navigationMenuTriggerStyle()}`}
                        >
                          Návrh na rozvod
                        </Link>
                      </div>
                      <div className="flex w-full">
                        <Link
                          to="/sluzby/zverenie-dietata-do-starostlivosti-pri-rozvode"
                          className={`grow text-center ${navigationMenuTriggerStyle()}`}
                        >
                          Zverenie dieťaťa do starostlivosti pri rozvode
                        </Link>
                      </div>
                      <div className="flex w-full flex-nowrap">
                        <Link
                          to="/sluzby/rozsah-vyzivovacej-povinnosti"
                          className={`grow text-center ${navigationMenuTriggerStyle()}`}
                        >
                          Výživné
                        </Link>
                      </div>
                      <div className="flex w-full flex-nowrap">
                        <Link
                          to="/sluzby/vysporiadanie-bezpodieloveho-spoluvlastnictva-manzelov"
                          className={`grow text-center ${navigationMenuTriggerStyle()}`}
                        >
                          Vysporiadanie bezpodielového spoluvlastníctva manželov
                        </Link>
                      </div>
                      <h2 className="mt-5 flex w-full items-center justify-center font-semibold">
                        DEDIČSKÉ PRÁVO
                      </h2>
                      <div className="flex w-full">
                        <Link
                          to="/sluzby/dozivotne-pravo-uzivania"
                          className={`grow text-center ${navigationMenuTriggerStyle()}`}
                        >
                          Doživotné právo užívania
                        </Link>
                      </div>
                      <div className="flex w-full">
                        <Link
                          to="/sluzby/zavet"
                          className={`grow text-center ${navigationMenuTriggerStyle()}`}
                        >
                          Závet
                        </Link>
                      </div>
                      <div className="flex w-full flex-nowrap">
                        <Link
                          to="/sluzby/prava-opomenuteho-dedica"
                          className={`grow text-center ${navigationMenuTriggerStyle()}`}
                        >
                          Práva opomenutého dediča
                        </Link>
                      </div>
                      <div className="flex w-full flex-nowrap">
                        <Link
                          to="/sluzby/obnova-dedicskeho-konania"
                          className={`grow text-center ${navigationMenuTriggerStyle()}`}
                        >
                          Obnova dedičského konania
                        </Link>
                      </div>
                      <div className="flex w-full flex-nowrap">
                        <Link
                          to="/sluzby/zastupenie-vlastnika"
                          className={`grow text-center ${navigationMenuTriggerStyle()}`}
                        >
                          Zastúpenie vlastníka
                        </Link>
                      </div>
                      <div className="flex w-full flex-nowrap">
                        <Link
                          to="/sluzby/slovensky-pozemkovy-fond"
                          className={`grow text-center ${navigationMenuTriggerStyle()}`}
                        >
                          Slovenský pozemkový fond (SPF)
                        </Link>
                      </div>
                      <h2 className="mt-5 flex w-full items-center justify-center font-semibold">
                        ĎALŠIE SLUŽBY
                      </h2>
                      <div className="flex w-full">
                        <Link
                          to="/sluzby/elektronicke-podania-na-organy-verejnej-spravy"
                          className={`grow text-center ${navigationMenuTriggerStyle()}`}
                        >
                          Elektronické podania na orgány verejnej správy
                        </Link>
                      </div>
                      <div className="flex w-full">
                        <Link
                          to="/sluzby/zastupovanie-pred-sudmi"
                          className={`grow text-center ${navigationMenuTriggerStyle()}`}
                        >
                          Zastupovanie pred súdmi
                        </Link>
                      </div>
                      <div className="flex w-full flex-nowrap">
                        <Link
                          to="/sluzby/vymahanie-pohladavok"
                          className={`grow text-center ${navigationMenuTriggerStyle()}`}
                        >
                          Vymáhanie pohľadávok
                        </Link>
                      </div>
                      <div className="flex w-full flex-nowrap">
                        <Link
                          to="/sluzby/zalozenie-obcianskeho-zdruzenia-a-nadacie"
                          className={`grow text-center ${navigationMenuTriggerStyle()}`}
                        >
                          Založenie občianského združenia a nadácie
                        </Link>
                      </div>
                      <div className="flex w-full flex-nowrap">
                        <Link
                          to="/sluzby/povolenie-na-pobyt-cudzincov-na-uzemi-sr"
                          className={`grow text-center ${navigationMenuTriggerStyle()}`}
                        >
                          Povolenie na pobyt cudzincov na území SR
                        </Link>
                      </div>
                      <div className="flex w-full flex-nowrap">
                        <Link
                          to="/sluzby/pracovne-zmluvy-a-skoncenie-pracovneho-pomeru"
                          className={`grow text-center ${navigationMenuTriggerStyle()}`}
                        >
                          Pracovné zmluvy a skončenie pracovného pomeru
                        </Link>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className={navigationMenuTriggerStyle()}>
                    Služby pre podnikateľov
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col">
                      <h2 className="mt-5 flex w-full items-center justify-center font-semibold">
                        OBCHODNÉ SPOLOČNOSTI
                      </h2>
                      <div className="flex w-full">
                        <Link
                          to="/sluzby/zalozenie-spolocnosti"
                          className={`grow text-center ${navigationMenuTriggerStyle()}`}
                        >
                          Založenie spoločnosti
                        </Link>
                      </div>
                      <div className="flex w-full">
                        <Link
                          to="/sluzby/zmeny-pri-zakladani-sro"
                          className={`grow text-center ${navigationMenuTriggerStyle()}`}
                        >
                          Zmeny pri zakladaní s.r.o.
                        </Link>
                      </div>
                      <div className="flex w-full flex-nowrap">
                        <Link
                          to="/sluzby/zmeny-v-spolocnosti"
                          className={`grow text-center ${navigationMenuTriggerStyle()}`}
                        >
                          Zmeny v spoločnosti
                        </Link>
                      </div>
                      <div className="flex w-full flex-nowrap">
                        <Link
                          to="/sluzby/zrusenie-spolocnosti"
                          className={`grow text-center ${navigationMenuTriggerStyle()}`}
                        >
                          Zrušenie spoločnosti
                        </Link>
                      </div>
                      <div className="flex w-full flex-nowrap">
                        <Link
                          to="/sluzby/zrusenie-spolocnosti-bez-likvidacie"
                          className={`grow text-center ${navigationMenuTriggerStyle()}`}
                        >
                          Zrušenie spoločnosti bez likvidácie (zlúčenie
                          spoločností, fúzia)
                        </Link>
                      </div>
                      <div className="flex w-full flex-nowrap">
                        <Link
                          to="/sluzby/konkurz"
                          className={`grow text-center ${navigationMenuTriggerStyle()}`}
                        >
                          Konkurz
                        </Link>
                      </div>
                      <div className="flex w-full flex-nowrap">
                        <Link
                          to="/sluzby/predaj-podniku-alebo-jeho-casti"
                          className={`grow text-center ${navigationMenuTriggerStyle()}`}
                        >
                          Predaj podniku alebo jeho časti
                        </Link>
                      </div>
                      <div className="flex w-full flex-nowrap">
                        <Link
                          to="/sluzby/virtualne-sidlo"
                          className={`grow text-center ${navigationMenuTriggerStyle()}`}
                        >
                          Virtuálne sídlo
                        </Link>
                      </div>
                      <div className="flex w-full flex-nowrap">
                        <Link
                          to="/sluzby/fuzie-akvizicie"
                          className={`grow text-center ${navigationMenuTriggerStyle()}`}
                        >
                          Fúzie/akvizície
                        </Link>
                      </div>
                      <div className="flex w-full flex-nowrap">
                        <Link
                          to="/sluzby/zalozenie-spolocnosti-v-eu"
                          className={`grow text-center ${navigationMenuTriggerStyle()}`}
                        >
                          Založenie spoločnosti v EU
                        </Link>
                      </div>
                      <div className="flex w-full flex-nowrap">
                        <Link
                          to="/sluzby/zalozenie-offshore-spolocnosti"
                          className={`grow text-center ${navigationMenuTriggerStyle()}`}
                        >
                          Založenie offshore spoločnosti
                        </Link>
                      </div>
                      <h2 className="mt-5 flex w-full items-center justify-center font-semibold">
                        GDPR A RPVS
                      </h2>
                      <div className="flex w-full flex-nowrap">
                        <Link
                          to="/sluzby/vseobecne-nariadenie-na-ochranu-osobnych-udajov"
                          className={`grow text-center ${navigationMenuTriggerStyle()}`}
                        >
                          Všeobecné nariadenie na ochranu osobných údajov (GDRP)
                        </Link>
                      </div>
                      <div className="flex w-full flex-nowrap">
                        <Link
                          to="/sluzby/zapis-konecneho-uzivatela-vyhod-do-obchodneho-registra"
                          className={`grow text-center ${navigationMenuTriggerStyle()}`}
                        >
                          Zápis konečného užívateľa výhod do obchodného registra
                        </Link>
                      </div>
                      <div className="flex w-full flex-nowrap">
                        <Link
                          to="/sluzby/register-partnerov-verejneho-sektora-rpvs"
                          className={`grow text-center ${navigationMenuTriggerStyle()}`}
                        >
                          Register partnerov verejného sektora, rpvs
                        </Link>
                      </div>
                      <h2 className="mt-5 flex w-full items-center justify-center font-semibold">
                        POHĽADÁVKY
                      </h2>
                      <div className="flex w-full flex-nowrap">
                        <Link
                          to="/sluzby/elektronicky-platobny-rozkaz-do-10-dni"
                          className={`grow text-center ${navigationMenuTriggerStyle()}`}
                        >
                          Elektronický platobný rozkaz do 10 dní
                        </Link>
                      </div>
                      <div className="flex w-full flex-nowrap">
                        <Link
                          to="/sluzby/zabezpecenie-zavazkov-dlznika"
                          className={`grow text-center ${navigationMenuTriggerStyle()}`}
                        >
                          Zabezpečenie záväzkov dlžníka
                        </Link>
                      </div>
                      <div className="flex w-full flex-nowrap">
                        <Link
                          to="/sluzby/uznanie-a-pristupenie-k-dlhu"
                          className={`grow text-center ${navigationMenuTriggerStyle()}`}
                        >
                          Uznanie a pristúpenie k dlhu
                        </Link>
                      </div>
                      <div className="flex w-full flex-nowrap">
                        <Link
                          to="/sluzby/navrh-na-vykonanie-exekucie"
                          className={`grow text-center ${navigationMenuTriggerStyle()}`}
                        >
                          Návrh na vykonanie exekúcie
                        </Link>
                      </div>
                      <h2 className="mt-5 flex w-full items-center justify-center font-semibold">
                        OSTATNÉ SLUŽBY
                      </h2>
                      <div className="flex w-full flex-nowrap">
                        <Link
                          to="/sluzby/danove-pravo"
                          className={`grow text-center ${navigationMenuTriggerStyle()}`}
                        >
                          Daňové právo
                        </Link>
                      </div>
                      <div className="flex w-full flex-nowrap">
                        <Link
                          to="/sluzby/stavebne-pravo"
                          className={`grow text-center ${navigationMenuTriggerStyle()}`}
                        >
                          Stavebné právo
                        </Link>
                      </div>
                      <div className="flex w-full flex-nowrap">
                        <Link
                          to="/sluzby/zmluvy-o-dielo"
                          className={`grow text-center ${navigationMenuTriggerStyle()}`}
                        >
                          Zmluvy o dielo
                        </Link>
                      </div>
                      <div className="flex w-full flex-nowrap">
                        <Link
                          to="/sluzby/zapis-dopravcov-do-obchodneho-registra"
                          className={`grow text-center ${navigationMenuTriggerStyle()}`}
                        >
                          Zápis dopravcov do obchodného registra
                        </Link>
                      </div>
                      <div className="flex w-full flex-nowrap">
                        <Link
                          to="/sluzby/povolenie-na-pobyt-a-pracovne-povolenie-cudzincov-na-uzemi-sr"
                          className={`grow text-center ${navigationMenuTriggerStyle()}`}
                        >
                          Povolenie na pobyt a pracovné povolenie cudzincov na
                          území SR
                        </Link>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className={navigationMenuTriggerStyle()}>
                    Služby podľa odvetvia
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col">
                      <div className="flex w-full flex-nowrap">
                        <Link
                          to="/sluzby/obcianske-pravo"
                          className={`grow text-center ${navigationMenuTriggerStyle()}`}
                        >
                          OBČIANSKE PRÁVO
                        </Link>
                      </div>
                      <div className="flex w-full flex-nowrap">
                        <Link
                          to="/sluzby/obchodne-pravo"
                          className={`grow text-center ${navigationMenuTriggerStyle()}`}
                        >
                          OBCHODNÉ PRÁVO
                        </Link>
                      </div>
                      <div className="flex w-full flex-nowrap">
                        <Link
                          to="/sluzby/danove-pravo"
                          className={`grow text-center ${navigationMenuTriggerStyle()}`}
                        >
                          DAŇOVÉ PRÁVO
                        </Link>
                      </div>
                      <div className="flex w-full flex-nowrap">
                        <Link
                          to="/sluzby/exekucne-pravo"
                          className={`grow text-center ${navigationMenuTriggerStyle()}`}
                        >
                          EXEKUČNÉ PRÁVO
                        </Link>
                      </div>
                      <div className="flex w-full flex-nowrap">
                        <Link
                          to="/sluzby/pracovne-pravo"
                          className={`grow text-center ${navigationMenuTriggerStyle()}`}
                        >
                          RACOVNÉ PRÁVO
                        </Link>
                      </div>
                      <div className="flex w-full flex-nowrap">
                        <Link
                          to="/sluzby/dedicske-pravo"
                          className={`grow text-center ${navigationMenuTriggerStyle()}`}
                        >
                          DEDIČSKÉ PRÁVO
                        </Link>
                      </div>
                      <div className="flex w-full flex-nowrap">
                        <Link
                          to="/sluzby/stavebne-pravo"
                          className={`grow text-center ${navigationMenuTriggerStyle()}`}
                        >
                          STAVEBNÉ PRÁVO
                        </Link>
                      </div>
                      <div className="flex w-full flex-nowrap">
                        <Link
                          to="/sluzby/konkurzne-pravo"
                          className={`grow text-center ${navigationMenuTriggerStyle()}`}
                        >
                          KONKURZNÉ PRÁVO
                        </Link>
                      </div>
                      <div className="flex w-full flex-nowrap">
                        <Link
                          to="/sluzby/spravne-pravo"
                          className={`grow text-center ${navigationMenuTriggerStyle()}`}
                        >
                          SPRÁVNE PRÁVO
                        </Link>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <div className="flex w-full border-b">
                <Link
                  to="/aktuality"
                  className={`grow ${navigationMenuTriggerStyle()}`}
                >
                  Aktuality
                </Link>
              </div>
              <div className="flex w-full border-b">
                <Link
                  to="/kontakt"
                  className={`grow ${navigationMenuTriggerStyle()}`}
                >
                  Kontakt
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
      <div className="flex w-full border-b shadow drop-shadow-md" />
    </div>
  )

  return (
    <>
      <Drawer />
      <div className="hidden flex-col md:flex">
        <div className="mx-2 my-[0.5px] flex h-10 justify-between text-xs md:mx-[15%]">
          <div className="flex space-x-5">
            <div className="flex items-center space-x-1">
              <MdPhone />
              <a href="tel:+421 940 505 051">+421 940 505 051</a>
            </div>
            <div className="flex items-center space-x-1">
              <MdEmail />
              <a href="mailto:office@cibenka.sk">office@cibenka.sk</a>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <a
              href="https://www.facebook.com/advokatskakancelariaJUDr.Cibenka/"
              target="_blank"
              className="rounded-full p-1 hover:bg-gray-200"
              rel="noreferrer"
            >
              <MdFacebook className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="flex w-full border-b shadow drop-shadow-md" />

        <div className="my-5 flex items-center justify-center">
          <Link to="/">
            <img alt="Logo" src={logo} />
          </Link>
        </div>
        <div className="mx-2 my-[0.5px] flex flex-col md:mx-[15%]">
          <div className="w-full border-t" />

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  Služby pre občanov
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 text-sm md:w-[500px] md:grid-cols-2 lg:w-[700px] lg:grid-cols-4 xl:w-[900px] 2xl:w-[1100px]">
                    <div className="flex flex-col space-y-2">
                      <h3 className="font-semibold">NEHNUTEĽNOSTI</h3>
                      <div className="flex flex-col space-y-1 text-sm">
                        <Link
                          className="hover:bg-slate-50"
                          to="/sluzby/kupna-zmluva"
                        >
                          Kúpna zmluva
                        </Link>
                        <Link
                          className="hover:bg-slate-50"
                          to="/sluzby/darovacia-zmluva"
                        >
                          Darovacia zmluva
                        </Link>
                        <Link
                          className="hover:bg-slate-50"
                          to="/sluzby/vysporiadanie-bezpodieloveho-spoluvlastnictva-manzelov"
                        >
                          Vysporiadanie podielového spoluvlastníctva
                        </Link>
                        <Link
                          className="hover:bg-slate-50"
                          to="/sluzby/navrhy-na-kataster"
                        >
                          Návrhy na kataster
                        </Link>
                        <Link
                          className="hover:bg-slate-50"
                          to="/sluzby/vecne-bremena"
                        >
                          Vecné bremená
                        </Link>
                        <Link
                          className="hover:bg-slate-50"
                          to="/sluzby/najomna-zmluva"
                        >
                          Nájomná zmluva
                        </Link>
                        <Link
                          className="hover:bg-slate-50"
                          to="/sluzby/slovensky-pozemkovy-fond"
                        >
                          Slovenský pozemkový fond (SPF)
                        </Link>
                      </div>
                    </div>
                    <div className="flex flex-col space-y-2">
                      <h3 className="font-semibold">RODINNÉ PRÁVO</h3>
                      <div className="flex flex-col space-y-1 text-sm">
                        <Link
                          className="hover:bg-slate-50"
                          to="/sluzby/navrh-na-rozvod"
                        >
                          Návrh na rozvod
                        </Link>
                        <Link
                          className="hover:bg-slate-50"
                          to="/sluzby/zverenie-dietata-do-starostlivosti-pri-rozvode"
                        >
                          Zverenie dieťaťa do starostlivosti pri rozvode
                        </Link>
                        <Link
                          className="hover:bg-slate-50"
                          to="/sluzby/rozsah-vyzivovacej-povinnosti"
                        >
                          Výživné
                        </Link>
                        <Link
                          className="hover:bg-slate-50"
                          to="/sluzby/vysporiadanie-bezpodieloveho-spoluvlastnictva-manzelov"
                        >
                          Vysporiadanie bezpodielového spoluvlastníctva manželov
                        </Link>
                      </div>
                    </div>
                    <div className="flex flex-col space-y-2">
                      <h3 className="font-semibold">DEDIČSKÉ PRÁVO</h3>
                      <div className="flex flex-col space-y-1 text-sm">
                        <Link
                          className="hover:bg-slate-50"
                          to="/sluzby/dozivotne-pravo-uzivania"
                        >
                          Doživotné právo užívania
                        </Link>
                        <Link className="hover:bg-slate-50" to="/sluzby/zavet">
                          Závet
                        </Link>
                        <Link
                          className="hover:bg-slate-50"
                          to="/sluzby/prava-opomenuteho-dedica"
                        >
                          Práva opomenutého dediča
                        </Link>
                        <Link
                          className="hover:bg-slate-50"
                          to="/sluzby/obnova-dedicskeho-konania"
                        >
                          Obnova dedičského konania
                        </Link>
                        <Link
                          className="hover:bg-slate-50"
                          to="/sluzby/zastupenie-vlastnika"
                        >
                          Zastúpenie vlastníka
                        </Link>
                        <Link
                          className="hover:bg-slate-50"
                          to="/sluzby/slovensky-pozemkovy-fond"
                        >
                          Slovenský pozemkový fond (SPF)
                        </Link>
                      </div>
                    </div>
                    <div className="flex flex-col space-y-2">
                      <h3 className="font-semibold">ĎALŠIE SLUŽBY</h3>
                      <div className="flex flex-col space-y-1 text-sm">
                        <Link
                          className="hover:bg-slate-50"
                          to="/sluzby/elektronicke-podania-na-organy-verejnej-spravy"
                        >
                          Elektronické podania na orgány verejnej správy
                        </Link>
                        <Link
                          className="hover:bg-slate-50"
                          to="/sluzby/zastupovanie-pred-sudmi"
                        >
                          Zastupovanie pred súdmi
                        </Link>
                        <Link
                          className="hover:bg-slate-50"
                          to="/sluzby/vymahanie-pohladavok"
                        >
                          Vymáhanie pohľadávok
                        </Link>
                        <Link
                          className="hover:bg-slate-50"
                          to="/sluzby/zalozenie-obcianskeho-zdruzenia-a-nadacie"
                        >
                          Založenie občianského združenia a nadácie
                        </Link>
                        <Link
                          className="hover:bg-slate-50"
                          to="/sluzby/povolenie-na-pobyt-cudzincov-na-uzemi-sr"
                        >
                          Povolenie na pobyt cudzincov na území SR
                        </Link>
                        <Link
                          className="hover:bg-slate-50"
                          to="/sluzby/pracovne-zmluvy-a-skoncenie-pracovneho-pomeru"
                        >
                          Pracovné zmluvy a skončenie pracovného pomeru
                        </Link>
                      </div>
                    </div>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  Služby pre podnikateľov
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[700px] lg:grid-cols-4 xl:w-[900px] 2xl:w-[1100px]">
                    <div className="flex flex-col space-y-2">
                      <h3 className="font-semibold">OBCHODNÉ SPOLOČNOSTI</h3>
                      <div className="flex flex-col space-y-1 text-sm">
                        <Link
                          className="hover:bg-slate-50"
                          to="/sluzby/zalozenie-spolocnosti"
                        >
                          Založenie spoločnosti
                        </Link>
                        <Link
                          className="hover:bg-slate-50"
                          to="/sluzby/zmeny-pri-zakladani-sro"
                        >
                          Zmeny pri zakladaní s.r.o.
                        </Link>
                        <Link
                          className="hover:bg-slate-50"
                          to="/sluzby/zmeny-v-spolocnosti"
                        >
                          Zmeny v spoločnosti
                        </Link>
                        <Link
                          className="hover:bg-slate-50"
                          to="/sluzby/zrusenie-spolocnosti"
                        >
                          Zrušenie spoločnosti
                        </Link>
                        <Link
                          className="hover:bg-slate-50"
                          to="/sluzby/zrusenie-spolocnosti-bez-likvidacie"
                        >
                          Zrušenie spoločnosti bez likvidácie (zlúčenie
                          spoločností, fúzia)
                        </Link>
                        <Link
                          className="hover:bg-slate-50"
                          to="/sluzby/konkurz"
                        >
                          Konkurz
                        </Link>
                        <Link
                          className="hover:bg-slate-50"
                          to="/sluzby/predaj-podniku-alebo-jeho-casti"
                        >
                          Predaj podniku alebo jeho časti
                        </Link>
                        <Link
                          className="hover:bg-slate-50"
                          to="/sluzby/virtualne-sidlo"
                        >
                          Virtuálne sídlo
                        </Link>
                        <Link
                          className="hover:bg-slate-50"
                          to="/sluzby/fuzie-akvizicie"
                        >
                          Fúzie/akvizície
                        </Link>
                        <Link
                          className="hover:bg-slate-50"
                          to="/sluzby/zalozenie-spolocnosti-v-eu"
                        >
                          Založenie spoločnosti v EU
                        </Link>
                        <Link
                          className="hover:bg-slate-50"
                          to="/sluzby/zalozenie-offshore-spolocnosti"
                        >
                          Založenie offshore spoločnosti
                        </Link>
                      </div>
                    </div>
                    <div className="flex flex-col space-y-2">
                      <h3 className="font-semibold">GDPR A RPVS</h3>
                      <div className="flex flex-col space-y-1 text-sm">
                        <Link
                          className="hover:bg-slate-50"
                          to="/sluzby/vseobecne-nariadenie-na-ochranu-osobnych-udajov"
                        >
                          Všeobecné nariadenie na ochranu osobných údajov (GDRP)
                        </Link>
                        <Link
                          className="hover:bg-slate-50"
                          to="/sluzby/zapis-konecneho-uzivatela-vyhod-do-obchodneho-registra"
                        >
                          Zápis konečného užívateľa výhod do obchodného registra
                        </Link>
                        <Link
                          className="hover:bg-slate-50"
                          to="/sluzby/register-partnerov-verejneho-sektora-rpvs"
                        >
                          Register partnerov verejného sektora, rpvs
                        </Link>
                      </div>
                    </div>
                    <div className="flex flex-col space-y-2">
                      <h3 className="font-semibold">POHĽADÁVKY</h3>
                      <div className="flex flex-col space-y-1 text-sm">
                        <Link
                          className="hover:bg-slate-50"
                          to="/sluzby/elektronicky-platobny-rozkaz-do-10-dni"
                        >
                          Elektronický platobný rozkaz do 10 dní
                        </Link>
                        <Link
                          className="hover:bg-slate-50"
                          to="/sluzby/zabezpecenie-zavazkov-dlznika"
                        >
                          Zabezpečenie záväzkov dlžníka
                        </Link>
                        <Link
                          className="hover:bg-slate-50"
                          to="/sluzby/uznanie-a-pristupenie-k-dlhu"
                        >
                          Uznanie a pristúpenie k dlhu
                        </Link>
                        <Link
                          className="hover:bg-slate-50"
                          to="/sluzby/navrh-na-vykonanie-exekucie"
                        >
                          Návrh na vykonanie exekúcie
                        </Link>
                      </div>
                    </div>
                    <div className="flex flex-col space-y-2">
                      <h3 className="font-semibold">OSTATNÉ SLUŽBY</h3>
                      <div className="flex flex-col space-y-1 text-sm">
                        <Link
                          className="hover:bg-slate-50"
                          to="/podla-odvetvia/danove-pravo"
                        >
                          Daňové právo
                        </Link>
                        <Link
                          className="hover:bg-slate-50"
                          to="/podla-odvetvia/stavebne-pravo"
                        >
                          Stavebné právo
                        </Link>
                        <Link
                          className="hover:bg-slate-50"
                          to="/sluzby/zmluvy-o-dielo"
                        >
                          Zmluvy o dielo
                        </Link>
                        <Link
                          className="hover:bg-slate-50"
                          to="/sluzby/zapis-dopravcov-do-obchodneho-registra"
                        >
                          Zápis dopravcov do obchodného registra
                        </Link>
                        <Link
                          className="hover:bg-slate-50"
                          to="/sluzby/povolenie-na-pobyt-a-pracovne-povolenie-cudzincov-na-uzemi-sr"
                        >
                          Povolenie na pobyt a pracovné povolenie cudzincov na
                          území SR
                        </Link>
                      </div>
                    </div>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  Služby podľa odvetvia
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[700px] lg:grid-cols-4 xl:w-[900px] 2xl:w-[1100px]">
                    <Link
                      className="font-semibold hover:bg-slate-50"
                      to="/podla-odvetvia/obcianske-pravo"
                    >
                      OBČIANSKE PRÁVO
                    </Link>
                    <Link
                      className="font-semibold hover:bg-slate-50"
                      to="/podla-odvetvia/obchodne-pravo"
                    >
                      OBCHODNÉ PRÁVO
                    </Link>
                    <Link
                      className="font-semibold hover:bg-slate-50"
                      to="/podla-odvetvia/danove-pravo"
                    >
                      DAŇOVÉ PRÁVO
                    </Link>
                    <Link
                      className="font-semibold hover:bg-slate-50"
                      to="/podla-odvetvia/exekucne-pravo"
                    >
                      EXEKUČNÉ PRÁVO
                    </Link>
                    <Link
                      className="font-semibold hover:bg-slate-50"
                      to="/podla-odvetvia/pracovne-pravo"
                    >
                      PRACOVNÉ PRÁVO
                    </Link>
                    <Link
                      className="font-semibold hover:bg-slate-50"
                      to="/podla-odvetvia/dedicske-pravo"
                    >
                      DEDIČSKÉ PRÁVO
                    </Link>
                    <Link
                      className="font-semibold hover:bg-slate-50"
                      to="/podla-odvetvia/stavebne-pravo"
                    >
                      STAVEBNÉ PRÁVO
                    </Link>
                    <Link
                      className="font-semibold hover:bg-slate-50"
                      to="/podla-odvetvia/konkurzne-pravo"
                    >
                      KONKURZNÉ PRÁVO
                    </Link>
                    <Link
                      className="font-semibold hover:bg-slate-50"
                      to="/podla-odvetvia/spravne-pravo"
                    >
                      SPRÁVNE PRÁVO
                    </Link>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/aktuality" className={navigationMenuTriggerStyle()}>
                  Aktuality
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link className={navigationMenuTriggerStyle()} to="/kontakt">
                  Kontakt
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="w-full border-b" />
        </div>
      </div>
    </>
  )
}

export default Header

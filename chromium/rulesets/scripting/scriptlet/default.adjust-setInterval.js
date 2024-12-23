/*******************************************************************************

    uBlock Origin Lite - a comprehensive, MV3-compliant content blocker
    Copyright (C) 2014-present Raymond Hill

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see {http://www.gnu.org/licenses/}.

    Home: https://github.com/gorhill/uBlock

*/

/* eslint-disable indent */

// ruleset: default

/******************************************************************************/

// Important!
// Isolate from global scope

// Start of local scope
(( ) => {

/******************************************************************************/

// Start of code to inject
const uBOL_adjustSetInterval = function() {

const scriptletGlobals = {}; // eslint-disable-line

const argsList = [["","1200","0"],[],["stop()"],["clearInterval"],["myTimer","1500"],["countdown","2000"],["counter","2000"],["","1800"],["","","0"],["yuidea-","*"],["timeLeft"],["","","0.001"],["time"],["time","2500"],["clearInterval","*"],["seconds"],["","","0.02"],["time.html","1000"],["circle_animation"],["countdown"],["web_counter"],["video_counter"],["/SplashScreen|BannerAd/"],["i--"],["","*","0"],["js-btn-skip","1000"],["countdown","*","0.001"],["timer"],["gotolink"],["counter","*","0.02"],["/.?/","*","0.02"],["/wpsafe|wait/","*","0.001"],["timer","*","0.02"],["timer","1300"],["countDown","*"],["timer","*"],["/.?/","*","0.001"],["timeLeft","*","0.001"],["timer","*","0.001"],["counter","*","0.001"],["timer","1000","0.001"],["timer","1600","0.001"],["count","*","0.001"],["counter"],["/counter|wait/","*","0.001"],["interval","*"],["sec--","*","0.001"],["show_download_links"],["counter","*"],["countDown"],["downloadTimer"],["","","0.3"],["time","","0"],["sec--"],["secs"],["_0x"],["timer.remove"],["downloadButton"],["timePassed"],["timeleft"],["counter--"],["(i-1)"],["skipOptions"],["countDown","1150","0.5"],["timercounter"],["count","*"],["#timer"],["temp"],["sec"],["counter","","0.02"],["timer","1800"],["distance"],["count"],["contador"],["display"],["countdownTime","1500"],["second"],["timer","1500"],["updatePercentage","100","0.02"],["current()"],["l","","0"],["countdown","*","0.02"],["time","","0.02"],["wait"],["downloadToken"],["updateProgress","*"],["current-=1","*","0.001"],["_0x","*","0.001"],["counter","1000","0.001"],["scrollIncrement","*"],["","*","0.001"],["saniye"],["","1000","0.001"],["generalTimeLeft","*","0.001"],["invoke","1000"],["download","*","0.02"],["countdown","*"],["disabled"],["/count|verify|isCompleted/","","0.001"],["skipAdSeconds","","0.02"],["adv","*"]];

const hostnamesMap = new Map([["deportealdia.live",0],["noticiasesports.live",0],["al.ly",1],["bbf.lt",1],["cpmlink.net",1],["cut-urls.com",1],["iiv.pl",1],["shink.me",1],["ur.ly",1],["url.gem-flash.com",1],["zeiz.me",1],["1ink.cc",1],["azlink.xyz",1],["soft112.com",1],["short-url.link",1],["4download.net",1],["s.sseluxx.com",1],["onifile.com",1],["coolmathgames.com",1],["link-to.net",[1,19,20,21]],["telepisodes.org",1],["onle.co",1],["freeupload.info",1],["fstore.biz",1],["uploadfree.info",1],["deltabit.co",1],["puzzles.msn.com",1],["shon.xyz",1],["sfile.mobi",1],["upfile.us",1],["game-kentang.blogspot.com",1],["shortgoo.blogspot.com",1],["indavideo.hu",1],["sfirmware.com",1],["mobilelegends.shop",1],["ockles.com",1],["urlpay.net",1],["underhentai.net",1],["customercareal.com",1],["faupto.com",1],["suanoticia.online",1],["linkconfig.com",1],["lg-firmwares.com",1],["aylink.co",1],["gitizle.vip",1],["shtms.co",1],["cryptokinews.com",1],["cpmlink.pro",1],["speedynews.xyz",[1,78]],["infokeeda.xyz",1],["webzeni.com",1],["tutwuri.id",1],["khaddavi.net",1],["lokerwfh.net",1],["mysflink.blogspot.com",1],["runmods.com",1],["anomize.xyz",1],["bondibeachau.com",1],["konstantinova.net",1],["kangkimin.com",1],["iklandb.com",1],["thingiverse.com",1],["ufreegames.com",1],["bdlink.pw",1],["fairyanime.com",1],["7misr4day.com",1],["sama-pro.com",1],["otomi-games.com",1],["curseforge.com",1],["mobitaak.com",1],["arhplyrics.in",1],["telenord.it",1],["raky.in",1],["desiflixindia.com",1],["diglink.blogspot.com",1],["vkprime.com",1],["i-polls.com",1],["freecoursesonline.me",1],["yesdownloader.com",1],["games.metv.com",1],["arkadium.com",1],["tonanmedia.my.id",1],["skiplink.me",1],["yurasu.xyz",1],["isekaipalace.com",1],["mitedrive.com",1],["miteblog.com",1],["games.dailymail.co.uk",1],["fullhd4k.com",1],["juegos.eleconomista.es",1],["filmizlehdfilm.com",1],["fullfilmizle.cc",1],["gofilmizle.net",1],["easybib.com",1],["modcombo.com",1],["wallpaperaccess.com",1],["indi-share.com",3],["premid.app",3],["cheatcloud.cc",3],["cheater.ninja",3],["cheatermad.com",3],["cheatsquad.gg",3],["freepdf-books.com",4],["themeslide.com",5],["thememypc.net",6],["rezence.com",[6,48]],["mikl4forex.com",6],["gawbne.com",6],["forex-trnd.com",6],["link.tl",7],["lnk.news",8],["lnk.parts",8],["fssquad.com",8],["easylinkref.com",8],["megadescarga.net",8],["megadescargas.net",8],["gamelopte.com",9],["goto.com.np",10],["vrcmods.com",10],["dramaworldhd.co",10],["consoleroms.com",10],["romspedia.com",10],["forexlap.com",11],["forexmab.com",11],["forexwaw.club",11],["forex-articles.com",11],["fx4vip.com",11],["forexrw7.com",[11,46]],["3rabsports.com",11],["fx-22.com",[11,46]],["gold-24.net",[11,46]],["icutlink.com",12],["android-apk.org",12],["zegtrends.com",13],["simsdom.com",14],["fansonlinehub.com",14],["hotmediahub.com",14],["terabox.fun",14],["teralink.me",14],["terashare.me",14],["teraearn.com",14],["fautsy.com",15],["multifaucet.org",15],["coinlyhub.com",15],["i-bits.io",15],["claimbits.io",15],["mundotec.pro",15],["legionjuegos.org",16],["legionpeliculas.org",16],["legionprogramas.org",16],["so1.asia",16],["lewdzone.com",18],["direct-link.net",[19,20,21]],["direkt-wissen.com",[19,20,21]],["ipalibrary.me",19],["hieunguyenphoto.com",19],["gamearter.com",22],["ayobelajarbareng.com",24],["semawur.com",24],["techmody.io",24],["doofree88.com",25],["acdriftingpro.com",26],["pixsera.net",27],["imgair.net",27],["imgblaze.net",27],["imgfrost.net",27],["vestimage.site",27],["imgwia.buzz",27],["imgbaex.store",27],["imgbah.online",27],["imgbaie.online",27],["imgbango.store",27],["imgbier.store",27],["imgbimn.store",27],["imgbqw.store",27],["imgbuba.online",27],["imgbwe.store",27],["imgbxs.online",27],["imgcao.store",27],["imgnwe.online",27],["imgqge.store",27],["imgqxb.online",27],["imgteq.online",27],["imgtex.online",27],["imgtuta.online",27],["imgwqr.online",27],["imgwww.store",27],["imgxza.store",27],["imgezx.sbs",27],["imgbcxsb.store",27],["imgbcxs.store",27],["imgbake.cfd",27],["imgmffg.sbs",27],["imgmffgtr.sbs",27],["imgnbg.sbs",27],["imgngc.sbs",27],["imgnmh.cfd",27],["imgqte.sbs",27],["imguthes.sbs",27],["imgwag.cfd",27],["imgwang.cfd",27],["imgwety.sbs",27],["imgxuh.cfd",27],["imgxytw.cfd",27],["imgycgey.sbs",27],["imgyruy.cfd",27],["imgyusa.cfd",27],["imgyyqey.sbs",27],["imgyer.store",27],["imgxhs.store",27],["imgwekr.online",27],["imgwbfh.online",27],["imgwak.online",27],["imgutry.online",27],["imgutiyu.online",27],["imgutbbn.online",27],["imgubfd.online",27],["imgrei.online",27],["imgqec.online",27],["imgpaiou.online",27],["imgpaiki.online",27],["imgmjj.store",27],["imgfa.store",27],["imgbutrt.store",27],["imgbty.store",27],["imgbdl.store",27],["imgngh.sbs",27],["imgbbfg.pics",27],["imgjhrjjr.pics",27],["imgleko.pics",27],["imgluki.pics",27],["imgnffe.pics",27],["imgnnnf.pics",27],["imgrwqz.pics",27],["imgtweqz.pics",27],["imgxzgf.pics",27],["imgyyeryt.pics",27],["picbbc.one",27],["picbbdr.one",27],["picbest.one",27],["picbhrt.one",27],["picnrrt.one",27],["picqqw.one",27],["picqr.one",27],["picqtwe.one",27],["picsjre.one",27],["piczzaq.one",27],["imgqazx.sbs",27],["imgiruyw.online",27],["picnerr.cfd",27],["pichfer.cfd",27],["picbbeq.cfd",27],["picqaxs.cfd",27],["picxxdd.cfd",27],["picqweff.cfd",27],["pickjsn.cfd",27],["piczzxsw.cfd",27],["picbbbde.cfd",27],["picbdd.cfd",27],["imgbahxg.sbs",27],["imgxune.sbs",27],["imgqklw.shop",27],["pixqkhgrt.shop",27],["pixqbngg.shop",27],["pixqwet.shop",27],["pixmos.shop",27],["imgtgd.shop",27],["imgcsxx.shop",27],["imgcssd.shop",27],["imguwjsd.sbs",27],["pictbbf.shop",27],["pixbryexa.sbs",27],["picbqqa.sbs",27],["pixbkghxa.sbs",27],["imgmgf.sbs",27],["picbcxvxa.sbs",27],["imguee.sbs",27],["imgmffmv.sbs",27],["imgbqb.sbs",27],["imgbyrev.sbs",27],["imgbncvnv.sbs",27],["pixtryab.shop",27],["imggune.shop",27],["pictryhab.shop",27],["pixbnab.shop",27],["imgbnwe.shop",27],["imgbbnhi.shop",27],["imgnbii.shop",27],["imghqqbg.shop",27],["imgyhq.shop",27],["pixnbrqwg.sbs",27],["pixnbrqw.sbs",27],["picmsh.sbs",27],["imgpke.sbs",27],["picuenr.sbs",27],["imgolemn.sbs",27],["imgoebn.sbs",27],["picnwqez.sbs",27],["imgjajhe.sbs",27],["pixjnwe.sbs",27],["pixkfjtrkf.shop",27],["pixkfkf.shop",27],["pixdfdjkkr.shop",27],["pixdfdj.shop",27],["picnft.shop",27],["pixrqqz.shop",27],["picngt.shop",27],["picjgfjet.shop",27],["picjbet.shop",27],["imgkkabm.shop",27],["imgxabm.shop",27],["imgthbm.shop",27],["imgmyqbm.shop",27],["imgwwqbm.shop",27],["imgjvmbbm.shop",27],["imgjbxzjv.shop",27],["imgjmgfgm.shop",27],["picxnkjkhdf.sbs",27],["imgxxbdf.sbs",27],["imgnngr.sbs",27],["imgjjtr.sbs",27],["imgqbbds.sbs",27],["imgbvdf.sbs",27],["imgqnnnebrf.sbs",27],["imgnnnvbrf.sbs",27],["takez.co",27],["nightfallnews.com",27],["cararegistrasi.com",27],["ipa-apps.me",27],["imslp.org",27],["michaelemad.com",27],["chooyomi.com",27],["libertycity.net",27],["apps2app.com",28],["tech24us.com",29],["freethemesy.com",29],["tech5s.co",30],["ez4mods.com",30],["yalifin.xyz",30],["lrncook.xyz",30],["gadgetsreview27.com",30],["newsbawa.com",30],["acetack.com",30],["androidquest.com",30],["apklox.com",30],["chhaprawap.in",30],["gujarativyakaran.com",30],["kashmirstudentsinformation.in",30],["kisantime.com",30],["shetkaritoday.in",30],["pastescript.com",30],["trimorspacks.com",30],["updrop.link",30],["fx-gd.net",30],["healthy4pepole.com",30],["hightrip.net",30],["to-travel.net",30],["cmphost.com",30],["drinkspartner.com",30],["uploadsoon.com",30],["wp.uploadfiles.in",30],["viralxns.com",30],["posterify.net",30],["headlinerpost.com",30],["veganab.co",31],["camdigest.com",31],["nichapk.com",32],["easyworldbusiness.com",32],["riveh.com",32],["naukrilelo.in",33],["hipsonyc.com",34],["bookszone.in",35],["uptechnologys.com",36],["sevenjournals.com",36],["overgal.com",37],["mamahawa.com",38],["lollty.pro",38],["postazap.com",38],["financeyogi.net",38],["finclub.in",38],["easywithcode.tech",38],["letest25.co",38],["truevpnlover.com",38],["financebolo.com",38],["rphost.in",38],["vedamdigi.tech",38],["cancelguider.online",38],["bigdata.rawlazy.si",39],["codesnse.com",39],["filmypoints.in",40],["flightsim.to",40],["freethailottery.live",41],["progfu.com",41],["currentrecruitment.com",42],["investorveda.com",42],["computerpedia.in",42],["edukaroo.com",42],["advicefunda.com",42],["bestloanoffer.net",42],["techconnection.in",42],["itscybertech.com",43],["forexeen.us",43],["health-and.me",43],["filessrc.com",43],["srcimdb.com",43],["droidmirror.com",43],["infokik.com",43],["arealgamer.org",43],["gamingbeasts.com",43],["uploadbeast.com",43],["travel.vebma.com",44],["cloud.majalahhewan.com",44],["crm.cekresi.me",44],["ai.tempatwisata.pro",44],["cinedesi.in",45],["thevouz.in",45],["tejtime24.com",45],["techishant.in",45],["mooonten.com",46],["msic.site",46],["apkmb.com",47],["apkhihe.com",47],["aemenstore.com",48],["byboe.com",48],["cazzette.com",48],["dreamcheeky.com",48],["fidlarmusic.com",48],["hookeaudio.com",48],["jncojeans.com",48],["kiemlua.com",48],["kingsleynyc.com",48],["lucidcam.com",48],["nguyenvanbao.com",48],["nousdecor.com",48],["pennbookcenter.com",48],["publicananker.com",48],["restorbio.com",48],["staaker.com",48],["uebnews.online",48],["thegoneapp.com",48],["samapkstore.com",49],["5ggyan.com",49],["announcedcatchix1t.shop",49],["brotherfox91.shop",49],["currentcolorq2dv.shop",49],["customsfencei3.shop",49],["fencethoughgdrt.shop",49],["fencethroughout642.shop",49],["foxwent6ot.shop",49],["havingmovementu8x.shop",49],["homebasis4d.shop",49],["includingbreath5ku.shop",49],["ironwinter6m.shop",49],["leadmorning4ivn.shop",49],["linelocatemfsn.shop",49],["littlesound6c.shop",49],["mindmotion93y8.shop",49],["mightbadly4f.shop",49],["monkeynecktj4w.shop",49],["neighbormajorkex.shop",49],["nervousdoctor9bx.shop",49],["pantogether6jpi.shop",49],["quietlywheat23.shop",49],["saddletopg3tk.shop",49],["soldrubber5xrp.shop",49],["somehowrockyng.shop",49],["strangernervousql.shop",49],["superabbit.shop",49],["supportrightufd.shop",49],["studyinghuman6js.shop",49],["wholecommonrrvp.shop",49],["wintertold7nq.shop",49],["shortenbuddy.com",50],["jpopsingles.eu",50],["vanillatweaks.net",50],["emulatorgames.net",51],["menjelajahi.com",52],["luckydice.net",53],["unityassetcollection.com",54],["rethmic.com",55],["romhustler.org",56],["filmyhitlink.xyz",57],["allwpworld.com",59],["trzpro.com",60],["techhelpbd.com",60],["zedge.net",61],["send-anywhere.com",62],["upstore.net",63],["rincondelsazon.com",64],["tattoosbeauty.com",64],["disheye.com",65],["yifysub.net",66],["mp3juices.icu",67],["watchdoge.xyz",68],["bingotingo.com",69],["thizissam.in",69],["techyreviewx.com",70],["redirect.dafontvn.com",71],["cue-vana.com",72],["crdroid.net",72],["rlxtech.tech",72],["sonixgvn.net",72],["descargatepelis.com",73],["edufileshare.com",74],["kuncomic.com",75],["wowroms.com",76],["mhma12.tech",77],["play.aidungeon.io",79],["whatsappmods.net",80],["adshnk.com",81],["blogmado.com",82],["pinloker.com",83],["sekilastekno.com",83],["web1s.asia",83],["fikper.com",84],["tralhasvarias.blogspot.com",85],["busuu.com",86],["newscon.org",87],["recipahi.com",88],["thestar.com",89],["obaianinho.com",90],["punkrust.net",91],["apkprime.org",92],["arcade.buzzrtv.com",93],["arcade.lemonde.fr",93],["arena.gamesforthebrain.com",93],["bestpuzzlesandgames.com",93],["cointiply.arkadiumarena.com",93],["gamelab.com",93],["games.abqjournal.com",93],["games.amny.com",93],["games.bellinghamherald.com",93],["games.besthealthmag.ca",93],["games.bnd.com",93],["games.boston.com",93],["games.bostonglobe.com",93],["games.bradenton.com",93],["games.centredaily.com",93],["games.charlotteobserver.com",93],["games.cnhinews.com",93],["games.crosswordgiant.com",93],["games.dallasnews.com",93],["games.daytondailynews.com",93],["games.denverpost.com",93],["games.everythingzoomer.com",93],["games.fresnobee.com",93],["games.gameshownetwork.com",93],["games.get.tv",93],["games.greatergood.com",93],["games.heraldonline.com",93],["games.heraldsun.com",93],["games.idahostatesman.com",93],["games.insp.com",93],["games.islandpacket.com",93],["games.journal-news.com",93],["games.kansas.com",93],["games.kansascity.com",93],["games.kentucky.com",93],["games.lancasteronline.com",93],["games.ledger-enquirer.com",93],["games.macon.com",93],["games.mashable.com",93],["games.mercedsunstar.com",93],["games.miamiherald.com",93],["games.modbee.com",93],["games.moviestvnetwork.com",93],["games.myrtlebeachonline.com",93],["games.nationalreview.com",93],["games.newsobserver.com",93],["games.parade.com",93],["games.pressdemocrat.com",93],["games.puzzlebaron.com",93],["games.puzzler.com",93],["games.puzzles.ca",93],["games.qns.com",93],["games.readersdigest.ca",93],["games.sacbee.com",93],["games.sanluisobispo.com",93],["games.sixtyandme.com",93],["games.sltrib.com",93],["games.springfieldnewssun.com",93],["games.star-telegram.com",93],["games.startribune.com",93],["games.sunherald.com",93],["games.theadvocate.com",93],["games.thenewstribune.com",93],["games.theolympian.com",93],["games.theportugalnews.com",93],["games.thestar.com",93],["games.thestate.com",93],["games.tri-cityherald.com",93],["games.triviatoday.com",93],["games.usnews.com",93],["games.word.tips",93],["games.wordgenius.com",93],["games.wtop.com",93],["jeux.meteocity.com",93],["juegos.as.com",93],["juegos.elnuevoherald.com",93],["juegos.elpais.com",93],["philly.arkadiumarena.com",93],["play.dictionary.com",93],["puzzles.bestforpuzzles.com",93],["puzzles.centralmaine.com",93],["puzzles.crosswordsolver.org",93],["puzzles.independent.co.uk",93],["puzzles.nola.com",93],["puzzles.pressherald.com",93],["puzzles.standard.co.uk",93],["puzzles.sunjournal.com",93],["restegourmet.de",94],["getmodsapk.com",95],["visionpapers.org",97],["tech.unblockedgames.world",98],["novelgames.com",99],["3bmeteo.com",100]]);

const entitiesMap = new Map([["123link",1],["platinmods",1],["eg4link",1],["idlelivelink",1],["igram",1],["lin-ks",1],["xberuang",1],["topflix",1],["leechall",1],["bde4",1],["lootlinks",1],["filmizletv",1],["ouo",2],["acortalo",8],["acortar",8],["filemoon",15],["dutchycorp",17],["bluemediafiles",23],["pixlev",27],["10short",38],["cinemakottaga",58],["privatemoviez",72],["5play",96]]);

const exceptionsMap = new Map([["go.skiplink.me",[1]],["encurtador.postazap.com",[38]]]);

/******************************************************************************/

function adjustSetInterval(
    needleArg = '',
    delayArg = '',
    boostArg = ''
) {
    if ( typeof needleArg !== 'string' ) { return; }
    const safe = safeSelf();
    const reNeedle = safe.patternToRegex(needleArg);
    let delay = delayArg !== '*' ? parseInt(delayArg, 10) : -1;
    if ( isNaN(delay) || isFinite(delay) === false ) { delay = 1000; }
    let boost = parseFloat(boostArg);
    boost = isNaN(boost) === false && isFinite(boost)
        ? Math.min(Math.max(boost, 0.001), 50)
        : 0.05;
    self.setInterval = new Proxy(self.setInterval, {
        apply: function(target, thisArg, args) {
            const [ a, b ] = args;
            if (
                (delay === -1 || b === delay) &&
                reNeedle.test(a.toString())
            ) {
                args[1] = b * boost;
            }
            return target.apply(thisArg, args);
        }
    });
}

function safeSelf() {
    if ( scriptletGlobals.safeSelf ) {
        return scriptletGlobals.safeSelf;
    }
    const self = globalThis;
    const safe = {
        'Array_from': Array.from,
        'Error': self.Error,
        'Function_toStringFn': self.Function.prototype.toString,
        'Function_toString': thisArg => safe.Function_toStringFn.call(thisArg),
        'Math_floor': Math.floor,
        'Math_max': Math.max,
        'Math_min': Math.min,
        'Math_random': Math.random,
        'Object': Object,
        'Object_defineProperty': Object.defineProperty.bind(Object),
        'Object_defineProperties': Object.defineProperties.bind(Object),
        'Object_fromEntries': Object.fromEntries.bind(Object),
        'Object_getOwnPropertyDescriptor': Object.getOwnPropertyDescriptor.bind(Object),
        'RegExp': self.RegExp,
        'RegExp_test': self.RegExp.prototype.test,
        'RegExp_exec': self.RegExp.prototype.exec,
        'Request_clone': self.Request.prototype.clone,
        'String_fromCharCode': String.fromCharCode,
        'String_split': String.prototype.split,
        'XMLHttpRequest': self.XMLHttpRequest,
        'addEventListener': self.EventTarget.prototype.addEventListener,
        'removeEventListener': self.EventTarget.prototype.removeEventListener,
        'fetch': self.fetch,
        'JSON': self.JSON,
        'JSON_parseFn': self.JSON.parse,
        'JSON_stringifyFn': self.JSON.stringify,
        'JSON_parse': (...args) => safe.JSON_parseFn.call(safe.JSON, ...args),
        'JSON_stringify': (...args) => safe.JSON_stringifyFn.call(safe.JSON, ...args),
        'log': console.log.bind(console),
        // Properties
        logLevel: 0,
        // Methods
        makeLogPrefix(...args) {
            return this.sendToLogger && `[${args.join(' \u205D ')}]` || '';
        },
        uboLog(...args) {
            if ( this.sendToLogger === undefined ) { return; }
            if ( args === undefined || args[0] === '' ) { return; }
            return this.sendToLogger('info', ...args);
            
        },
        uboErr(...args) {
            if ( this.sendToLogger === undefined ) { return; }
            if ( args === undefined || args[0] === '' ) { return; }
            return this.sendToLogger('error', ...args);
        },
        escapeRegexChars(s) {
            return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        },
        initPattern(pattern, options = {}) {
            if ( pattern === '' ) {
                return { matchAll: true, expect: true };
            }
            const expect = (options.canNegate !== true || pattern.startsWith('!') === false);
            if ( expect === false ) {
                pattern = pattern.slice(1);
            }
            const match = /^\/(.+)\/([gimsu]*)$/.exec(pattern);
            if ( match !== null ) {
                return {
                    re: new this.RegExp(
                        match[1],
                        match[2] || options.flags
                    ),
                    expect,
                };
            }
            if ( options.flags !== undefined ) {
                return {
                    re: new this.RegExp(this.escapeRegexChars(pattern),
                        options.flags
                    ),
                    expect,
                };
            }
            return { pattern, expect };
        },
        testPattern(details, haystack) {
            if ( details.matchAll ) { return true; }
            if ( details.re ) {
                return this.RegExp_test.call(details.re, haystack) === details.expect;
            }
            return haystack.includes(details.pattern) === details.expect;
        },
        patternToRegex(pattern, flags = undefined, verbatim = false) {
            if ( pattern === '' ) { return /^/; }
            const match = /^\/(.+)\/([gimsu]*)$/.exec(pattern);
            if ( match === null ) {
                const reStr = this.escapeRegexChars(pattern);
                return new RegExp(verbatim ? `^${reStr}$` : reStr, flags);
            }
            try {
                return new RegExp(match[1], match[2] || undefined);
            }
            catch(ex) {
            }
            return /^/;
        },
        getExtraArgs(args, offset = 0) {
            const entries = args.slice(offset).reduce((out, v, i, a) => {
                if ( (i & 1) === 0 ) {
                    const rawValue = a[i+1];
                    const value = /^\d+$/.test(rawValue)
                        ? parseInt(rawValue, 10)
                        : rawValue;
                    out.push([ a[i], value ]);
                }
                return out;
            }, []);
            return this.Object_fromEntries(entries);
        },
        onIdle(fn, options) {
            if ( self.requestIdleCallback ) {
                return self.requestIdleCallback(fn, options);
            }
            return self.requestAnimationFrame(fn);
        },
        offIdle(id) {
            if ( self.requestIdleCallback ) {
                return self.cancelIdleCallback(id);
            }
            return self.cancelAnimationFrame(id);
        }
    };
    scriptletGlobals.safeSelf = safe;
    if ( scriptletGlobals.bcSecret === undefined ) { return safe; }
    // This is executed only when the logger is opened
    safe.logLevel = scriptletGlobals.logLevel || 1;
    let lastLogType = '';
    let lastLogText = '';
    let lastLogTime = 0;
    safe.toLogText = (type, ...args) => {
        if ( args.length === 0 ) { return; }
        const text = `[${document.location.hostname || document.location.href}]${args.join(' ')}`;
        if ( text === lastLogText && type === lastLogType ) {
            if ( (Date.now() - lastLogTime) < 5000 ) { return; }
        }
        lastLogType = type;
        lastLogText = text;
        lastLogTime = Date.now();
        return text;
    };
    try {
        const bc = new self.BroadcastChannel(scriptletGlobals.bcSecret);
        let bcBuffer = [];
        safe.sendToLogger = (type, ...args) => {
            const text = safe.toLogText(type, ...args);
            if ( text === undefined ) { return; }
            if ( bcBuffer === undefined ) {
                return bc.postMessage({ what: 'messageToLogger', type, text });
            }
            bcBuffer.push({ type, text });
        };
        bc.onmessage = ev => {
            const msg = ev.data;
            switch ( msg ) {
            case 'iamready!':
                if ( bcBuffer === undefined ) { break; }
                bcBuffer.forEach(({ type, text }) =>
                    bc.postMessage({ what: 'messageToLogger', type, text })
                );
                bcBuffer = undefined;
                break;
            case 'setScriptletLogLevelToOne':
                safe.logLevel = 1;
                break;
            case 'setScriptletLogLevelToTwo':
                safe.logLevel = 2;
                break;
            }
        };
        bc.postMessage('areyouready?');
    } catch(_) {
        safe.sendToLogger = (type, ...args) => {
            const text = safe.toLogText(type, ...args);
            if ( text === undefined ) { return; }
            safe.log(`uBO ${text}`);
        };
    }
    return safe;
}

/******************************************************************************/

const hnParts = [];
try {
    let origin = document.location.origin;
    if ( origin === 'null' ) {
        const origins = document.location.ancestorOrigins;
        for ( let i = 0; i < origins.length; i++ ) {
            origin = origins[i];
            if ( origin !== 'null' ) { break; }
        }
    }
    const pos = origin.lastIndexOf('://');
    if ( pos === -1 ) { return; }
    hnParts.push(...origin.slice(pos+3).split('.'));
}
catch(ex) { }
const hnpartslen = hnParts.length;
if ( hnpartslen === 0 ) { return; }

const todoIndices = new Set();
const tonotdoIndices = [];

// Exceptions
if ( exceptionsMap.size !== 0 ) {
    for ( let i = 0; i < hnpartslen; i++ ) {
        const hn = hnParts.slice(i).join('.');
        const excepted = exceptionsMap.get(hn);
        if ( excepted ) { tonotdoIndices.push(...excepted); }
    }
    exceptionsMap.clear();
}

// Hostname-based
if ( hostnamesMap.size !== 0 ) {
    const collectArgIndices = hn => {
        let argsIndices = hostnamesMap.get(hn);
        if ( argsIndices === undefined ) { return; }
        if ( typeof argsIndices === 'number' ) { argsIndices = [ argsIndices ]; }
        for ( const argsIndex of argsIndices ) {
            if ( tonotdoIndices.includes(argsIndex) ) { continue; }
            todoIndices.add(argsIndex);
        }
    };
    for ( let i = 0; i < hnpartslen; i++ ) {
        const hn = hnParts.slice(i).join('.');
        collectArgIndices(hn);
    }
    collectArgIndices('*');
    hostnamesMap.clear();
}

// Entity-based
if ( entitiesMap.size !== 0 ) {
    const n = hnpartslen - 1;
    for ( let i = 0; i < n; i++ ) {
        for ( let j = n; j > i; j-- ) {
            const en = hnParts.slice(i,j).join('.');
            let argsIndices = entitiesMap.get(en);
            if ( argsIndices === undefined ) { continue; }
            if ( typeof argsIndices === 'number' ) { argsIndices = [ argsIndices ]; }
            for ( const argsIndex of argsIndices ) {
                if ( tonotdoIndices.includes(argsIndex) ) { continue; }
                todoIndices.add(argsIndex);
            }
        }
    }
    entitiesMap.clear();
}

// Apply scriplets
for ( const i of todoIndices ) {
    try { adjustSetInterval(...argsList[i]); }
    catch(ex) {}
}
argsList.length = 0;

/******************************************************************************/

};
// End of code to inject

/******************************************************************************/

uBOL_adjustSetInterval();

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;

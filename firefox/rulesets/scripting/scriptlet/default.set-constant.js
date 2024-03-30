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

/* jshint esversion:11 */
/* global cloneInto */

'use strict';

// ruleset: default

/******************************************************************************/

// Important!
// Isolate from global scope

// Start of local scope
(( ) => {

/******************************************************************************/

// Start of code to inject
const uBOL_setConstant = function() {

const scriptletGlobals = {}; // jshint ignore: line

const argsList = [["ytInitialPlayerResponse.playerAds","undefined"],["ytInitialPlayerResponse.adPlacements","undefined"],["ytInitialPlayerResponse.adSlots","undefined"],["playerResponse.adPlacements","undefined"],["ov.advertising.tisoomi.loadScript","noopFunc"],["abp","false"],["oeo","noopFunc"],["nsShowMaxCount","0"],["objVc.interstitial_web",""],["console.clear","trueFunc"],["_ml_ads_ns","null"],["_sp_.config","undefined"],["isAdBlockActive","false"],["AdController","noopFunc"],["check_adblock","true"],["initials.yld-pdpopunder",""],["console.clear","noopFunc"],["console.log","noopFunc"],["String.prototype.charCodeAt","trueFunc"],["console.clear","undefined"],["attachEvent","trueFunc"],["Object.prototype._getSalesHouseConfigurations","noopFunc"],["vast_urls","{}"],["sadbl","false"],["adblockcheck","false"],["arrvast","[]"],["blurred","false"],["flashvars.adv_pre_src",""],["showPopunder","false"],["page_params.holiday_promo","true"],["adsEnabled","true"],["hommy","{}"],["hommy.waitUntil","noopFunc"],["String.prototype.charAt","trueFunc"],["ad_blocker","false"],["blockAdBlock","true"],["is_adblocked","false"],["showPopunder","noopFunc"],["VikiPlayer.prototype.pingAbFactor","noopFunc"],["player.options.disableAds","true"],["flashvars.adv_pre_vast",""],["flashvars.adv_pre_vast_alt",""],["x_width","1"],["_site_ads_ns","true"],["luxuretv.config",""],["Object.prototype.AdOverlay","noopFunc"],["tkn_popunder","null"],["can_run_ads","true"],["adsBlockerDetector","noopFunc"],["globalThis","null"],["adblock","false"],["__ads","true"],["FlixPop.isPopGloballyEnabled","falseFunc"],["fuckAdBlock","false"],["$.magnificPopup.open","noopFunc"],["adsenseadBlock","noopFunc"],["flashvars.adv_pause_html",""],["adblockSuspected","false"],["xRds","true"],["cRAds","false"],["disasterpingu","false"],["CnnXt.Event.fire","noopFunc"],["App.views.adsView.adblock","false"],["$.fx.off","true"],["adsClasses","undefined"],["gsecs","0"],["isAdb","false"],["adBlockEnabled","false"],["puShown","true"],["ads_b_test","true"],["showAds","true"],["clicked","true"],["eClicked","true"],["number","0"],["sync","true"],["attr","{}"],["scriptSrc",""],["Object.prototype.adReinsertion","noopFunc"],["Object.prototype.disableAds","true"],["cxStartDetectionProcess","noopFunc"],["isAdBlocked","false"],["adblock","noopFunc"],["path",""],["adBlock","false"],["_ctrl_vt.blocked.ad_script","false"],["blockAdBlock","noopFunc"],["caca","noopFunc"],["Ok","true"],["isBlocked","false"],["safelink.adblock","false"],["ClickUnder","noopFunc"],["flashvars.adv_pre_url",""],["flashvars.protect_block",""],["flashvars.video_click_url",""],["spoof","noopFunc"],["adBlockerDetected","undefined"],["odabd","false"],["btoa","null"],["sp_ad","true"],["adsBlocked","false"],["_sp_.msg.displayMessage","noopFunc"],["isAdblock","false"],["CaptchmeState.adb","undefined"],["bb","false"],["indexedDB.open","trueFunc"],["UhasAB","false"],["adNotificationDetected","false"],["atob","noopFunc"],["flashvars.popunder_url",""],["_pop","noopFunc"],["_ti_update_user","noopFunc"],["valid","1"],["vastAds","[]"],["adblock","1"],["frg","1"],["time","0"],["vpPrerollVideo","undefined"],["ads","true"],["GNCA_Ad_Support","true"],["Date.now","noopFunc"],["jQuery.adblock","1"],["VMG.Components.Adblock","false"],["_n_app.popunder","null"],["adblockDetector","trueFunc"],["hasPoped","true"],["flashvars.video_click_url","undefined"],["flashvars.adv_start_html",""],["jQuery.adblock","false"],["google_jobrunner","true"],["sec","0"],["gadb","false"],["checkadBlock","noopFunc"],["clientSide.adbDetect","noopFunc"],["cmnnrunads","true"],["adBlocker","false"],["adBlockDetected","noopFunc"],["StileApp.somecontrols.adBlockDetected","noopFunc"],["MDCore.adblock","0"],["google_tag_data","noopFunc"],["noAdBlock","true"],["adsOk","true"],["Object.prototype._parseVAST","noopFunc"],["Object.prototype.createAdBlocker","noopFunc"],["Object.prototype.isAdPeriod","falseFunc"],["check","true"],["dvsize","51"],["isal","true"],["count","0"],["document.hidden","true"],["awm","true"],["adblockEnabled","false"],["ABLK","false"],["pogo.intermission.staticAdIntermissionPeriod","0"],["SubmitDownload1","noopFunc"],["t","0"],["ckaduMobilePop","noopFunc"],["tieneAdblock","0"],["adsAreBlocked","false"],["cmgpbjs","false"],["displayAdblockOverlay","false"],["google","false"],["Math.pow","noopFunc"],["openInNewTab","noopFunc"],["adblockDetector","noopFunc"],["loadingAds","true"],["runAdBlocker","false"],["td_ad_background_click_link","undefined"],["Adblock","false"],["flashvars.logo_url",""],["flashvars.logo_text",""],["nlf.custom.userCapabilities","false"],["decodeURIComponent","trueFunc"],["LoadThisScript","true"],["showPremLite","true"],["closeBlockerModal","false"],["adBlockDetector.isEnabled","falseFunc"],["testerli","false"],["areAdsDisplayed","true"],["gkAdsWerbung","true"],["document.bridCanRunAds","true"],["pop_target","null"],["is_banner","true"],["$easyadvtblock","false"],["show_dfp_preroll","false"],["show_youtube_preroll","false"],["show_ads_gr8_lite","true"],["doads","true"],["jsUnda","noopFunc"],["abp","noopFunc"],["AlobaidiDetectAdBlock","true"],["Advertisement","1"],["adBlockDetected","false"],["abp1","1"],["pr_okvalida","true"],["$.ajax","trueFunc"],["getHomadConfig","noopFunc"],["adsbygoogle.loaded","true"],["cnbc.canShowAds","true"],["Adv_ab","false"],["chrome","undefined"],["firefaucet","true"],["cRAds","true"],["app.addonIsInstalled","trueFunc"],["flashvars.popunder_url","undefined"],["adv","true"],["prerollMain","undefined"],["canRunAds","true"],["Fingerprint2","true"],["dclm_ajax_var.disclaimer_redirect_url",""],["load_pop_power","noopFunc"],["adBlockDetected","true"],["Time_Start","0"],["blockAdBlock","trueFunc"],["ezstandalone.enabled","true"],["CustomEvent","noopFunc"],["ab","false"],["go_popup","{}"],["noBlocker","true"],["adsbygoogle","null"],["fabActive","false"],["gWkbAdVert","true"],["noblock","true"],["ai_dummy","true"],["ulp_noadb","true"],["wgAffiliateEnabled","false"],["ads","null"],["checkAdsBlocked","noopFunc"],["adsLoadable","true"],["ASSetCookieAds","null"],["letShowAds","true"],["tidakAdaPenghalangAds","true"],["timeSec","0"],["ads_unblocked","true"],["xxSetting.adBlockerDetection","false"],["better_ads_adblock","null"],["open","undefined"],["importFAB","undefined"],["Drupal.behaviors.adBlockerPopup","null"],["fake_ad","true"],["flashvars.mlogo",""],["koddostu_com_adblock_yok","null"],["adsbygoogle","trueFunc"],["player.ads.cuePoints","undefined"],["adBlockDetected","null"],["better_ads_adblock","1"],["hold_click","false"],["sgpbCanRunAds","true"],["hasAdBlocker","false"],["Object.prototype.setNeedShowAdblockWarning","noopFunc"],["DHAntiAdBlocker","true"],["adsConfigs","{}"],["adsConfigs.0","{}"],["adsConfigs.0.enabled","0"],["NoAdBlock","noopFunc"],["adList","[]"],["ifmax","true"],["nitroAds.abp","true"],["onloadUI","noopFunc"],["Object.prototype.isAdblock","undefined"],["PageLoader.DetectAb","0"],["adSettings","[]"],["detectAdBlock","noopFunc"],["Object.prototype.isAllAdClose","true"],["document.hasFocus","trueFunc"],["isRequestPresent","true"],["fouty","true"],["detectAdblock","noopFunc"],["Notification","undefined"],["protection","noopFunc"],["private","false"],["isAdClickDone","true"],["waitTime441","0"],["waitTime","0"],["showadas","true"],["iktimer","0"],["Object.prototype.m_nLastTimeAdBlock","undefined"],["config.pauseInspect","false"],["appContext.adManager.context.current.adFriendly","false"],["blockAdBlock._options.baitClass","null"],["document.blocked_var","1"],["____ads_js_blocked","false"],["wIsAdBlocked","false"],["WebSite.plsDisableAdBlock","null"],["ads_blocked","false"],["samDetected","false"],["countClicks","0"],["settings.adBlockerDetection","false"],["mixpanel.get_distinct_id","true"],["bannersLoaded","4"],["notEmptyBanners","4"],["fuckAdBlock._options.baitClass","null"],["bscheck.adblocker","noopFunc"],["qpcheck.ads","noopFunc"],["isContentBlocked","falseFunc"],["CloudflareApps.installs.Ik7rmQ4t95Qk.options.measureDomain","undefined"],["detectAB1","noopFunc"],["uBlockOriginDetected","false"],["googletag._vars_","{}"],["googletag._loadStarted_","true"],["googletag._loaded_","true"],["google_unique_id","1"],["google.javascript","{}"],["google.javascript.ads","{}"],["google_global_correlator","1"],["paywallGateway.truncateContent","noopFunc"],["adBlockDisabled","true"],["blockedElement","noopFunc"],["popit","false"],["adBlockerDetected","false"],["abu","falseFunc"],["countdown","0"],["decodeURI","noopFunc"],["flashvars.adv_postpause_vast",""],["univresalP","noopFunc"],["xv_ad_block","0"],["vidorev_jav_plugin_video_ads_object.vid_ads_m_video_ads",""],["adsProvider.init","noopFunc"],["SDKLoaded","true"],["blockAdBlock._creatBait","null"],["POPUNDER_ENABLED","false"],["plugins.preroll","noopFunc"],["errcode","0"],["showada","true"],["showax","true"],["p18","undefined"],["asc","2"],["ADBLOCKED","false"],["adb","0"],["String.fromCharCode","trueFunc"],["adblock_use","false"],["nitroAds.loaded","true"],["createCanvas","noopFunc"],["playerAdSettings.adLink",""],["playerAdSettings.waitTime","0"],["AdHandler.adblocked","0"],["adsHeight","11"],["checkCap","0"],["isAdsLoaded","true"],["adblockerAlert","noopFunc"],["Object.prototype.parseXML","noopFunc"],["Object.prototype.blackscreenDuration","1"],["Object.prototype.adPlayerId",""],["isadb","false"],["adblockDetect","noopFunc"],["style","noopFunc"],["history.pushState","noopFunc"],["google_unique_id","6"],["new_config.timedown","0"],["Object.prototype.isAdDisabled","true"],["hiddenProxyDetected","false"],["SteadyWidgetSettings.adblockActive","false"],["proclayer","noopFunc"],["timeleft","0"],["load_ads","trueFunc"],["starPop","1"],["Object.prototype.ads","noopFunc"],["detectBlockAds","noopFunc"],["ga","trueFunc"],["enable_dl_after_countdown","true"],["isGGSurvey","true"],["D4zz","noopFunc"],["ad_link",""],["App.AdblockDetected","false"],["SF.adblock","true"],["startfrom","0"],["Object.prototype.nopreroll_","true"],["HP_Scout.adBlocked","false"],["SD_IS_BLOCKING","false"],["Object.prototype.isPremium","true"],["__BACKPLANE_API__.renderOptions.showAdBlock",""],["Object.prototype.isNoAds","{}"],["countDownDate","0"],["setupSkin","noopFunc"],["count","1"],["Object.prototype.enableInterstitial","false"],["ads","undefined"],["ADBLOCK","false"],["POSTPART_prototype.ADKEY","noopFunc"],["adBlockDetected","falseFunc"],["noAdBlock","noopFunc"],["AdService.info.abd","noopFunc"],["adBlockDetectionResult","undefined"],["popped","true"],["google.ima.OmidVerificationVendor","{}"],["Object.prototype.omidAccessModeRules","{}"],["puShown1","true"],["stop","noopFunc"],["passthetest","true"],["timeset","0"],["pandaAdviewValidate","true"],["findCMP","noopFunc"],["verifica_adblock","noopFunc"],["canGetAds","true"],["ad_blocker_active","false"],["init_welcome_ad","noopFunc"],["moneyAbovePrivacyByvCDN","true"],["aLoad","noopFunc"],["mtCanRunAdsSoItCanStillBeOnTheWeb","true"],["document.body.contains","trueFunc"],["popunder","undefined"],["distance","0"],["document.onclick",""],["adEnable","true"],["displayAds","0"],["Overlayer","{}"],["pop3getcookie","undefined"],["pop3setcookie1","undefined"],["pop3setCookie2","undefined"],["_adshrink.skiptime","0"],["AbleToRunAds","true"],["PreRollAd.timeCounter","0"],["TextEncoder","undefined"],["abpblocked","undefined"],["app.showModalAd","noopFunc"],["paAddUnit","noopFunc"],["adt","0"],["test_adblock","noopFunc"],["Object.prototype.adBlockerDetected","falseFunc"],["Object.prototype.adBlocker","false"],["Object.prototype.tomatoDetected","falseFunc"],["vastEnabled","false"],["detectadsbocker","false"],["two_worker_data_js.js","[]"],["FEATURE_DISABLE_ADOBE_POPUP_BY_COUNTRY","true"],["questpassGuard","noopFunc"],["isAdBlockerEnabled","false"],["smartLoaded","true"],["timeLeft","0"],["Cookiebot","noopFunc"],["feature_flags.interstitial_ads_flag","false"],["feature_flags.interstitials_every_four_slides","false"],["waldoSlotIds","true"],["adblockstatus","false"],["adScriptLoaded","true"],["adblockEnabled","noopFunc"],["banner_is_blocked","false"],["Object.prototype.adBlocked","false"],["chp_adblock_browser","noopFunc"],["googleAd","true"],["Brid.A9.prototype.backfillAdUnits","[]"],["dct","0"],["slideShow.displayInterstitial","true"],["window.runningAdsAllowed","true"],["WAITING_TIME","0"],["__INITIAL_STATE__.gameLists.gamesNoPrerollIds.indexOf","trueFunc"],["navigator.standalone","true"],["google.ima.settings.setDisableFlashAds","noopFunc"],["setTimer","0"],["penci_adlbock.ad_blocker_detector","0"],["Object.prototype.adblockDetector","noopFunc"],["blext","true"],["vidorev_jav_plugin_video_ads_object","{}"],["vidorev_jav_plugin_video_ads_object_post","{}"],["S_Popup","10"],["rabLimit","-1"],["nudgeAdBlock","noopFunc"],["playerConfigs.rek","{}"],["feedBack.showAffilaePromo","noopFunc"],["checkAdBlocker","noopFunc"],["loadpagecheck","noopFunc"],["hucksterInit","trueFunc"],["artemisDisplays","[]"],["artemisItemNames","[]"],["isAdBlockerActive","noopFunc"],["di.VAST.XHRURLHandler","noopFunc"],["di.app.WebplayerApp.Ads.Supervisor.eligibleForPreroll","trueFunc"],["di.app.WebplayerApp.Ads.Supervisor.eligibleForMidroll","trueFunc"],["admiral","noopFunc"],["checkAdsStatus","noopFunc"],["ads","[]"],["settings.adBlockDetectionEnabled","false"],["displayInterstitialAdConfig","false"],["confirm","noopFunc"],["checkAdBlockeraz","noopFunc"],["segundos","0"],["Yii2App.playbackTimeout","0"],["isPremium","true"],["QiyiPlayerProphetData.a.data","{}"],["toggleAdBlockInfo","falseFunc"],["adsPlay","false"],["aipAPItag.prerollSkipped","true"],["aipAPItag.setPreRollStatus","trueFunc"],["reklam_1_saniye","0"],["reklam_1_gecsaniye","0"],["powerAPITag","emptyObj"],["aoAdBlockDetected","false"],["xtime","0"],["Div_popup",""],["AddAdsV2I.addBlock","false"],["rwt","noopFunc"],["bmak.js_post","false"],["firebase.analytics","noopFunc"],["flashvars.event_reporting",""],["Visitor","{}"],["akamaiDisableServerIpLookup","noopFunc"],["nads.createAd","trueFunc"],["ga","noopFunc"],["huecosPBS.nstdX","null"],["DTM.trackAsyncPV","noopFunc"],["_satellite","{}"],["_satellite.getVisitorId","noopFunc"],["newPageViewSpeedtest","noopFunc"],["pubg.unload","noopFunc"],["generateGalleryAd","noopFunc"],["mediator","noopFunc"],["Object.prototype.subscribe","noopFunc"],["gbTracker","{}"],["gbTracker.sendAutoSearchEvent","noopFunc"],["Object.prototype.vjsPlayer.ads","noopFunc"],["network_user_id",""],["googletag.cmd","{}"],["Object.prototype.setDisableFlashAds","noopFunc"],["DD_RUM.addTiming","noopFunc"],["chameleonVideo.adDisabledRequested","true"],["AdmostClient","{}"],["analytics","{}"],["datalayer","[]"],["Object.prototype.isInitialLoadDisabled","noopFunc"],["listingGoogleEETracking","noopFunc"],["dcsMultiTrack","noopFunc"],["urlStrArray","noopFunc"],["pa","{}"],["Object.prototype.setConfigurations","noopFunc"],["Object.prototype.bk_addPageCtx","noopFunc"],["Object.prototype.bk_doJSTag","noopFunc"],["passFingerPrint","noopFunc"],["DD_LOGS","noopFunc"],["optimizely","{}"],["optimizely.initialized","true"],["google_optimize","{}"],["google_optimize.get","noopFunc"],["_gsq","{}"],["_gsq.push","noopFunc"],["iom","{}"],["iom.c","noopFunc"],["_conv_q","{}"],["_conv_q.push","noopFunc"],["pa.privacy","{}"],["Object.prototype.getTargetingMap","noopFunc"],["populateClientData4RBA","noopFunc"],["YT.ImaManager","noopFunc"],["UOLPD","{}"],["UOLPD.dataLayer","{}"],["__configuredDFPTags","{}"],["Adman","{}"],["dplus","{}"],["dplus.track","noopFunc"],["_satellite.track","noopFunc"],["google.ima.dai","{}"],["gfkS2sExtension","{}"],["gfkS2sExtension.HTML5VODExtension","noopFunc"],["AnalyticsEventTrackingJS","{}"],["AnalyticsEventTrackingJS.addToBasket","noopFunc"],["AnalyticsEventTrackingJS.trackErrorMessage","noopFunc"],["initializeslideshow","noopFunc"],["fathom","{}"],["fathom.trackGoal","noopFunc"],["Origami","{}"],["Origami.fastclick","noopFunc"],["Sentry","{}"],["Sentry.init","noopFunc"],["Taplytics","{}"],["Taplytics.featureFlagEnabled","noopFunc"],["TRC","{}"],["TRC._taboolaClone","[]"],["fp","{}"],["fp.t","noopFunc"],["fp.s","noopFunc"],["initializeNewRelic","noopFunc"],["turnerAnalyticsObj","{}"],["turnerAnalyticsObj.setVideoObject4AnalyticsProperty","noopFunc"],["optimizelyDatafile","{}"],["optimizelyDatafile.featureFlags","[]"],["fingerprint","{}"],["fingerprint.getCookie","noopFunc"],["gform.utils","noopFunc"],["gform.utils.trigger","noopFunc"],["get_fingerprint","noopFunc"],["moatPrebidApi","{}"],["moatPrebidApi.getMoatTargetingForPage","noopFunc"],["supportedBrowsers",""],["ytInitialPlayerResponse.playerConfig.ssapConfig.ssapPrerollEnabled","false"],["ytInitialPlayerResponse.streamingData.serverAbrStreamingUrl","undefined"],["Navigator.prototype.globalPrivacyControl","false"],["navigator.globalPrivacyControl","false"]];

const hostnamesMap = new Map([["m.youtube.com",[0,1,2,3,581,582]],["music.youtube.com",[0,1,2,3,581,582]],["tv.youtube.com",[0,1,2,3]],["www.youtube.com",[0,1,2,3,581,582]],["youtubekids.com",[0,1,2,3]],["youtube-nocookie.com",[0,1,2,3]],["eu-proxy.startpage.com",[0,1,3]],["kicker.de",[4,554]],["t-online.de",5],["whatfinger.com",6],["timesofindia.indiatimes.com",7],["economictimes.indiatimes.com",8],["userscloud.com",9],["motherless.com",10],["sueddeutsche.de",11],["watson.de",11],["watchanimesub.net",12],["wco.tv",12],["wcoanimesub.tv",12],["wcoforever.net",12],["freeviewmovies.com",12],["filehorse.com",12],["guidetnt.com",12],["sp-today.com",12],["linkvertise.com",12],["textbin.net",12],["eropaste.com",12],["pastebr.xyz",12],["getpaste.link",12],["sharetext.me",12],["note.sieuthuthuat.com",12],["elcriticodelatele.com",[12,249]],["gadgets.es",[12,249]],["amateurporn.co",[12,108]],["wiwo.de",13],["masteranime.tv",14],["fullxh.com",15],["megaxh.com",15],["movingxh.world",15],["taoxh.life",15],["unlockxh4.com",15],["xhadult2.com",15],["xhadult3.com",15],["xhadult4.com",15],["xhadult5.com",15],["xhamster46.com",15],["xhday.com",15],["xhday1.com",15],["xhmoon5.com",15],["xhplanet1.com",15],["xhplanet2.com",15],["xhreal2.com",15],["xhreal3.com",15],["xhtab2.com",15],["xhtree.com",15],["xhvictory.com",15],["xhwebsite.com",15],["xhwebsite2.com",15],["xhwide1.com",15],["alphaporno.com",[16,420]],["porngem.com",16],["uploadbank.com",16],["shortit.pw",[16,111]],["familyporn.tv",16],["cloudemb.com",[16,342]],["sbplay1.com",16],["id45.cyou",16],["85tube.com",[16,92]],["k1nk.co",16],["watchasians.cc",16],["soltoshindo.com",16],["dronedj.com",18],["freeplayervideo.com",19],["nazarickol.com",19],["player-cdn.com",19],["apinchcaseation.com",19],["bigclatterhomesguideservice.com",19],["bradleyviewdoctor.com",19],["brookethoughi.com",19],["denisegrowthwide.com",19],["edwardarriveoften.com",19],["housecardsummerbutton.com",19],["jamiesamewalk.com",19],["jayservicestuff.com",19],["johntryopen.com",19],["kennethofficialitem.com",19],["lukecomparetwo.com",19],["markstyleall.com",19],["morganoperationface.com",19],["nectareousoverelate.com",19],["paulkitchendark.com",19],["sandrataxeight.com",19],["seanshowcould.com",19],["sharonwhiledemocratic.com",19],["stevenimaginelittle.com",19],["strawberriesporail.com",19],["timberwoodanotia.com",19],["tinycat-voe-fashion.com",19],["troyyourlead.com",19],["uptodatefinishconference.com",19],["uptodatefinishconferenceroom.com",19],["vincentincludesuccessful.com",19],["voe.sx",19],["motphimtv.com",19],["rabbitstream.net",19],["streamlare.com",19],["projectfreetv.one",19],["nolive.me",20],["player.glomex.com",21],["merkur.de",21],["tz.de",21],["hotpornfile.org",24],["player.tabooporns.com",24],["x69.ovh",24],["wiztube.xyz",24],["multiup.us",24],["rpdrlatino.live",24],["peliculas8k.com",[24,25]],["video.q34r.org",24],["69x.online",24],["czxxx.org",24],["vvtplayer.online",24],["netu.ac",24],["dirtyvideo.fun",25],["adbull.org",26],["mitly.us",26],["linkrex.net",26],["linx.cc",26],["oke.io",26],["dz4link.com",26],["linclik.com",26],["shrt10.com",26],["loptelink.com",26],["cut-fly.com",26],["linkfinal.com",26],["payskip.org",26],["cutpaid.com",26],["forexmab.com",26],["linkjust.com",26],["linkszia.co",26],["leechpremium.link",26],["icutlink.com",[26,129]],["stfly.me",26],["oncehelp.com",26],["rgl.vn",26],["reqlinks.net",26],["megaurl.in",26],["megafly.in",26],["bitlk.com",26],["qlinks.eu",26],["link.3dmili.com",26],["short-fly.com",26],["foxseotools.com",26],["pngit.live",26],["link.turkdown.com",26],["urlty.com",26],["7r6.com",26],["oko.sh",26],["ckk.ai",26],["fc.lc",26],["fstore.biz",26],["cuts-url.com",26],["eio.io",26],["exe.app",26],["exee.io",26],["exey.io",26],["skincarie.com",26],["exeo.app",26],["coinlyhub.com",[26,207]],["adsafelink.com",26],["aii.sh",26],["cybertechng.com",[26,216]],["owllink.net",26],["cutdl.xyz",26],["iir.ai",26],["shorteet.com",[26,235]],["sekilastekno.com",26],["smoner.com",26],["gplinks.co",26],["xpshort.com",26],["upshrink.com",26],["enit.in",[26,231]],["ez4short.com",26],["easysky.in",26],["veganab.co",26],["adrinolinks.in",26],["go.gyanitheme.com",26],["go.theforyou.in",26],["go.hipsonyc.com",26],["birdurls.com",26],["try2link.com",26],["jameeltips.us",26],["gainl.ink",26],["promo-visits.site",26],["satoshi-win.xyz",[26,265]],["shorterall.com",26],["encurtandourl.com",26],["forextrader.site",26],["postazap.com",26],["tinys.click",[26,216]],["cpm.icu",26],["easycut.io",26],["panyshort.link",26],["enagato.com",26],["pandaznetwork.com",26],["tii.la",26],["loan2host.com",26],["tei.ai",26],["tii.ai",26],["recipestutorials.com",26],["droplink.co",26],["oii.io",26],["du-link.in",26],["atglinks.com",26],["linksly.co",26],["pkr.pw",26],["imagenesderopaparaperros.com",26],["shortenbuddy.com",26],["gibit.xyz",26],["apksvip.com",26],["4cash.me",26],["namaidani.com",26],["teknomuda.com",26],["illink.net",26],["miuiku.com",26],["yourtechnology.online",26],["savelink.site",26],["apkshrt.com",26],["srts.me",26],["kutmoney.com",26],["kutt.io",26],["sanoybonito.club",26],["samaa-pro.com",26],["miklpro.com",26],["modapk.link",26],["shrinkforearn.in",26],["techyuth.xyz",26],["1shorten.com",26],["ccurl.net",26],["st23q.com",26],["beautyram.info",26],["viraloc.com",26],["kiiw.icu",26],["galaxy-link.space",26],["linkpoi.me",26],["usdshort.com",26],["bitcoinly.in",26],["menjelajahi.com",26],["pewgame.com",26],["yxoshort.com",26],["1link.vip",26],["haonguyen.top",26],["claimfreebits.com",26],["crazyblog.in",26],["gtlink.co",26],["link.tokenoto.com",26],["cutearn.net",26],["rshrt.com",26],["short.palmeratv.com",26],["filezipa.com",26],["dz-linkk.com",26],["theblissempire.com",26],["finanzas-vida.com",26],["adurly.cc",26],["pix4link.com",26],["paid4.link",26],["link.asiaon.top",26],["go.gets4link.com",26],["download.sharenulled.net",26],["beingtek.com",26],["shorturl.unityassets4free.com",26],["disheye.com",26],["techymedies.com",26],["techysuccess.com",26],["za.gl",[26,148]],["download.baominh.tech",26],["bblink.com",26],["linkbr.xyz",26],["myad.biz",26],["swzz.xyz",26],["vevioz.com",26],["charexempire.com",26],["clk.asia",26],["egfly.xyz",26],["linka.click",26],["sturls.com",26],["myshrinker.com",26],["go.adinsurance.xyz",26],["dash-free.com",[26,216]],["snowurl.com",[26,216]],["netfile.cc",26],["link.insurance-space.xyz",26],["link.insurglobal.xyz",26],["theconomy.me",26],["rajsayt.xyz",26],["rocklink.in",26],["adinsurance.xyz",26],["insurglobal.xyz",26],["techgeek.digital",26],["download3s.net",26],["shortx.net",26],["musicc.xyz",26],["shortawy.com",26],["tlin.me",26],["apprepack.com",26],["up-load.one",26],["zuba.link",26],["news.speedynews.xyz",26],["golink.xaydungplus.com",26],["bestcash2020.com",26],["hoxiin.com",26],["technemo.xyz",26],["go.linkbnao.com",26],["link-yz.com",26],["paylinnk.com",26],["thizissam.in",26],["ier.ai",26],["bloggertheme.xyz",26],["adslink.pw",26],["novelssites.com",26],["links.medipost.org",26],["faucetcrypto.net",26],["short.freeltc.top",26],["trxking.xyz",26],["weadown.com",26],["m.bloggingguidance.com",26],["blog.onroid.com",26],["cutty.app",26],["link.codevn.net",26],["upfilesurls.com",26],["shareus.site",26],["link4rev.site",26],["bloginguru.xyz",26],["celinks.net",26],["c2g.at",26],["shortzu.icu",26],["bitcosite.com",[26,433]],["cryptosh.pro",26],["sigmalinks.in",26],["link68.net",26],["traffic123.net",26],["windowslite.net",[26,216]],["coinsl.click",26],["exalink.fun",26],["exego.app",[26,263]],["viewfr.com",26],["cl1ca.com",26],["4br.me",26],["fir3.net",26],["kiddyshort.com",26],["watchmygf.me",[27,54]],["camwhorez.tv",[27,40,91,92]],["fpo.xxx",[27,56]],["sexemix.com",27],["heavyfetish.com",[27,492]],["you-porn.com",29],["youporngay.com",29],["youpornru.com",29],["9908ww.com",29],["adelaidepawnbroker.com",29],["bztube.com",29],["hotovs.com",29],["insuredhome.org",29],["nudegista.com",29],["pornluck.com",29],["vidd.se",29],["pornhub.com",29],["pornerbros.com",30],["freep.com",30],["porn.com",33],["tune.pk",34],["noticias.gospelmais.com.br",35],["techperiod.com",35],["jacquieetmicheltv.net",[36,37]],["illicoporno.com",36],["lavoixdux.com",36],["tonpornodujour.com",36],["jacquieetmichel.net",36],["swame.com",36],["vosfemmes.com",36],["voyeurfrance.net",36],["viki.com",[38,39]],["sleazyneasy.com",[40,41,42]],["smutr.com",[40,203]],["yourporngod.com",[40,41]],["javbangers.com",[40,312]],["camfox.com",40],["camthots.tv",[40,124]],["shegotass.info",40],["amateur8.com",40],["bigtitslust.com",40],["ebony8.com",40],["freeporn8.com",40],["lesbian8.com",40],["maturetubehere.com",40],["sortporn.com",40],["webcamvau.com",40],["motherporno.com",[40,41,56,126]],["tktube.com",40],["theporngod.com",[40,41]],["pornsocket.com",43],["luxuretv.com",44],["porndig.com",[45,46]],["webcheats.com.br",47],["ceesty.com",[48,49]],["gestyy.com",[48,49]],["corneey.com",49],["destyy.com",49],["festyy.com",49],["sh.st",49],["angrybirdsnest.com",50],["zrozz.com",50],["clix4btc.com",50],["katfile.com",50],["4tests.com",50],["planet-explorers-isos.com",50],["business-standard.com",50],["goltelevision.com",50],["news-und-nachrichten.de",50],["laradiobbs.net",50],["urlaubspartner.net",50],["produktion.de",50],["cinemaxxl.de",50],["bladesalvador.com",50],["tempr.email",50],["trust.zone",50],["cshort.org",50],["friendproject.net",50],["covrhub.com",50],["planetsuzy.org",51],["empflix.com",52],["filespace.com",53],["transparentcalifornia.com",54],["deepbrid.com",55],["submityourflicks.com",56],["3movs.com",56],["cambay.tv",[56,108,124,126]],["bravoerotica.net",[56,126]],["youx.xxx",56],["camclips.tv",[56,203]],["camflow.tv",[56,108,126,169,239]],["camhoes.tv",[56,108,124,126,169,239]],["xmegadrive.com",56],["xxxymovies.com",56],["xxxshake.com",56],["gayck.com",56],["xhand.com",[56,126]],["analdin.com",[56,126]],["webnovel.com",57],["videosgay.me",[58,59]],["wishfast.top",59],["schwaebische.de",60],["mercurynews.com",61],["chicoer.com",61],["dailybreeze.com",61],["dailybulletin.com",61],["dailynews.com",61],["delcotimes.com",61],["eastbaytimes.com",61],["macombdaily.com",61],["ocregister.com",61],["pasadenastarnews.com",61],["pe.com",61],["presstelegram.com",61],["redlandsdailyfacts.com",61],["reviewjournal.com",61],["santacruzsentinel.com",61],["saratogian.com",61],["sentinelandenterprise.com",61],["sgvtribune.com",61],["tampabay.com",61],["times-standard.com",61],["theoaklandpress.com",61],["trentonian.com",61],["twincities.com",61],["whittierdailynews.com",61],["bostonherald.com",61],["dailycamera.com",61],["sbsun.com",61],["dailydemocrat.com",61],["montereyherald.com",61],["orovillemr.com",61],["record-bee.com",61],["redbluffdailynews.com",61],["reporterherald.com",61],["thereporter.com",61],["timescall.com",61],["timesheraldonline.com",61],["ukiahdailyjournal.com",61],["dailylocal.com",61],["8tracks.com",62],["revealname.com",63],["fcportables.com",[64,65]],["golfchannel.com",67],["telemundodeportes.com",67],["stream.nbcsports.com",67],["gamcore.com",68],["porcore.com",68],["69games.xxx",68],["javmix.app",68],["tecknity.com",69],["haaretz.co.il",70],["haaretz.com",70],["hungama.com",70],["a-o.ninja",70],["anime-odcinki.pl",70],["kumpulmanga.org",70],["shortgoo.blogspot.com",70],["tonanmedia.my.id",[70,447]],["yurasu.xyz",70],["isekaipalace.com",70],["megadescarga.net",[71,72,73,74]],["megadescargas.net",[71,72,73,74]],["vikistream.com",75],["eplayer.click",[75,76]],["mega4upload.com",[76,82]],["ennovelas.com",[76,82]],["n-tv.de",77],["brigitte.de",78],["stern.de",78],["foxsports.com.au",79],["canberratimes.com.au",79],["thesimsresource.com",80],["bdnewszh.com",82],["streamservicehd.click",82],["timeforbitco.in",83],["worldofbitco.in",[83,94]],["weatherx.co.in",[83,94]],["getyourbitco.in",83],["sunbtc.space",83],["ctrl.blog",84],["sportlife.es",85],["finofilipino.org",86],["acortarm.xyz",87],["acortame.xyz",87],["speedtest.net",88],["mysflink.blogspot.com",89],["assia.tv",90],["assia4.com",90],["assia24.com",90],["cwtvembeds.com",[92,125]],["camlovers.tv",92],["porntn.com",92],["pornissimo.org",92],["sexcams-24.com",[92,108]],["watchporn.to",[92,108]],["camwhorez.video",92],["footstockings.com",[93,108]],["sbs.com.au",[95,96]],["ojogos.com.br",98],["powforums.com",99],["supforums.com",99],["studybullet.com",99],["usgamer.net",100],["recordonline.com",100],["freebitcoin.win",102],["e-monsite.com",102],["coindice.win",102],["sport-tv-guide.live",103],["temp-mails.com",104],["freiepresse.de",105],["investing.com",106],["camhub.cc",108],["love4porn.com",108],["thotvids.com",108],["watchmdh.to",108],["celebwhore.com",108],["cluset.com",108],["4kporn.xxx",108],["xhomealone.com",108],["lusttaboo.com",[108,382]],["hentai-moon.com",108],["mp3fiber.com",109],["suedkurier.de",110],["anysex.com",112],["vlist.se",113],["pornve.com",114],["coolrom.com.au",115],["pornohirsch.net",116],["marie-claire.es",117],["gamezhero.com",117],["flashgirlgames.com",117],["onlinesudoku.games",117],["mpg.football",117],["sssam.com",117],["globalnews.ca",118],["drinksmixer.com",119],["leitesculinaria.com",119],["fupa.net",120],["browardpalmbeach.com",121],["dallasobserver.com",121],["houstonpress.com",121],["miaminewtimes.com",121],["phoenixnewtimes.com",121],["westword.com",121],["nhentai.net",122],["nowtv.com.tr",123],["caminspector.net",124],["camwhoreshd.com",124],["camgoddess.tv",124],["gay4porn.com",126],["mypornhere.com",126],["mediapason.it",127],["linkspaid.com",127],["tuotromedico.com",127],["neoteo.com",127],["phoneswiki.com",127],["celebmix.com",127],["myneobuxportal.com",127],["oyungibi.com",127],["25yearslatersite.com",127],["jeshoots.com",128],["techhx.com",128],["karanapk.com",128],["flashplayer.fullstacks.net",130],["cloudapps.herokuapp.com",130],["youfiles.herokuapp.com",130],["temp-mail.org",131],["playembed.xyz",132],["javhdporn.net",132],["javstream.top",132],["comnuan.com",133],["veedi.com",134],["battleboats.io",134],["fruitlab.com",135],["haddoz.net",135],["garoetpos.com",135],["stiletv.it",136],["hqtv.biz",138],["liveuamap.com",139],["muvibg.com",139],["audycje.tokfm.pl",140],["hulu.com",[141,142,143]],["shush.se",144],["emurom.net",145],["allkpop.com",146],["azmath.info",147],["downfile.site",147],["downphanmem.com",147],["expertvn.com",147],["memangbau.com",147],["trangchu.news",147],["aztravels.net",147],["adfoc.us",147],["anumin.com",147],["awolio.com",147],["cgbsesupport.com",147],["eternalcbse.in",147],["foreverhealth.in",147],["jobwaala.in",147],["kaisekareblog.com",147],["learnwithsaif.in",147],["minijankari.com",147],["news36tech.com",147],["nhmgujarat.in",147],["odiamusicsong.com",147],["sugargliderfaqs.com",147],["theringtonesworld.in",147],["w3hindi.in",147],["picassoappk.com",147],["geniuseducares.com",147],["pmyojanasarkari.in",147],["netflixvip.in",147],["mghindinews.in",147],["gentletrail.in",147],["raidersixgameapk.com",147],["sarkariexam365.com",147],["digitalfacts4u.com",147],["odiasongsworld.com",147],["friv4school.in",147],["instander.me",147],["jankari4u.com",147],["trancebazar.com",147],["mdsuuniversity.org",147],["odishadjs.link",147],["pagalmp3status.com",147],["flyshayari.com",147],["powerrangergames.com",147],["kishanganjnews.in",147],["tipdoot.in",147],["dinakondukathe.com",147],["nrvlivability.org",147],["remixodia.link",147],["aksharamedia.com",147],["mcqquestionbank.com",147],["barmanmusic.com.in",147],["msdsu.org",147],["newsivae.in",147],["kinemastermods.in",147],["iisfvirtual.in",147],["starxinvestor.com",147],["myprivatejobs.com",[147,261]],["wikitraveltips.com",[147,261]],["amritadrino.com",[147,261]],["sahlmarketing.net",147],["filmypoints.in",147],["quotesopia.com",147],["techacode.com",147],["trickms.com",147],["sptfy.be",147],["mcafee-com.com",[147,263]],["pickcrackpasswords.blogspot.com",149],["kfrfansub.com",150],["thuglink.com",150],["voipreview.org",150],["hanime.tv",151],["pogo.com",152],["cloudvideo.tv",153],["legionjuegos.org",154],["legionpeliculas.org",154],["legionprogramas.org",154],["16honeys.com",155],["elespanol.com",156],["remodelista.com",157],["coolmathgames.com",[158,159,160,509]],["audiofanzine.com",161],["noweconomy.live",163],["howifx.com",[163,231]],["vavada5com.com",163],["hitokin.net",164],["developerinsider.co",165],["ilprimatonazionale.it",166],["hotabis.com",166],["root-nation.com",166],["italpress.com",166],["airsoftmilsimnews.com",166],["artribune.com",166],["thehindu.com",167],["cambro.tv",[168,169]],["nibelungen-kurier.de",170],["pianetamountainbike.it",172],["barchart.com",173],["modelisme.com",174],["parasportontario.ca",174],["prescottenews.com",174],["nrj-play.fr",175],["oeffentlicher-dienst.info",176],["hackingwithreact.com",177],["gutekueche.at",178],["eplfootballmatch.com",179],["peekvids.com",180],["playvids.com",180],["pornflip.com",180],["redensarten-index.de",181],["vw-page.com",182],["viz.com",[183,184]],["queenfaucet.website",185],["0rechner.de",186],["configspc.com",187],["xopenload.me",187],["uptobox.com",187],["uptostream.com",187],["onepiece-tube.com",188],["japgay.com",189],["mega-debrid.eu",190],["dreamdth.com",191],["diaridegirona.cat",193],["diariodeibiza.es",193],["diariodemallorca.es",193],["diarioinformacion.com",193],["eldia.es",193],["emporda.info",193],["farodevigo.es",193],["laopinioncoruna.es",193],["laopiniondemalaga.es",193],["laopiniondemurcia.es",193],["laopiniondezamora.es",193],["laprovincia.es",193],["levante-emv.com",193],["mallorcazeitung.es",193],["regio7.cat",193],["superdeporte.es",193],["playpaste.com",194],["player.rtl2.de",195],["freetutorialsus.com",196],["vidlii.com",[196,212]],["iammagnus.com",196],["dailyvideoreports.net",196],["unityassets4free.com",196],["cnbc.com",197],["puzzles.msn.com",198],["metro.us",198],["newsobserver.com",198],["arkadiumhosted.com",198],["firefaucet.win",200],["55k.io",201],["filelions.online",201],["stmruby.com",201],["direct-link.net",202],["direkt-wissen.com",202],["link-to.net",202],["fullhdxxx.com",204],["pornclassic.tube",205],["tubepornclassic.com",205],["etonline.com",206],["creatur.io",206],["drphil.com",206],["urbanmilwaukee.com",206],["ontiva.com",206],["hideandseek.world",206],["myabandonware.com",206],["kendam.com",206],["wttw.com",206],["synonyms.com",206],["definitions.net",206],["hostmath.com",206],["camvideoshub.com",206],["minhaconexao.com.br",206],["home-made-videos.com",208],["pxrnxx.xyz",208],["amateur-couples.com",208],["slutdump.com",208],["produsat.com",210],["12thman.com",212],["acusports.com",212],["atlantic10.com",212],["auburntigers.com",212],["baylorbears.com",212],["bceagles.com",212],["bgsufalcons.com",212],["big12sports.com",212],["bigten.org",212],["bradleybraves.com",212],["butlersports.com",212],["cmumavericks.com",212],["conferenceusa.com",212],["cyclones.com",212],["dartmouthsports.com",212],["daytonflyers.com",212],["dbupatriots.com",212],["dbusports.com",212],["denverpioneers.com",212],["fduknights.com",212],["fgcuathletics.com",212],["fightinghawks.com",212],["fightingillini.com",212],["floridagators.com",212],["friars.com",212],["friscofighters.com",212],["gamecocksonline.com",212],["goarmywestpoint.com",212],["gobison.com",212],["goblueraiders.com",212],["gobobcats.com",212],["gocards.com",212],["gocreighton.com",212],["godeacs.com",212],["goexplorers.com",212],["goetbutigers.com",212],["gofrogs.com",212],["gogriffs.com",212],["gogriz.com",212],["golobos.com",212],["gomarquette.com",212],["gopack.com",212],["gophersports.com",212],["goprincetontigers.com",212],["gopsusports.com",212],["goracers.com",212],["goshockers.com",212],["goterriers.com",212],["gotigersgo.com",212],["gousfbulls.com",212],["govandals.com",212],["gowyo.com",212],["goxavier.com",212],["gozags.com",212],["gozips.com",212],["griffinathletics.com",212],["guhoyas.com",212],["gwusports.com",212],["hailstate.com",212],["hamptonpirates.com",212],["hawaiiathletics.com",212],["hokiesports.com",212],["huskers.com",212],["icgaels.com",212],["iuhoosiers.com",212],["jsugamecocksports.com",212],["longbeachstate.com",212],["loyolaramblers.com",212],["lrtrojans.com",212],["lsusports.net",212],["morrisvillemustangs.com",212],["msuspartans.com",212],["muleriderathletics.com",212],["mutigers.com",212],["navysports.com",212],["nevadawolfpack.com",212],["niuhuskies.com",212],["nkunorse.com",212],["nuhuskies.com",212],["nusports.com",212],["okstate.com",212],["olemisssports.com",212],["omavs.com",212],["ovcsports.com",212],["owlsports.com",212],["purduesports.com",212],["redstormsports.com",212],["richmondspiders.com",212],["sfajacks.com",212],["shupirates.com",212],["siusalukis.com",212],["smcgaels.com",212],["smumustangs.com",212],["soconsports.com",212],["soonersports.com",212],["themw.com",212],["tulsahurricane.com",212],["txst.com",212],["txstatebobcats.com",212],["ubbulls.com",212],["ucfknights.com",212],["ucirvinesports.com",212],["uconnhuskies.com",212],["uhcougars.com",212],["uicflames.com",212],["umterps.com",212],["uncwsports.com",212],["unipanthers.com",212],["unlvrebels.com",212],["uoflsports.com",212],["usdtoreros.com",212],["utahstateaggies.com",212],["utepathletics.com",212],["utrockets.com",212],["uvmathletics.com",212],["uwbadgers.com",212],["villanova.com",212],["wkusports.com",212],["wmubroncos.com",212],["woffordterriers.com",212],["1pack1goal.com",212],["bcuathletics.com",212],["bubraves.com",212],["goblackbears.com",212],["golightsgo.com",212],["gomcpanthers.com",212],["goutsa.com",212],["mercerbears.com",212],["pirateblue.com",212],["pirateblue.net",212],["pirateblue.org",212],["quinnipiacbobcats.com",212],["towsontigers.com",212],["tribeathletics.com",212],["tribeclub.com",212],["utepminermaniacs.com",212],["utepminers.com",212],["wkutickets.com",212],["aopathletics.org",212],["atlantichockeyonline.com",212],["bigsouthnetwork.com",212],["bigsouthsports.com",212],["chawomenshockey.com",212],["dbupatriots.org",212],["drakerelays.org",212],["ecac.org",212],["ecacsports.com",212],["emueagles.com",212],["emugameday.com",212],["gculopes.com",212],["godrakebulldog.com",212],["godrakebulldogs.com",212],["godrakebulldogs.net",212],["goeags.com",212],["goislander.com",212],["goislanders.com",212],["gojacks.com",212],["gomacsports.com",212],["gseagles.com",212],["hubison.com",212],["iowaconference.com",212],["ksuowls.com",212],["lonestarconference.org",212],["mascac.org",212],["midwestconference.org",212],["mountaineast.org",212],["niu-pack.com",212],["nulakers.ca",212],["oswegolakers.com",212],["ovcdigitalnetwork.com",212],["pacersports.com",212],["rmacsports.org",212],["rollrivers.com",212],["samfordsports.com",212],["uncpbraves.com",212],["usfdons.com",212],["wiacsports.com",212],["alaskananooks.com",212],["broncathleticfund.com",212],["cameronaggies.com",212],["columbiacougars.com",212],["etownbluejays.com",212],["gobadgers.ca",212],["golancers.ca",212],["gometrostate.com",212],["gothunderbirds.ca",212],["kentstatesports.com",212],["lehighsports.com",212],["lopers.com",212],["lycoathletics.com",212],["lycomingathletics.com",212],["maraudersports.com",212],["mauiinvitational.com",212],["msumavericks.com",212],["nauathletics.com",212],["nueagles.com",212],["nwusports.com",212],["oceanbreezenyc.org",212],["patriotathleticfund.com",212],["pittband.com",212],["principiaathletics.com",212],["roadrunnersathletics.com",212],["sidearmsocial.com",212],["snhupenmen.com",212],["stablerarena.com",212],["stoutbluedevils.com",212],["uwlathletics.com",212],["yumacs.com",212],["collegefootballplayoff.com",212],["csurams.com",212],["cubuffs.com",212],["gobearcats.com",212],["gohuskies.com",212],["mgoblue.com",212],["osubeavers.com",212],["pittsburghpanthers.com",212],["rolltide.com",212],["texassports.com",212],["thesundevils.com",212],["uclabruins.com",212],["wvuathletics.com",212],["wvusports.com",212],["arizonawildcats.com",212],["calbears.com",212],["cuse.com",212],["georgiadogs.com",212],["goducks.com",212],["goheels.com",212],["gostanford.com",212],["insidekstatesports.com",212],["insidekstatesports.info",212],["insidekstatesports.net",212],["insidekstatesports.org",212],["k-stateathletics.com",212],["k-statefootball.net",212],["k-statefootball.org",212],["k-statesports.com",212],["k-statesports.net",212],["k-statesports.org",212],["k-statewomenshoops.com",212],["k-statewomenshoops.net",212],["k-statewomenshoops.org",212],["kstateathletics.com",212],["kstatefootball.net",212],["kstatefootball.org",212],["kstatesports.com",212],["kstatewomenshoops.com",212],["kstatewomenshoops.net",212],["kstatewomenshoops.org",212],["ksuathletics.com",212],["ksusports.com",212],["scarletknights.com",212],["showdownforrelief.com",212],["syracusecrunch.com",212],["texastech.com",212],["theacc.com",212],["ukathletics.com",212],["usctrojans.com",212],["utahutes.com",212],["utsports.com",212],["wsucougars.com",212],["mangadods.com",212],["tricksplit.io",212],["fangraphs.com",213],["4players.de",[214,308]],["buffed.de",214],["gamesaktuell.de",214],["gamezone.de",214],["pcgames.de",214],["videogameszone.de",214],["planetaminecraft.com",215],["cravesandflames.com",216],["codesnse.com",216],["link.paid4file.com",216],["flyad.vip",216],["lapresse.ca",217],["kolyoom.com",218],["ilovephd.com",218],["negumo.com",219],["games.wkb.jp",[220,221]],["channelmyanmar.org",[222,223]],["u-s-news.com",223],["fandom.com",[224,527,528]],["kenshi.fandom.com",225],["hausbau-forum.de",226],["fake-it.ws",227],["laksa19.github.io",228],["1shortlink.com",229],["nesia.my.id",230],["makemoneywithurl.com",231],["junkyponk.com",231],["healthfirstweb.com",231],["vocalley.com",231],["yogablogfit.com",231],["en.financerites.com",231],["mythvista.com",231],["blogtechh.com",231],["host2loan.com",231],["resetoff.pl",232],["sexodi.com",232],["cdn77.org",233],["howtofixwindows.com",234],["3sexporn.com",235],["momxxxsex.com",235],["myfreevintageporn.com",235],["penisbuyutucum.net",235],["lightnovelworld.com",236],["ujszo.com",237],["newsmax.com",238],["bobs-tube.com",239],["nadidetarifler.com",240],["siz.tv",240],["suzylu.co.uk",[241,242]],["onworks.net",243],["yabiladi.com",243],["downloadsoft.net",244],["pixsera.net",245],["testlanguages.com",246],["newsinlevels.com",246],["videosinlevels.com",246],["cbs.com",247],["paramountplus.com",247],["ultimate-guitar.com",248],["teachmemicro.com",249],["willcycle.com",249],["2ndrun.tv",249],["rackusreads.com",249],["xyzsports111.xyz",[250,251,252]],["xyzsports112.xyz",[250,251,252]],["xyzsports113.xyz",[250,251,252]],["xyzsports114.xyz",[250,251,252]],["xyzsprtsfrmr1.site",[250,251,252]],["xyzsprtsfrmr2.site",[250,251,252]],["claimbits.net",253],["sexyscope.net",254],["recherche-ebook.fr",256],["easymc.io",256],["zonebourse.com",257],["botrix.live",258],["pink-sluts.net",259],["madoohd.com",260],["luckydice.net",261],["adarima.org",261],["tieutietkiem.com",261],["weatherwx.com",261],["sattaguess.com",261],["winshell.de",261],["rosasidan.ws",261],["modmakers.xyz",261],["gamepure.in",261],["warrenrahul.in",261],["austiblox.net",261],["upiapi.in",261],["myownguess.in",261],["networkhint.com",261],["watchhentai.net",261],["thichcode.net",261],["texturecan.com",261],["tikmate.app",[261,484]],["4funbox.com",262],["nephobox.com",262],["1024tera.com",262],["btcbitco.in",[263,264]],["btcsatoshi.net",263],["cempakajaya.com",263],["crypto4yu.com",263],["readbitcoin.org",263],["wiour.com",263],["finish.addurl.biz",263],["aiimgvlog.fun",[263,268]],["exactpay.online",263],["kiddyearner.com",263],["blog.cryptowidgets.net",264],["blog.insurancegold.in",264],["blog.wiki-topia.com",264],["blog.coinsvalue.net",264],["blog.cookinguide.net",264],["blog.freeoseocheck.com",264],["blog24.me",264],["rsadnetworkinfo.com",264],["rsinsuranceinfo.com",264],["rsfinanceinfo.com",264],["rsgamer.app",264],["rssoftwareinfo.com",264],["rshostinginfo.com",264],["rseducationinfo.com",264],["homeairquality.org",266],["faucettronn.click",266],["ticketmaster.sg",266],["bildirim.link",267],["appsbull.com",269],["diudemy.com",269],["maqal360.com",269],["sinonimos.de",[270,271]],["antonimos.de",[270,271]],["tiktokcounter.net",270],["tiktokrealtime.com",270],["quesignifi.ca",[270,272]],["lifesurance.info",273],["infokeeda.xyz",274],["arcai.com",275],["my-code4you.blogspot.com",276],["flickr.com",277],["firefile.cc",278],["pestleanalysis.com",278],["kochamjp.pl",278],["tutorialforlinux.com",278],["whatsaero.com",278],["animeblkom.net",[278,294]],["blkom.com",278],["globes.co.il",[279,280]],["jardiner-malin.fr",281],["tw-calc.net",282],["ohmybrush.com",283],["talkceltic.net",284],["mentalfloss.com",285],["uprafa.com",286],["cube365.net",287],["nightfallnews.com",[288,289]],["wwwfotografgotlin.blogspot.com",290],["freelistenonline.com",290],["badassdownloader.com",291],["quickporn.net",292],["yellowbridge.com",293],["aosmark.com",295],["atozmath.com",[297,298,299,300,301,302,303]],["newyorker.com",304],["brighteon.com",305],["more.tv",306],["video1tube.com",307],["alohatube.xyz",307],["fshost.me",309],["link.cgtips.org",310],["hentaicloud.com",311],["netfapx.com",313],["paperzonevn.com",314],["hentaienglish.com",315],["hentaiporno.xxx",315],["venge.io",[316,317]],["btcbux.io",318],["its.porn",[319,320]],["atv.at",321],["kusonime.com",[322,323]],["jetpunk.com",325],["imgur.com",326],["hentai-party.com",327],["hentaicomics.pro",327],["xxx-comics.pro",327],["genshinimpactcalculator.com",330],["mysexgames.com",331],["embed.indavideo.hu",334],["coinurl.net",[335,336]],["gdr-online.com",337],["mmm.dk",338],["iqiyi.com",[339,340,477]],["m.iqiyi.com",341],["japopav.tv",342],["lvturbo.com",342],["nbcolympics.com",343],["apkhex.com",344],["indiansexstories2.net",345],["issstories.xyz",345],["1340kbbr.com",346],["gorgeradio.com",346],["kduk.com",346],["kedoam.com",346],["kejoam.com",346],["kelaam.com",346],["khsn1230.com",346],["kjmx.rocks",346],["kloo.com",346],["klooam.com",346],["klykradio.com",346],["kmed.com",346],["kmnt.com",346],["kool991.com",346],["kpnw.com",346],["kppk983.com",346],["krktcountry.com",346],["ktee.com",346],["kwro.com",346],["kxbxfm.com",346],["thevalley.fm",346],["dsocker1234.blogspot.com",347],["blick.ch",348],["mgnet.xyz",349],["designtagebuch.de",350],["pixroute.com",351],["uploady.io",352],["calculator-online.net",353],["porngames.club",354],["sexgames.xxx",354],["111.90.159.132",355],["battleplan.news",355],["mobile-tracker-free.com",356],["pfps.gg",357],["ac-illust.com",[358,359]],["photo-ac.com",[358,359]],["vlxxs.net",360],["rapelust.com",360],["vtube.to",360],["vtplay.net",360],["desitelugusex.com",360],["xvideos-downloader.net",360],["xxxvideotube.net",360],["sdefx.cloud",360],["nozomi.la",360],["moviesonlinefree.net",360],["social-unlock.com",361],["ninja.io",362],["sourceforge.net",363],["samfirms.com",364],["banned.video",365],["conspiracyfact.info",365],["freeworldnews.tv",365],["madmaxworld.tv",365],["huffpost.com",366],["ingles.com",367],["spanishdict.com",367],["surfline.com",[368,369]],["play.tv3.ee",370],["play.tv3.lt",370],["play.tv3.lv",370],["tv3play.skaties.lv",370],["trendyoum.com",371],["bulbagarden.net",372],["moviestars.to",373],["hollywoodlife.com",374],["mat6tube.com",375],["textstudio.co",376],["newtumbl.com",377],["nevcoins.club",379],["mail.com",380],["oggi.it",[383,384]],["manoramamax.com",383],["video.gazzetta.it",[383,384]],["mangakita.id",385],["mangakita.net",385],["poscishd.online",386],["avpgalaxy.net",387],["mhma12.tech",388],["panda-novel.com",389],["zebranovel.com",389],["lightsnovel.com",389],["eaglesnovel.com",389],["pandasnovel.com",389],["panel.freemcserver.net",390],["zadfaucet.com",391],["ewrc-results.com",392],["kizi.com",393],["cyberscoop.com",394],["fedscoop.com",394],["canale.live",395],["mafiatown.pl",[396,397]],["jeep-cj.com",398],["sponsorhunter.com",399],["cloudcomputingtopics.net",400],["likecs.com",401],["tiscali.it",402],["linkspy.cc",403],["tutelehd3.xyz",404],["dirty.pink",[405,406,407]],["adshnk.com",408],["chattanoogan.com",409],["adsy.pw",410],["playstore.pw",410],["socialmediagirls.com",411],["windowspro.de",412],["snapinsta.app",413],["tvtv.ca",414],["tvtv.us",414],["mydaddy.cc",415],["roadtrippin.fr",416],["redketchup.io",[417,418,419]],["anyporn.com",[420,435]],["bravoporn.com",420],["bravoteens.com",420],["crocotube.com",420],["hellmoms.com",420],["hellporno.com",420],["sex3.com",420],["tubewolf.com",420],["xbabe.com",420],["xcum.com",420],["zedporn.com",420],["imagetotext.info",421],["infokik.com",422],["freepik.com",423],["ddwloclawek.pl",[424,425]],["deezer.com",426],["my-subs.co",427],["plaion.com",428],["slideshare.net",[429,430]],["ustreasuryyieldcurve.com",431],["businesssoftwarehere.com",432],["goo.st",432],["freevpshere.com",432],["softwaresolutionshere.com",432],["staige.tv",436],["androidadult.com",437],["streamvid.net",438],["watchtv24.com",439],["cellmapper.net",440],["medscape.com",441],["newscon.org",[442,443]],["arkadium.com",444],["app.blubank.com",445],["mobileweb.bankmellat.ir",445],["sportdeutschland.tv",446],["kcra.com",446],["wcvb.com",446],["ccthesims.com",448],["chromeready.com",448],["coursedrive.org",448],["dtbps3games.com",448],["illustratemagazine.com",448],["uknip.co.uk",448],["vod.pl",449],["megadrive-emulator.com",450],["animesaga.in",453],["moviesapi.club",453],["bestx.stream",453],["watchx.top",453],["digimanie.cz",454],["svethardware.cz",454],["srvy.ninja",455],["drawer-opportunity-i-243.site",456],["tchatche.com",457],["ozulmanga.com",458],["edmdls.com",459],["freshremix.net",459],["scenedl.org",459],["trakt.tv",[460,461,462]],["shroomers.app",463],["di.fm",[464,465,466]],["jazzradio.com",[464,465,466]],["pc-builds.com",467],["qtoptens.com",467],["reuters.com",467],["today.com",467],["videogamer.com",467],["wrestlinginc.com",467],["gbatemp.net",467],["techedubyte.com",468],["movie-th.tv",469],["iwanttfc.com",470],["nutraingredients-asia.com",471],["nutraingredients-latam.com",471],["nutraingredients-usa.com",471],["nutraingredients.com",471],["livesportsclub.me",472],["rogstream.fun",472],["ozulscansen.com",473],["fitnessbr.click",474],["minhareceita.xyz",474],["doomied.monster",475],["lookmovie2.to",475],["royalroad.com",476],["biletomat.pl",478],["hextank.io",[480,481]],["gofilmizle.com",[482,483]],["sagewater.com",485],["redlion.net",485],["satdl.com",486],["vidstreaming.xyz",487],["myradioonline.pl",488],["tacobell.com",490],["zefoy.com",491],["natgeotv.com",493],["br.de",494],["pasteboard.co",495],["clickhole.com",496],["deadspin.com",496],["gizmodo.com",496],["jalopnik.com",496],["jezebel.com",496],["kotaku.com",496],["lifehacker.com",496],["splinternews.com",496],["theinventory.com",496],["theonion.com",496],["theroot.com",496],["thetakeout.com",496],["pewresearch.org",496],["los40.com",[497,498]],["as.com",498],["telegraph.co.uk",[499,500]],["poweredbycovermore.com",[499,547]],["lumens.com",[499,547]],["verizon.com",501],["humanbenchmark.com",502],["politico.com",503],["officedepot.co.cr",[504,505]],["usnews.com",508],["factable.com",510],["zee5.com",511],["gala.fr",512],["geo.fr",512],["voici.fr",512],["gloucestershirelive.co.uk",513],["arsiv.mackolik.com",514],["jacksonguitars.com",515],["scandichotels.com",516],["stylist.co.uk",517],["nettiauto.com",518],["thaiairways.com",[519,520]],["cerbahealthcare.it",[521,522]],["futura-sciences.com",[521,537]],["tiendaenlinea.claro.com.ni",[523,524]],["tieba.baidu.com",525],["linktr.ee",526],["grasshopper.com",[529,530]],["epson.com.cn",[531,532]],["oe24.at",[533,534]],["szbz.de",533],["platform.autods.com",[535,536]],["wikihow.com",538],["citibank.com.sg",539],["uol.com.br",[540,541,542,543]],["gazzetta.gr",544],["digicol.dpm.org.cn",[545,546]],["virginmediatelevision.ie",548],["larazon.es",[549,550]],["waitrosecellar.com",[551,552,553]],["sharpen-free-design-generator.netlify.app",[555,556]],["help.cashctrl.com",[557,558]],["commande.rhinov.pro",[559,560]],["ecom.wixapps.net",[559,560]],["foxbusiness.com",[561,562]],["foxnews.com",[561,562]],["tipranks.com",[563,564]],["iceland.co.uk",[565,566,567]],["socket.pearsoned.com",568],["tntdrama.com",[569,570]],["mobile.de",[571,572]],["ioe.vn",[573,574]],["geiriadur.ac.uk",[573,577]],["bikeportland.org",[575,576]],["biologianet.com",[541,542,543]],["10play.com.au",[578,579]],["financemonk.net",580],["weather.com",[583,584]],["ubereats.com",[583,584]]]);

const entitiesMap = new Map([["watch-series",9],["watchseries",9],["vev",9],["vidop",9],["vidup",9],["starmusiq",12],["wcofun",12],["kissasian",14],["gogoanime",[14,19]],["1movies",[14,18]],["xmovies8",14],["animeheaven",14],["0123movies",14],["gostream",14],["gomovies",14],["hamsterix",15],["xhamster",15],["xhamster1",15],["xhamster10",15],["xhamster11",15],["xhamster12",15],["xhamster13",15],["xhamster14",15],["xhamster15",15],["xhamster16",15],["xhamster17",15],["xhamster18",15],["xhamster19",15],["xhamster20",15],["xhamster2",15],["xhamster3",15],["xhamster4",15],["xhamster42",15],["xhamster5",15],["xhamster7",15],["xhamster8",15],["primewire",16],["streanplay",[16,17]],["sbplay",16],["milfnut",16],["fmovies",19],["sxyprn",22],["hqq",[23,24]],["waaw",[24,25]],["younetu",24],["123link",26],["adshort",26],["linkshorts",26],["adsrt",26],["vinaurl",26],["adfloz",26],["dutchycorp",26],["shortearn",26],["pingit",26],["shrink",26],["tmearn",26],["megalink",26],["miniurl",26],["clk",26],["pureshort",26],["shrinke",26],["shrinkme",26],["pcprogramasymas",26],["link1s",26],["shortzzy",26],["shorttey",[26,206]],["lite-link",26],["adcorto",26],["zshort",26],["upfiles",26],["linkfly",26],["wplink",26],["seulink",26],["encurtalink",26],["camwhores",[27,40,91,92,93]],["tube8",[28,29]],["youporn",29],["redtube",29],["pornhub",[29,192]],["upornia",[31,32]],["xtits",[56,126]],["streamwish",[58,59]],["pouvideo",66],["povvideo",66],["povw1deo",66],["povwideo",66],["powv1deo",66],["powvibeo",66],["powvideo",66],["powvldeo",66],["acortalo",[71,72,73,74]],["acortar",[71,72,73,74]],["plyjam",[75,76]],["fxporn69",81],["vipbox",82],["viprow",82],["desbloqueador",87],["xberuang",89],["teknorizen",89],["subtorrents",97],["subtorrents1",97],["newpelis",97],["pelix",97],["allcalidad",97],["infomaniakos",97],["filecrypt",101],["tornadomovies",107],["sexwebvideo",108],["mangovideo",108],["icdrama",113],["mangasail",113],["file4go",115],["asianclub",132],["anitube",135],["mixdrop",137],["azsoft",147],["uploadev",162],["ver-pelis-online",171],["ancient-origins",179],["spankbang",199],["lookcam",206],["lootlinks",206],["dpstream",209],["bluemediafiles",211],["docer",232],["kickassanime",255],["doomovie-hd",260],["terabox",262],["ctrlv",296],["123movieshd",324],["uproxy",328],["animesa",329],["cinecalidad",[332,333]],["dvdplay",360],["apkmaven",378],["gmx",381],["gamereactor",434],["tvhay",[451,452]],["lookmovie",475],["lk21official",479],["www.google",489],["officedepot",[506,507]],["dropgalaxy",580]]);

const exceptionsMap = new Map([["pingit.com",[26]],["pingit.me",[26]],["lookmovie.studio",[475]]]);

/******************************************************************************/

function setConstant(
    ...args
) {
    setConstantFn(false, ...args);
}

function setConstantFn(
    trusted = false,
    chain = '',
    rawValue = ''
) {
    if ( chain === '' ) { return; }
    const safe = safeSelf();
    const logPrefix = safe.makeLogPrefix('set-constant', chain, rawValue);
    const extraArgs = safe.getExtraArgs(Array.from(arguments), 3);
    function setConstant(chain, rawValue) {
        const trappedProp = (( ) => {
            const pos = chain.lastIndexOf('.');
            if ( pos === -1 ) { return chain; }
            return chain.slice(pos+1);
        })();
        const cloakFunc = fn => {
            safe.Object_defineProperty(fn, 'name', { value: trappedProp });
            return new Proxy(fn, {
                defineProperty(target, prop) {
                    if ( prop !== 'toString' ) {
                        return Reflect.defineProperty(...arguments);
                    }
                    return true;
                },
                deleteProperty(target, prop) {
                    if ( prop !== 'toString' ) {
                        return Reflect.deleteProperty(...arguments);
                    }
                    return true;
                },
                get(target, prop) {
                    if ( prop === 'toString' ) {
                        return function() {
                            return `function ${trappedProp}() { [native code] }`;
                        }.bind(null);
                    }
                    return Reflect.get(...arguments);
                },
            });
        };
        if ( trappedProp === '' ) { return; }
        const thisScript = document.currentScript;
        let normalValue = validateConstantFn(trusted, rawValue);
        if ( rawValue === 'noopFunc' || rawValue === 'trueFunc' || rawValue === 'falseFunc' ) {
            normalValue = cloakFunc(normalValue);
        }
        let aborted = false;
        const mustAbort = function(v) {
            if ( trusted ) { return false; }
            if ( aborted ) { return true; }
            aborted =
                (v !== undefined && v !== null) &&
                (normalValue !== undefined && normalValue !== null) &&
                (typeof v !== typeof normalValue);
            if ( aborted ) {
                safe.uboLog(logPrefix, `Aborted because value set to ${v}`);
            }
            return aborted;
        };
        // https://github.com/uBlockOrigin/uBlock-issues/issues/156
        //   Support multiple trappers for the same property.
        const trapProp = function(owner, prop, configurable, handler) {
            if ( handler.init(configurable ? owner[prop] : normalValue) === false ) { return; }
            const odesc = safe.Object_getOwnPropertyDescriptor(owner, prop);
            let prevGetter, prevSetter;
            if ( odesc instanceof safe.Object ) {
                owner[prop] = normalValue;
                if ( odesc.get instanceof Function ) {
                    prevGetter = odesc.get;
                }
                if ( odesc.set instanceof Function ) {
                    prevSetter = odesc.set;
                }
            }
            try {
                safe.Object_defineProperty(owner, prop, {
                    configurable,
                    get() {
                        if ( prevGetter !== undefined ) {
                            prevGetter();
                        }
                        return handler.getter();
                    },
                    set(a) {
                        if ( prevSetter !== undefined ) {
                            prevSetter(a);
                        }
                        handler.setter(a);
                    }
                });
                safe.uboLog(logPrefix, 'Trap installed');
            } catch(ex) {
                safe.uboErr(logPrefix, ex);
            }
        };
        const trapChain = function(owner, chain) {
            const pos = chain.indexOf('.');
            if ( pos === -1 ) {
                trapProp(owner, chain, false, {
                    v: undefined,
                    init: function(v) {
                        if ( mustAbort(v) ) { return false; }
                        this.v = v;
                        return true;
                    },
                    getter: function() {
                        if ( document.currentScript === thisScript ) {
                            return this.v;
                        }
                        safe.uboLog(logPrefix, 'Property read');
                        return normalValue;
                    },
                    setter: function(a) {
                        if ( mustAbort(a) === false ) { return; }
                        normalValue = a;
                    }
                });
                return;
            }
            const prop = chain.slice(0, pos);
            const v = owner[prop];
            chain = chain.slice(pos + 1);
            if ( v instanceof safe.Object || typeof v === 'object' && v !== null ) {
                trapChain(v, chain);
                return;
            }
            trapProp(owner, prop, true, {
                v: undefined,
                init: function(v) {
                    this.v = v;
                    return true;
                },
                getter: function() {
                    return this.v;
                },
                setter: function(a) {
                    this.v = a;
                    if ( a instanceof safe.Object ) {
                        trapChain(a, chain);
                    }
                }
            });
        };
        trapChain(window, chain);
    }
    runAt(( ) => {
        setConstant(chain, rawValue);
    }, extraArgs.runAt);
}

function runAt(fn, when) {
    const intFromReadyState = state => {
        const targets = {
            'loading': 1,
            'interactive': 2, 'end': 2, '2': 2,
            'complete': 3, 'idle': 3, '3': 3,
        };
        const tokens = Array.isArray(state) ? state : [ state ];
        for ( const token of tokens ) {
            const prop = `${token}`;
            if ( targets.hasOwnProperty(prop) === false ) { continue; }
            return targets[prop];
        }
        return 0;
    };
    const runAt = intFromReadyState(when);
    if ( intFromReadyState(document.readyState) >= runAt ) {
        fn(); return;
    }
    const onStateChange = ( ) => {
        if ( intFromReadyState(document.readyState) < runAt ) { return; }
        fn();
        safe.removeEventListener.apply(document, args);
    };
    const safe = safeSelf();
    const args = [ 'readystatechange', onStateChange, { capture: true } ];
    safe.addEventListener.apply(document, args);
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
        'Object_fromEntries': Object.fromEntries.bind(Object),
        'Object_getOwnPropertyDescriptor': Object.getOwnPropertyDescriptor.bind(Object),
        'RegExp': self.RegExp,
        'RegExp_test': self.RegExp.prototype.test,
        'RegExp_exec': self.RegExp.prototype.exec,
        'Request_clone': self.Request.prototype.clone,
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
                return { matchAll: true };
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
    };
    scriptletGlobals.safeSelf = safe;
    if ( scriptletGlobals.bcSecret === undefined ) { return safe; }
    // This is executed only when the logger is opened
    const bc = new self.BroadcastChannel(scriptletGlobals.bcSecret);
    let bcBuffer = [];
    safe.logLevel = scriptletGlobals.logLevel || 1;
    safe.sendToLogger = (type, ...args) => {
        if ( args.length === 0 ) { return; }
        const text = `[${document.location.hostname || document.location.href}]${args.join(' ')}`;
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
    return safe;
}

function validateConstantFn(trusted, raw) {
    const safe = safeSelf();
    const extraArgs = safe.getExtraArgs(Array.from(arguments), 2);
    let value;
    if ( raw === 'undefined' ) {
        value = undefined;
    } else if ( raw === 'false' ) {
        value = false;
    } else if ( raw === 'true' ) {
        value = true;
    } else if ( raw === 'null' ) {
        value = null;
    } else if ( raw === "''" || raw === '' ) {
        value = '';
    } else if ( raw === '[]' || raw === 'emptyArr' ) {
        value = [];
    } else if ( raw === '{}' || raw === 'emptyObj' ) {
        value = {};
    } else if ( raw === 'noopFunc' ) {
        value = function(){};
    } else if ( raw === 'trueFunc' ) {
        value = function(){ return true; };
    } else if ( raw === 'falseFunc' ) {
        value = function(){ return false; };
    } else if ( /^-?\d+$/.test(raw) ) {
        value = parseInt(raw);
        if ( isNaN(raw) ) { return; }
        if ( Math.abs(raw) > 0x7FFF ) { return; }
    } else if ( trusted ) {
        if ( raw.startsWith('{') && raw.endsWith('}') ) {
            try { value = safe.JSON_parse(raw).value; } catch(ex) { return; }
        }
    } else {
        return;
    }
    if ( extraArgs.as !== undefined ) {
        if ( extraArgs.as === 'function' ) {
            return ( ) => value;
        } else if ( extraArgs.as === 'callback' ) {
            return ( ) => (( ) => value);
        } else if ( extraArgs.as === 'resolved' ) {
            return Promise.resolve(value);
        } else if ( extraArgs.as === 'rejected' ) {
            return Promise.reject(value);
        }
    }
    return value;
}

/******************************************************************************/

const hnParts = [];
try { hnParts.push(...document.location.hostname.split('.')); }
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
    try { setConstant(...argsList[i]); }
    catch(ex) {}
}
argsList.length = 0;

/******************************************************************************/

};
// End of code to inject

/******************************************************************************/

// Inject code

// https://bugzilla.mozilla.org/show_bug.cgi?id=1736575
//   'MAIN' world not yet supported in Firefox, so we inject the code into
//   'MAIN' ourself when environment in Firefox.

const targetWorld = 'MAIN';

// Not Firefox
if ( typeof wrappedJSObject !== 'object' || targetWorld === 'ISOLATED' ) {
    return uBOL_setConstant();
}

// Firefox
{
    const page = self.wrappedJSObject;
    let script, url;
    try {
        page.uBOL_setConstant = cloneInto([
            [ '(', uBOL_setConstant.toString(), ')();' ],
            { type: 'text/javascript; charset=utf-8' },
        ], self);
        const blob = new page.Blob(...page.uBOL_setConstant);
        url = page.URL.createObjectURL(blob);
        const doc = page.document;
        script = doc.createElement('script');
        script.async = false;
        script.src = url;
        (doc.head || doc.documentElement || doc).append(script);
    } catch (ex) {
        console.error(ex);
    }
    if ( url ) {
        if ( script ) { script.remove(); }
        page.URL.revokeObjectURL(url);
    }
    delete page.uBOL_setConstant;
}

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;

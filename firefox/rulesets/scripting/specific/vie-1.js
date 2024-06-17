/*******************************************************************************

    uBlock Origin Lite - a comprehensive, MV3-compliant content blocker
    Copyright (C) 2019-present Raymond Hill

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

'use strict';

// ruleset: vie-1

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssSpecificImports() {

/******************************************************************************/

const argsList = [".qc",".container > .row > center","[id^=\"Balloon_\"]","#banner-shopee,\ndiv[style^=\"position: fixed; bottom: 0px;\"]",".qx_135","#footer_fixed_ads",".ads-gg-top,\n.container + .col-xs-12.content_wrap,\n.content > .content > .content,\n.wrap-single > .pagination.text-center",".float-ck-center-lt","#custom_html-42","#popup-giua-man-hinh",".ad-container",".float-ck",".banner-sticky-footer-wrapper",".code-block-4",".sticky-footer",".ads-wrapper","#popup_banner_beta",".v4j-header > center",".w1e48c4420b7073bc11916c6c1de226bb","#f186fb23a33995d91ce3c2212189178c8","#quang-cao",".toogle-ads",".ads-container","#player + div[id]",".a-header,\n.apu,\n.header","#xs-addd0","#hide_float_right","#overlay",".adsMobile,\n.col-chat,\n.offer-rating.widget-offers__list",".dcmm-button-player.row",".offer__btn",".adLogoPlayer","#catfish",".wppopups-whole",".banner-top","#bottomFixedDiv,\n#js_pup_navigation,\n#wAdList,\ntr[id^=\"word_\"]",".jw-logo",".catfish-ck",".t_logo",".gnarty-offads","#fbox-background","#mobile-ads",".ads","a[href^=\"/cgi-bin/to.cgi\"]",".popup-container","#BaoMoi_HalfPage,\n.masthead-wrapper",".bm_B > div,\ndiv.bm_Ii",".monkey-content-duoicanbiet,\n.monkey-section-tinnoibat,\ndiv.monkey-qc",".list-dat-cuoc","div[id^=\"AdLayer\"],\ndiv[id^=\"ad_\"]",".widget.widget_text","a[rel=\"nofollow\"]","#text-14,\n.hocwp-ads",".bannerBox,\n.footerBanner,\ncenter > [href*=\"tlink.vn\"]",".mb-4 > [style=\"min-height: 350px;\"]",".fixed","a[rel=\"noopener noreferrer\"]",".widget-wrap.widget_text","#shoppe_aff_button",".adsbygoogle","#custom_html-7",".div_box_adv",".alldiv ~ div[class]","div.box-aside","[id$=\"bnr\"]",".ad-pin-right-bottom",".adv",".top-right",".line-ads","#home_header",".popup",".banner-ads,\ndiv#recent-content:nth-of-type(1)",".ad-manager-forum-list-bottom,\n.ad-manager-forum-list-top,\n.ad-manager-header,\n.ad-manager-thread-view-bottom,\n.ad-manager-thread-view-top,\ndiv[style=\"margin:6px 0px 6px 0px\"]",".google-auto-placed","#mobileCatfishz",".code-block","#topbanner",".btn_small_fix_container",".ads-home-feed",".left-slider",".text-center.adsense",".banner-bot-mobile,\n.banner-top-mobile",".preload","[href^=\"https://shope.ee\"]","#latest-censored-videos > .row > div.pb-3.col:nth-of-type(1),\n.v3sb-box",".cat-fish.a-play,\n.overlay",".anhbn-qc",".ezo_ad",".ezoic-ad",".advbox","div[style=\"padding: 0px; margin: 10px 0 0 0 ; width: 100%;text-align: center;min-height: 280px;\"],\ndiv[style=\"width: 100%; min-height: 240px; text-align: center;\"],\ndiv[style=\"width: 100%; min-height: 90px; text-align: center;\"],\ndiv[style=\"width: 100%;text-align: center;min-height: 280px;\"]","#link-view > center:nth-of-type(1)",".btn-odds",".btn-od",".footer-banner","div[id^=\"dnn_\"]",".d-lg-flex.d-none.p-0.company.flex-1.table","p[style=\"color: rgb(174, 174, 174); margin-top: 10px; margin-bottom: 20px;\"]","#countdown,\n.bottom_cnt_ad,\n.tp_ads_incontent,\ndiv.ad_separator",".movie-banner","#js-read-body > .text-center.pb-3,\n#js-read__body + .mt-3,\n.nh-read__alert,\n.tpm-unit,\n[href$=\"/goout/lazada\"],\nsection.nh-section:nth-of-type(5)","div[class*=\"ads\"]",".ads-embed",".mp-adz","#mp-adx-b32","[class^=\"box_adv_ele\"]","#tdi_129",".my-banner","#IMAPointernctPlayer,\n.adv_home_300_250,\n.nqc-zone","#itro_opaco","#ads_preload,\n.show.ads-sticky",".i9bet","#mobile_content_bottom,\n.BanerTop100,\n.adv-300-right",".popUpBannerBox","a[target=\"_blank\"][rel=\"nofollow noopener\"]","#mobile_content_top,\n#p-GMH",".box_option","#itro_popup",".ads-pc",".shadow-card + .mt-2","#adsposttop","#adrighttop",".adbox","#divExoLayerWrapper",".banner-catfish-bottom","#scriptDiv",".pc-catfixx",".pc_catfix_adv",".stream-item","#footer-widget-area",".box,\n.pum",".truct-catfish,\n.truct-widget",".banner","div#adsChapterTop","#ad_info_top","div#ad_info",".footer-info",".v4j-header.v4j-content",".ai-viewport-1","[class*=\"_banner\"]",".ads-menu-item,\n.dcmm-button-player-item,\n.divdatcuoc",".show-ads-banner,\n.widget","a[target=\"_blank\"][rel=\"dofollow\"]",".item-qc",".Header_topBanner__1xD-2,\n.styles_bannerInArticleWrapper__rPPJH,\n.styles_topBanner__NL_gW","#BigBanner,\n.ads_position",".ads_txt,\n[href=\"https://tailieugiaovien.com.vn/\"]","#download_appnew,\n.box-most-viewed.box-course.box-slide,\ndiv.ads_ads,\nh3.sub-title,\nul.list:nth-of-type(2)",".adx1","#ab_ctl,\n.bannerads","div[class^=\"adbox\"]","a.news__item--action:nth-of-type(2)","#article > .pt-3.text-centers,\n.text-muted","#balloon,\n.affiliate,\n.player-midpoint-progress",".banner-masthead",".button-action-float-banner","#myModal,\ndiv[id^=\"adsphim-\"]",".adsphim-mobile-popup",".wtt-ads","#ouibounce-modal","#adstop2,\n.ads-item,\n.col-lg-4.hidden-xs.d-flex.flex-column.address-wrap,\n.float-right",".adv-side-bar,\n.banner-adv-wrapper,\n.banner-adv-wrapper2,\n.item-qc1",".td-container > div.td-pb-row > .td-pb-span12,\n.td-container-wrap.td-logo-wrap-full.td-banner-wrap-full,\n.td-crumb-container,\n.td_block_template_1.tdi_11.td-g-rec-id-sidebar,\n.td_block_template_1.tdi_28.td-g-rec-id-custom_ad_1.td-g-rec,\n.td_block_template_1.tdi_30.td-g-rec-id-sidebar.td-g-rec,\n.td_block_template_1.tdi_4.td-g-rec-id-custom_ad_1.td-g-rec,\n.td_block_template_1.tdi_6.td-g-rec-id-sidebar.td-g-rec,\n.td_block_template_1.tdi_9.td-g-rec-id-custom_ad_1.td-g-rec",".Float_ads,\n.container_top[style=\"line-height:0;\"]",".code-block-8.code-block,\n.ez-video-wrap","#hide_catfish","#container-ads",".underplayer_btn","#invideo_wrapper,\n.Ads,\n.mobile-catfixx",".active.bg-overlay",".btn-bet,\n.g-imgbot,\n.g-imgtop,\n.link2.group-link,\n.top-main > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)",".v4j-watch-1.v4j-content,\nbody > div[class]",".ff-banner","a[rel=\"nofollow sponsored\"]","#antiblocker,\n#antiblocker_underplayer","[onclick^=\"__a.hide\"]",".entry > a[target=\"_blank\"],\n.single-content > a[target=\"_blank\"],\n.wpbcap-laptopvang,\n[href*=\"hnmac.vn\"],\n[href*=\"laptopvang.com\"],\n[href*=\"macbookgiasi.vn\"],\n[href*=\"macone.vn\"],\n[href*=\"minhtuanmobile.com\"],\n[href*=\"vender.vn\"],\ndiv.\\35 fb1ed6025b0b.widget:nth-of-type(3)",".header-fix-ads,\n.lepopup-popup-container,\n.lepopup-popup-overlay","#bar_float_r,\n.quangcaomb",".modal-backdrop.show","#m-bet","div[class*=\"size-\"]",".ibs-bet","#app-web + .container[style=\"margin-bottom: 30px\"],\n.item.item-betnow,\n.sv-link.btn-bet-top,\n[href^=\"/goto\"]",".fade.show","#menu-main-menu > .menu-bongdainfo.menu-item.nav-item.tt-bdif,\n#menu-main-menu > .menu-nha-cai-uy-tin.menu-item.nav-item.style-2 > .nav-link,\n.c-int.d-lg-none.d-block,\n.col-xl-4,\n.container > .row > .col-12,\n.d-lg-none.d-block.p-1.text-center,\n.justify-content-center.d-flex > .btn-primary.btn,\n.matches__item--footer,\n.mt-1.d-lg-flex.d-none.sub-menu,\na.d-lg-none.d-block:nth-of-type(2)","#quangcaopc","#wap_bottombanner",".marquee-container","#match-child-1",".match-detail__offer",".company",".menu-cuoc-8xbet",".sticky",".btn-betting",".datCuocBTN,\n.modelAds,\n.nhacaiuytin,\n.text-running",".container-banner,\n.modal-ads,\ndiv[class^=\"slide-bar\"]",".hide-desk.footer-banner,\n.modelAds.modal-ads,\n.nhacaiuytin.after.top-btnpage",".container.mt-1.d-none.d-lg-block,\n.menu-item-object-custom,\na.rlw-extra-i.py-3.flex-grow-1",".align-items-center.justify-content-between.d-flex.col-12 > .d-lg-none.d-block",".sub-menu.d-none.d-lg-flex",".btn-bottom-right-append-player,\n.images-bnr-bellow-append-custom,\n.images-top-pl",".footer-button-sign-in.hide-desk,\n.hide-desk.wrap-content > .wrap-btn-action,\n.menu-right-slide",".sk_balloon",".btno-group.d-none.d-lg-flex,\n.container > .mt-1,\n.container > .mt-3,\n.d-lg-block,\n.justify-content-between.d-lg-none.d-flex.btno-group,\n.topButton,\n.widget_offer,\nheader > .container",".banner-link,\n.block-catfish.text-center.d-lg-none.d-block,\n.container > ul,\n.container.mt-1,\n.logo-cnt > .d-lg-none.d-block,\n.menu-cuoc-one88,\n.mt-5.d-lg-none.d-block.pb-2.text-center,\n.offer,\n.pl-lg-0.col-xl-4,\n.row.d-none,\n.widget-offers__list,\ndiv.d-lg-none.d-block:nth-of-type(3)",".menu-top-nha-cai",".grid-match__footer,\na.d-lg-none.d-block:nth-of-type(1)","#qc_clgt",".advertisement","#layerLogo","#backgroundPopupp,\n#popupContact",".black-layout > div:nth-child(2),\n.popup_u,\ndiv[style^=\"position: absolute;top: 0;\"]","div#bnads","div[id^=\"float\"],\ndiv[id^=\"hide_float\"]","#iklan-atas-wrapper",".parent.special,\n.partner-me",".ad-floater,\n.popunder-link,\n.promotion-popup,\n.video-ad-layer",".box_odds",".banners",".banner_list,\n.item-more,\n.nc_sidebar_home,\n.widget-sidebar-block",".body_wrapper1",".detail-odd-title,\n.div-ad-allpage-top,\ndiv[id^=\"div-ad-list-\"]","[href=\"https://8xbe52.com\"]",".a--d-wrapper",".bbMediaWrapper-inner > .samCodeUnit,\n.js-replyNewMessageContainer.block-body > div.samCodeUnit > .samItem,\n.p-footer,\n.samVideoOverlay",".catfish-bottom","#adx,\n.banner-preload,\n.catfish-top,\ndiv.banner-catfish-bottom",".btm_bar",".catfix",".popup-overlay",".baloon,\n.col-sm-10.kqcenter,\n.kqbackground.vien ~ a[target=\"_blank\"]",".no-auto-popup","#menubentrai,\n.gnartyx-offads",".btn-bet-top,\n.item-betnow",".box-host","[href*=\"cellphones.com.vn\"]",".textwidget",".container > div[style^=\"height: 228px\"]",".oddsCompany","#right_float,\n[id$=\"float_banner\"]","#pc-preload-modal,\n#popup",".in.fade.modal-backdrop",".link-gold,\n[id^=\"banner\"]",".MuiDialog-container,\n.MuiDialog-root,\n.MuiModal-backdrop,\n.css-ylxsn9.MuiStack-root,\n.vjs-banner-btn,\ndiv.css-m49bkq.MuiStack-root > a","#ad_global_below_navbar",".ads-nlp",".b-player",".pum-overlay",".hd-tube-desktop,\n.hd-tube-mobile","#qc-kpgame",".info-footer:nth-child(4)",".mobile-catfix",".banner_top","#IMAGE635 > .ladi-transition.ladi-image,\n#IMAGE639 > .ladi-transition.ladi-image,\n#POPUP648,\n.backdrop-popup","#pc-catfix,\n.lightbox-player-pc,\ndiv[id^=\"preload-\"]","#banner-top-mobile,\n#pc-top-banner,\n#quang-cao-2",".pc-catfix,\nmobile-catfix","#pm_quangcao","#catfish-banner,\n.center-screen.backdrop,\n.ibetlogo,\n.topless",".boxzilla-bottom-right-container,\n[href^=\"https://gotrackecom.info\"]",".quangcaomobile",".adspopupgiua,\n.adspopupleft,\n.adspopupright,\n.float-ckgiua","#wap_bottombannerr,\n.grid-match[style]",".ads-floatingads,\n.banner-item,\n.top-nha-cai","#ad_balloon",".adpia_banner",".btn-top.btnz,\n.grid-match__footer > a.btn:nth-child(3),\n.mct_-bet-bot,\n.mmo,\n.mmo-inner,\n.modal",".show.fade",".fixed-bottom,\n.popup-banners",".sbAdv","#adsTopInPageBanner,\n.adsContainer,\n.header__auth > .details__devices-list",".elementor-widget-image",".box-rating","#ads_large_detail,\n#banner_top,\n#box_qua_tang_vne,\n#raovat,\n#sis_popup,\n#supper_masthead,\n.article_ads,\n.article_ads_300x250,\n.banner_mobile_300x250,\n.section_ads_300x250","div[class*=\"qca\"]",".content_middle_rightbar","#ds_top,\n.hidden-md.right.col-3,\nbody > .container > div","#ad-floating-right,\n.ad-floating-left","#sponsor-balloon,\n#top-banner-pc","#top_oddd","[href^=\"https://www.toprevenuegate.com/q7rbxxz1v\"]","#popup_fi","#idAdLink",".BT-Ads,\n.qc-inner,\ndiv.qc_TC_Chap_Middle,\ndiv[id^=\"qc_M_\"]",".PanelScroller.Notices",".expand-static-banner,\n.preload-banner,\n.static-banner",".adv_phim,\n.fixed_bottom",".sda-catfish","#adspm4u",".js-editors-choice-slider.editors-choice-slider > .adsbygoogle",".btn-betnow,\n.ft-box,\ndiv.vebo-sp.container:nth-of-type(7)",".xx-ads",".bet-btn-8423,\n.btn_betnow_632132,\n.highlight,\n.images-bnr,\n.images_fixed",".show.modal",".v4j-header > a[target=\"_blank\"]",".sticky_bottom","#tut4ktream_idAdLink","div[style^=\"position:fixed;inset:0px;z-index:100000;\"]","#video_player ~ div[id]","#mp-preload-popup-overlay",".separator",".cash-fish,\n.cash-fish-pc,\n.preload-pc,\n.top-mobile-banner,\n.under-player-pc-banner",".quang-cao","#video_player + div[id]","body > [style*=\"position: fixed;\"]",".footer-fixed-br-container",".bg-black.w-full.items-center > .relative.px-2.flex","#AgeModal",".sdzhead",".banner-catfish-bottomd","div[data-value=\"1\"]","[data-clm=\"ccccc2\"],\n[data-id=\"ap3poapup\"]",".navbar-ex8-collapse","#bnc1","#bnc0","#sticky","._9xtpcl.c4je67d.c1qs0lzc.c1hrlkpu.cc2icwl.c1i0iccj.cfd18df,\n._9xtpcl.e1e6v8dt,\n.blbew80,\n.llnefd1,\n.lpp0nsn,\n.luq51lg.a13wihj,\n.pointer-events-auto.block,\n.zbgpvb19.zbgpvb16.zbgpvbj.zbgpvbh.zbgpvbg.zbgpvbf.zbgpvbe.zbgpvb1","#header-ads,\n.catfish-img","#ad-container,\n.uniad-player + div[style]",".classvi,\n.elementor-section-height-default.elementor-section-boxed.elementor-element-e601265.elementor-element.elementor-top-section.elementor-section","#adsbottom,\n.happy-under-player,\n.vailo-sticky,\n.vailo-under-navbar,\n.vailo-under-navbar-mobile","#position_full_top_banner_pc",".gc-header__wrapper + div[style]",".button-dangkyngay",".afw-topbanner","#adm-slot-7234","#banner3double","div[id^=\"adsWeb\"]",".bgadmtoptotal",".bannertop",".top-right-col-ads",".my_responsive_add,\n.titleBar + *,\n[class1=\"my_responsive_add\"]","#background_bg_link,\n#div_inpage_banner,\n#div_inpage_banner_after,\n#div_inpage_banner_open,\n#subRightAbove,\n#subRightAboveHome,\n.adv-24h-mid,\n.boxbannerinfeed-kh,\n.fixad300x600,\n.lady,\n.module3,\n[id^=\"ADS_\"]",".admicro",".top-header",".top_page","#subiz_wrapper,\n.ad-embed",".features-r","#bannerMasthead,\n#desktop-home-top-page,\n#mobile-home-middle-1,\n#mobile-home-middle-2,\n#mobile-home-top-page,\n#mobile-top-page","#banner-add-lixi88,\n.banner-home","#\\37 290,\n#\\38 893,\n#ke0v7etz,\n#kizq4u4r,\n#kjb6n9uy,\n#lnm1eu57,\n#lpr54voy,\n.ads-top,\n.top-advertisment","#topbn","#Adsv,\n.right-banner > a[title]",".__ads_click","#neo-right-ads","#BannerAdv","#gallery-2,\n.hd-cate-wrap,\n.home-qc-wrap,\n.home-sec-right .widget_media_image,\n.noname-left",".chapter-content .min-h-\\[275px\\]",".Advs_adv-components__1nBNS.Advs_adv-300x250__2eyhC.Advs_no-content__RWwW2,\n.HotTagGlobal_fixed-height__1f50i",".exp_qc_share",".c-banner",".bg-gray,\n.sidebar > div[style]","div[id^=\"adsbg\"]",".banrpstn","#myElementz,\n.bannerinfooter",".LRBanner",".bg_allpopupss,\n.bgal_popndungalal,\n.bn1,\n.bn2,\n.box_quangcao_mobile_320x50,\n.box_text_qc,\ndiv.news-left-related:nth-of-type(2)","#tubia","[id^=\"admzone\"]",".khw-ads-wrapper.clearfix",".banner-bottom-menu,\n.popup-bg,\n.showpop,\n[href*=\"bit.ly\"]",".background-blur,\n.qc-benphai,\n.qc-bentrai","#adrightsecondx,\n#adrightspecial,\n#adrightspeciallinks,\n#adsrighttop,\n#adsuggestion",".advertTop,\n.module_plugins",".ads-sponsor,\n.khw-adk14-wrapper",".top-banner-mobile","[id^=\"adv\"]",".quang_cao_pc_right_hoc_tap",".ads_shortcode",".admicro_top","#adop_bfd,\nins[class*=\"adsby\"]",".sponsor-zone","div[id^=\"ads_\"]","#top-adv",".bannerchuyenmuc,\n.show-qc-home,\n.show_qc","#popup_center","div[style=\"text-align:center;margin-top:0px;margin-bottom:0px;\"]",".box-banner","div[class^=\"adv-\"]",".ads-970x280","#pc-top-container,\n.align-items-center.justify-content-between.d-flex.text-center.bg-grey-6.w-100,\n.d-flex.justify-content-between > div > div.d-flex.justify-content-around.mt-4,\n.top-ads-16x9","#myCarousel,\n.banner-boder-zoom","#adm-slot-7299",".asd-headt,\n.detail__foru,\n.mb-40.section__qadd,\n.super-masthead,\n.top-banner,\n[class*=\"box-home\"],\n[data-marked-zoneid=\"tn_detail_danhchoban\"],\n[data-marked-zoneid=\"tn_detail_quantam\"],\n[id^=\"dablewidget_\"],\nzone","div[class$=\"_ads\"]",".zone-top",".c-banner-item","div[id^=\"adsMobile\"]",".fyi",".ads-common-box",".p-body-pageContent > table[style=\"width:100%;display:inline-block;background: #fff;\"]",".jsx-3569995709,\n.micro,\n.middle-comment-promotion,\n.pro-container,\ndiv[style=\"width:300px;height:250px\"],\ndiv[style=\"width:300px;height:600px\"],\ndiv[style=\"width:320px;height:100px\"]","#main-videoplayer,\n#pc-top,\n.ads-position",".container .desktopjszone,\n.mobilejszone","#header-ads-full,\n#shoppe_ads_fly,\n.ads-responsive,\n[id^=\"ads-\"]","#LeaderBoardTop,\n#admbackground,\n#adsMainFooter,\n.Mobile_Masthead_TTO_Wrapper,\n.adm-bot,\n.box-qad,\n.content-amuasam,\n.detail__qc,\n.section__r-vietlot,\n.wrapper-ads-mb",".clearfix.adregion,\n.visible-md.header-banners","[class^=\"sticky-top\"],\n[href*=\"vietcombank.com.vn\"]",".Flagrow-Ads-under-header","#closeAds",".vfs_banner","#vmcad_sponsor_middle_content,\n.box-adv,\n.mb-20.col-right-ads,\n.vmcadszone","section.mar20:nth-of-type(2),\nsection.mar20:nth-of-type(4)","#banner-dai-bottom,\n#banner-dai-top",".banner_site,\n.notify_auto,\n.sidebar_box_gray",".adsbypubpower,\n.p-body-pageContent > .adsbypubpower,\n.structItemContainer > .adsbypubpower,\n.v-element > .v-responsive,\ndiv.message--post",".sys-ads",".bf-3-primary-column-size.bs-vc-sidebar-column.vc_col-sm-3.vc_column_container.bs-vc-column.wpb_column > .wpb_wrapper.bs-vc-wrapper",".wrapper-adv","#banner1ab",".ad_by_yellowpages,\n.banner_add","#Zingnews_SiteHeader,\n.znews-banner","#vbplayer + div[class][style],\n.jw-button-image,\n.jw-media > div[style^=\"max-height:5%;\"]",".ad-botton,\n.topbanner","#ads_location,\n.block.ad",".odds-button,\n.odds-button2",".banner-bottom-append-custom,\n.button-in-player-box,\n.logo-top-right-append-custom","#banner_preload,\n.doc-truyen-ads-d1,\n.doc-truyen-ads-d2","li.special.parent"];

const hostnamesMap = new Map([["*",0],["keonhacai5.bid",[1,2]],["xemtivingon.org",2],["animehay.bio",3],["hentaivn.bio",4],["bichill.biz",5],["dongchill.co",[5,25]],["phimmoi.cx",[5,10,165,166]],["dongphim3s.info",[5,27,173]],["vivuphim.info",[5,42,113]],["phim18xxx.net",[5,7,36,256]],["tamlinh247.biz",6],["cliphot69.blog",[7,8]],["gvnvh18.com",7],["topviet69.com",7],["xem14.com",[7,159]],["mobiblog.cyou",7],["sayhentai.life",7],["hh3dhay.lol",[7,210]],["xemphim.me",[7,224]],["viet69.mx",[7,230]],["cliphotvn.one",7],["ffmovie.online",[7,11,281]],["phimvuihd.org",7],["hh3dhay.pro",7],["phevkl.sex",[7,300,301]],["3dchill.shop",7],["vutruphim.tv",[7,316]],["247phim.cc",[9,10,11]],["anivn.club",[9,20]],["boctem.com",9],["tvhay26.com",9],["movies.vkoolz.com",[9,11,103]],["motphim.li",[9,32]],["vuaphimmoi7.net",[9,11]],["hoathinhtq.site",[9,32]],["dragonphim.tv",[9,32]],["hhh3d.tv",[9,32]],["vungtv.us",[9,11,166]],["hh3d1.xyz",[9,32]],["www.phimmoichilla.xyz",[9,10]],["xemphimchill.xyz",[9,10,32,113]],["ephoto360.com",[10,68]],["hotphimvn.com",10],["thiepmung.com",10],["phimmoi2024.net",[10,32]],["motphimchill.online",10],["ophimhd.vip",[10,103,319]],["checkgaigoi6.cc",11],["sexvn1.cc",[11,13]],["kenhgamez.co",11],["dailyphimz.com",11],["phimplay24h.com",[11,117]],["rphang.meme",[11,225]],["gunnylau360.net",11],["gunnymienphi.net",11],["mythethao.net",[11,253]],["phim.vkool3.net",[11,27,37,273]],["vuonhoalan.net",[11,276]],["sieudamtv.site",[11,241,303]],["phim33.tv",[11,311]],["phim18vip.vip",11],["phimno4.xyz",[11,415]],["biphims.cc",12],["lxmanga.cfd",[14,15]],["phimyeuthichb.com",14],["truyensextv.com",14],["chillhaytv.click",16],["phimtho.net",16],["mphim14.org",[16,287]],["phimmoinay.vip",[16,288]],["soikeoz.vip",[16,219]],["protruyen4.xyz",[16,27]],["javhay.click",17],["hd.viet69.click",[18,19]],["sexheovl.com",[18,19]],["sexvip1z.com",[18,19]],["sex.heovl.online",[18,19,249]],["sexvietz.co",19],["javhdvn.net",[19,249]],["javhd.social",[19,249]],["sex.vlxx.studio",[19,249]],["javhd.tech",[19,308]],["heovktgame.club",21],["ketqua247vn.club",22],["keoso.me",[22,219,220]],["quat2vn.club",23],["abysscdn.com",[23,36]],["freeplayervideo.com",[23,36]],["player-cdn.com",[23,36]],["geoip.redirect-ads.com",[23,36]],["truyen18.club",24],["subnhanh.cx",[25,27,167]],["subnhanhvl.net",[25,27]],["subnhanh.today",[25,27]],["nongcuc.co",26],["tructiepdabong5.co",[27,28,29,30,31]],["biphim.online",[27,51,167,280]],["xoivo2.online",[29,31,141]],["xoilac86x5.live",[30,51,95,186,187,188,189,190,191,192,200,203,205,206]],["truyenhentaivn.co",[32,33]],["hhtq3d.com",[32,76]],["hoathinh3dtq.com",32],["phimbocn.com",32],["phimhoathinh3d.com",32],["motchilltv.ink",[32,103]],["hhtqnet.me",[32,218]],["hoathinh4k.net",[32,246]],["motchill7.net",32],["hhchina.one",[32,278,279]],["hhtqvietsub.top",[32,218,279]],["hhninja4.tv",32],["hhtm.tv",32],["animeweb.vip",[32,76]],["hhtq7.vip",[32,76,218,318]],["hhtrungquoc.vip",[32,76]],["123nhadatviet.com",34],["123nhadatviet.net",34],["tuoitre.vn",[34,396]],["tuoitrenews.vn",34],["live.7mvn2.com",35],["api.anime3s.com",[36,38]],["animevietsub.dev",[36,126,168]],["live.xoilac26.org",[36,180,181,182,184,235,291]],["xem.bdhub.xyz",[36,413]],["bitvtom1000.xyz",36],["watch.rkplayer.xyz",[36,417]],["ahaphimz.com",37],["vphims.net",37],["phimvietsub.pro",[38,296]],["subnhanh.xyz",[38,40,103,296]],["animetvn4.com",[39,40,41]],["animet1.net",[39,40,233]],["appvn.com",42],["doctailieu.com",42],["javtopxx.com",[42,85]],["linkerpt.com",42],["ghienphim.me",[42,132,216,217]],["vlxx.mobi",[42,172,226,227]],["soikeo365.net",[42,264]],["cungthi.online",[42,59]],["antt.vn",42],["bongda24h.vn",42],["kienthuc.net.vn",[42,372]],["nghenhinvietnam.vn",42],["nhadautu.vn",42],["saostar.vn",42],["v.xemphimviet.xyz",[42,132,217,419]],["asianbookie.com",43],["asideway.com",44],["baomoi.com",45],["m.baomoi.com",46],["baonga.com",47],["bongda12h365.com",48],["thethao12h.me",[48,222]],["www.bongdalu688.com",49],["canhrau.com",50],["topthuthuat.com",50],["chatboxn.com",51],["phimmoi4s.com",[51,116]],["xem.tructiepnba.com",[51,131]],["xemtivi4k.com",[51,160]],["vebox7.live",[51,92,94,95,186,187,188,191,199,204]],["3ketqua.net",[51,231]],["abtruyen.net",[51,232]],["damconuong.net",[51,126]],["truyenchu.com.vn",[51,348]],["nghean24h.vn",51],["vidian.vn",[51,400]],["vbfast.xyz",51],["chouc.com",52],["www.clbgamesvn.com",53],["congthucvatly.com",[54,55]],["phuongtrinhhoahoc.com",[55,119]],["phimhaytv.info",55],["contuhoc.com",56],["www5.cbox.ws",56],["cryptoviet.com",57],["cunghocvui.com",58],["custommapposter.com",59],["giavang.net",59],["romgoc.net",59],["dexuat.com",60],["diadiem.com",61],["xx.ditnhauvietnam.com",62],["javhdvip.net",62],["doisongphapluat.com",63],["dualeotruyenbot.com",64],["dubaotiente.com",[65,66]],["bongda.com.vn",[66,336]],["giadinhonline.vn",[66,350]],["taichinhdoanhnghiep.net.vn",[66,132]],["nongnghiep.vn",[66,350]],["vietnamnet.vn",[66,402]],["ebookbkmt.com",67],["fsharetv.com",69],["fullcliphot.com",[70,71]],["home.mannhan3.pro",[70,293]],["forum.gocmod.com",[72,73]],["www.tiengnhatdongian.com",73],["ycongnghe.com",[73,162]],["gocphimtvi.com",[74,75]],["kapciuszek.pl",75],["truyensieuhay.com",[76,136]],["hoahoc247.com",77],["hoidap247.com",78],["homedy.com",79],["hotruyen1.com",80],["huphimtv.com",[81,82]],["sexviet1.top",82],["www.iosviet.com",83],["javtiful.com",84],["lacaigi.com",86],["laptrinhcanban.com",[87,88]],["yhocdata.com",[88,164]],["lichngaytot.com",89],["lichvannien365.com",90],["link1s.com",91],["lmgcorporate.com",[92,93,94,95,96]],["rakhoix5.live",[92,94,191,203]],["xoilacz15.live",[92,96,187,190,192,206,207]],["live.thapcam7.net",[92,169,179,180,267,268]],["tructiep.caheo8.live",[94,193,194,195,196]],["tructiep1.cakhia23.live",[94,193,194,195,196]],["tructiep12.cakhia24.live",[94,193,194,195,196]],["tructiep11.rakhoi6.live",[94,193,194,195,202]],["cakhiam4.live",[95,179,184,186,187,188,191,198,199,200]],["lmssplus.com",97],["loigiaihay.com",98],["mephintv.com",99],["metruyencv.com",100],["metruyencv.info",100],["metruyencv.net",100],["mmo4me.com",101],["baodauthau.vn",[101,328]],["motchillil.com",102],["motphimtvv.com",103],["www.mp.com",[103,104]],["phimmoila.net",103],["muabanraovat.com",105],["muaxegiatot.com",106],["nettruyenx.com",107],["nhaccuatui.com",108],["phim202.com",109],["phimcuon.com",110],["phimdinhcao.com",[111,112,113]],["phimdinhcao.net",[111,112,113]],["phimlongtieng.net",[111,112,113,115]],["phimhaymoii.com",114],["phimlongtieng.com",115],["phimss.com",118],["quantrimang.com",[120,121,122]],["hoatieu.vn",[120,150,193,363]],["vndoc.com",[122,150]],["khoahoc.tv",122],["download.com.vn",122],["download.vn",[122,159,353]],["gamevui.vn",122],["xem.sex-sub.com",[123,124]],["vl.phe.to",[123,309]],["sieutamphim.com",125],["thongtintruyen.com",[126,127]],["thuthuatjb.com",128],["thuthuattienich.com",129],["toithuthuat.com",130],["truyengihotnay.com",[132,133]],["truyengihotnha.com",[132,133]],["truyengihotqua.com",[132,133]],["tenmientruyengi.net",[132,133]],["thichxemphim1.net",[132,269]],["truyengihotdo.net",[132,133]],["truyengihotnha.net",[132,133]],["truyengihotqua.net",[132,133]],["truyengihotzay.net",[132,133]],["megalink.pro",132],["baoxaydung.com.vn",132],["oj.husc.edu.vn",132],["tienphong.vn",[132,328,388,389]],["toquoc.vn",132],["truyenqqviet.com",[134,135]],["truyenqqvn.com",134],["tuoi69s.com",137],["tvhaiss.com",138],["tvso1.com",139],["bongdaso66.net",[139,240]],["blog.abit.vn",[139,179,268,324]],["vaoroi365.com",[140,141]],["vatlypt.com",142],["vesotantai.com",143],["vietcetera.com",144],["vietgiaitri.com",145],["vietjack.com",146],["www.vietjack.com",147],["vlxxhot.com",[148,149]],["vailonxx.vip",[149,321]],["vsc43.com",151],["vtruyen.com",152],["vuighe3.com",[153,154]],["xem1080.com",154],["webhoctienganh.com",155],["webphim6.com",[156,157]],["cdnwp.icu",156],["luotphim1.net",156],["webtretho.com",158],["xosodaiphat.com",161],["yeah1.com",163],["phimhdcc.net",166],["xoilacz.dev",[169,170]],["sexsub.guru",171],["phim1080.in",172],["hayghevietsub.info",174],["xem.javkche.info",175],["maclife.io",176],["tapchibitcoin.io",177],["tuoi69.lgbt",178],["live2.90phut24.live",[179,180,181,182,183,184]],["noitu.pro",[179,294]],["tructiep2.banhkhuc5.net",[180,181,182,184,234,235]],["live.vebo18.net",[180,181,182,184,234,235]],["vebo4.net",[180,181,182,184,234,235]],["90phutm4.live",[185,186,187,188,189,190,191,192]],["phym18.lol",[187,211,212]],["bongdainfov.net",[187,239]],["avvietsub.one",[187,211,277]],["nhentaivn.online",[187,211,282]],["xemtv.tvhayhd.tv",[187,313]],["phimsexsub.xyz",187],["tructiep36.cakhia24.live",[194,197]],["mn.mediastation.live",201],["anime47.lol",[208,209]],["doctruyen3qx.pro",209],["www.toptruyenx.pro",209],["socolivebongda.net",[211,263]],["vn.phym18.lol",213],["chotlo247.me",214],["www.gaingon18.me",215],["bongda365.news",219],["ngaytho.me",221],["chat.vebotv.me",223],["mephimnhe1.net",[224,252]],["sextop1x.net",226],["phimtuoitho.tv",226],["play.anh.moe",228],["heo69.moe",229],["sexphimhd.vip",229],["bantincongnghe.net",236],["blogkiienthuc.net",237],["bluphim.net",238],["sex.chichnhau.net",[241,242]],["chodansinh.net",243],["xem19.gavang1.net",244],["xem20.gavang1.net",244],["gockhuat.net",245],["vn.javbabe.net",247],["javfc2.net",248],["javhd.shop",249],["khiphach.net",250],["linkneverdie.net",251],["ophimhdvn3.net",[252,255]],["phimgichill.net",[252,255,257]],["vnesports.vn",[253,405]],["www.o-study.net",254],["phimmoichillu.net",258],["phimnhua.net",259],["sachmoi.net",260],["sexgai69.net",261],["sexdacbietv.pro",261],["sexhay88.vip",261],["sieukhungvn.net",262],["tenovi.net",[265,266]],["truyentuan.xyz",[266,418]],["tracnghiem.net",270],["phimmoi.tuphim.net",271],["vietmoz.net",272],["vnexpress.net",274],["vtipster.net",275],["tut4ktream.online",283],["blogtruyenvn.org",284],["btcvn.org",285],["chillphimmoizzz.org",286],["phimmoisz.org",[288,289]],["truyenaudiocv.org",290],["gaidep3x.pro",292],["vlxyz.tube",292],["phimsexhay669.pro",295],["sexvn2024.pro",297],["youtubeporn.pro",[298,299]],["hls.playerfb.xyz",299],["phimhay123.vn",300],["phim18hd.sex",302],["bestx.stream",304],["filemoon.sx",305],["viet69.tax",306],["ws-client.gavang.tech",307],["sex.lenlut.tv",310],["phimdacap.tv",312],["vieclam.tv",[314,315]],["xskt.com.vn",315],["www.buomtv.vip",317],["sexhd88.vip",320],["2banh.vn",322],["2game.vn",323],["afamily.vn",325],["sport5.vn",325],["m.afamily.vn",326],["autodaily.vn",327],["xehay.vn",[327,410]],["cafebiz.vn",329],["cafef.vn",330],["ttvn.toquoc.vn",330],["careerlink.vn",331],["chap.vn",332],["24h.com.vn",333],["autopro.com.vn",334],["baohaugiang.com.vn",335],["congan.com.vn",337],["daklak24h.com.vn",338],["dantri.com.vn",339],["game4v.com.vn",340],["nld.com.vn",341],["tapchikientruc.com.vn",342],["thanhtra.com.vn",343],["thoidai.com.vn",344],["petrotimes.vn",344],["www.thuocbietduoc.com.vn",345],["thuongtruong.com.vn",346],["thuysanvietnam.com.vn",347],["voh.com.vn",349],["congluan.vn",350],["congly.vn",351],["thitruongtaichinhtiente.vn",[351,387]],["danviet.vn",352],["eva.vn",354],["fshare.vn",355],["game24h.vn",356],["game8.vn",357],["gameio.vn",358],["gamek.vn",359],["soha.vn",359],["genk.vn",360],["vnews.gov.vn",361],["gplay.vn",362],["hosocongty.vn",364],["kenh14.vn",365],["kinhtedothi.vn",[366,367]],["minhngoc.net.vn",367],["vn-z.vn",367],["lazi.vn",368],["lucloi.vn",369],["muare.vn",370],["myeva.vn",371],["phunumoi.net.vn",373],["nhipcaudautu.vn",373],["nhacdj.vn",374],["nhatrangclub.vn",375],["olug.vn",376],["phapluatplus.vn",377],["qdnd.vn",378],["reatimes.vn",379],["rung.vn",380],["www.saostar.vn",381],["sharecode.vn",382],["m.soha.vn",383],["thanhnien.vn",384],["thethao247.vn",385],["thethaovanhoa.vn",386],["tinnhanhchungkhoan.vn",389],["tiin.vn",390],["timdaily.vn",391],["tinhte.vn",392],["tinmoi.vn",393],["tintucvietnam.vn",394],["truyenfull.vn",395],["tuyengiao.vn",397],["tvphapluat.vn",398],["v4u.vn",399],["vietfones.vn",401],["vietq.vn",403],["viettelstore.vn",404],["voz.vn",406],["vtcnews.vn",407],["vungoctuan.vn",408],["webthethao.vn",409],["yellowpages.vn",411],["znews.vn",412],["doctruyenchufull.xyz",414],["rk.plcdn.xyz",416],["plvb.xyz",416]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map([["livescore.com",[0]],["msn.com",[0]],["dm.de",[0]],["medium.com",[0]]]);

self.specificImports = self.specificImports || [];
self.specificImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/

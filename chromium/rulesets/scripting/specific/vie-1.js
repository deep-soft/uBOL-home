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

const argsList = [".text-center.rounded.p-3.border.mb-lg-4.mb-3",".banner-top","#background_bg_link,\n#subRightAboveHome,\n.adv-24h-mid,\n.col:has(a[rel=\"nofollow\"]),\n.col:has(a[rel=\"sponsored\"]),\n.fixad300x600,\n.module3,\n[id^=\"ADS_\"]","#position_full_top_banner_pc",".gc-header__wrapper + div[style]",".c-int.d-lg-none.d-block > p.block-int.mb-1,\n.col-12 > p.block-int.mb-1","#menu-main-menu > .menu-nha-cai-uy-tin.menu-item.nav-item.style-2 > .nav-link,\n.bookmaker-selector-container,\n.c-int.d-lg-none.d-block,\n.container > .row > .col-12,\n.d-lg-none.d-block.p-1.text-center,\n.gmd-match-footer__odds,\n.justify-content-center.d-flex > .btn-primary.btn,\n.mt-1.d-lg-flex.d-none.sub-menu,\n.nav-wrap > a[rel=\"nofollow\"],\na.d-lg-none.d-block:nth-of-type(2)","#quangcaopc","#wap_bottombanner",".no-auto-popup","#qc_clgt","#menubentrai,\n.gnartyx-offads","#fbox-background",".gnarty-offads",".mobile-catfish-top","div.py-2.md\\:py-6.mx-auto.w-full.max-w-screen-3xl > div.relative","#sn-AnchorAd,\n.pAd,\n.relatedPostsAd,\ndiv.pAdin",".adNative","#anchor-ad","a[href^=\"/cgi-bin/to.cgi\"]","#banner3double",".admicro","[href*=\"cellphones.com.vn\"]","div[class*=\"ads\"]",".top-header",".block:has([data-adaptive])",".monkey-content-duoicanbiet,\n.monkey-section-tinnoibat,\ndiv.monkey-qc","#top_oddd",".underplayer_btn",".button-dangkyngay",".textwidget",".qc-inner,\ndiv[id^=\"qc_M_\"]","#ads-1xbet-catfish,\n#popup-1720497466,\n.banner728,\n.container > div[style^=\"height: 228px\"]","#popup-giua-man-hinh",".footer-button-sign-in.hide-desk,\n.hide-desk.wrap-content > .wrap-btn-action,\n.menu-right-slide",".btn-betting,\n.datCuocBTN,\n.modelAds,\n.nhacaiuytin,\n.text-running",".footer-banner",".list-dat-cuoc",".banners","#right_float,\n[id$=\"float_banner\"]","[class*=\"_banner\"]",".bgadmtoptotal","#wrapper > [id^=\"adm-slot\"],\n[class^=\"ads_\"],\n[id^=\"adm-slot\"]",".bannertop",".c-ad,\n.container.mt-1.d-none.d-lg-block,\n.menu-item-object-custom",".align-items-center.justify-content-between.d-flex.col-12 > .d-lg-none.d-block",".sub-menu.d-none.d-lg-flex",".marquee-container","#myModal,\ndiv[id^=\"adsphim-\"]",".my_responsive_add,\n.titleBar + *,\n[class1=\"my_responsive_add\"]",".chat-header,\n[href=\"https://8xbe52.com\"]",".expand-static-banner,\n.preload-banner,\n.static-banner",".link-gold,\n[id^=\"banner\"]","div[id^=\"float\"],\ndiv[id^=\"hide_float\"]","#subiz_wrapper,\n.ad-embed",".mb-4 > [style=\"min-height: 350px;\"]",".fixed","a[rel=\"noopener noreferrer\"]",".widget-wrap.widget_text",".features-r","#bannerMasthead,\n#desktop-home-top-page,\n#mobile-home-middle-1,\n#mobile-home-middle-2,\n#mobile-home-top-page,\n.ads-masthead",".bg-gray,\n.sidebar > div[style]",".div_box_adv",".topbanner",".chapter-content .min-h-\\[275px\\]","iframe[src*=\"ads\"]","a[rel=\"nofollow sponsored\"]","#footer_fixed_ads","div[id^=\"adsbg\"]",".ad-pin-right-bottom",".top-right",".line-ads",".ad-container",".banrpstn",".banner-shopee,\na[href^=\"https://shope.ee\"]",".jw-button-image","div.ad",".ad-manager-forum-list-bottom,\n.ad-manager-forum-list-top,\n.ad-manager-header,\n.ad-manager-thread-view-bottom,\n.ad-manager-thread-view-top,\na[rel=\"noopener noreferrer nofollow\"],\ndiv[style=\"margin:6px 0px 6px 0px\"]","#player + div[id],\n.playover","#myElementz,\n.bannerinfooter,\n.quang-cao-ben-phai","#vi-smartbanner,\n.LRBanner,\n.running.adsbyvli",".bg_allpopupss,\n.bgal_popndungalal,\n.bn1,\n.bn2,\n.box_quangcao_mobile_320x50,\n.box_text_qc,\ndiv.news-left-related:nth-of-type(2)","#tubia",".khw-ads-wrapper.clearfix",".no-ads,\n.parent.special,\n.partner-me",".exp_qc_share",".adv",".group-link:has(a[href*=\"&utm_\"]),\n.topnhacai","#bannerContainer1,\n#bannerContainer2,\n#sp-wrapper-hovering-format,\n.wam-banner,\ncenter:has(.adsbygoogle)","#catfish_ads","#antiblocker,\n#antiblocker_underplayer",".sticky_bottom,\n.t_logo",".code-block-1.code-block,\n.navbar-container + .container",".toogle-ads",".float-ck-center-lt","#top_addd","#header-ads,\n#header-ads + center",".bnqcclm",".btn-fanpage.btn-default.btn-block.btn","#top-banner-pc","#sponsor-balloon",".btn_small_fix_container","#adrightsecondx,\n#adrightspecial,\n#adrightspeciallinks,\n#adsuggestion",".sticky","#adsposttop","div[class^=\"adbox\"]",".ads-home-feed","#hots-btn,\n.bet-btn-8423,\n.bn-popup-bottom-sdwdwxw,\n.btn_betnow_632132,\n[href=\"/top-nha-cai.html\"],\ndiv.row-nhacai,\nli.for-desktop-2 > [href]",".advertTop,\n.hsdn > li:has(.adsbygoogle),\n.module_plugins",".banner-bot-mobile,\n.banner-top-mobile,\n.preload",".ads-menu-item,\n.dcmm-button-player-item,\n.divdatcuoc,\n.show-ads-banner",".widget",".ads-sponsor,\n.khw-adk14-wrapper",".container > .row > center",".banner_list,\n.item-more,\n.nc_sidebar_home,\n.widget-sidebar-block",".baloon,\n.col-sm-10.kqcenter,\n.kqbackground.vien ~ a[target=\"_blank\"]","a[rel=\"nofollow\"]",".box-ads,\n.linkBanner","#qc-kpgame",".sponsor-zone",".ads",".top-banner-mobile",".ezo_ad",".quang_cao_pc_right_hoc_tap",".advbox","div[style=\"padding: 0px; margin: 10px 0 0 0 ; width: 100%;text-align: center;min-height: 280px;\"],\ndiv[style=\"width: 100%; min-height: 240px; text-align: center;\"],\ndiv[style=\"width: 100%; min-height: 90px; text-align: center;\"],\ndiv[style=\"width: 100%;text-align: center;min-height: 280px;\"]",".info-footer:nth-child(4)","#bottomFixedDiv,\n#js_pup_navigation,\n#wAdList,\ntr[id^=\"word_\"]",".ft-box,\n.vb-button > .mct_-bet,\ndiv.vebo-sp.container:nth-of-type(7)",".fade.show,\n.ibs-bet","div[class*=\"size-\"]","#m-bet",".btn-betnow",".jw-logo","p[style=\"color: rgb(174, 174, 174); margin-top: 10px; margin-bottom: 20px;\"]","#countdown,\n.section-gqc1,\ndiv[style=\"margin: 10px 0 5px 0; min-height: 250px;\"]",".ads-tags,\n.img_side_bar,\n.poka-image",".ads_shortcode","[href*=\"hnmac.vn\"],\n[href*=\"laptopvang.com\"],\n[href*=\"macbookgiasi.vn\"],\n[href*=\"macone.vn\"],\n[href*=\"minhtuanmobile.com\"],\n[href*=\"vender.vn\"],\ndiv.\\35 fb1ed6025b0b.widget:nth-of-type(3)",".highlight,\n.images-bnr,\n.images_fixed,\na.btn_fb:nth-of-type(2)",".popup",".adsphim-mobile-popup","[href$=\"/goout/lazada\"],\nsection.nh-section:nth-of-type(5)","[id^=\"adv\"]",".btn-od",".btn-bottom-right-append-player,\n.images-bnr-bellow-append-custom,\n.images-top-pl",".-translate-x-1\\/2.transform.left-1\\/2.bottom-0.fixed",".ads-embed",".module_single_ads",".adv_phim,\n.fixed_bottom","[class^=\"box_adv_ele\"]",".admicro_top","#adop_bfd,\nins[class*=\"adsby\"]","#left_ads_float,\n#right_ads_float","#_pop-nettruyenww-15,\n#catfish-content,\n#pop_nettruyenww","#_pop-nettruyenx-13","#banner-qc_outstream,\n.adv_home_300_250,\n.nqc-zone","#top-adv",".ads-top",".modal-backdrop.show",".show.modal","div[style=\"text-align:center;margin-top:0px;margin-bottom:0px;\"]",".box-rating","#overlay",".catfish-ck",".ff-banner","#itro_opaco","div[data-value=\"1\"]","#banner","#ads-popup",".adv-300-right",".BanerTop100","#pc-catfix,\n.lightbox-player-pc,\n.mobile-catfix,\n.pc-catfix,\ndiv[id^=\"preload-\"],\nmobile-catfix","a[target=\"_blank\"][rel=\"nofollow noopener\"]","a#banner",".banner-preload",".catfish-top",".banner-container","#floating_ads_bottom_textcss_container,\n.module_home_ads","#adsTopInPageBanner,\n.adsContainer,\n.header__auth > .details__devices-list","#pm_quangcao","#preload",".sda-catfish","#adspm4u","#catfish-banner,\n#dl-banner-728x90,\n.center-screen.backdrop,\n.topless","#ads_location,\n.block.ad",".ads-pc,\n.ads-sp","div[data-widget-id]","#fakeDown","div[id^=\"ads_\"]",".shadow-card + .mt-2",".odds-button,\n.odds-button2",".box-banner","#adrighttop","div[class^=\"adv-\"]",".adsbygoogle",".ads-970x280",".boxzilla-bottom-right-container,\n[href^=\"https://gotrackecom.info\"]","#pc-bill","#myCarousel,\n.banner-boder-zoom","#scriptDiv","#backgroundPopupp,\n#popupContact","#wap_bottombannerr,\n.grid-match[style]","[id^=\"admzone\"]",".ads-floatingads,\n.banner-item,\n.top-nha-cai","#popup_banner_beta",".afw-topbanner","#xs-addd0",".ads-gg-top,\n.container + .col-xs-12.content_wrap,\n.content > .content > .content,\n.wrap-single > .pagination.text-center",".header-fix-ads,\n.lepopup-popup-container,\n.lepopup-popup-overlay","#topbn",".block:has(.block-container > .block-body > a[href]),\n.block:has(.block-container > .block-body > ins)","#ad_balloon",".adpia_banner",".asd-headt,\n.detail__foru,\n.mb-40.section__qadd,\n.super-masthead,\n.top-banner,\n[class*=\"box-home\"],\n[data-marked-zoneid=\"tn_detail_danhchoban\"],\n[data-marked-zoneid=\"tn_detail_quantam\"],\n[id^=\"dablewidget_\"],\nzone","#Adsv,\n.right-banner > a[title]",".btnz",".ai-close-fit.ai-close.code-block-7.code-block",".ads-container","div[class$=\"_ads\"]",".zone-top,\n[id^=\"pos-\"]",".fixed-bottom,\n.popup-banners",".c-banner-item",".c-banner",".__ads_click","#BannerAdv",".stream-item","#footer-widget-area","#gallery-2,\n.hd-cate-wrap,\n.home-qc-wrap,\n.home-sec-right .widget_media_image,\n.noname-left","div[id^=\"adsMobile\"]","div[id^=\"adsWeb\"]",".ads-common-box",".p-body-pageContent > table[style=\"width:100%;display:inline-block;background: #fff;\"]",".jsx-3569995709,\n.micro,\n.middle-comment-promotion,\n.pro-container,\ndiv[style=\"width:300px;height:250px\"],\ndiv[style=\"width:300px;height:600px\"],\ndiv[style=\"width:320px;height:100px\"]","#main-videoplayer,\n#pc-top,\n.ads-position",".fyi",".container .desktopjszone,\n.mobilejszone",".box,\n.pum",".widget.widget_text",".banner",".sbAdv","#sticky_ad,\ndiv.text-center:nth-of-type(2)",".container-banner,\n.modal-ads,\ndiv[class^=\"slide-bar\"]",".adLogoPlayer,\n.adsMobile,\n.col-chat,\n.dcmm-button-player.row,\n.offer-rating.widget-offers__list",".js-editors-choice-slider.editors-choice-slider > .adsbygoogle","#header-ads-full,\n#shoppe_ads_fly,\n.ads-responsive,\n[id^=\"ads-\"]","div#adsChapterTop","#ad_info_top,\n#catfishAd,\n#floating-banner-left,\n#floating-banner-right,\n#popup-truyenqq,\n#popup-truyenqq-home,\n.ads-banner,\ndiv#ad_info",".footer-info","#topbanner","#banner_preload,\n.doc-truyen-ads-d1,\n.doc-truyen-ads-d2","#LeaderBoardTop,\n#admbackground,\n#adsMainFooter,\n.Mobile_Masthead_TTO_Wrapper,\n.adm-bot,\n.box-qad,\n.content-amuasam,\n.detail__qc,\n.section__r-vietlot,\n.wrapper-ads-mb",".clearfix.adregion,\n.visible-md.header-banners",".ai-viewport-1","#ads_preload1,\n#ads_preload2,\n#catfish-adv,\n.widget_text.text-center + .text-center",".catfish-bottom","[src^=\"https://ads.starzd.com/\"]",".banner-ads",".sda-preload-popup,\n.sda-preload-popup-overlay","li.special.parent",".ad-floater,\n.popunder-link,\n.promotion-popup,\n.video-ad-layer",".Flagrow-Ads-under-header",".box-host,\n.btn-bet-top,\n.item-betnow",".btn-action,\n.btno-group.d-none.d-lg-flex,\n.container > .mt-1,\n.container > .mt-3,\n.d-lg-block,\n.justify-content-between.d-lg-none.d-flex.btno-group,\n.menu-item:has(a[rel=\"nofollow\"]),\n.topButton,\n.widget_offer,\nheader > .container",".item-qc","[class^=\"sticky-top\"],\n[href*=\"vietcombank.com.vn\"]","#closeAds","#bnc1",".Header_topBanner__1xD-2,\n.styles_bannerInArticleWrapper__rPPJH,\n.styles_topBanner__NL_gW",".vfs_banner","#BigBanner,\n.ads_position",".ads_txt,\n[href=\"https://tailieugiaovien.com.vn/\"]",".elementor-widget-image","#vmcad_sponsor_middle_content,\n.box-adv,\n.mb-20.col-right-ads,\n.vmcadszone","section.mar20:nth-of-type(2),\nsection.mar20:nth-of-type(4)","#banner-dai-bottom,\n#banner-dai-top",".adbox",".banner_site,\n.notify_auto,\n.sidebar_box_gray",".banner_top",".banner-bottom-menu,\n.popup-bg,\n.showpop,\n[href*=\"bit.ly\"]","#ads_large_detail,\n#banner_top,\n#box_qua_tang_vne,\n#raovat,\n#rich-media-banner-ads,\n#sis_popup,\n#supper_masthead,\n.article_ads,\n.article_ads_300x250,\n.banner-bottom,\n.banner_mobile_300x250,\n.section_ads_300x250",".Advs_adv-components__1nBNS.Advs_adv-300x250__2eyhC.Advs_no-content__RWwW2,\n.HotTagGlobal_fixed-height__1f50i",".adsbypubpower,\n.p-body-sidebar > .block > .block-container:has(.adsbypubpower),\n.p-body-sidebar > .block > .block-container:has([data-widget_id]),\n.v-element > .v-responsive,\ndiv.message--post,\ndiv[style]:has(.adsbypubpower)",".Notices.PanelScroller","a.news__item--action:nth-of-type(2)",".sys-ads","div[class*=\"qca\"]","#article > .pt-3.text-centers,\n.text-muted","#balloon,\n.affiliate,\n.player-midpoint-progress",".banner-masthead",".bf-3-primary-column-size.bs-vc-sidebar-column.vc_col-sm-3.vc_column_container.bs-vc-column.wpb_column > .wpb_wrapper.bs-vc-wrapper","#container-ads",".content_middle_rightbar","#sticky",".btn-top.btnz,\n.grid-match__footer > a.btn:nth-of-type(2)",".mmo",".banner-bottom-append-custom,\n.button-in-player-box,\n.logo-top-right-append-custom","#link-view > center:nth-of-type(1)",".button-action-float-banner",".wrapper-adv",".wtt-ads",".adsitem","#pos-25,\n#pos-26",".bannerBox,\n.footerBanner,\ncenter > [href*=\"tlink.vn\"]","[href^=\"https://shope.ee\"]","#mp-adx-b32",".mp-adz","#IMAGE635 > .ladi-transition.ladi-image,\n#IMAGE639 > .ladi-transition.ladi-image,\n#POPUP648,\n.backdrop-popup","#p-GMH","#mobile_content_top",".align-items-center.justify-content-between.d-flex.text-center.bg-grey-6.w-100,\n.d-flex.justify-content-between > div > div.d-flex.justify-content-around.mt-4,\n.pc-top,\n.top-ads-16x9","#neo-right-ads",".google-auto-placed",".advertisement","#download_appnew,\n.box-most-viewed.box-course.box-slide,\ndiv.ads_ads,\nh3.sub-title,\nul.list:nth-of-type(2)","#horizontal-ad",".block.translate-x-\\[-50\\%\\].left-2\\/4.z-\\[1\\].bottom-\\[-6px\\].fixed.mx-auto.md\\:container.md\\:px-0.px-4.w-screen","#banner1ab","#partner5,\n.container.pc.g-imgtop,\n.d-md-none.d-block.mobile.g-imgbot,\n.group-btn,\n.list-main-link,\n.ref-link",".modal",".truct-catfish,\n.truct-widget","#ouibounce-modal",".MuiDialog-container,\n.MuiDialog-root,\n.MuiModal-backdrop,\n.css-ylxsn9.MuiStack-root,\n.vjs-banner-btn,\ndiv.css-m49bkq.MuiStack-root > a","#pc-top-banner,\n#quang-cao","#catfish",".popUpBannerBox",".navbar-ex8-collapse","#adstop2,\n.ads-item,\n.col-lg-4.hidden-xs.d-flex.flex-column.address-wrap",".float-right","[id^=\"Balloon_\"]","#match-child-1,\n.banner-link,\n.block-catfish.text-center.d-lg-none.d-block,\n.container > ul,\n.container.mt-1,\n.logo-cnt > .d-lg-none.d-block,\n.menu-cuoc-one88,\n.mt-5.d-lg-none.d-block.pb-2.text-center,\n.offer,\n.pl-lg-0.col-xl-4,\n.row.d-none,\n.widget-offers__list,\ndiv.d-lg-none.d-block:nth-of-type(3)",".match-detail__offer",".sk_balloon",".offer__btn",".company","div[id^=\"dnn_\"]",".menu-top-nha-cai",".menu-cuoc-8xbet",".grid-match__footer,\n.w-100.justify-content-center.align-items-center.d-flex,\na.d-lg-none.d-block:nth-of-type(1)",".odds-comp",".d-lg-flex.d-none.p-0.company.flex-1.table",".adv-side-bar,\n.banner-adv-wrapper,\n.banner-adv-wrapper2,\n.item-qc1","#bnc0",".g-imgbot,\n.g-imgtop,\n.link2.group-link,\n.top-main > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)",".btn-bet",".active.bg-overlay",".banner-ads-cs","#catfish-ads",".td-container > div.td-pb-row > .td-pb-span12,\n.td-container-wrap.td-logo-wrap-full.td-banner-wrap-full,\n.td-crumb-container,\n.td_block_template_1.tdi_11.td-g-rec-id-sidebar,\n.td_block_template_1.tdi_28.td-g-rec-id-custom_ad_1.td-g-rec,\n.td_block_template_1.tdi_30.td-g-rec-id-sidebar.td-g-rec,\n.td_block_template_1.tdi_4.td-g-rec-id-custom_ad_1.td-g-rec,\n.td_block_template_1.tdi_6.td-g-rec-id-sidebar.td-g-rec,\n.td_block_template_1.tdi_9.td-g-rec-id-custom_ad_1.td-g-rec",".Float_ads,\n[id^=\"zone-ads\"]",".ad_by_yellowpages,\n.banner_add",".code-block-8.code-block,\n.ez-video-wrap",".ezoic-ad",".grid-match__footer > a.btn:nth-child(3),\n.mct_-bet-bot,\n.mmo-inner,\n.show.fade,\na[href^=\"/go\"]",".btn-odds","winbox-1","#Zingnews_SiteHeader,\n.znews-banner",".qc",".adsbyvli",".inline-ad","ins.adsbygoogle[data-ad-slot]","#adcontent",".ads_top",".blogAd","#adsContainer,\n.ad-placement",".imageads","#ad-slot",".adheader",".ads-large",".advertiser",".showads","#ds_top,\n.hidden-md.right.col-3,\nbody > .container > div",".ads_below_player","#custom_html-42","#mp-preload-pp-overlay,\n.adpl","[id$=\"bnr\"]",".code-block","div#recent-content:nth-of-type(1)",".cashfish","#ad_global_below_navbar",".v4j-header > center",".v4j-watch-1.v4j-content,\nbody > div[class]",".catfix",".hd-tube-desktop,\n.hd-tube-mobile","#AgeModal","#latest-censored-videos > .row > div.pb-3.col:nth-of-type(1),\n.v3sb-box",".cat-fish.a-play,\n.overlay",".w1e48c4420b7073bc11916c6c1de226bb",".ads-wrapper",".body_wrapper1","#popup_fi",".in.fade.modal-backdrop","#haun-player > div[style],\n#primary-nav > div[style],\n.separator","#mp-preload-popup-overlay",".banner-catfish-bottom",".cash-fish,\n.cash-fish-pc,\n.preload-pc,\n.top-mobile-banner,\n.under-player-pc-banner",".v4j-header > a[target=\"_blank\"]",".quangcaomobile","#f186fb23a33995d91ce3c2212189178c8",".black-layout > div:nth-child(2),\n.popup_u,\ndiv[style^=\"position: absolute;top: 0;\"]",".btm_bar",".bbMediaWrapper-inner > .samCodeUnit,\n.js-replyNewMessageContainer.block-body > div.samCodeUnit > .samItem,\n.p-footer,\n.samVideoOverlay",".v4j-header.v4j-content",".top-float-ck",".classvi,\n.elementor-section-height-default.elementor-section-boxed.elementor-element-e601265.elementor-element.elementor-top-section.elementor-section","div[style^=\"position:fixed;inset:0px;z-index:100000;\"]","#video_player ~ div[id]","#tut4ktream_idAdLink",".quang-cao","#popup","#pc-preload-modal",".adspopupgiua,\n.adspopupleft,\n.adspopupright,\n.float-ckgiua",".a-header,\n.apu,\n.header",".sticky-footer","#bar_float_r,\n.quangcaomb","#hide_float_right","#idAdLink","#adsbottom,\n.happy-under-player,\n.vailo-sticky,\n.vailo-under-navbar,\n.vailo-under-navbar-mobile",".popup-overlay",".banner-play",".footer-fixed-br-container",".v4j-watch-1.v4j-content > center",".sdzhead","#divExoLayerWrapper","#adx,\ndiv.banner-catfish-bottom",".adx1","#ab_ctl,\n.bannerads",".xx-ads",".b-player","div#bnads",".adContainer","._9xtpcl.c4je67d.c1qs0lzc.c1hrlkpu.cc2icwl.c1i0iccj.cfd18df,\n._9xtpcl.e1e6v8dt,\n.blbew80,\n.llnefd1,\n.lpp0nsn,\n.luq51lg.a13wihj,\n.pointer-events-auto.block,\n.zbgpvb19.zbgpvb16.zbgpvbj.zbgpvbh.zbgpvbg.zbgpvbf.zbgpvbe.zbgpvb1","#iklan-atas-wrapper","[onclick^=\"__a.hide\"],\ndiv:has([class$=\"-modal\"])",".pum-overlay",".aSlP,\n.bef,\n.hmvD"];

const hostnamesMap = new Map([["10gb.vn",0],["123nhadatviet.net",1],["123nhadatviet.com",1],["tuoitrenews.vn",1],["tuoitre.vn",[1,251]],["nld.com.vn",[1,158]],["24h.com.vn",2],["2banh.vn",3],["2game.vn",4],["90phutvs.cc",[5,8,111,335,339]],["90phutz46.live",[6,7,8,47,331,334,337]],["cakhiai.cc",[7,8,44,45,46,47,334,335]],["xoilacxj.cc",[7,8,46,47,116,330,331,332,333,334,335,336,337]],["vebozg.cc",[7,8,36,45,47,263,334,335,354]],["xoilaczz63.live",[8,331,336,337,338,339,340,354]],["xemtivi.tvhayhd.tv",[8,326]],["rakhoiy.cc",[8,36,332,354]],["phym18.lol",[8,201,399]],["nhentaivn.online",[8,201,390]],["avvietsub.info",[8,201,371]],["phimsexsub.ink",8],["abtruyenmoi.com",[9,116]],["anime47.my",[10,313]],["animet3.site",[11,12,133]],["animetvn4.com",[12,13]],["subnhanh1.org",[12,91,306]],["animevietsub.video",14],["animew.info",15],["apkmoddone.com",[16,17]],["apkmoddone.phongroblox.com",[17,18,435]],["www.vip1s.top",[18,315]],["asianbookie.com",19],["autodaily.vn",20],["xehay.vn",[20,317]],["autopro.com.vn",21],["bantincongnghe.net",22],["baodauthau.vn",[23,230]],["mmo4me.com",23],["baohaugiang.com.vn",24],["baomoi.com",25],["baonga.com",26],["biphim.lat",[27,28,116,163]],["subnhanh.now",[28,163,207]],["subnhanhvl.site",[28,67,95,163,207]],["hhpanda.video",[28,67,95,98,163]],["blog.abit.vn",[29,40]],["blogkiienthuc.net",30],["blogtruyenvn.org",31],["bluphim.fun",32],["boctem.com",33],["movies.vkoolz.com",[33,306]],["xemphimchill.xyz",[33,72,324,325]],["247phim.cc",[33,72]],["vungtv.us",[33,291]],["phimmoi02.net",33],["tvhay26.com",33],["www.phimmoichilla.xyz",[33,72]],["hayhaytv.cc",[33,72]],["yanhh3d.tv",[33,324,346,347]],["www.ssphim.us",[33,72]],["bimmup.tv",[33,372]],["bongda.rakhooi.tv",[34,35,36,103]],["tructiep.caheo7.link",[35,36,103,242]],["mitomvg.cc",[36,144,335,340,354]],["phimmoichillz.my",[36,181]],["bongda12h365.com",37],["bongda365.news",38],["soikeoz.vip",[38,205]],["bongdaso66.net",[39,40]],["tvso1.com",40],["cafebiz.vn",41],["cafef.vn",[42,43]],["ttvn.toquoc.vn",43],["cdnwp.icu",48],["mephim.ink",[48,141]],["chap.vn",49],["chat.vebotv.me",50],["chillphimmoi.pro",51],["chodansinh.net",52],["chotlo3s.com",53],["congan.com.vn",54],["congthucvatly.com",[55,56]],["phuongtrinhhoahoc.com",[56,190]],["contuhoc.com",57],["www5.cbox.ws",57],["cryptoviet.com",58],["daklak24h.com.vn",59],["dantri.com.vn",60],["danviet.vn",61],["diadiem.com",62],["doctruyenchu.info",63],["doctruyenln.com",[64,116]],["domdomcomics.org",65],["dongphim.now",[66,67,163]],["dongchill.pro",[67,163]],["bichill.lat",67],["xemphim18.net",[67,94,133,323]],["vivuphim.info",[67,120,325]],["hhanime3d.net",[67,95,163]],["download.vn",[68,276,321]],["dubaotiente.io",[69,86]],["ebookbkmt.com",70],["ephoto360.com",[71,72]],["thiepmung.com",72],["phiimoi.net",72],["eva.vn",73],["fastscans5.net",74],["fdcdn.xyz",[75,133]],["file.gocmod.com",76],["forum.gocmod.com",77],["freeplayervideo.com",[78,133]],["abysscdn.com",[78,133]],["player-cdn.com",[78,133]],["geoip.redirect-ads.com",[78,133]],["fshare.vn",79],["game24h.vn",80],["game8.vn",81],["gameio.vn",82],["genk.vn",83],["ghienphim.now",[84,120,239,260]],["giadinhonline.vn",[85,86]],["congluan.vn",85],["vietnamnet.vn",[86,273]],["taichinhdoanhnghiep.net.vn",[86,239]],["goal.90phut24.xyz",[87,344,345]],["gocmod.com",88],["haychillz.com",[89,181]],["hayghe.me",90],["hayhaytv.org",[91,306]],["hayphim.cc",92],["heovktgame.club",93],["hh3dhay.life",94],["xem15.com",[94,321]],["vutruphim.tv",[94,293]],["tram3d.me",94],["cliphotvn69.com",94],["mobiblog123.xyz",94],["cliphot69.help",[94,373]],["phevkl.to",[94,181,392,393]],["www.gvnvh.net",94],["topviet69.video",94],["sayhentai.one",94],["viet69.ad",[94,181,392,393,418]],["hhchina.my",[96,100,324]],["hhhay.ink",[97,324]],["hhtqvietsub.me",[99,100,324]],["hoahoc247.com",101],["hoatieu.vn",[102,103,104,105]],["mannhan89.xyz",[103,139,140]],["quantrimang.com",[104,193,276]],["vndoc.com",[105,276]],["hoidap247.com",106],["home1.mannhan16.pro",107],["hsctvn.com",108],["huphimtv.com",109],["ihst.org",[110,111]],["kenh14.vn",112],["keonhacai55.cc",[113,329]],["keoso.me",114],["ketqua04.net",[115,116]],["nghean24h.vn",116],["xem.tructiepnba.me",[116,320]],["vidian.online",[116,266]],["xemtivi4k.com",[116,327,328]],["bongdainfox.tv",116],["xem.thapcamtv.live",[116,131,216,319,345]],["thapcam53.net",[116,131,216,295,319,345]],["xx2.thapcam53.info",[116,319,345]],["nn13.thapcam.asia",[116,319,345]],["chatboxn.com",116],["damconuong.art",116],["ketqua247vn.vip",117],["khiphach.net",118],["kienthuc.net.vn",[119,120]],["saostar.vn",[120,198]],["bongda24h.vn",120],["cungthi.online",[120,195]],["appvn.com",120],["antt.vn",120],["v.xemphimviet.xyz",[120,239,259,260]],["soikeo365.net",[120,204]],["nghenhinvietnam.vn",120],["mod.lnpchannel.com",120],["phimmoi.ing",120],["vlxx.tech",[120,165,175,176,255,424]],["javtopxx.com",[120,386]],["kinhtedothi.vn",[121,143]],["laptrinhcanban.com",[122,352]],["lazi.vn",123],["lichngaytot.com",124],["lichvannien365.com",125],["linkneverdie.net",126],["linkneverdie.top",126],["linkneverdie2.com",126],["live.7mvn4.com",127],["live4.xoilac34.org",[128,129,130,131,132,133,262]],["vebo4.net",[129,130,131,262]],["xem.vebo31.net",[129,130,131,262]],["xem.banhkhuc120.info",[129,130,131,132,262]],["z1000.thapcam53.net",[130,159,353,354]],["vv13.thapcamtivi.live",[131,294,295,319,345]],["watch.rkplayer.xyz",[133,296]],["phimss.net",[133,186]],["lmssplus.org",134],["loigiaihay.com",135],["luatduonggia.vn",136],["lucloi.vn",137],["maclife.io",138],["fullcliphot.com",[140,257,377]],["fulllivehot.live",[140,378]],["metruyencv.info",142],["metruyencv.net",142],["metruyencv.com",142],["minhngoc.net.vn",143],["vn-z.vn",143],["mn.mediastation.live",145],["motchilltv.now",146],["motchilltvf.com",147],["motphimww.net",[148,178]],["tvphim.bz",[148,178,257]],["mphim14.org",149],["muabanraovat.com",150],["muare.vn",151],["myeva.vn",152],["mythethao.net",[153,278]],["nettruyenww.com",[154,239]],["nettruyenx.com",155],["nhaccuatui.com",156],["nhacdj.vn",157],["noitu.pro",[159,160]],["phapluatplus.baophapluat.vn",161],["phim.vkool8.net",[162,163,164]],["motchill.vote",[163,207]],["tructiepdabong5.co",[163,243,333]],["phimbet.biz",[163,168]],["vphims.net",164],["phim1080.in",165],["phim202.com",166],["phim88.tv",167],["phimdacap.tv",[169,324]],["phimdinhcao.net",[170,171]],["www.phimchaua.com",[170,171,308,309]],["phimlongtieng.net",[170,171,175,176,177,308,309]],["www.phimdinhcaoz.com",[170,171,309]],["phimdinhcao.com",[171,177]],["phimgichill.net",172],["phimhaymoi.online",173],["phimhdc.wiki",[174,291]],["vlmupsex.com",[176,382,427]],["sexhihiz.me",[176,255,427]],["phimmoi.club",178],["phimmoi.tuphim.net",179],["phimmoichill.tube",180],["phimmoinay.top",[182,205]],["phimmoissz.pro",[182,183]],["tvzinghd.co",[182,258]],["phimnhua.net",184],["phimno1.me",185],["phimvuihd.org",187],["phongroblox.com",188],["phunumoi.net.vn",189],["nhipcaudautu.vn",189],["plcdn.xyz",191],["qdnd.vn",192],["reatimes.vn",194],["romgoc.net",195],["giavang.net",195],["gamehayvl.com",195],["rung.vn",196],["sachmoi.net",197],["sharecode.vn",199],["sieutamphim.com",200],["socolivebongda.net",[201,202]],["soha.vn",203],["gamek.vn",203],["phimtho.net",205],["sport5.vn",206],["afamily.vn",206],["tamlinh247.biz",208],["tapchibitcoin.io",209],["tapchikientruc.com.vn",210],["techrum.vn",211],["tenovi.net",[212,213]],["truyentuan.xyz",[213,250]],["thanhnien.vn",214],["thanhtra.com.vn",215],["thaudiotruyen.com",217],["the.tube",218],["thethao247.vn",219],["thethaovanhoa.vn",220],["thichxemphim1.net",[221,239]],["thitruongtaichinhtiente.vn",[222,223]],["congly.vn",223],["thoidai.com.vn",224],["petrotimes.vn",224],["thuongtruong.com.vn",225],["thuthuatjb.com",226],["thuthuattienich.com",227],["thuysanvietnam.com.vn",228],["tienphong.vn",[229,230,235,239]],["tiin.vn",231],["timdaily.vn",232],["tinhte.vn",233],["tinmoi.vn",234],["tinnhanhchungkhoan.vn",235],["tintucvietnam.vn",236],["toithuthuat.com",237],["topthuthuat.com",238],["canhrau.com",238],["toquoc.vn",239],["baoxaydung.com.vn",239],["truyengihotdo.net",[239,246]],["truyengihotzay.net",[239,246]],["truyengihotnha.com",[239,246]],["truyengihotnha.net",[239,246]],["truyengihotqua.net",[239,246]],["truyengihotqua.com",[239,246]],["truyengihotnay.com",[239,246]],["tenmientruyengi.net",[239,246]],["tracnghiem.net",240],["tram3d.vip",241],["truyenaudiocv.org",244],["truyenfull.io",245],["truyenqqto.com",247],["truyensieuhay.com",[248,249]],["hhtrungquoc6.com",[249,324]],["hhtq8.vip",[249,324]],["animeweb.vip",[249,324]],["hhtq3d.net",[249,324]],["tuyengiao.vn",252],["tvhaiss.com",253],["tvhayd.com",254],["tvhayw.org",[255,256]],["loclipsexhay.net",255],["v4u.vn",261],["vesotantai.com",264],["videophapluat.baophapluat.vn",265],["vieclam.tv",[267,342]],["vietcetera.com",268],["vietfones.vn",269],["vietgiaitri.com",270],["vietjack.com",271],["vietmoz.net",272],["vietq.vn",274],["viettelstore.vn",275],["download.com.vn",276],["gamevui.vn",276],["khoahoc.tv",276],["vnesports.net",[277,278]],["vnews.gov.vn",279],["vnexpress.net",280],["voh.com.vn",281],["voz.vn",282],["vozer.net",283],["vsc61.com",284],["vtcnews.vn",285],["doisongphapluat.com.vn",285],["vtipster.net",286],["vtruyen.com",287],["vuighe4.com",[288,289]],["xem1080.com",289],["vungoctuan.vn",290],["vuonhoalan.net",292],["web1s.com",297],["webhoctienganh.com",298],["webthethao.vn",299],["webtretho.com",300],["www.anninhthudo.vn",301],["www.baogiaothong.vn",302],["www.clbgamesvn.com",303],["www.iosviet.com",304],["www.mp.com",[305,306]],["motphimtvv.com",306],["motchilltvzz.biz",[306,324]],["www.o-study.net",307],["www.saostar.vn",310],["www.thuocbietduoc.com.vn",311],["www.tiengnhatdongian.com",312],["ycongnghe.com",[312,348]],["www.toptruyenpro1.com",313],["doctruyen3qw.com",313],["www.vietjack.com",314],["www.vipfilm.org",316],["xem.thapcamtv.com",[318,319,345]],["xem20.gavang1.net",322],["xem19.gavang1.net",322],["hhninja14.tv",324],["phimhoathinh3d.vip",324],["hoathinhtq.site",324],["motchillco.net",324],["hhtutien.tv",324],["hh3d1.xyz",324],["hoathinh4k3.net",324],["hoathinh3dtq.site",324],["dragonphim.tv",324],["hhh3d.tv",324],["hhtq5.vip",324],["wibu47.com",324],["hhvsub.com",324],["motphim.cv",324],["bieudogiavang.vn",328],["xemtivingon.org",329],["xosodaiphat.com",341],["xskt.com.vn",342],["xxoilac.com",[343,344,345]],["hhtm.site",347],["yeah1.com",349],["yellowpages.vn",350],["yhocdata.com",[351,352]],["zcine.net",355],["znews.vn",356],["livescore.com",357],["msn.com",357],["dm.de",357],["medium.com",357],["cliphot69.pics",374],["dualeotruyenxyz.com",375],["finacor.fr",376],["gockhuat.net",379],["hd.javhay.site",380],["jav.sexsub.icu",381],["jav.vc",382],["javhd.shop",383],["vlxxai.net",[383,398]],["trangsexdam.net",[383,387,398]],["javhd.social",[383,398]],["sexsoc.info",[383,398]],["javhd.tech",[384,398]],["javtiful.com",385],["khosex.blog",[387,398]],["sexheovl.com",[387,398]],["quat69.pro",[387,398]],["lxmanga.live",[388,413]],["ngaytho.me",389],["pheclipsex.net",[391,408,410]],["sexchichnhau.net",[391,403,408,409,410]],["phim18vip.vip",[391,408,409,410]],["viet69.gay",[393,419]],["phim.sexxsub.pro",[394,423]],["phim18hd.in",395],["phimsexhay669.pro",396],["phimsexmup18.pro",397],["sexgaidep69.pro",397],["phimsexvl69.net",398],["play.anh.moe",400],["rphang.online",401],["sex.tuoi69.store",402],["sexhd88.club",404],["sextop.asia",[405,406]],["hls.playerfb.xyz",406],["sexvn2024.pro",407],["sieudam.site",[408,409,410]],["sieukhung.meme",411],["truyen18.fun",412],["truyensextv.com",413],["tuoi69.vote",414],["tuoinungvn.org",415],["tut4ktream.online",416],["vailonxx.co",[417,426]],["viet69.mn",420],["vietxxx.xyz",421],["vl.phe.to",[422,423]],["vlxxhot.xyz",[425,426]],["vlxyz.tube",427],["vn.javbabe.net",428],["vn.phym18.lol",429],["vtvgo.vn",430],["www.buomtv.io",431],["www.gaingon18.me",432],["xem.javkche.info",433],["xemphimjav.com",434]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map([["phongroblox.com",[315,363]],["game24h.vn",[358]],["gicovietnam.blogspot.com",[359]],["ios.codevn.net",[360]],["ipacrack.com",[360]],["ket-noi.com",[361]],["nhipcaudautu.vn",[362]],["pops.vn",[364]],["thanhnien.vn",[365]],["timvanban.vn",[366]],["tratu.soha.vn",[367]],["truyenaudiocv.org",[368]],["vn2.vn",[369]],["vndoc.com",[370]]]);

self.specificImports = self.specificImports || [];
self.specificImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/

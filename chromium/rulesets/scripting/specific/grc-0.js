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

// ruleset: grc-0

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssSpecificImports() {

/******************************************************************************/

const argsList = [".bannergroup","#mainBanner,\n.LeftMenuAd,\n.adForumAdDiv",".ads,\n.dockads.left,\n.inlineads","DIV[id=\"MaxFooterBannerCon\"]","A[href*=\"gamebookers\"],\nA[href*=\"williamhill\"],\nDIV[id=\"MaxFooter\"],\nDIV[id=\"leo14102010e\"],\nDIV[id=\"vavouralis\"],\nIFRAME[src*=\"VistaBet\"]","A[href*=\"spinpalace\"]","#block-views-ads-sidebar-block-block","A[href=\"http://www.amnizia.com/advertisement\"],\nA[href=\"http://www.elcid.com/\"],\nA[href=\"http://www.text-link-ads.com/\"]","#block-kentroxenonglossonlogos,\n#headline","#afdiv","#left-adv,\n#right-adv,\n.disaronnobox","EMBED#efirstPage","strong > a[href^=\"http://autotriti.adman.gr/click\"]","A.fjmdiucexipcopnrmtke",".prices__promoted-separator,\nDIV#shopping-normal,\ndiv[data-is-promoted=\"\"]","A[href*=\"linkwise\"],\nIFRAME.blockrandom","A[href*=\"http://www.capital.gr/click.asp\"],\nTABLE[style=\"border: 1px solid rgb(194, 210, 216); background-color: rgb(240, 248, 255); font-size: 12px; padding: 2px;\"]",".below-facets-ad,\n.carzilla-ad > li,\n[href*=\"funshop.gr\"],\nol > li:has(.carzilla-ad),\nol > li:has([href*=\"funshop.gr\"])","#adLinks","div[class=\"story-textlinks row\"]","#adtxtlink,\n#editor_link[style*=\"background:transparent url(http://www.sport24.gr/incoming/article\"],\n#top_story_wrap > .grid_12 > div:nth-of-type(7) > a[href^=\"http://www.stoiximan.gr\"],\n.mythos,\nA.cokeLink,\nA.cokeLink2,\nA[href*=\"http://www.betclic.com/\"],\nA[href=\"http://goo.gl/3vrB4h\"],\nDIV#bfair,\nDIV.proan,\nDIV[style=\"border-bottom: 5px solid rgb(0, 102, 204); clear: both;\"],\nIMG[alt=\"in association with betoto\"],\ndiv[class=\"ad468\"],\ndiv[class=\"ad728\"],\ndiv[class=\"betotoTxtPrem\"],\ndiv[class=\"bfairTxtPrem txtLink\"],\ndiv[class=\"intTxtPrem txtLink\"],\ndiv[class=\"trailer\"],\ndiv[class=\"txtLink\"],\ndiv[id=\"ctl00_Div1\"],\ndiv[id=\"s2c\"]","#stoiximan-cont > a[href^=\"http://www.stoiximan.gr\"]",".leftClickable,\n.rightClickable","A[href*=\"http://www.plaisio.gr\"]","#first-big-banner,\n.module-shadow","A.sponsLink","#sma-banner-wide,\n#sponsors-mainmodule","#front-banner,\n#front-mobbanner2-container,\n#news-mobdown-title-banner2,\n[id^=\"front-banner\"]",".space3d,\n.td-a-rec,\n.td-pb-span4.tdc-column.vc_column_container.wpb_column.tdi_128.vc_column,\ndiv[id*=\"clever_\"],\niframe[src*=\"unblockia\"]","A[href*=\"http://www.bet-at-home.com/\"]","a.adv-link,\na.notrack","aside",".side,\n.static","#advsliding352,\ndiv[class=\"agores\"]",".deal","#custom_html-11,\n#custom_html-14,\n#custom_html-17,\n#custom_html-24,\n#custom_html-25,\n#custom_html-30,\n#custom_html-4,\n#custom_html-6,\n.afterheader,\n.background-cover,\n.custom-html-widget,\n.e3lan-top","#header-sidebar,\n#sidebar,\n.wpb_single_image:not(#printCover)",".attachment-full.aligncenter,\n.eng_ads,\n.eng_recs_holder","[src*=\"/BANNERS/\"],\n[src*=\"/banners/\"],\ndiv.title.sp-module:nth-of-type(5)",".ads-after-article-body","#crosscol-overflow",".ad-970-250","#text-10,\n#text-16,\n.td_block_widget,\n.vc_widget_sidebar","DIV#b177,\nDIV#b178,\nDIV#b199,\nDIV#b25,\nDIV#b32,\nDIV#b39,\nDIV#b41,\nDIV#b42,\nIMG#BLOGGER_PHOTO_ID_5491192352761655986,\nTD.content.first","#article-ad-container1,\n#article-ad-container3,\n#article-inread-ad-container,\n.print-hide.post-inline-ad",".skinBanner,\n.sw-banner,\nvideo",".sls,\n.srs","DIV#promotext,\nDIV.banner300250,\nDIV.underphoto","#custom_html-2,\n.bos_searchbox_widget_class",".adv,\n.widget_text[class^=\"widget-\"],\n[href^=\"https://casadikouros.gr\"],\n[href^=\"https://istikbalkouros.gr\"],\n[href^=\"https://kriton-energy.com\"],\nimg[src$=\".gif\"]",".td_block_15,\n.td_flex_block,\n.td_mod_wrap,\n.tdi_88_ffb,\n.vc_raw_html","#page-body-header,\n#sidebar-one","#af-preloader,\n.adsbygoogle,\n.theiaStickySidebar",".widget-content",".ad___auto.ad",".banner.medrect,\n.banner.minirect",".bdaia-ad-container,\n.bdaia-bellow-header,\n.bdaia-custom-area > .bd-container > div,\n.bdaia-widget-e3",".superbanner",".header-billboard","IMG[src=\"images/728_generic_betnow.gif\"]","div[align=\"left\"]","div[class=\"lad\"],\ndiv[class^=\"ad\"]","#block-block-11,\n#block-block-247,\n#block-wblocks-wblocks_companies,\n#block-wblocks-wblocks_promoted_companies,\n#content-banner-korios,\n.game-center-matches-item-sponsor,\n.linkLeftCntr,\n.linkRightCntr,\nA.betAtHome,\nA[href*=\"http://ads.meridianbet.gr/\"],\nA[href*=\"http://adserving.unibet.com/\"],\nA[href*=\"http://ff.connextra.com/\"],\nA[href*=\"http://media.mybet.com/\"],\nA[href*=\"http://sportingbet.gr/\"],\nA[href*=\"http://www.novibet.com/Handlers/\"],\nA[href*=\"http://www.sportingbet.gr/paradise-poker/\"],\nA[href*=\"https://www.playbet.com/portal/\"],\nA[href^=\"http://www.bet365.gr/\"],\nDIV[id^=\"block-wadman\"]","#block-views-promoted_companies-block_1","A[href*=\"http://partner.sbaffiliates.com/\"]","#textlinks",".bottom-popout.is-open","A[href*=\"http://bold.adman.gr/\"],\nA[href*=\"http://talos.adman.gr/\"],\nDIV[id*=\"nimbleBuyWidget\"]","DIV[id=\"floatit\"]","P[style=\"color: rgb(255, 0, 0);\"],\ntd[class=\"message-box\"]","DIV[id=\"_atssh\"],\niframe[src=\"*\"]","#rightcolumn > div:nth-of-type(1),\nfooter > div:nth-of-type(1) > div:nth-of-type(2)","A[href*=\"stanjames\"]","#full-width-ad,\n#full-width-ad-inner,\n#taboola-alternating-below-article-3","DIV.bannerhptop",".banner--full,\n.elementor-inner-column.elementor-col-33.elementor-column.elementor-element-79c1.elementor-element.has_ae_slider > .elementor-element-populated.elementor-column-wrap,\n.elementor-inner-column.elementor-col-33.elementor-column.elementor-element-7f24.elementor-element.has_ae_slider > .elementor-element-populated.elementor-column-wrap,\n.elementor-top-column.elementor-col-50.elementor-column.elementor-element-fc62ef0.elementor-element.has_ae_slider > .elementor-element-populated.elementor-column-wrap,\n.elementor-widget-wp-widget-adrotate_widgets.elementor-widget.adrotateSmall.elementor-element-1183.elementor-element,\n.elementor-widget-wp-widget-adrotate_widgets.elementor-widget.elementor-element-5032.elementor-element,\n.elementor-widget-wp-widget-adrotate_widgets.elementor-widget.elementor-element-99aff7b.elementor-element,\n.elementor-widget-wp-widget-adrotate_widgets.elementor-widget.elementor-element-aabbe09.elementor-element,\n.elementor-widget-wp-widget-adrotate_widgets.elementor-widget.elementor-element-f45669a.elementor-element > .elementor-widget-container,\n.elementor-widget-wp-widget-adrotate_widgets.elementor-widget.elementor-element-f8eec79.elementor-element,\n.elementor-widget-wp-widget-adrotate_widgets.elementor-widget.opapad.elementor-element-48f3775.elementor-element > .elementor-widget-container,\n.post-horizad","#HeaderBanner,\n#HomePageRightBanner3,\n#LeftBanner1,\n#LeftBanner2,\n#LeftBanner3,\n#MiddleBanner1,\n#RightBanner1,\n#RightBanner2,\n#RightBanner4,\n#RightBanner5,\n#RightBanner6,\n#RightBanner8,\n#in-home-rel-banners,\n#middle_banner_1,\n#middle_banner_2,\n.is-hidden-xsmall.wrap-das-placeholder,\n.stamps,\nDIV#CenterRectangleBanner.adverticement,\nDIV#RightVerticalBanner.adverticement,\nDIV.admessage,\nDIV[style=\"width: 150px; height: 100px; margin-top: 5px; margin-bottom: 5px;\"],\ndiv[class=\"textlink\"]","[href^=\"https://gml-grp.com/C.ashx\"]","#block-dfptaghome-horizontal-2,\n#block-dfptaghome-vertical-1,\n#block-dfptaghome-vertical-2,\n#block-dfptaghome-vertical-3,\n#block-dfptagside-bar-1-article,\n#block-dfptagside-bar-2-article,\n.in_read_read,\n.tag-billboard.admanager-content,\n.tag-hp_sidebar.admanager-content,\n.tag-novi_banner.admanager-content,\n.tag-sidebar1.admanager-content,\n.tag-sidebar2.admanager-content,\ndiv.banner-place-in",".banner-728x90-top,\n.featured-2,\n.insMainAd.ad.grid--entry","div[class=\"wp125ad odd\"]",".left,\n.right",".asdbg.wrap-right.inarticle-add-mob.inarticle-add",".boxzilla,\n.boxzilla-overlay,\n.itech-adlabel","#mvp-leader-wrap",".OverallBlockBg,\n.ban-box,\n.ban_pushdown,\n.hban,\n.show.catfish_ad,\n.takeover-ban,\ndiv[class*=\"ban_hor_\"]","#nx-stick-help,\n.ad-block-universal,\n.nxAds,\n.nxsidebar","#text-12",".stream-item-top.stream-item,\n.theiaStickySidebar > .widget_custom_html.widget.container-wrapper.widget_text,\n.theiaStickySidebar > .widget_media_image.widget.container-wrapper,\n[href=\"http://poulos-shop.gr\"],\n[href=\"http://www.toolpoint.gr\"]","div[class=\"RightColumnBanners\"],\ndiv[class=\"bannerTables\"]","#topfeatured,\n.alignleft.size-full.wp-image-16703,\n.box_banner,\n.top_ad_big,\n.wpbrbannerinside",".banner","#carousel-1",".container-full-width.container","#underUnderRotator,\n#widgetAD > div,\n.above-row,\n.fixedbottom,\n.head728,\n.home-aggelies,\n.module:nth-of-type(3),\n.underRotatorAd590,\n.underRotatorModuleAd590,\ndiv[id^=\"div-gpt-ad\"]",".custom_area_single_01,\n.elementor-element-3db4f540,\n.elementor-element-5680254d,\n.elementor-element-5716b5fa,\n.elementor-element-c2a8f89,\n.elementor-section-items-middle,\n.elementor-widget-image,\n.jeg_ad,\n.widget_sp_image,\n[class^=\"custom_position_single\"]",".region-banner-top.region.row","#itrofi-left,\n#itrofi-right,\n.bannerContent","DIV.textLink",".a-42.a-single,\n.a-46.a-single > [href=\"https://www.badrabbit.gr/\"],\n.td_single_image_bg,\n.widget_custom_html.custom_html-2,\n.widget_media_image","#skin-container","#box_text_ads","#text-88 > .textwidget",".is-relative.extra-sidebar",".float-right.header-ainfo",".cityAdv,\n.newsbeast","#\\5f widget-5,\n#text-202339834,\nA[href*=\"http://www.ez-smoke.net/\"],\nA[href*=\"http://www.indolucky7.com/sbobet/sbobet.html\"],\nA[href=\"http://www.mp4converter.net/dvd-ripper-mac.html\"]",".in-feed-banner,\n.mt-0.text-center.banner,\n.order-md-1.order-0.sidebar-widget","#leftboxhome,\n#rightboxhome,\n.leftbox,\n.rightbox,\na[href=\"http://www.myphone.gr/forum/\"] > img","#google_ads_container","DIV.banner",".naxos-pano-apo-tin-epikefalida-se-ola,\n.td-fix-index.tdb-block-inner > .naxos-target.naxos-meta-to-periechomeno",".ctHomesidebar,\n.ctMainPostAds","DIV#advsliding258","div.games","DIV[style=\"background: url(\\\"Themes/1/Default/Media/image-ads-sponsor.jpg\\\") no-repeat scroll left center rgb(243, 243, 243); text-align: center; border-bottom: 1px solid rgb(230, 230, 230); padding: 4px 0px;\"],\nDIV[style=\"background:url(Themes/1/Default/Media/image-ads-sponsor.jpg) no-repeat left;  text-align:center;background-color: #F3F3F3;border-bottom:1px solid #E6E6E6;padding:4px 0px;\"]","#editor_link,\n#link-deliveras,\n#mainContent > .alpha.grid_12 > .bolder.lineborder,\n#mainContent > .alpha.grid_12 > .main.default.stories:nth-of-type(4),\n#mainContent > .alpha.grid_12 > .main.default.stories:nth-of-type(5),\n#mainContent > .alpha.grid_12 > .main.default.stories:nth-of-type(6),\n#mainContent > .alpha.grid_12 > .main.default.stories:nth-of-type(8),\n.adSlot-height--premium.code-widget,\n.hp_billboard_a.ads_element,\n.hp_section_b.ads_element,\n.hp_section_c.ads_element,\n.hp_section_d.ads_element,\n.hp_section_e.ads_element,\n.latest_stories.ads_element,\n.minHeight--400,\n.seatimage,\nDIV[class=\"dheadRightBoxBot\"],\ndiv[class=\"banner\"]","#secondary","#adFixFooter,\n#artFoot,\n#imgAd,\n.amSlotInReadVideo.jsx-3307064496,\n.doNotPrint.amSlotFeed.jsx-2939975430,\n.icon-popular.nespressoAdd,\n.menuAdd,\n.topShare_textad,\n.txtLinks,\n.undeMenuAmSlot2.skinContained.doNotPrint.amSlot.jsx-426522538,\nA[href*=\"http://bs.serving-sys.com/\"],\ndiv.sidebarAmSlot.jsx-1829390467","#json-textlinks,\n.skin-link,\nDIV[style=\"mergin:5px 0\"]","#left,\n#right,\n#sponsor-link,\nDIV[style=\"margin: 10px 0 0 0; display: block;clear:both;\"]",".sidebar,\naside.pospromo","#ctl00_articleLeftColumn_ctl04_adRotatorUpdatePanel,\n#ctl00_articleLeftColumn_ctl05_adRotatorUpdatePanel,\n#ctl00_articleLeftColumn_ctl06_adRotatorUpdatePanel,\n#ctl00_topBannersRight_ctl00_adRotatorUpdatePanel,\n.top_banners_outer","TABLE#bannerLandscape",".topClickable","div[class=\"story-textlinks\"]","DIV[style=\"border: 1px solid rgb(224, 224, 224); padding: 2px; margin-left: 20px; background-color: rgb(244, 244, 252); width: 140px; font-size: 12px;\"]","#banners,\n.banners_mid_2","div.banner","#googleNewsBanner,\n#header > .span8,\n#sp-content-top-left > .visible-desktop.module,\n#sp-content-top-right > div.module > .clearfix.mod-wrapper > .clearfix.mod-content > .clearfix.mod-inner > .custom,\n#sp-right > div.module > .clearfix.mod-wrapper > .clearfix.mod-content > .clearfix.mod-inner > .custom,\n.clever_41786_pushdown,\n.yeslidergroup,\ndiv#sas_placement1119:nth-of-type(5),\ndiv.module:nth-of-type(9),\ndiv[id^=\"hstp-\"]","div[id^=\"epom-\"]","div[id=\"ad-links\"]","#block-block-40,\n#block-block-41,\n#left-ad-container,\n#region-sidebar-second,\n#right-ad-container,\n.block-header-728x90","#text-64,\n#text-65,\ndiv.single-subscribe-block","#text-19",".banner-centered,\n.mobile-reverse:has(div[id^=\"div-gpt-\"]),\n.tw-50[style^=\"overflow\"]",".big-banner-top,\n.main-margin.container > .newstrack-content.row > .post-margin-right.col-xs-8.col-md-8 > .waypoints.post-content > .affiliate > .textwidget",".banneritem",".cs-banner-elementor,\n.cs-sidebar__area.cs-widget-area,\n.elementor-widget-image.elementor-widget.elementor-element-0023e56.elementor-element,\n.elementor-widget-image.elementor-widget.elementor-element-83f1fd8.elementor-element,\n.elementor-widget-image.elementor-widget.elementor-element-9f5026d.elementor-element,\n.elementor-widget-image.elementor-widget.elementor-element-d8db731.elementor-element,\n.elementor-widget-image.elementor-widget.elementor-element-f67660b.elementor-element,\n.elementor-widget-image.elementor-widget.elementor-element-fda8036.elementor-element,\n.elementor-widget-shortcode.elementor-widget.elementor-element-187d168.elementor-element,\n.elementor-widget-shortcode.elementor-widget.elementor-element-697f9a4.elementor-element,\n.elementor-widget-shortcode.elementor-widget.elementor-element-9b1d83d.elementor-element,\n.elementor-widget-shortcode.elementor-widget.elementor-element-d4636fd.elementor-element,\n.single-ads","div.wrap-prodeals-widget","#provoc_sidebar_1,\n#provoc_sidebar_2,\n#provoc_sidebar_3,\n.billboardCnt,\n.billboardStickyWrap.container,\ndiv.inArticleLG",".wide-banner","#realTopBanner,\n#realTopBannerGap,\n.banner-wrapper","#right_col,\n.gk_tab_container0-style1,\n.gk_tab_wrap-style1","body > table:nth-of-type(2)","DIV.banners","IMG[src=\"images/betathome.jpg\"]","#sp-banners-carousel,\n#sp-banners-top,\n#sp-left,\n#sp-right,\n.sp-page-title,\n.sppb-section-content-center","DIV.banner-side,\nDIV[style=\"width: 285px; float: right; overflow: hidden;\"]","#box-sponsors",".skin.news[href=\"https://www.facebook.com/NAIstinEllada\\A \"],\nDIV#jw_wwg,\nDIV#kw_logo,\nDIV[id=\"sony-internet-tv-holder\"],\nSPAN#jwlogo","#banner_160_filters,\n#banner_160_home,\n#banner_728_home,\n#new_contract_online_overlay,\n#sponsorship,\n.labeled-item.with-skus-slider.card.cf,\n.product-ad,\n.s_call_to_action,\n.selected-product-cards,\nDIV[id=\"afc\"],\nDIV[id=\"home_728x90\"],\nli.labeled-product.labeled-item.card.cf","#backgroundlink,\n.textlinks,\nA.banner,\nA.footballbet,\nA.ga_track,\nA[href*=\"/specials/williamhill?\"],\nA[href*=\"http://www.e-germanos.gr\"],\nA[href=\"#0.1_\"],\nDIV[id=\"seios-link\"],\nLI.blue.casino,\nLI.blue.poker,\nSPAN.icon.icon-latest-news-ad","DIV.text-link-container.marg-top-10,\nDIV[style=\"float: left; width: 70px; padding-top: 7px;\"]","#editor_link[style*=\"background:transparent url(http://www.contra.gr/Columns/article\"],\n#hp_300x250a,\n#hp_300x250b,\n#hp_300x250c,\n#hp_300x250d,\n#page > .content-top-wrap,\n#someplaceholder,\n.BetPartnersWidget--show-bet.BetPartnersWidget,\n.article-single__body > .content-thirdParty,\n.article-single__body > .creative_placeholder.content-thirdParty,\n.content-thirdParty,\n.premium_banner,\nA[class=\"ad\"],\nA[href*=\"acidbet.gr\"],\nA[href*=\"betclic.com\"],\nA[href*=\"doubleclick.net\"],\nA[href*=\"e-shop.gr\"],\nA[href*=\"http://www.menperfect.gr\"],\nA[href*=\"http://www.sport24.gr/html/ent/042/ent.374042.asp\"],\nA[href*=\"http://www.sport24.gr/html/ent/765/ent.371765.asp\"],\nA[href*=\"mens-x.gr\"],\nA[href*=\"www.bwin.com\"],\nDIV.code.currentArea-logo,\n[href^=\"https://www.bet365.gr/olp/open-account\"],\n[id^=\"ros\"],\ndiv.ad,\ndiv[id^=\"ENGAGEYA\"]","#RightBanner3,\n#RightBanner7,\n#middlebanner3","#advertisment","#ad-box-right,\nA[href*=\"http://serve.williamhillcasino.com/\"]","#box-block-block-12",".textlink","#fasa,\n#text-39,\n.mobile_adv",".custom-html-widget2,\ncenter",".code-block-6,\n.header-promo,\n.thene-prin-to-arthro,\n.thene-widget","#kalogritsas300","#g-content-top-a,\n.customhidden-mobile,\n.moduletable.sideAdvertFix,\n.moduletable.sideFix,\n.sponsor","#sidebar > .widget_block.widget,\n#under-post-content,\n.before-content.section,\n.content-inner > .footer-wide.section,\n.owl-stage-outer,\n.size-full.wp-image-110042.aligncenter,\n.size-full.wp-image-122324.aligncenter,\n.wp-image-120708.size-full.aligncenter,\n.wp-image-120723.size-full.aligncenter","#content > div.center:has(> div.content-wrapper > div.taboola-feed),\n#sma-top-box > .boxHead_TopBar,\n.advert,\n.blog-list > div.blog-post:has(> div.abs),\n.sidebar-wrapper > div.sticky-block:has(> div.advert),\n.sticky-block:has(> div.sticky > div.advert),\ndiv[style=\"height:286px;\"]","#MAINAD-box,\n.ADBox","#BannerCategArticle300Right1,\n#BannerCategArticle300Right2,\n#BannerCategArticle300Right3,\n#BannerCategArticle300Right4,\n#Categheaderbanner728,\n#Homeheaderbanner728","DIV#HTML14,\nDIV#HTML15","A[href*=\"http://www.kazinoinfo.com/\"],\nDIV.box_main_ads","#wholesite1 > a[href^=\"http://jobby.gr\"],\n.cls-sticky-wrapper,\nDIV[class=\"subBanner\"],\nDIV[id=\"sb-container\"]","#after-popular,\n#inside-banner-1,\n#inside-banner-2,\n#inside-banner-3,\n#top-banner,\n.banner-min-h-600,\n.inside-articles-banner","#frame_id_1,\n#frame_id_2,\n.central_banner_area,\n.hyperad_iframe,\n.new60sbanners,\n[href=\"http://www.escore.gr/\"],\ndiv.adds_sec:nth-of-type(4),\ndiv.adds_sec:nth-of-type(5)",".HTML.widget:not(:last-child) > div:first-child","#ad_13_left_1",".row.sidebar-nav","#financial_widget > .financial_widget_top_line.financial_widget_line > .financial_widget_top_line_medium.financial_widget_line_medium > .peiraios_link[href=\"http://www.piraeusbankgroup.com/\"],\nEMBED#mymovie","A#promoLink",".connxtvscroll","#main-content > .content-wrap:nth-of-type(1) > .content > .candiabanners-index","#top_story_wrap > .grid_12 > div:nth-of-type(8) > a[href^=\"https://www.stoiximan.gr\"]",".cart-reminder",".left_fixed,\n.right_fixed","#ipbwrapper > .bgad[href=\"http://www.kotsovolos.gr/site/mobile-phones-gps/mobile-phones/smartphones?v=0&company=Apple&11202=44834&utm_source=insomnia.gr&utm_medium=skin&utm_content=NEWiphone6s-6splus-insomnia-skin-2015&utm_campaign=iphone6s-6splus-insomnia-\"]","#banner-top-container,\n#left-dress2,\n.banner-side-collection,\n.categories2:nth-of-type(3)","#das_out,\n.textads-wrapper,\na[href*=\"/lines/click/\"]","#featurette",".bet-logos","#main > .ads,\n.aside",".ad__desktop.ad__div,\n.ad__div,\ndiv.sticky-el.ad__desktop.ad__div","#AdPremiumSticky","[href*=\"adman.gr\"]","[href*=\"bit.ly\"]",".infacets.maskshop,\n.inlist.maskshop","a[href=\"http://www.kratisinow.gr\"],\niframe[src=\"http://kratisinow.digitup.eu/widget/widget-artists\"]",".text-center.local-guides__banner","#header_billboard,\n.sticky-diaf.wrap-diaf,\n.top-diaf.wrap-diaf,\ndiv.widget.widget-diaf","A[href*=\"ad-emea.doubleclick.net/click\"],\nIMG[src*=\"ad-emea.doubleclick.net/\"]",".adResult",".ad_wrapper",".pub_300x250,\n.pub_300x250m,\n.pub_728x90,\n.text-ad,\n.text-ad-links,\n.text-ads,\n.textAd,\n.text_ad,\n.text_ads"];

const hostnamesMap = new Map([["2810.gr",0],["adslgr.com",1],["aegeanews24.gr",2],["aek365.com",3],["aek365.gr",[3,4,5]],["milaraki.com",[5,106]],["techteam.gr",5],["alterthess.gr",6],["amnizia.com",7],["anagnostis.org",8],["antenna.gr",9],["athinorama.gr",10],["auto24.gr",11],["autotriti.gr",12],["avgi.gr",13],["bestprice.gr",14],["bno.gr",15],["capital.gr",16],["car.gr",17],["clickatlife.gr",18],["cnn.gr",19],["contra.gr",[20,21,22,23]],["www.sport24.gr",[21,192]],["cosmo.gr",[22,25]],["www.techgear.gr",[22,190]],["sport-fm.gr",[23,110,152]],["sport24.gr",[23,154]],["corfuland.gr",24],["cretalive.gr",26],["crete2day.com",27],["cyclades24.gr",28],["derby.gr",29],["gazzetta.gr",[29,62,63,64]],["dialogos.com.cy",[30,31]],["newmoney.gr",[31,114]],["philenews.com",31],["dokari.gr",32],["e-go.gr",[33,34]],["ethnos.gr",[34,46,47]],["imerisia.gr",[34,46,74]],["e-ptolemeos.gr",35],["e-thessalia.gr",36],["efsyn.gr",37],["eleftheria.gr",38],["eleftherostypos.gr",39],["elektronikosanagnostis.blogspot.com",40],["veriotis.gr",[40,130,174]],["energypress.gr",41],["emvolos.gr",42],["enet.gr",43],["enikos.gr",44],["enimerosi.com",45],["eviaportal.gr",48],["evros-news.gr",49],["filadelfia-xalkidona.gr",50],["fileleutheros.net",51],["filoitexnisfilosofias.com",52],["fimotro.blogspot.com",53],["www.flash.gr",54],["flix.gr",55],["fonien.gr",56],["forthnet.gr",57],["galinos.gr",58],["gamato.info",59],["gasprice.gr",60],["gato.gr",61],["sportdog.gr",63],["in.gr",[64,76]],["gossip-tv.gr",[65,66]],["newsbomb.gr",[65,119]],["onsports.gr",[65,66]],["gr",67],["greekddl.com",68],["greeksubtitlesproject.com",69],["hiphop.gr",70],["i-kyr.gr",71],["i-live.gr",72],["iefimerida.gr",73],["imerodromos.gr",75],["inpaok.com",77],["insider.gr",78],["insomnia.gr",79],["interesting.gr",80],["inthevip.gr",81],["ipaidia.gr",82],["itechnews.gr",83],["kalamatatimes.gr",84],["kathimerini.com.cy",85],["kathimerini.gr",86],["katohika.gr",87],["kavalapoint.gr",88],["kerdos.gr",89],["koutipandoras.gr",[90,91]],["live24.gr",[91,97]],["monobala.gr",[91,107]],["politis.com.cy",[91,135]],["popaganda.gr",[91,136]],["skai.gr",[91,150]],["kozanilife.gr",92],["krinilive.gr",93],["lamiareport.gr",94],["larissanet.gr",95],["lesvosnews.net",96],["livescores.gr",98],["logotypos.gr",99],["luben.tv",100],["madata.gr",101],["makeleio.gr",102],["megatv.com",103],["mesogianews.gr",104],["meteo.gr",105],["myphone.gr",108],["naftemporiki.gr",[109,110]],["naxospress.gr",111],["naxostimes.gr",112],["new.e-go.gr",113],["news.in.gr",115],["news247.gr",116],["newsauto.gr",117],["start2click.com",117],["newsbeast.gr",118],["newsit.gr",120],["nickelodeon.gr",121],["nooz.gr",122],["oddbanner.bet-at-home.com",123],["oneman.gr",124],["onmed.gr",125],["opensoft.gr",126],["oroskopos.gr",127],["parapolitika.gr",128],["parianostypos.gr",[129,130]],["pathfinder.gr",131],["patrainews.gr",132],["pcsteps.gr",133],["pitsirikos.net",134],["prismanews.gr",137],["proininews.gr",138],["pronews.gr",139],["provocateur.gr",140],["queen.gr",141],["real.gr",142],["realestatenews.gr",143],["runningnews.gr",144],["www.trinews.gr",144],["sday.gr",145],["sentragoal.gr",146],["serraikanea.gr",147],["sfl.com.gr",148],["shopping.pathfinder.gr",149],["skroutz.gr",151],["sport.gr",153],["sports.in.gr",155],["stonisi.gr",156],["subs4free.com",157],["supersyntages.gr",158],["tanea.gr",159],["tovima.gr",[159,168]],["techgear.gr",160],["tharrosnews.gr",161],["thenewspaper.gr",162],["thepressproject.gr",163],["thestival.gr",164],["tirnavospress.gr",165],["tlife.gr",166],["toarkoudi.gr",167],["tro-ma-ktiko.blogspot.com",169],["tvsubtitles.gr",170],["tvxs.gr",171],["unboxholics.com",172],["usay.gr",173],["vimaonline.gr",175],["voicenews.gr",176],["voria.gr",177],["williamhill.com",178],["womenonly.gr",179],["www.candiadoc.gr",180],["www.contra.gr",[181,192]],["www.e-food.gr",182],["www.eklogika.gr",183],["www.insomnia.gr",184],["www.kritikes-aggelies.gr",185],["www.lifo.gr",186],["www.skroutz.gr",187],["www.sport-fm.gr",188],["www.taxheaven.gr",189],["www.xo.gr",191],["www.news247.gr",[192,193]],["www.car.gr",194],["www.dwrean.net",195],["xo.gr",196],["ypodomes.com",197],["zoomnews.gr",198],["aggeliestanea.gr",199],["athensmagazine.gr",200],["www.ediva.gr",201]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map(undefined);

self.specificImports = self.specificImports || [];
self.specificImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/

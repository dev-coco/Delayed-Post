var timeline = document.querySelectorAll('[class*="oajrlxb2"][class*="s1i5eluu"][class*="qu0x051f"][class*="esr5mh6w"][class*="e9989ue4"][class*="r7d6kgcz"][class*="rq0escxv"][class*="nhd2j8a9"][class*="pq6dq46d"][class*="p7hjln8o"][class*="kvgmc6g5"][class*="cxmmr5t8"][class*="oygrvhab"][class*="hcukyx3x"][class*="cxgpxx05"][class*="d1544ag0"][class*="sj5x9vvc"][class*="tw6a2znq"][class*="oqcyycmt"][class*="esuyzwwr"][class*="f1sip0of"][class*="lzcic4wl"][class*="l9j0dhe7"][class*="abiwlrkh"][class*="p8dawk7l"][class*="ehryuci6"][class*="bp9cbjyn"][class*="beltcj47"][class*="p86d2i9g"][class*="aot14ch1"][class*="kzx2olss"][class*="rt8b4zig"][class*="n8ej3o3l"][class*="agehan2d"][class*="sk4xxmp2"][class*="lrazzd5p"][class*="gigivrx4"][class*="sf5mxxl7"][class*="g0qnabr5"][class*="lrwzeq9o"][class*="iqfcb0g7"][class*="lsqurvkf"][class*="id6903cd"][class*="jq4qci2q"][class*="m5l1wtfr"][class*="taijpn5t"][class*="sn7ne77z"][class*="oqhjfihn"][class*="bwm1u5wc"]');
var group = document.querySelectorAll('[class*="oajrlxb2"][class*="s1i5eluu"][class*="gcieejh5"][class*="bn081pho"][class*="humdl8nn"][class*="izx4hr6d"][class*="rq0escxv"][class*="nhd2j8a9"][class*="j83agx80"][class*="p7hjln8o"][class*="kvgmc6g5"][class*="cxmmr5t8"][class*="oygrvhab"][class*="hcukyx3x"][class*="jb3vyjys"][class*="d1544ag0"][class*="qt6c0cv9"][class*="tw6a2znq"][class*="i1ao9s8h"][class*="esuyzwwr"][class*="f1sip0of"][class*="lzcic4wl"][class*="l9j0dhe7"][class*="abiwlrkh"][class*="p8dawk7l"][class*="beltcj47"][class*="p86d2i9g"][class*="aot14ch1"][class*="kzx2olss"][class*="cbu4d94t"][class*="taijpn5t"][class*="ni8dbmo4"][class*="stjgntxs"][class*="k4urcfbm"][class*="tv7at329"]');
var share_to_group = document.querySelectorAll('[class*="oajrlxb2"][class*="oo1teu6h"][class*="gcieejh5"][class*="bn081pho"][class*="humdl8nn"][class*="izx4hr6d"][class*="rq0escxv"][class*="nhd2j8a9"][class*="j83agx80"][class*="p7hjln8o"][class*="kvgmc6g5"][class*="cxmmr5t8"][class*="oygrvhab"][class*="hcukyx3x"][class*="jb3vyjys"][class*="d1544ag0"][class*="qt6c0cv9"][class*="tw6a2znq"][class*="i1ao9s8h"][class*="esuyzwwr"][class*="f1sip0of"][class*="lzcic4wl"][class*="l9j0dhe7"][class*="abiwlrkh"][class*="p8dawk7l"][class*="beltcj47"][class*="p86d2i9g"][class*="aot14ch1"][class*="kzx2olss"][class*="cbu4d94t"][class*="taijpn5t"][class*="ni8dbmo4"][class*="stjgntxs"][class*="k4urcfbm"][class*="tv7at329"]');
var set_time = prompt("请设置时间，分钟单位。", "");
var url = window.location.href.match(/group/g);
if (url == "group") {
    if (group.length == 2) {
        setTimeout(function() {
            group[1].click();
        }, set_time * 60 + "000");
    } else {
        setTimeout(function() {
            group[2].click();
        }, set_time * 60 + "000");
    }
} else {
    if (share_to_group.length == 1) {
        setTimeout(function() {
            share_to_group[0].click();
        }, set_time * 60 + "000");
    }
    setTimeout(function() {
        timeline[0].click();
    }, set_time * 60 + "000");
}

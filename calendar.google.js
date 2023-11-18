const styles = `:root {
	color-scheme: dark;
    --primary: rgb(26,115,232);
    --primary-variant: rgb(66,133,244);
    --on-primary: #fff;
    --secondary: rgb(232,240,254);
    --secondary-variant: rgb(210,227,252);
    --on-secondary: rgb(25,103,210);
    --on-secondary-variant: rgb(24,90,188);
    --surface: #202123;
    --surface-transparent: rgba(32,33,35,0);
    --on-surface: #fff;
    --on-surface-variant: #B0B2B4;
    --on-surface-variant-agm: #70757a;
    --background: #202123;
    --on-background: rgb(32,33,36);
    --textfield-surface: rgb(32, 33, 35);
    --textfield-primary: rgb(25,103,210);
    --textfield-hairline: rgb(128,134,139);
    --textfield-error: rgb(197,34,31);
    --textfield-on-surface-variant: rgb(95,99,104);
    --hairline: rgb(32, 33, 35);
    --error: rgb(217,48,37);
    --on-error: #fff;
    --shadow-1: 0px 1px 2px 0px rgba(60,64,67,0.3),0px 1px 3px 1px rgba(60,64,67,0.15);
    --shadow-5: 0px 4px 4px 0px rgba(60,64,67,0.3),0px 8px 12px 6px rgba(60,64,67,0.15);
    /* --fab: rgba(255,255,255,0.502); */
    /* --fab-hover: #f6fafe; */
    --dimmed: rgba(32,33,36,0.38);
    --chip-hover: rgb(241,243,244);
    --now: rgb(234,67,53);
}

.akJTWe {
	background-color: var(--background) !important;
	color: #fff !important;
}

.XnnJrc.Wyo4Qe .TKMrfe {
	background-color: var(--background) !important;
}

.gb_Na .gb_eb .gb_Rd .gb_kd .NkK3Fc .gb_Xc {
	background-color: var(--background) !important;
}

.NkK3Fc span[role=heading] {
	color: #fff !important;
}

.gb_Na svg, .gb_Rc svg, .gb_dd .gb_ld, .gb_3c .gb_ld {
	color: #fff !important;
}

.mr0WL {
    color: #000 !important;
}

.gb_Na gb_eb gb_Rd gb_kd gb_Xc NkK3Fc {
    background-color: var(--background) !important;
}

.xYvThe:not(:disabled), .yR9sJd.yR9sJd:not(:disabled) {
    color: #fff !important;
}

.EHzcec {
    background-color: #202123 !important;
}

.Rq5Gcb {
    color: #fff !important;
}

.JJyfjc, .ec9Aq {
    color: #fff !important;
}

.yzifAd {
    color: #000 !important;
}

.g3dbUc.smECzc.UflSff.jKgTF.QGRmIf {
    background-color: rgb(179, 225, 247) !important;
}

.J0Jt0d.BdCDHc {
    color: #000 !important;
    font-weight: bold !important;
}

.VfPpkd-xl07Ob-XxIAqe.VfPpkd-xl07Ob.q6oraf.P77izf.hxbWqd.VfPpkd-xl07Ob-XxIAqe-OWXEXe-uxVfW-FNFY6c-uFfGwd.VfPpkd-xl07Ob-XxIAqe-OWXEXe-FNFY6c {
    background-color: var(--background) !important;
}

.VfPpkd-StrnGf-rymPhb-b9t22c {
    color: #fff !important;
}

.VfPpkd-xl07Ob-XxIAqe.VfPpkd-xl07Ob.q6oraf.P77izf.xAHiW.VfPpkd-xl07Ob-XxIAqe-OWXEXe-uxVfW-FNFY6c-uFfGwd.VfPpkd-xl07Ob-XxIAqe-OWXEXe-FNFY6c {
    background-color: var(--background) !important;
}

.DWWcKd-OomVLb-LgbsSe-Bz112c-haAclf {
    filter: invert(1) !important;
}

.gHQcAb {
    background-color: var(--background) !important;
}

.VKy0Ic[aria-selected=true] {
    color: var(--background) !important;
}`;


//! NO TOUCHING ZONE


function injectStyles(css) {
    const styleElement = document.createElement('style');
    styleElement.setAttribute('id', 'darkModeForGoogleWebAppsCSS');
    styleElement.textContent = css;

    document.head.appendChild(styleElement);
    return;
};

function removeStyles(id) {
    const el = document.getElementById(`style#${id}`);
    el.remove();
    return;
};

injectStyles(styles);

// remove header styles
document.querySelector('header#gb').removeAttribute('style');


document.body.classList.toggle('dark-mode');
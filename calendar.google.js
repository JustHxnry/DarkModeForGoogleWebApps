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

injectStyles(`:root {
    color-scheme: dark;
    
    --primary: rgb(0, 122, 255);
    --primary-variant: rgb(10, 132, 255);
    --on-primary: #fff;
    
    --secondary: rgb(41, 41, 41);
    --secondary-variant: rgb(33, 33, 33);
    --on-secondary: rgb(174, 174, 174);
    --on-secondary-variant: rgb(204, 204, 204);
    
    --surface: #121212;
    --surface-transparent: rgba(18, 18, 18, 0);
    --on-surface: rgb(255, 255, 255);
    --on-surface-variant: rgb(238, 238, 238);
    --on-surface-variant-agm: #70757a;
    
    --background: #121212;
    --on-background: rgb(255, 255, 255);
    
    --textfield-surface: rgb(81, 81, 81);
    --textfield-primary: rgb(174, 174, 174);
    --textfield-hairline: rgb(174, 174, 174);
    --textfield-error: rgb(197, 34, 31);
    --textfield-on-surface-variant: rgb(204, 204, 204);
    
    --hairline: rgb(66, 66, 66);
    
    --error: rgb(255, 69, 58);
    --on-error: #fff;
    
    --shadow-1: 0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);
    --shadow-5: 0px 4px 4px 0px rgba(0, 0, 0, 0.3), 0px 8px 12px 6px rgba(0, 0, 0, 0.15);
    
    --fab: rgba(0, 122, 255, 0.502);
    --fab-hover: #f6fafe;
    
    --dimmed: rgba(255, 255, 255, 0.38);
    --chip-hover: rgb(81, 81, 81);
    
    --now: rgb(255, 69, 58);
    }`);

document.body.classList.toggle('dark-mode');
function goPage(i){
    switch(i)
    {
        case 0:
            if(window.location.href==new URL('/Users/tikho/sportalfa/index.html','file:///C:').href) window.location.replace('pages/About.html');
            else if(window.location.href!=new URL('/Users/tikho/sportalfa/pages/About.html','file:///C:').href) window.location.replace('../pages/About.html');
            else window.location.reload();
            break;
        case 1:
            if(window.location.href==new URL('/Users/tikho/sportalfa/index.html','file:///C:').href) window.location.replace('pages/Cost.html');
            else if(window.location.href!=new URL('/Users/tikho/sportalfa/pages/Cost.html','file:///C:').href) window.location.replace('../pages/Cost.html');
            else window.location.reload();
            break;    
        case 2:
            if (window.location.href==new URL('/Users/tikho/sportalfa/index.html','file:///C:').href) window.location.replace('pages/About.html');  
            break;
    }
}
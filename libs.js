function thisPrint(obj) {
    window.onafterprint.html=document.body.innerHTML;
    document.body.innerHTML = obj.outerHTML;
    window.print();
}

window.onafterprint = function() {
    if(window.onafterprint.html) {
        document.body.innerHTML = window.onafterprint.html;
        window.onafterprint.html = null;
    }
}

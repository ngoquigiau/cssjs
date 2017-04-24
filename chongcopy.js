function FSAddOriginalLink(){
    var body_element = document.getElementsByTagName('body')[0];
    var selection;
    selection = window.getSelection();
    var pagelink = "<br/><br/>MUON COPY THI VAO DAY : <a href='https://www.facebook.com/C%C4%83n-h%E1%BB%99-centana-th%E1%BB%A7-thi%C3%AAm-1253971348031947/'>https://www.facebook.com/C%C4%83n-h%E1%BB%99-centana-th%E1%BB%A7-thi%C3%AAm-1253971348031947/"+document.location.pathname+"</a>";
    var copytext = pagelink;
    var newdiv = document.createElement('div');
    newdiv.style.position='absolute';
    newdiv.style.left='-99999px';
    body_element.appendChild(newdiv);
    newdiv.innerHTML = copytext;
    selection.selectAllChildren(newdiv);
    window.setTimeout(function() {
        body_element.removeChild(newdiv);
    },0);
}
document.oncopy = FSAddOriginalLink;

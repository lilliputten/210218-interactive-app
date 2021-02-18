let html = document.getElementsByTagName('HTML')[0];
let button = document.getElementById('button');
let end = document.getElementById('end');
let height = 100;



button.onclick = function() {
    height += 100;
    html.style.height = height + 'px';
}

end.onclick = function() {
    location.reload();
}
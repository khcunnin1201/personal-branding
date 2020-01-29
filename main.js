function renderTech() { 
    fetch('techskill.json')
    .then((response) => response.json())
    .then((data) => {
        var builtUpHTML = '<ul>';
        // data.forEach((x) => builtUpHTML += `<li><a href="${x.url}" title="${x.title}"><img src="${x.thumbnailUrl}"/></a></li>`);
        data.forEach((x) => builtUpHTML += `<li>${x.techskill}</li>`);
        builtUpHTML += '</ul>';
        document.getElementById('tech').innerHTML = builtUpHTML;
        });
}
renderTech();

function renderMgmt() { 
    fetch('mgmtskill.json')
    .then((response) => response.json())
    .then((data) => {
        var builtUpHTML = '<ul>';
        // data.forEach((x) => builtUpHTML += `<li><a href="${x.url}" title="${x.title}"><img src="${x.thumbnailUrl}"/></a></li>`);
        data.forEach((x) => builtUpHTML += `<li>${x.mgmtskill}</li>`);
        builtUpHTML += '</ul>';
        document.getElementById('mgmt').innerHTML = builtUpHTML;
        });
}
renderMgmt();

function renderPort() { 
    fetch('portfolio.json')
    .then((response) => response.json())
    .then((data) => {
        var builtUpHTML = '<ul>';
        data.forEach((x) => builtUpHTML += `<li><a href="${x.url}" title="${x.description}"><img src="${x.image}"/></a></li>`);
        builtUpHTML += '</ul>';
        document.getElementById('port').innerHTML = builtUpHTML;
        });
}
renderPort();
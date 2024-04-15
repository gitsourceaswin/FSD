var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
            var xml = xhr.responseXML;
            var xsl = new XMLHttpRequest();
            xsl.onreadystatechange = function() {
                if (xsl.readyState === XMLHttpRequest.DONE) {
                    if (xsl.status === 200) {
                        var xsltProcessor = new XSLTProcessor();
                        xsltProcessor.importStylesheet(xsl.responseXML);
                        var resultDocument = xsltProcessor.transformToFragment(xml, document);
                        var tableBody = document.querySelector('#studentTable tbody');
                        tableBody.innerHTML = '';
                        tableBody.appendChild(resultDocument);
                    } else {
                        console.error('Failed to fetch XSLT stylesheet.');
                    }
                }
            };
            xsl.open('GET', 'students_transform.xsl', true);
            xsl.send(null);
        } else {
            console.error('Failed to fetch XML data.');
        }
    }
};
xhr.open('GET', 'students.xml', true);
xhr.send(null);

function toggleAccordion(id) {
    var accordion = document.getElementById(id);
    if (accordion.style.display === "none") {
        accordion.style.display = "block";
    } else {
        accordion.style.display = "none";
    }
}

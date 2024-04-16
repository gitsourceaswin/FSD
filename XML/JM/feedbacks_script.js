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
                        var tableBody = document.querySelector('#feedbackTable tbody');
                        tableBody.innerHTML = '';
                        tableBody.appendChild(resultDocument);
                    } else {
                        console.error('Failed to fetch XSLT stylesheet.');
                    }
                }
            };
            xsl.open('GET', 'feedbacks_transform.xsl', true);
            xsl.send(null);
        } else {
            console.error('Failed to fetch XML data.');
        }
    }
};
xhr.open('GET', 'feedbacks.xml', true);
xhr.send(null);

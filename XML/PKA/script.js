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
                        var transformedResult = xsltProcessor.transformToFragment(xml, document);
                        var resultsContainer = document.getElementById('resultsContainer');
                        resultsContainer.innerHTML = '';
                        resultsContainer.appendChild(transformedResult);
                    } else {
                        console.error('Failed to fetch XSLT stylesheet.');
                    }
                }
            };
            xsl.open('GET', 'results_transform.xsl', true);
            xsl.send(null);
        } else {
            console.error('Failed to fetch XML data.');
        }
    }
};
xhr.open('GET', 'results.xml', true);
xhr.send(null);

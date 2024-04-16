<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
    <html>
        <head>
            <title>Fee Details</title>
            <link rel="stylesheet" type="text/css" href="fees_styles.css"/>
        </head>
        <body>
            <h1>Fee Details</h1>
            <table id="feeTable">
                <thead>
                    <tr>
                        <th>Particular</th>
                        <th>Total Fee</th>
                        <th>Applicable Fee</th>
                    </tr>
                </thead>
                <tbody>
                    <xsl:apply-templates select="fees/payment"/>
                </tbody>
            </table>
        </body>
    </html>
</xsl:template>

<xsl:template match="payment">
    <tr>
        <td><xsl:value-of select="particular"/></td>
        <td><xsl:value-of select="total_fee"/></td>
        <td><xsl:value-of select="applicable_fee"/></td>
    </tr>
</xsl:template>

</xsl:stylesheet>

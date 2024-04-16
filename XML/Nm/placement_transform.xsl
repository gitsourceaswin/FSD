<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
    <html>
        <head>
            <title>Placement Profiles</title>
            <link rel="stylesheet" type="text/css" href="placement_styles.css"/>
        </head>
        <body>
            <h1>Placement Profiles</h1>
            <table>
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Company</th>
                        <th>CTC</th>
                        <th>Date of Joining</th>
                    </tr>
                </thead>
                <tbody>
                    <xsl:apply-templates select="placements/placement"/>
                </tbody>
            </table>
        </body>
    </html>
</xsl:template>

<xsl:template match="placement">
    <tr>
        <td><xsl:value-of select="type"/></td>
        <td><xsl:value-of select="company"/></td>
        <td><xsl:value-of select="ctc"/></td>
        <td><xsl:value-of select="date_of_joining"/></td>
    </tr>
</xsl:template>

</xsl:stylesheet>

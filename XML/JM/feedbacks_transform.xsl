<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
    <html>
        <head>
            <title>Academic Feedback</title>
            <link rel="stylesheet" type="text/css" href="feedbacks_styles.css"/>
        </head>
        <body>
            <h1>Academic Feedback</h1>
            <table id="feedbackTable">
                <thead>
                    <tr>
                        <th>Faculty Name</th>
                        <th>Comments</th>
                    </tr>
                </thead>
                <tbody>
                    <xsl:apply-templates select="feedbacks/feedback"/>
                </tbody>
            </table>
        </body>
    </html>
</xsl:template>

<xsl:template match="feedback">
    <tr>
        <td><xsl:value-of select="faculty_name"/></td>
        <td><xsl:value-of select="comments"/></td>
    </tr>
</xsl:template>

</xsl:stylesheet>

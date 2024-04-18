<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
    <html>
        <head>
            <title>Semester-wise Results</title>
            <link rel="stylesheet" type="text/css" href="styles.css"/>
        </head>
        <body>
            <h1>Semester-wise Results</h1>
            <xsl:apply-templates select="results/semester"/>
        </body>
    </html>
</xsl:template>

<xsl:template match="semester">
    <div class="semester">
        <h2>Semester <xsl:value-of select="@num"/></h2>
        <table>
            <thead>
                <tr>
                    <th>Course Code</th>
                    <th>Course Name</th>
                    <th>Credit</th>
                </tr>
            </thead>
            <tbody>
                <xsl:apply-templates select="course"/>
            </tbody>
        </table>
        <p>SGPA: <xsl:value-of select="@sgpa"/></p>
    </div>
</xsl:template>

<xsl:template match="course">
    <tr>
        <td><xsl:value-of select="code"/></td>
        <td><xsl:value-of select="name"/></td>
        <td><xsl:value-of select="credit"/></td>
    </tr>
</xsl:template>

</xsl:stylesheet>

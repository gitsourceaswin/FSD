<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
    <html>
        <head>
            <title>Academic Results</title>
            <link rel="stylesheet" type="text/css" href="academics_styles.css"/>
        </head>
        <body>
            <h1>Academic Results</h1>
            <table id="academicTable">
                <thead>
                    <tr>
                        <th>Semester</th>
                        <th>CGPA</th>
                    </tr>
                </thead>
                <tbody>
                    <xsl:apply-templates select="academics/semester"/>
                </tbody>
            </table>
        </body>
    </html>
</xsl:template>

<xsl:template match="semester">
    <tr>
        <td>
            <h2>Semester <xsl:value-of select="@number"/></h2>
            <table>
                <thead>
                    <tr>
                        <th>Subject Code</th>
                        <th>Subject Name</th>
                        <th>Grade</th>
                    </tr>
                </thead>
                <tbody>
                    <xsl:apply-templates select="subject"/>
                </tbody>
            </table>
        </td>
        <td><xsl:value-of select="@cgpa"/></td>
    </tr>
</xsl:template>

<xsl:template match="subject">
    <tr>
        <td><xsl:value-of select="@code"/></td>
        <td><xsl:value-of select="@name"/></td>
        <td><xsl:value-of select="@grade"/></td>
    </tr>
</xsl:template>

</xsl:stylesheet>

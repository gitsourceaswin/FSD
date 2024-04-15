<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
    <html>
        <head>
            <title>Student Profiles</title>
            <link rel="stylesheet" type="text/css" href="styles.css"/>
        </head>
        <body>
            <h1>Student Profiles</h1>
            <table>
                <thead>
                </thead>
                <tbody>
                    <xsl:apply-templates select="students/student"/>
                </tbody>
            </table>
        </body>
    </html>
</xsl:template>

<xsl:template match="student">
    <tr>
        <th>Roll Number</th>
        <td><xsl:value-of select="roll_num"/></td>
    </tr>
    <tr>
        <th>Name</th>
        <td><xsl:value-of select="Name"/></td>
    </tr>
    <tr>
        <th>Date of Birth</th>
        <td><xsl:value-of select="DOB"/></td>
    </tr>
    <tr>
        <th>Email</th>
        <td><xsl:value-of select="email"/></td>
    </tr>
    <tr>
        <th>Course</th>
        <td><xsl:value-of select="course"/></td>
    </tr>
    <tr>
        <th>Branch</th>
        <td><xsl:value-of select="branch"/></td>
    </tr>
    <tr>
        <th>Batch</th>
        <td><xsl:value-of select="batch"/></td>
    </tr>
    <tr>
        <th>CGPA</th>
        <td><xsl:value-of select="cgpa"/></td>
    </tr>
</xsl:template>

</xsl:stylesheet>

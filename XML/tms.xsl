<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <body>
                <h1 style="text-align:center">Admin Dashboard</h1>
                <h2>Managers:</h2>
                <table>
                    <tr>
                        <th style="text-align:left">Manager_ID</th>
                        <th style="text-align:left">Name</th>
                        <th style="text-align:left">Age</th>
                        <th style="text-align:left">Email</th>
                        <th style="text-align:left">Phone_No.</th>
                    </tr>
                    <xsl:for-each select="user/Manager">
                        <xsl:sort select="manager_id" />
                        <xsl:if test="Age > 31">
                            <tr>
                                <td>
                                    <xsl:value-of select="manager_id" />
                                </td>
                                <td>
                                    <xsl:value-of select="Name" />
                                </td>
                                <td>
                                    <xsl:value-of select="Age" />
                                </td>
                                <td>
                                    <xsl:value-of select="Email" />
                                </td>
                                <td>
                                    <xsl:value-of select="Phone_No" />
                                </td>
                            </tr>
                        </xsl:if>
                    </xsl:for-each>
                </table>
                <h2>Players:</h2>
                <table>
                    <tr>
                        <th style="text-align:left">Player_ID</th>
                        <th style="text-align:left">Name</th>
                        <th style="text-align:left">Age</th>
                        <th style="text-align:left">Email</th>
                        <th style="text-align:left">Phone_No.</th>
                    </tr>
                    <xsl:for-each select="user/Player">
                        <xsl:sort select="Age" />
                        <xsl:choose>
                            <xsl:when test="Age > 17">
                                <tr bgcolor="#ff00ff">

                                    <td>
                                        <xsl:value-of select="player_id" />
                                    </td>

                                    <td>
                                        <xsl:value-of select="Name" />
                                    </td>
                                    <td>
                                        <xsl:value-of select="Age" />
                                    </td>
                                    <td>
                                        <xsl:value-of select="Email" />
                                    </td>
                                    <td>
                                        <xsl:value-of select="Phone_No" />
                                    </td>
                                </tr>
                            </xsl:when>
                            <xsl:otherwise>
                                <tr>

                                    <td>
                                        <xsl:value-of select="player_id" />
                                    </td>

                                    <td>
                                        <xsl:value-of select="Name" />
                                    </td>
                                    <td>
                                        <xsl:value-of select="Age" />
                                    </td>
                                    <td>
                                        <xsl:value-of select="Email" />
                                    </td>
                                    <td>
                                        <xsl:value-of select="Phone_No" />
                                    </td>
                                </tr>
                            </xsl:otherwise>
                        </xsl:choose>
                    </xsl:for-each>
                </table>
                <h2>Trainers:</h2>
                <table>
                    <tr>
                        <th style="text-align:left">Trainer_ID</th>
                        <th style="text-align:left">Name</th>
                        <th style="text-align:left">Age</th>
                        <th style="text-align:left">Email</th>
                        <th style="text-align:left">Phone_No.</th>
                    </tr>
                    <xsl:for-each select="user/Trainer">
                        <tr>
                            <td>
                                <xsl:value-of select="trainer_id" />
                            </td>
                            <td>
                                <xsl:value-of select="Name" />
                            </td>
                            <td>
                                <xsl:value-of select="Age" />
                            </td>
                            <td>
                                <xsl:value-of select="Email" />
                            </td>
                            <td>
                                <xsl:value-of select="Phone_No" />
                            </td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
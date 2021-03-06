<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="2.0">

    <!-- OUTPUT -->
    <xsl:output method="xhtml" indent="yes" encoding="UTF-8"/>

    <!-- Index -->
    <xsl:template match="/">
        <xsl:result-document href="html/index.html">
            <html>
                <head>
                    <title>Arqueossítios de Portugal</title>
                    <meta charset="UTF-8"/>
                    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
                </head>
                <body class="w3-container">
                    <div class="w3-card">
                        <header class="w3-container w3-amber">
                            <h1 class="w3-title" style="text-align:center">Arqueossítios de
                                Portugal</h1>
                        </header>
                    </div>
                    <ul class="w3-ul w3-hoverable w3-large w3-center">
                        <xsl:apply-templates mode="indice"/>
                    </ul>
                </body>
            </html>
        </xsl:result-document>
        <xsl:apply-templates/>
    </xsl:template>

    <!-- TEMPLATES -->
    <!-- Indice -->
    <xsl:template match="ARQELEM" mode="indice">
        <li class="w3-hover-pale-yellow">
            <a name="{generate-id()}"/>
            <a href="arq_{generate-id()}.html">
                <xsl:value-of select="IDENTI"/>
            </a>
        </li>
    </xsl:template>

    <!-- Arquessítio -->
    <xsl:template match="ARQELEM">
        <xsl:result-document href="html/arq_{generate-id()}.html">
            <html>
                <head>
                    <title>
                        <xsl:value-of select="IDENTI"/>
                    </title>
                    <meta charset="UTF-8"/>
                    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
                    <style>
                        .padded-text {
                            padding: 0px 10px 0px 10px;
                        }</style>
                </head>
                <body class="w3-container">

                    <div class="w3-card">
                        <header class="w3-container w3-amber">
                            <h2 style="text-align:center">
                                <xsl:value-of select="IDENTI"/> - (<small><xsl:value-of
                                        select="DESCRI"/></small>) </h2>
                            <table class="w3-container" style="width:100%;text-align:center">
                                <tr>
                                    <td>
                                        <b>Lugar: </b>
                                        <xsl:value-of select="LUGAR"/>
                                    </td>
                                    <td>
                                        <b>Freguesia: </b>
                                        <xsl:value-of select="FREGUE"/>
                                    </td>
                                    <td>
                                        <b>Concelho: </b>
                                        <xsl:value-of select="CONCEL"/>
                                    </td>
                                </tr>
                            </table>
                            <p style="text-align:center">
                                <b>Coordenadas (<xsl:value-of select="CODADM"/>): </b>
                                <xsl:value-of select="LATITU"/>ºN - <xsl:value-of select="LONGIT"
                                />ºW - <xsl:value-of select="ALTITU"/>
                            </p>
                        </header>
                        <div class="w3-container w3-pale-yellow">
                            <h4>
                                <b>Accesso</b>
                                <p/>
                            </h4>
                            <p class="padded-text">
                                <xsl:value-of select="ACESSO"/>
                            </p>
                            <hr/>
                            <h4>
                                <b>Quadro: </b>
                            </h4>
                            <p class="padded-text">
                                <xsl:value-of select="QUADRO"/>
                            </p>
                            <hr/>
                            <h4>
                                <b>Descrição do arqueossítio: </b>
                            </h4>
                            <p class="padded-text">
                                <xsl:value-of select="DESARQ"/>
                            </p>
                            <hr/>
                            <p>
                                <b>Intérprete: </b>
                                <xsl:value-of select="INTERP"/>
                            </p>
                            <p>
                                <b>Depósito: </b>
                                <xsl:value-of select="DEPOSI"/>
                            </p>
                            <p>
                                <b>Bibliografia: </b>
                            </p>
                            <ul>
                                <xsl:for-each select="BIBLIO">
                                    <li>
                                        <xsl:value-of select="."/>
                                    </li>    
                                </xsl:for-each>                              
                            </ul>
                        </div>
                        <footer class="w3-container w3-amber">
                            <p><xsl:value-of select="AUTOR"/> - <xsl:value-of select="DATA"/></p>
                        </footer>
                    </div>
                    <br/>
                    <address class="w3-container" style="text-align:center;margin-bottom:20px;">
                        <a style="text-align:center" href="index.html#{generate-id()}">Voltar página
                            principal</a>
                    </address>
                </body>
            </html>
        </xsl:result-document>
        <xsl:apply-templates/>
    </xsl:template>
</xsl:stylesheet>

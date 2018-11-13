<?php

// accept a term (keyword)
// respond with a value

$query = $_GET['q'];
if ($_GET["all"]=="true"){
$xmldata = '<?xml version="1.0" encoding="UTF-8"?>
<definitions>
    <definition name = "definition">
        A statement of the exact meaning of a word, especially in a dictionary.
    </definition>
    <definition name = "bar">
        A place that sells alcholic beverages.
    </definition>
    <definition name = "ajax">
        <p>Technique which involves the use of javascript and xml (or JSON).</p>
    </definition>
    <definition name = "html">
        The standard markup language for creating web pages and web applications.
    </definition>
    <definition name= "css">
        A style sheet language used for describing the presentation of a document written in a markup language.
    </definition>
    <definition name = "javascript">
        A lightweight, interpreted programming language with first-class functions that adds interactivity to your website.
    </definition>
    <definition name = "php">
        A server-side scripting language, and a powerful tool for making dynamic and interactive websites.
    </definition>
</definitions>';

header('Content-Type: text/xml');
$xmlOutput = new SimpleXMLElement($xmldata);
echo $xmlOutput->asXML();
}else{
print "<h3>" . strtoupper($query) . "</h3>";
print "<p>" . $definition[$query] . "</p>";}
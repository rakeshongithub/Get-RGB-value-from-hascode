function getRGB(colr){
    var $code = colr.substr(1),
        $r = eval("0x"+$code.substring(0, 2)),
        $g = eval("0x"+$code.substring(2, 4)),
        $b = eval("0x"+$code.substring(4, 6)),
        $rgb = ($r+","+$g+","+$b);
    
return $rgb;
}

getRGB("#cc0000")

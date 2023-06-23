<?php
// DB connection : admin only
    try{
        $rdb = new PDO('mysql:host=localhost;dbname=partnerds','PTNDAdmin','adm1n!!P4nd?.3120');
        $rdb->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $rdb->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
    } catch(PDOException $error) {
        $error->getMessage();
    }
?>
<?php
$logoWeb= "assets/img/logo-web.jpg";
$name = "Caroline Cap";

$date1 = "2011";
$date2 = "2012 - 2014";
$date3 = "2013 - 2017";
$date4 = "2016 - 2020";
$imgExp1 = "assets/img/about/isalt.jpg";
$imgExp2 = "assets/img/about/resto-houtsiplou.jpg";
$imgExp3 = "assets/img/about/tourdesamme.jpg";
$imgExp4 = "assets/img/about/catastrophe.jpg";
$nomExp1 = "ISALT";
$nomExp2 = "HORECA";
$nomExp3 = "Tour de Samme asbl";
$nomExp4 = "Espace Catastrophe";
$experience1 = "Diplômée en Animation – Tourisme à l'Institut Supérieur d’Animation des Loisirs et du Tourisme (Haute école Galilée)";
$experience2 = "Responsable de salle & serveuse dans l’Hôtel le Viking [FR] 2015, Restaurant Houtsiplou [BE] 2012 > 2014, au Belgian Beer Café [AU] 2012";
$experience3 = "Organisation d’événements avec l’asbl Tour de Samme. Festival, expo, concerts, cabaret, ...";
$experience4 = "Gestion des formations et responsable des outils collaboratifs à l’Espace Catastrophe, Centre international de création et de formation aux arts du Cirque";
?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <title>CV - Caroline Cap - Timeline</title>
        <link rel="icon" type="image/x-icon" href="<?php echo $logoWeb ?>" />
        <!-- Font Awesome icons (free version)-->
        <script src="https://use.fontawesome.com/releases/v5.15.1/js/all.js" crossorigin="anonymous"></script>
        <!-- Google fonts-->
        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com/css?family=Droid+Serif:400,700,400italic,700italic" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700" rel="stylesheet" type="text/css" />
        <!-- Core theme CSS (includes Bootstrap)-->
        <link href="css/styles-Timeline.css" rel="stylesheet" />
    </head>
    <body id="page-top">
        <!-- Masthead-->
        <header class="masthead">
            <div class="container">
                <div class="masthead-subheading">About</div>
                <div class="masthead-heading text-uppercase"><?php echo $name ?></div>
            </div>
        </header>
        <!-- About-->
        <section class="page-section" id="about">
            <div class="container">
                               
                <section class="page-section" id="about">
            <div class="container">
                <ul class="timeline">
                    <li>
                        <div class="timeline-image"><img class="rounded-circle img-fluid" src="<?php echo $imgExp4 ?>" alt="" /></div>
                        <div class="timeline-panel">
                            <div class="timeline-heading">
                                <h4><?php echo $date4 ?></h4>
                                <h4 class="subheading"><?php echo $nomExp4 ?></h4>
                            </div>
                            <div class="timeline-body"><p class="text-muted"><?php echo $experience4 ?></p></div>
                        </div> 
                    </li>
                    <li class="timeline-inverted">
                        <div class="timeline-image"><img class="rounded-circle img-fluid" src="<?php echo $imgExp3 ?>" alt="" /></div>
                        <div class="timeline-panel">
                            <div class="timeline-heading">
                                <h4><?php echo $date3 ?></h4>
                                <h4 class="subheading"><?php echo $nomExp3 ?></h4>
                            </div>
                            <div class="timeline-body"><p class="text-muted"><?php echo $experience3 ?></p></p></div>
                        </div>
                    </li>
                    <li>
                        <div class="timeline-image"><img class="rounded-circle img-fluid" src="<?php echo $imgExp2 ?>" alt="" /></div>
                        <div class="timeline-panel">
                            <div class="timeline-heading">
                                <h4><?php echo $date2 ?></h4>
                                <h4 class="subheading"><?php echo $nomExp2 ?></h4>
                            </div>
                            <div class="timeline-body"><p class="text-muted"><?php echo $experience2 ?></p></p></div>
                        </div>
                    </li>
                    <li class="timeline-inverted">
                        <div class="timeline-image"><img class="rounded-circle img-fluid" src="<?php echo $imgExp1 ?>" alt="" /></div>
                        <div class="timeline-panel">
                            <div class="timeline-heading">
                                <h4><?php echo $date1 ?></h4>
                                <h4 class="subheading"><?php echo $nomExp1 ?></h4>
                            </div>
                            <div class="timeline-body"><p class="text-muted"><?php echo $experience1 ?></p></p></div>
                        </div>
                    </li>
                </ul>
            </div>

            <a class="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="index.php">Retour au CV</a>

        </section>
       <!-- Footer-->
        <footer class="footer py-4">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-4 text-lg-left">Copyright © Your Website 2020</div>
                    <div class="col-lg-4 my-3 my-lg-0">
                        <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-twitter"></i></a>
                        <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-facebook-f"></i></a>
                        <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                    <div class="col-lg-4 text-lg-right">
                        <a class="mr-3" href="#!">Privacy Policy</a>
                        <a href="#!">Terms of Use</a>
                    </div>
                </div>
            </div>
        </footer>
        
        <!-- Bootstrap core JS-->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"></script>
        <!-- Third party plugin JS-->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js"></script>
        <!-- Contact form JS-->
        <script src="assets/mail/jqBootstrapValidation.js"></script>
        <script src="assets/mail/contact_me.js"></script>
        <!-- Core theme JS-->
        <script src="js/scripts.js"></script>
    </body>
</html>

$(document).ready(function(){
  var window_height = $(window).height();
  var menu_bar = $("#menubar").height();

  $(".codeContainer").height((window_height-menu_bar) + "px");

  $(".toggle").click(function(){
        $(this).toggleClass("selected");

        var activediv = $(this).html();
        // alert(activediv);

        $("#"+ activediv + "Container").toggle();

        var showimDivs = $(".codeContainer").filter(function(){
          return ($(this).css('display') != 'none');
        }).length;
        // alert(showimDivs);

        var width = 100/showimDivs;
        $(".codeContainer").width(width + "%");
   });

   $("#runButton").click(function(){
        $("iframe").contents().find("html").html('<style>' + $("#csscode").val() +'</style>' + $("#htmlcode").val());

        document.getElementById("iframeid").contentWindow.eval($("#jscode").val());

   });
})

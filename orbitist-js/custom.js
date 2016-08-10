// Animate the Atlas menu and map info on click
jQuery(document).ready(function () {
  jQuery('.btnatlastoggle').click(function () {
    jQuery('.atlasmenu').toggleClass('active')
  });
  jQuery('.btnmapinfo').click(function () {
    jQuery('.story-slide, .btnmapinfo-close').toggleClass('in')
	});
});
/*!
 * Buttons helper for fancyBox
 * version: 1.0.5 (Mon, 15 Oct 2012)
 * @requires fancyBox v2.0 or later
 *
 * Usage:
 *     $(".fancybox").fancybox({
 *         helpers : {
 *             buttons: {
 *                 position : 'top'
 *             }
 *         }
 *     });
 *
 */
(function(a){var b=a.fancybox;b.helpers.buttons={defaults:{skipSingle:!1,position:"top",tpl:'<div id="fancybox-buttons"><ul><li><a class="btnPrev" title="Previous" href="javascript:;"></a></li><li><a class="btnPlay" title="Start slideshow" href="javascript:;"></a></li><li><a class="btnNext" title="Next" href="javascript:;"></a></li><li><a class="btnToggle" title="Toggle size" href="javascript:;"></a></li><li><a class="btnClose" title="Close" href="javascript:jQuery.fancybox.close();"></a></li></ul></div>'},list:null,buttons:null,beforeLoad:function(a,b){if(a.skipSingle&&b.group.length<2){b.helpers.buttons=!1,b.closeBtn=!0;return}b.margin[a.position==="bottom"?2:0]+=30},onPlayStart:function(){this.buttons&&this.buttons.play.attr("title","Pause slideshow").addClass("btnPlayOn")},onPlayEnd:function(){this.buttons&&this.buttons.play.attr("title","Start slideshow").removeClass("btnPlayOn")},afterShow:function(c,d){var e=this.buttons;e||(this.list=a(c.tpl).addClass(c.position).appendTo("body"),e={prev:this.list.find(".btnPrev").click(b.prev),next:this.list.find(".btnNext").click(b.next),play:this.list.find(".btnPlay").click(b.play),toggle:this.list.find(".btnToggle").click(b.toggle)}),d.index>0||d.loop?e.prev.removeClass("btnDisabled"):e.prev.addClass("btnDisabled"),d.loop||d.index<d.group.length-1?(e.next.removeClass("btnDisabled"),e.play.removeClass("btnDisabled")):(e.next.addClass("btnDisabled"),e.play.addClass("btnDisabled")),this.buttons=e,this.onUpdate(c,d)},onUpdate:function(a,b){var c;if(!this.buttons)return;c=this.buttons.toggle.removeClass("btnDisabled btnToggleOn"),b.canShrink?c.addClass("btnToggleOn"):b.canExpand||c.addClass("btnDisabled")},beforeClose:function(){this.list&&this.list.remove(),this.list=null,this.buttons=null}}})(jQuery);
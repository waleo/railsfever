$(document).ready(function(){$(".fancyme").fancybox({prevEffect:"elastic",nextEffect:"elastic",padding:0,closeBtn:!0,helpers:{title:{type:"inside"},buttons:{},thumbs:{width:75,height:50}}}),$(".fancysingle").fancybox({prevEffect:"elastic",nextEffect:"elastic",padding:0,closeBtn:!0,helpers:{title:{type:"inside"}}}),$(".fancybutton").fancybox({prevEffect:"elastic",padding:0,nextEffect:"elastic",closeBtn:!0,helpers:{title:{type:"inside"},buttons:{}}}),$(".fancybox-media").fancybox({beforeLoad:function(){this.title=$(this.element).next(".entry-summary").html()},prevEffect:"none",padding:0,nextEffect:"none",helpers:{media:{},title:{type:"inside"}}}),$(".various").fancybox({maxWidth:1e3,maxHeight:600,fitToView:!1,width:"100%",height:"100%",autoSize:!1,prevEffect:"elastic",nextEffect:"elastic",closeClick:!0,padding:0,openEffect:"fade",closeEffect:"fade",helpers:{title:{type:"inside"}}}),$(".fancytitle").fancybox({beforeLoad:function(){this.title=$(this.element).next(".entry-summary").html()},prevEffect:"elastic",padding:0,nextEffect:"elastic",helpers:{title:{type:"inside"},buttons:{}}})});
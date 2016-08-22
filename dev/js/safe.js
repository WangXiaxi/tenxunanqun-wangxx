
var imgs = [{imgSrc:"https://aq.qq.com/v2/images/topics/my_prot_bns_promotion.jpg"},
					{imgSrc:"https://aq.qq.com/v2/images/topics/my_prot_2d_code_promotion.jpg"},
					{imgSrc:"http://img3.imgtn.bdimg.com/it/u=1169388607,391079864&fm=206&gp=0.jpg"},
					{imgSrc:"http://img0.imgtn.bdimg.com/it/u=415825692,13297482&fm=206&gp=0.jpg"}];
var gamesda = [{"position":"-5px -398px","title":"QQ华夏"},{"position":"-5px -198px","title":"QQ三国"},{"position":"-5px -1100px","title":"QQ西游"},{"position":"-5px -2450px","title":"QQ仙灵"},{"position":"-5px -1148px","title":"QQ仙侠传"},{"position":"-5px -1293px","title":"QQ炫舞"},{"position":"-5px -2550px","title":"QQ音速"},{"position":"-5px -899px","title":"大明龙权"},{"position":"-5px -348px","title":"地下城与勇士"},{"position":"-5px -2120px","title":"第九大陆"},{"position":"-5px -2810px","title":"怪物猎人OL"},{"position":"-5px -949px","title":"幻想世界"},{"position":"-5px -2660px","title":"剑灵"},{"position":"-5px -2710px","title":"上古世纪"},{"position":"-5px -2165px","title":"天堂1"},{"position":"-5px -2213px","title":"天堂2"},{"position":"-5px -2760px","title":"天涯明月刀"},{"position":"-5px -2499px","title":"轩辕传奇"},{"position":"-5px -48px","title":"寻仙"},{"position":"-5px -2072px","title":"御龙在天"},{"position":"-5px -248px","title":"自由幻想"}];
(function($,imgs,gamesda){
				var animated,
				$height = 145,
				$width = 749,
				len = imgs.length,
				stop;
			function banner(){
				if (animated) {
					return;
				}
				animated = 1;
				$(".container").animate({
					top : parseInt($(".container").css("top")) - $height
				},200,function(){
					var high = parseInt($(".container").css("top"));
					if (high < -len*$height) {
						$(".container").css("top","-" + $height + "px");
					}else if (high > -1*$height) {
						$(".container").css("top","-" + len*$height + "px");
					}
					animated = 0;
				});
				setIndex();
			}
			function play(){
				stop = setInterval(function(){
				banner();
			},3000);
			}
			function setIndex(){
				var index = Math.abs(parseInt($(".container").css("top")) / $height);
					if (index == len) {
						index = 0;
					}
				$(".buttons em").eq(index).addClass("cur").siblings().removeClass("cur");
			}
			function clickEm(){
				$(".center").delegate(".buttons em","click",function(){
					if (animated) {
					return;
					}
					animated = 1;
					clearInterval(stop);
					$(this).addClass("cur").siblings().removeClass("cur");
					var topHigh = "-" + ($(this).index())*$height;
					$(".container").animate({
						top : topHigh
					},200,function(){
						animated = 0;
					});
					play();
				});
			}
		function clickPage(){
			var gameLen = gamesda.length;
			function createDOM(){
				$(".inBanner").append("<div class=\"container\"></div>"+
										"<div class=\"buttons\">"+
											"<img src=\"img/num2.png\" class = \"imgBg\"/>"+
										"</div>"
						);
				$(".container").append("<a><img src=\"" +imgs[len-1].imgSrc + "\" /></a>");
				for(var i = 0;i < len;i++){
					$(".container").append("<a><img src=\"" +imgs[i].imgSrc + "\" /></a>");
					$(".buttons").append("<em></em>");
				}
				$(".container").append("<a><img src=\"" +imgs[0].imgSrc + "\" /></a>");
				$(".buttons em").eq(0).addClass("cur");
				$("img.imgBg").width(30 + len*16 + "px");
				var left1 = ($width / 2) - ($("img.imgBg").width() / 2) + "px";
				$("img.imgBg").css("left",left1);
			}
			$(".banner .inner .choose h3").click(function(){
				clearInterval(stop);
				animated = 0;
				$(".banner .inner>.center").empty();
				$(".banner .inner>.center").html(
					'<div class="inBanner">'+
					'</div>'+
					'<div class="smallIn">'+
						'<div class="pubStyle">'+
							'<div class="i-left iconLe1"></div>'+
							'<div class="inner-right">'+
								'<a class="smTit">Q币Q点保护</a>'+
								'<a class="right">示意</a>'+
								'<p>在消费Q币Q点时验证密保，保护您的Q币Q点。</p>'+
								'<div class="img qb"></div>'+
							'</div>'+
						'</div>'+
						'<div class="pubStyle">'+
							'<div class="i-left iconLe2"></div>'+
							'<div class="inner-right">'+
								'<a class="smTit">游戏保护</a>'+
								'<a class="right">示意</a>'+
								'<p>在消费Q币Q点时验证密保，保护您的Q币Q点。</p>'+
								'<div class="img dnf"></div>'+
							'</div>'+
						'</div>'+
						'<div class="pubStyle">'+
							'<div class="i-left iconLe3"></div>'+
							'<div class="inner-right">'+
								'<a class="smTit">登录保护</a>'+
								'<p>在消费Q币Q点时验证密保，保护您的Q币Q点。</p>'+
							'</div>'+
						'</div>'+
					'</div>'
					);
				createDOM();
				play();
			});
			$(".banner .inner .choose .P1").click(function(){
				$(".banner .inner>.center").empty();
				$(".banner .inner>.center").html(
					'<div class="Page2">'+
							'<p class="des-p">在消费Q币Q点时验证密保</p>'+
							'<a class="imd">立即开通</a>'+
						'</div>'+
						'<div class="inner2">'+
							'<div class="sTit sTit1"></div>'+
							'<p class="dt dt1">1、安全保障</p>'+
							'<p class="dd dd1">当消费Q币Q点时验证密保，阻止坏人恶意消费。</p>'+
							'<p class="dt dt2">2、开通简单</p>'+
							'<p class="dd dd2">拥有密保手机、密保卡、手机令牌或QQ令牌中的任意一种即可免费开通。</p>'+
							'<div class="sTit sTit2"></div>'+
							'<ul class="fun">'+
								'<li>是否有一些服务不支持消费Q币Q点验证密保？</li>'+
								'<li>开通Q币Q点保护后，是不是每次消费Q币Q点的时候都需要验证密保呢？</li>'+
								'<li>为什么无法使用密保卡了？</li>'+
							'</ul>'+
						'</div>'
					);
			});
			$(".banner .inner .choose .P2").click(function(){
				$(".banner .inner>.center").empty();
				$(".banner .inner>.center").html(
						'<div class="Page3">'+
							'<p class="des-p">QQ安全中心为玩家提供三重保护：</p>'+
							'<ul class="cl">'+
								'<li>登录游戏验证密保。</li>'+
								'<li>游戏锁。支持剑灵、DNF、LOL、CF等热门游戏</li>'+
								'<li>敏感操作验证密保。支持剑灵等4款游戏</li>'+
							'</ul>'+
						'</div>'+
						'<div class="inner3">'+
							'<div class="sTit sTit1"></div>'+
							'<p class="des">有效防止他人盗取密码后窃取您的游戏财产和装备，保护您的游戏安全。</p>'+
							'<p class="game-tit">支持保护的游戏：</p>'+
							'<ul class="gameName">'+
								
							'</ul>'+
							'<p class="bot-des" style="clear:both;">了解游戏保护详情及开通条件，请登录您的帐号。</p>'+
							'<div class="sTit stit2"></div>'+
							'<ul class="fun">'+
								'<li>是否有一些服务不支持消费Q币Q点验证密保？</li>'+
								'<li>开通Q币Q点保护后，是不是每次消费Q币Q点的时候都需要验证密保呢？</li>'+
								'<li>为什么无法使用密保卡了？</li>'+
							'</ul>'+
						'</div>'
					);
				for(var i = 0;i<gameLen;i++){
					$(".inner3 .gameName").append("<li><i></i>" + gamesda[i].title + "</li>");
					$(".inner3 .gameName li").eq(i).find("i").css("background-position",gamesda[i].position);
				}
				
			});
			$(".banner .inner .choose h3").click();
		}

		clickPage();
		clickEm();
	})(jQuery,imgs,gamesda);

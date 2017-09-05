$(function() {
        //默认滚动条初始置顶
        $('body').scrollTop(0);
        //自学分享大小响应
        $('.study_share_bg').css('height',$('.study_share').height());
        $(window).resize(function() {
            $('.study_share_bg').css('height',$('.study_share').height());
        });
        //工作经历大小响应
        $('.work_content_bg').css('height',$('.work_content_all').height());
        $(window).resize(function() {
            $('.work_content_bg').css('height',$('.work_content_all').height());
        });
        //....
        $('p.pink').on('mouseover mouseout',function(event) {
            if( event.type == 'mouseover') {
                $(this).css({color:'#fff',backgroundColor:'#e16daa'});
            } else {
                $(this).css({color:'#fff',backgroundColor:'#df89b6'});
            }
        });
        //导航栏滚动条动画
        $('header').find('a.scrollable').click(function(event) {
            var $anchor = $(this);
            $top_document = $(document).scrollTop();
            $top_anchor = $($anchor.attr('href')).offset().top;
            $('html,body').stop()
            .animate({scrollTop:$top_anchor},Math.abs($top_document - $top_anchor) / 1.5);
            event.preventDefault();
        });
        //自学情况按钮动画
        $('.ball_group button').on('click',function() {
            if(!$(this).is('.ball_click')) {
                $text = $(this).attr('mark');           
                if(!$('.box_move *').is(':animated')) {
                    $('.ball_click').removeClass().addClass('ball');
                    $(this).removeClass().addClass('ball_click');
                    $('.box_move div').animate({opacity:0},1000,function() {
                        $('.box_move div').empty().append($text);
                        $('.box_move div').animate({opacity:1},1000);
                    });
                }
            }
        });
        //工作经历按钮
        var page = 1;
        $('button.next').click(function() {
            if (!$('.work_content').is(':animated')) {
                if (page > 2) {
                    page = 1;
                } else {
                    page++;
                }
                switch (page) {
                    case 1:
                    $('.work_content').animate({opacity:0},1000,function() {
                        $('.work_content').empty();
                        $('.work_content').append('广州驯游信息科技有限公司&nbsp&nbsp&nbsp&nbsp2014.8-2016.3&nbsp&nbsp&nbsp&nbsp运营一部主管<br />负责产品：G114平台&nbsp&nbsp游戏代理发行&nbsp&nbspAPP研发<br />1、管理运营团队，制定部门工作计划，开拓游戏代理发行业务，制定业务合同跟进各种资质申请进度，参与研发项目的开发工作等。其中发行的欢乐泡泡猫、熊出没系列的游戏获得以210%的月流水增长速度从14年10月份12W至15年3月180W的成绩。<br />2、参与游戏SDK后台和乐享APP的开发产品工作，设计其原型图，进行开发排期。并曾经获得过A轮投资的机会以及参与公司的尽职调查。');
                    });                
                    $('.work_content').animate({opacity:1},1000);
                    break;
                    case 2:
                    $('.work_content').animate({opacity:0},1000,function() {
                        $('.work_content').empty();
                        $('.work_content').append('广州鼎象信息科技有限公司&nbsp&nbsp&nbsp&nbsp2013.10-2014.8&nbsp&nbsp&nbsp&nbsp产品专员<br />负责产品：QQ家园&nbsp&nbsp古墓迷城<br />1、游戏运营工作：包括客服管理、数据分析并将对数据分析的结果制定游戏活动运营计划。<br />2、产品策划工作：根据玩家反馈信息以及内部数据反映，通过Xmind、Axure等工具制定版本迭代需求。以及进行数据策划，使用Excel进行数据配置。');
                    });                
                    $('.work_content').animate({opacity:1},1000);
                    break;
                    case 3:
                    $('.work_content').animate({opacity:0},1000,function() {
                        $('.work_content').empty();
                        $('.work_content').append('广州维动科技有限公司&nbsp&nbsp&nbsp&nbsp2012.11-2013.10&nbsp&nbsp&nbsp&nbsp客服专员<br />负责产品：91wan平台&nbsp&nbsp远征&nbsp&nbsp凡人修仙2&nbsp&nbsp霸域<br />1、负责91wan网页游戏平台的客服工作。<br />2、协助运营部门进行玩家调研、需求分析、制定运营方案。');
                    });                
                    $('.work_content').animate({opacity:1},1000);
                    break;
                }
            }
        });
        $('button.prev').click(function() {
            if (!$('.work_content').is(':animated')) {
                if (page == 1) {
                    page = 3;
                } else {
                    page--;
                }
                switch (page) {
                    case 1:
                    $('.work_content').animate({opacity:0},1000,function() {
                        $('.work_content').empty();
                        $('.work_content').append('广州驯游信息科技有限公司&nbsp&nbsp&nbsp&nbsp2014.8-2016.3&nbsp&nbsp&nbsp&nbsp运营一部主管<br />负责产品：G114平台&nbsp&nbsp游戏代理发行&nbsp&nbspAPP研发<br />1、管理运营团队，制定部门工作计划，开拓游戏代理发行业务，制定业务合同跟进各种资质申请进度，参与研发项目的开发工作等。其中发行的欢乐泡泡猫、熊出没系列的游戏获得以210%的月流水增长速度从14年10月份12W至15年3月180W的成绩。<br />2、参与游戏SDK后台和乐享APP的开发产品工作，设计其原型图，进行开发排期。并曾经获得过A轮投资的机会以及参与公司的尽职调查。');
                    });                
                    $('.work_content').animate({opacity:1},1000);
                    break;
                    case 2:
                    $('.work_content').animate({opacity:0},1000,function() {
                        $('.work_content').empty();
                        $('.work_content').append('广州鼎象信息科技有限公司&nbsp&nbsp&nbsp&nbsp2013.10-2014.8&nbsp&nbsp&nbsp&nbsp产品专员<br />负责产品：QQ家园&nbsp&nbsp古墓迷城<br />1、游戏运营工作：包括客服管理、数据分析并将对数据分析的结果制定游戏活动运营计划。<br />2、产品策划工作：根据玩家反馈信息以及内部数据反映，通过Xmind、Axure等工具制定版本迭代需求。以及进行数据策划，使用Excel进行数据配置。');
                    });                
                    $('.work_content').animate({opacity:1},1000);
                    break;
                    case 3:
                    $('.work_content').animate({opacity:0},1000,function() {
                        $('.work_content').empty();
                        $('.work_content').append('广州维动科技有限公司&nbsp&nbsp&nbsp&nbsp2012.11-2013.10&nbsp&nbsp&nbsp&nbsp客服专员<br />负责产品：91wan平台&nbsp&nbsp远征&nbsp&nbsp凡人修仙2&nbsp&nbsp霸域<br />1、负责91wan网页游戏平台的客服工作。<br />2、协助运营部门进行玩家调研、需求分析、制定运营方案。');
                    });                
                    $('.work_content').animate({opacity:1},1000);
                    break;
                }
            }
        });        
    });
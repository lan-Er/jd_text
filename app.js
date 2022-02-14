$(function(){
    showhide()
    hoverSubMenu()
    search()
    share()

    /* 5.鼠标移入移出切换地址的显示隐藏 */
    
    /* 4.点击显示,隐藏更多的分享图标 */
    function share (){
        var isOpen = false
        var $shareMore = $('#shareMore')
        var $parent = $shareMore.parent()
        var $as = $shareMore.prevAll('a:lt(2)')
        var $b = $shareMore.children()
        
        $shareMore.click(function(){
            
            if(isOpen){
                $parent.css('width',155)
                $b.removeClass('backword')
                $as.hide()
            }else{
                $parent.css('width',200)
                $b.addClass('backword')
                $as.show()
            }
            isOpen = !isOpen
        })
    }
    
    /* 3.输入搜索关键字，列表显示匹配的结果 */
    function search (){
        $('#txtSearch')
        .on('keyup focus',function(){
            var text = this.value.trim()
            if(text){
                $('#search_helper').show()
            }
            
        })
        .blur(function(){
            $('#search_helper').hide()
        })
            
       
    }
   
    /* 2.鼠标移动切换二级导航菜单的切换显示和隐藏 */
    function hoverSubMenu (){
        $('#category_items>div').hover(function(){
            $(this).children(':last').show()
        },function(){
            $(this).children(':last').hide()
        })
    }
    
    /* 1.鼠标移入显示，移出隐藏
    目标：手机京东，客户服务，网站导航，我的京东，去购物车结算，全部商品 */
    function showhide (){
        var $show_hides = $('[name=show_hide]')
        $show_hides.hover(function(){
            var id = this.id + '_items'
            $('#'+id).show()
        },function(){
            var id = this.id + '_items'
            $('#'+id).hide()
        }
        )
    }


})
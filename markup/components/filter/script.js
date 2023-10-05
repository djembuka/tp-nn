!function(f){"use strict";f(function(){function t(e){var v=this;function t(e){for(var t in e)"string"==typeof e[t]?setRadio(v["$"+t],e[t]):(v["$"+t].slider("values",0,e[t][0]),v["$"+t].slider("values",1,e[t][1]),"price"===t?v.$elem.find(".b-filter-"+t+"-value").text(Number(e[t][0]).toLocaleString("ru-RU")+" — "+Number(e[t][1]).toLocaleString("ru-RU")+" руб."):(v["$"+t].find(".ui-slider-handle:eq(0) span").text(e[t][0]),v["$"+t].find(".ui-slider-handle:eq(1) span").text(e[t][1])));u()}function n(e){if(Cookies.get("filter-"+v.$elem.data("tab")))return JSON.parse(Cookies.get("filter-"+v.$elem.data("tab")))[e]}function a(t){var i=1e15,n=0;return v.flatsArray.forEach(function(e){+e[t]&&+e[t]>n&&(n=+e[t]),!isNaN(e[t])&&+e[t]<i&&(i=+e[t])}),1e15===i&&0===n&&(i=0,n=10),[i,n]}function u(){if(v.$tbody.data("filter")&&"object"==typeof v.$tbody.data("filter"))v.flatsArrayFiltered=v.flatsArray.filter(function(e){var t=1;for(var i in v.$tbody.data("filter"))String(e[i])!==String(v.$tbody.data("filter")[i])&&(t*=0);if(t)return!0});else{var e=[];v.$finished.length&&e.push(["finished","Finished"]),v.$house.length&&e.push(["house","HouseCount"]),v.$section.length&&e.push(["section","SectionNumber"]),v.$floors.length&&e.push(["floors","FloorNumber"]),v.$rooms.length&&e.push(["rooms","FlatRoomsCount"]),v.$square.length&&e.push(["square","TotalArea"]),v.$land.length&&e.push(["land","LandArea"]),v.$price.length&&e.push(["price","Price"]),v.flatsArrayFiltered=v.flatsArray.filter(function(i){var n=1;if(e.forEach(function(e){if(v["$"+e[0]][0].classList.contains("b-filter-radio")){var t=v["$"+e[0]][0].querySelector(".b-filter-radio__item--active").getAttribute("data-value");""!==i["Y"===t&&e[1]]&&"Y"!==i["N"===t&&e[1]]||(n*=0)}else(i[e[1]]<v["$"+e[0]].slider("values",0)||i[e[1]]>v["$"+e[0]].slider("values",1))&&(n*=0)}),n)return!0})}var h;h="",v.flatsArrayFiltered.forEach(function(e){var t="";e.Action&&(t="b-filter--action "),window.sessionStorage.getItem("detailObject")&&"visited"===JSON.parse(window.sessionStorage.getItem("detailObject"))[e.ExternalId]&&(t+="b-filter--visited ");var i,n,a,l,r,s,o,d,u,f,p,c='<tr data-url="'+e.URL+'" class="'+t+'"',$="",m='<td><a href="'+v.$tbody.data("orderlink")+e.ExternalId+'" class="btn">Оставить заявку</a></td></tr>';void 0!==e.HouseCount&&(c+=' data-housecount="'+e.HouseCount+'"',i="<td><span>Дом</span> "+e.HouseCount+"</td>"),void 0!==e.SectionNumber&&(c+=' data-sectionnumber="'+e.SectionNumber+'"',n="<td><span>Секция</span> "+e.SectionNumber+"</td>"),void 0!==e.CorpCount&&(c+=' data-corpnumber="'+e.CorpCount+'"',a="<td><span>Корпус</span> "+e.CorpCount+"</td>"),void 0!==e.FloorNumber&&(c+=' data-floornumber="'+e.FloorNumber+'"',l="<td><span>Этаж</span> "+e.FloorNumber+"</td>",s=""),void 0!==e.FlatNum&&(c+=' data-flatnum="'+e.FlatNum+'"',r="<td><span>Квартира</span> "+e.FlatNum+"</td>"),void 0!==e.FloorsDuplex&&(c+=' data-floorsduplex="'+e.FloorsDuplex+'"',s="<td><span>Этажей</span> "+e.FloorsDuplex+"</td>",l=""),void 0!==e.FlatRoomsCount&&(c+=' data-flatroomscount="'+e.FlatRoomsCount+'"',o="<td><span>Комнат</span> "+e.FlatRoomsCount+"</td>"),void 0!==e.TotalArea&&(c+=' data-totalarea="'+e.TotalArea+'"',d="<td>"+e.TotalArea+" м<sup>2</sup></td>"),void 0!==e.LandArea&&(c+=' data-landarea="'+e.LandArea+'"',u=0===e.LandArea?"<td> — </td>":"<td>"+e.LandArea+" сот.</td>"),void 0!==e.Price&&void 0!==e.PriceFormat&&(e.OldPriceFormat&&($="<s>"+e.OldPriceFormat+" руб.</s>"),c+=' data-price="'+e.PriceFormat+'"',f='<td data-sort="'+e.Price+'">'+e.PriceFormat+" руб."+$+"</td>"),void 0!==e.Finished&&(c+=' data-finished="'+e.Finished+'"',p="Y"===e.Finished?'<td class="b-filter-table__finished"><img src="/template/images/finished.svg" title="Отделка завершена" alt="" width="30" height="30">':"<td>",void 0!==e.OldPriceFormat&&(p+='<img src="/template/images/icon-sale.svg" title="Квартира участвует в акции" alt="" width="30" height="30">'),p+="</td>"),c+=' data-layoutphoto="'+e.LayoutPhoto+'" data-externalid="'+e.ExternalId+'">',h+=c+i+a+n+l+r+s+o+d+u+f+p+m}),v.$tbody.html(h),function(){var e={};v.$house.length&&(e.house=[v.$house.slider("values",0),v.$house.slider("values",1)]);v.$section.length&&(e.section=[v.$section.slider("values",0),v.$section.slider("values",1)]);v.$floors.length&&(e.floors=[v.$floors.slider("values",0),v.$floors.slider("values",1)]);v.$rooms.length&&(e.rooms=[v.$rooms.slider("values",0),v.$rooms.slider("values",1)]);v.$square.length&&(e.square=[v.$square.slider("values",0),v.$square.slider("values",1)]);v.$land.length&&(e.land=[v.$land.slider("values",0),v.$land.slider("values",1)]);v.$price.length&&(e.price=[v.$price.slider("values",0),v.$price.slider("values",1)]);e.filter="",Cookies.set("filter-"+v.$elem.data("tab"),e,{expires:1,path:window.location.pathname})}()}v.flatsArray=[],v.flatsArrayFiltered=[],v.$elem=e,v.$filter=f(".b-filter"),v.$input=v.$elem.find(".b-filter__input input"),v.$tbody=v.$elem.find(".b-filter-table tbody"),v.$reset=v.$elem.find(".b-filter-reset"),v.$mobileBtn=v.$elem.find(".b-filter-btn"),v.$finished=v.$elem.find(".b-filter-finished"),v.$house=v.$elem.find(".b-filter-house"),v.$section=v.$elem.find(".b-filter-section"),v.$floors=v.$elem.find(".b-filter-floors"),v.$rooms=v.$elem.find(".b-filter-rooms"),v.$square=v.$elem.find(".b-filter-square"),v.$land=v.$elem.find(".b-filter-land"),v.$price=v.$elem.find(".b-filter-price"),v.$houseInputMin=v.$elem.find(".b-filter-house-input-min"),v.$houseInputMax=v.$elem.find(".b-filter-house-input-max"),v.$sectionInputMin=v.$elem.find(".b-filter-section-input-min"),v.$sectionInputMax=v.$elem.find(".b-filter-section-input-max"),v.$floorsInputMin=v.$elem.find(".b-filter-floors-input-min"),v.$floorsInputMax=v.$elem.find(".b-filter-floors-input-max"),v.$roomsInputMin=v.$elem.find(".b-filter-rooms-input-min"),v.$roomsInputMax=v.$elem.find(".b-filter-rooms-input-max"),v.$squareInputMin=v.$elem.find(".b-filter-square-input-min"),v.$squareInputMax=v.$elem.find(".b-filter-square-input-max"),v.$landInputMin=v.$elem.find(".b-filter-land-input-min"),v.$landInputMax=v.$elem.find(".b-filter-land-input-max"),v.$priceInputValue=v.$elem.find(".b-filter-price-value"),f.ajax({url:v.$tbody.data("json"),type:v.$tbody.data("method"),dataType:"json",success:function(e){v.flatsArray=e,function(){if(!v.$finished.length)return;var i=v.$finished[0].querySelectorAll(".b-filter-radio__item");i.forEach(function(t){t.addEventListener("click",function(e){e.preventDefault(),i.forEach(function(e){e.classList.remove("b-filter-radio__item--active")}),t.classList.add("b-filter-radio__item--active"),u()})})}(),function(){var i=n("house"),e=a("HouseCount");i=i||e;v.$house.slider({range:!0,min:e[0],max:e[1],values:[i[0],i[1]],create:function(e,t){v.$house.find(".ui-slider-handle:eq(0)").attr({contenteditable:"true"}).append("<span>"+i[0]+"</span>"),v.$houseInputMin.val(i[0]),v.$house.find(".ui-slider-handle:eq(1)").attr({contenteditable:"true"}).append("<span>"+i[1]+"</span>"),v.$houseInputMax.val(i[1])},slide:function(e,t){v.$house.find(".ui-slider-handle:eq(0) span").text(t.values[0]),v.$house.find(".ui-slider-handle:eq(1) span").text(t.values[1]),v.$houseInputMin.val(t.values[0]),v.$houseInputMax.val(t.values[1])},stop:u})}(),function(){var i=n("section"),e=a("SectionCount");i=i||e;v.$section.slider({range:!0,min:e[0],max:e[1],values:[i[0],i[1]],create:function(e,t){v.$section.find(".ui-slider-handle:eq(0)").attr({contenteditable:"true"}).append("<span>"+i[0]+"</span>"),v.$sectionInputMin.val(i[0]),v.$section.find(".ui-slider-handle:eq(1)").attr({contenteditable:"true"}).append("<span>"+i[1]+"</span>"),v.$sectionInputMax.val(i[1])},slide:function(e,t){v.$section.find(".ui-slider-handle:eq(0) span").text(t.values[0]),v.$section.find(".ui-slider-handle:eq(1) span").text(t.values[1]),v.$sectionInputMin.val(t.values[0]),v.$sectionInputMax.val(t.values[1])},stop:u})}(),function(){var i=n("rooms"),e=a("FlatRoomsCount");i=i||e;v.$rooms.slider({range:!0,min:e[0],max:e[1],values:[i[0],i[1]],create:function(e,t){v.$rooms.find(".ui-slider-handle:eq(0)").attr({contenteditable:"true"}).append("<span>"+i[0]+"</span>"),v.$roomsInputMin.val(i[0]),v.$rooms.find(".ui-slider-handle:eq(1)").attr({contenteditable:"true"}).append("<span>"+i[1]+"</span>"),v.$roomsInputMax.val(i[1])},slide:function(e,t){v.$rooms.find(".ui-slider-handle:eq(0) span").text(t.values[0]),v.$rooms.find(".ui-slider-handle:eq(1) span").text(t.values[1]),v.$roomsInputMin.val(t.values[0]),v.$roomsInputMax.val(t.values[1])},stop:u})}(),function(){var i=n("floors"),e=a("FloorNumber");i=i||e;v.$floors.slider({range:!0,min:e[0],max:e[1],values:[i[0],i[1]],create:function(e,t){v.$floors.find(".ui-slider-handle:eq(0)").attr({contenteditable:"true"}).append("<span>"+i[0]+"</span>"),v.$floorsInputMin.val(i[0]),v.$floors.find(".ui-slider-handle:eq(1)").attr({contenteditable:"true"}).append("<span>"+i[1]+"</span>"),v.$floorsInputMax.val(i[1])},slide:function(e,t){v.$floors.find(".ui-slider-handle:eq(0) span").text(t.values[0]),v.$floors.find(".ui-slider-handle:eq(1) span").text(t.values[1]),v.$floorsInputMin.val(t.values[0]),v.$floorsInputMax.val(t.values[1])},stop:u})}(),function(){var i=n("square"),e=a("TotalArea");e=[Math.floor(e[0]),Math.ceil(e[1])],i=i||e;v.$square.slider({range:!0,min:e[0],max:e[1],values:[i[0],i[1]],create:function(e,t){v.$square.find(".ui-slider-handle:eq(0)").attr({contenteditable:"true"}).append("<span>"+i[0]+"</span>"),v.$squareInputMin.val(i[0]),v.$square.find(".ui-slider-handle:eq(1)").attr({contenteditable:"true"}).append("<span>"+i[1]+"</span>"),v.$squareInputMax.val(i[1])},slide:function(e,t){v.$square.find(".ui-slider-handle:eq(0) span").text(t.values[0]),v.$square.find(".ui-slider-handle:eq(1) span").text(t.values[1]),v.$squareInputMin.val(t.values[0]),v.$squareInputMax.val(t.values[1])},stop:u})}(),function(){var i=n("land"),e=a("LandArea");e=[Math.floor(e[0]),Math.ceil(e[1])],i=i||e;v.$land.slider({range:!0,min:e[0],max:e[1],values:[i[0],i[1]],create:function(e,t){v.$land.find(".ui-slider-handle:eq(0)").attr({contenteditable:"true"}).append("<span>"+i[0]+"</span>"),v.$landInputMin.val(i[0]),v.$land.find(".ui-slider-handle:eq(1)").attr({contenteditable:"true"}).append("<span>"+i[1]+"</span>"),v.$landInputMax.val(i[1])},slide:function(e,t){v.$land.find(".ui-slider-handle:eq(0) span").text(t.values[0]),v.$land.find(".ui-slider-handle:eq(1) span").text(t.values[1]),v.$landInputMin.val(t.values[0]),v.$landInputMax.val(t.values[1])},stop:u})}(),function(){var i=n("price"),e=a("Price");i=i||e;v.$price.slider({range:!0,min:e[0],max:e[1],step:1,values:[i[0],i[1]],create:function(e,t){v.$priceInputValue.text(Number(i[0]).toLocaleString("ru-RU")+" — "+Number(i[1]).toLocaleString("ru-RU")+" руб.")},slide:function(e,t){v.$priceInputValue.text(Number(t.values[0]).toLocaleString("ru-RU")+" — "+Number(t.values[1]).toLocaleString("ru-RU")+" руб.")},stop:u})}(),setTimeout(function(){u()},100)},error:function(){}}),v.$reset.click(function(){var e={};v.$finished.length&&(e.finished=v.$finished.getAttribute("data-default")),v.$house.length&&(e.house=[v.$house.slider("option","min"),v.$house.slider("option","max")]),v.$section.length&&(e.section=[v.$section.slider("option","min"),v.$section.slider("option","max")]),v.$floors.length&&(e.floors=[v.$floors.slider("option","min"),v.$floors.slider("option","max")]),v.$rooms.length&&(e.rooms=[v.$rooms.slider("option","min"),v.$rooms.slider("option","max")]),v.$square.length&&(e.square=[v.$square.slider("option","min"),v.$square.slider("option","max")]),v.$land.length&&(e.land=[v.$land.slider("option","min"),v.$land.slider("option","max")]),v.$price.length&&(e.price=[v.$price.slider("option","min"),v.$price.slider("option","max")]),t(e),v.$input.each(function(e){var t=f(this),i=t.attr("class"),n=i.substring(0,i.search("input")-1);-1!==String(i).search("min")?t.val(v.$elem.find("."+n+" .ui-slider-handle:eq(0) span").text()):t.val(v.$elem.find("."+n+" .ui-slider-handle:eq(1) span").text())})}),v.$mobileBtn.click(function(e){e.preventDefault(),v.$mobileBtn.find("span:visible").is(".i-show")?(v.$elem.find(".b-filter-body").slideDown(),v.$mobileBtn.find("span").show(),v.$mobileBtn.find("span.i-show").hide()):(v.$elem.find(".b-filter-body").slideUp(),v.$mobileBtn.find("span").hide(),v.$mobileBtn.find("span.i-show").show())}),v.$input.keydown(function(e){if(13===e.which){var t,i,n=f(this),a=n.attr("class"),l=+n.val(),r=a.substring(0,a.search("input")-1),s=r.split("b-filter-")[1],o=v.$elem.find("."+r+" .ui-slider-handle:eq(0) span"),d=v.$elem.find("."+r+" .ui-slider-handle:eq(1) span");if("number"==typeof l){if(-1!==String(a).search("min")){if(t=l,i=+n.siblings("input").val(),t>d.text())return void n.val(o.text());t<v["$"+s].slider("option","min")&&(t=v["$"+s].slider("option","min"),n.val(t))}else{if(i=l,t=+n.siblings("input").val(),i<o.text())return void n.val(d.text());i>v["$"+s].slider("option","max")&&(i=v["$"+s].slider("option","max"),n.val(i))}v.$elem.find("."+r).slider("values",0,t),v.$elem.find("."+r).slider("values",1,i),o.text(t),d.text(i),u()}}}),v.slideFilter=u,v.setValue=t,v.$elem.delegate(".btn","click",function(e){e.stopPropagation()}),v.$elem.delegate("tbody tr","click",function(e){e.preventDefault(),window.location=f(this).data("url")})}document.querySelectorAll(".b-filter-table").forEach(function(n){new Tablesort(n),n.addEventListener("afterSort",function(){var e=n.closest(".b-filter-item").querySelector(".b-filter-table thead"),t=f(e).find("th").index(f(e).find("th[aria-sort]")),i=e.querySelector("th[aria-sort]").getAttribute("aria-sort");Cookies.set("table-sort-"+n.closest(".b-filter-item").getAttribute("data-tab"),t+"-"+i,{expires:1,path:window.location.pathname})})}),document.querySelectorAll(".b-filter-item").forEach(function(a){var e=f(a);e.data({Filter:new t(e)}),setTimeout(function(){var e=Cookies.get("table-sort-"+a.getAttribute("data-tab"));if(e){var t=e.split("-")[0],i=e.split("-")[1],n=a.querySelector(".b-filter-table").querySelectorAll("th")[t];f(n).click(),"descending"===i&&f(n).click()}},1e3)}),setTimeout(function(){var e={};window.location.search&&(e=function(e){for(var t={},i=("?"===e[0]?e.substr(1):e).split("&"),n=0;n<i.length;n++){var a=i[n].split("=");t[decodeURIComponent(a[0])]=decodeURIComponent(a[1]||"")}return t}(window.location.search)),e.type&&f(".b-tabs__item[ data-tab="+e.type+"]").length&&f(".b-tabs__item[ data-tab="+e.type+"]").click(),e.house&&f(".b-filter-item[ data-tab="+e.type+"] .b-filter-house").length&&f(".b-filter-item[ data-tab="+e.type+"]").data("Filter").setValue({house:[e.house,e.house]})},1e3)})}(jQuery);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-191131af"],{"0fd9":function(t,e,a){"use strict";a("99af"),a("4160"),a("caad"),a("13d5"),a("4ec9"),a("b64b"),a("d3b7"),a("ac1f"),a("2532"),a("3ca3"),a("5319"),a("159b"),a("ddb0");var i=a("ade3"),n=a("5530"),o=(a("4b85"),a("a026")),s=a("d9f7"),r=a("80d2"),c=["sm","md","lg","xl"],l=["start","end","center"];function d(t,e){return c.reduce((function(a,i){return a[t+Object(r["l"])(i)]=e(),a}),{})}var u=function(t){return[].concat(l,["baseline","stretch"]).includes(t)},p=d("align",(function(){return{type:String,default:null,validator:u}})),w=function(t){return[].concat(l,["space-between","space-around"]).includes(t)},f=d("justify",(function(){return{type:String,default:null,validator:w}})),m=function(t){return[].concat(l,["space-between","space-around","stretch"]).includes(t)},v=d("alignContent",(function(){return{type:String,default:null,validator:m}})),y={align:Object.keys(p),justify:Object.keys(f),alignContent:Object.keys(v)},g={align:"align",justify:"justify",alignContent:"align-content"};function b(t,e,a){var i=g[t];if(null!=a){if(e){var n=e.replace(t,"");i+="-".concat(n)}return i+="-".concat(a),i.toLowerCase()}}var h=new Map;e["a"]=o["default"].extend({name:"v-row",functional:!0,props:Object(n["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:u}},p,{justify:{type:String,default:null,validator:w}},f,{alignContent:{type:String,default:null,validator:m}},v),render:function(t,e){var a=e.props,n=e.data,o=e.children,r="";for(var c in a)r+=String(a[c]);var l=h.get(r);return l||function(){var t,e;for(e in l=[],y)y[e].forEach((function(t){var i=a[t],n=b(e,t,i);n&&l.push(n)}));l.push((t={"no-gutters":a.noGutters,"row--dense":a.dense},Object(i["a"])(t,"align-".concat(a.align),a.align),Object(i["a"])(t,"justify-".concat(a.justify),a.justify),Object(i["a"])(t,"align-content-".concat(a.alignContent),a.alignContent),t)),h.set(r,l)}(),t(a.tag,Object(s["a"])(n,{staticClass:"row",class:l}),o)}})},"19dd":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",{attrs:{flat:""}},[i("v-card-title",[t._v("BusFlow")]),i("v-divider",{staticClass:"ma-5"}),i("v-card-text",[t._v(" "+t._s(t.$t("intro1"))+" ")]),i("v-card-text",[i("v-lazy",[i("v-row",{attrs:{align:"center",justify:"center"}},[i("v-img",{staticClass:"ma-10",attrs:{src:a("fd6e"),"aspect-ratio":"2.3",width:"300"}})],1)],1)],1),i("v-card-text",[t._v(t._s(t.$t("intro2")))]),i("v-card-title",[t._v(t._s(t.$t("implTitle")))]),i("v-divider",{staticClass:"ma-5"}),i("v-card-subtitle",[i("strong",[t._v(t._s(t.$t("techSubtitle")))])]),i("v-card-text",[i("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[i("thead",[i("tr",[i("th",{staticClass:"text-left"},[t._v(t._s(t.$t("techHead")))]),i("th",{staticClass:"text-left"},[t._v(t._s(t.$t("usageHead")))])])]),i("tbody",[i("tr",[i("td",[t._v(t._s(t.$t("vueRowName")))]),i("td",[t._v(t._s(t.$t("vueRowUsage")))])]),i("tr",[i("td",[t._v(t._s(t.$t("leafletRowName")))]),i("td",[t._v(t._s(t.$t("leafletRowUsage")))])]),i("tr",[i("td",[t._v(t._s(t.$t("vuetifyRowName")))]),i("td",[t._v(t._s(t.$t("vuetifyRowUsage")))])]),i("tr",[i("td",[t._v(t._s(t.$t("kotlinRowName")))]),i("td",[t._v(t._s(t.$t("kotlinRowUsage")))])])])]},proxy:!0}])})],1),i("v-card-subtitle",[i("strong",[t._v(t._s(t.$t("moduleSubtitle")))])]),i("v-card-text",[t._v(t._s(t.$t("modulesIntro"))+" "),i("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[i("thead",[i("tr",[i("th",{staticClass:"text-left"},[t._v(t._s(t.$t("modHead")))]),i("th",{staticClass:"text-left"},[t._v(t._s(t.$t("functionHead")))])])]),i("tbody",[i("tr",[i("td",[t._v(t._s(t.$t("databaseRowName")))]),i("td",[t._v(t._s(t.$t("databaseRowFunction")))])]),i("tr",[i("td",[t._v(t._s(t.$t("updateModRowName")))]),i("td",[t._v(t._s(t.$t("updateModRowFunction")))])]),i("tr",[i("td",[t._v(t._s(t.$t("guiModRowName")))]),i("td",[t._v(t._s(t.$t("guiModRowFunction")))])])])]},proxy:!0}])})],1),i("v-card-title",[t._v(t._s(t.$t("functionsTitle")))]),i("v-divider",{staticClass:"ma-5"}),i("v-card-subtitle",[i("strong",[t._v(t._s(t.$t("positionFunctionSubtitle")))])]),i("v-card-text",[t._v(" "+t._s(t.$t("positionFunctionText"))+" ")]),i("v-card-text",[i("v-row",{attrs:{align:"center",justify:"center"}},[i("video",{attrs:{src:a("fbcd"),width:"500",autoplay:"",loop:""}})])],1),i("v-card-subtitle",[i("strong",[t._v(t._s(t.$t("filteringFunctionSubtitle")))])]),i("v-card-text",[t._v(" "+t._s(t.$t("filteringFunctionText"))+" ")]),i("v-card-text",[i("v-row",{attrs:{align:"center",justify:"center"}},[i("v-lazy",[i("video",{staticClass:"ma-5",attrs:{src:a("21c7"),width:"500",autoplay:"",loop:""}}),i("video",{staticClass:"ma-5",attrs:{src:a("4799"),width:"500",autoplay:"",loop:""}})])],1)],1),i("v-card-subtitle",[i("strong",[t._v(t._s(t.$t("linesFunctionSubtitle")))])]),i("v-card-text",[t._v(" "+t._s(t.$t("linesFunctionText1"))+" ")]),i("v-card-text",[i("v-row",{attrs:{align:"center",justify:"center"}},[i("v-lazy",[i("video",{attrs:{src:a("ebf8"),width:"500",autoplay:"",loop:""}})])],1)],1),i("v-card-text",[t._v(" "+t._s(t.$t("linesFunctionText2"))+" ")]),i("v-card-subtitle",[i("strong",[t._v(t._s(t.$t("chartFunctionSubtitle")))])]),i("v-card-text",[t._v(" "+t._s(t.$t("chartFunctionText"))+" ")]),i("v-card-text",[i("v-row",{attrs:{align:"center",justify:"center"}},[i("v-lazy",[i("video",{attrs:{src:a("b83b"),width:"500",autoplay:"",loop:""}})])],1)],1)],1)},n=[],o={name:"busflow"},s=o,r=a("2877"),c=a("8c88"),l=a("6544"),d=a.n(l),u=a("b0af"),p=a("99d9"),w=a("ce7e"),f=a("adda"),m=(a("a9e3"),a("f2e7")),v=a("90a2"),y=a("58df"),g=a("80d2"),b=Object(y["a"])(m["a"]).extend({name:"VLazy",directives:{intersect:v["a"]},props:{minHeight:[Number,String],options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},tag:{type:String,default:"div"},transition:{type:String,default:"fade-transition"}},computed:{styles:function(){return{minHeight:parseInt(this.minHeight)?Object(g["b"])(this.minHeight):this.minHeight}}},methods:{genContent:function(){var t=Object(g["g"])(this);if(!this.transition)return t;var e=[];return this.isActive&&e.push(t),this.$createElement("transition",{props:{name:this.transition}},e)},onObserve:function(t,e,a){this.isActive||(this.isActive=a)}},render:function(t){return t(this.tag,{staticClass:"v-lazy",attrs:this.$attrs,directives:[{name:"intersect",value:{handler:this.onObserve,options:this.options}}],on:this.$listeners,style:this.styles},[this.genContent()])}}),h=a("0fd9"),z=a("1f4f"),j=Object(r["a"])(s,i,n,!1,null,null,null);"function"===typeof c["default"]&&Object(c["default"])(j);e["default"]=j.exports;d()(j,{VCard:u["a"],VCardSubtitle:p["a"],VCardText:p["b"],VCardTitle:p["c"],VDivider:w["a"],VImg:f["a"],VLazy:b,VRow:h["a"],VSimpleTable:z["a"]})},"1f4f":function(t,e,a){"use strict";a("a9e3");var i=a("5530"),n=(a("8b37"),a("80d2")),o=a("7560"),s=a("58df");e["a"]=Object(s["a"])(o["a"]).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes:function(){return Object(i["a"])({"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader},this.themeClasses)}},methods:{genWrapper:function(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(n["b"])(this.height)}},[this.$createElement("table",this.$slots.default)])}},render:function(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})},"21c7":function(t,e,a){t.exports=a.p+"media/filtrowanie_1_ed.fc5cf2c2.webm"},4799:function(t,e,a){t.exports=a.p+"media/filtrowanie_2_ed.2d6cd58a.webm"},"5c8f":function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"intro1":"This project was presented as an engineer\'s thesis \\"Design and implementation of an application supporting the operation of a municipal transport facility in a selected field of its activity\\". Scope of application\'s functionality consisted of presentation of traffic connected to public transportation.","intro2":"This project was inspired mainly by warsawian authorities project \\"Otwarte dane - czyli dane po warszawsku\\". It is an initiative to share data about public transportation in Warsaw e.g. position of buses, trams and bus/tram stops.","implTitle":"Implementation","techSubtitle":"Used Technologies","techHead":"Technology","usageHead":"Usage","vueRowName":"Vue.js","vueRowUsage":"reactive presentation of data","leafletRowName":"Leaflet.js","leafletRowUsage":"map operations","vuetifyRowName":"Vuetify","vuetifyRowUsage":"graphics and controls","kotlinRowName":"Kotlin, Spring Boot Webflux","kotlinRowUsage":"communication with a database and integration with warsawian public transportation system","moduleSubtitle":"Application modules","modulesIntro":"App consists of 3 modules:","modHead":"Module","functionHead":"Function","databaseRowName":"Database and API module sharing db\'s resources","databaseRowFunction":"MongoDB with its resources shared through HTTP based REST API","updateModRowName":"Module responsible for continuous updating data by using warsawian public transportation IT system","updateModRowFunction":"WebClient responsible for downloading data in constant set intervals","guiModRowName":"GUI module with defined operations that are supposed to be processed on client side","guiModRowFunction":"Single Page Application with a map as a main view","functionsTitle":"Basic functions","positionFunctionSubtitle":"Showing positions of buses and trams","positionFunctionText":"Position of a vehicle is updated every 10 seconds (interval based on on actual information update interval sent by vehicles). All buses and trams are marked by markers with tooltips showing their respective lines. If tooltips are covering each other and obstructing information presented, they are grouped into group marker with a tooltip showing a list of all lines grouped.","filteringFunctionSubtitle":"Filtering based on drawn geometric shapes","filteringFunctionText":"All elements shown on map can by filtered by drawing polygons on the map. There are predefined figures that are, in this case, districts fo Warsaw e.g. Bemowo or city centre Śródmieście.","linesFunctionSubtitle":"Area coverage and number of lines for each bus/tram stop","linesFunctionText1":"Number of lines on a stop is represented as a color based on visible spectrum that is based on previously established maximum value.","linesFunctionText2":"It is also possible to show an area for each stop presenting line coverage with given circle radius.","chartFunctionSubtitle":"Number of stops for each line chart as an example of a possible visualisation","chartFunctionText":"As an example of a possible visualisation a google chart is shown as a relation between number of bus/tram stops for each line in a given chosen area."},"pl":{"intro1":"Projekt ten został przedstawiony jako praca inżynierska zatytułowana \\"Projekt i implementacja aplikacji wspomagającej funkcjonowanie zakładu transportu miejskiego w wybranym zakresie jego działalności\\". Zakres implementacji skupiał się na przedstawianiu danych związanych z ruchem pojazdów komunikacji miejskiej występujących w systemie zakładu ruchu miejskiego.","intro2":"Projekt był w dużej mierze inspirowany projektem m. st. Warszawy \\"Otwarte dane - czyli dane po warszawsku\\", który polega na udostepnieniu danych na temat aktualnej sytuacji ruchu miejskiego wWarszawie takich jak np. położenie autobusów, tramwajów i przystanków.","implTitle":"Forma realizacji","techSubtitle":"Technologie","techHead":"Technologia","usageHead":"Wykorzystanie","vueRowName":"Vue.js","vueRowUsage":"reaktywne wyświetlanie danych","leafletRowName":"Leaflet.js","leafletRowUsage":"operacje na mapach","vuetifyRowName":"Vuetify","vuetifyRowUsage":"elementy graficzne","kotlinRowName":"Kotlin, Spring Boot Webflux","kotlinRowUsage":"komunikacja z bazą danych oraz integracja z systemem ZTM Warszawa","moduleSubtitle":"Moduły","modulesIntro":"Aplikacja składa się z 3 modułów:","modHead":"Moduł","functionHead":"Odpowiedzialność","databaseRowName":"Baza danych oraz moduł API udostępniający jej zasoby","databaseRowFunction":"MongoDB z określonym dostępem poprzez REST API korzystające z protokołu HTTP","updateModRowName":"Moduł odpowiedzialny za stałą aktualizację danych z systemu ZTM","updateModRowFunction":"WebClient odpowiedzialny za ciągłą aktualizację danych z systemu ZTM Warszawa","guiModRowName":"Moduł odpowiadający za interfejs graficzny oraz operacje wykonywane po stronie klienta","guiModRowFunction":"Single Page Application z mapą, jako głownym widokiem strony","functionsTitle":"Podstawowe funkcje","positionFunctionSubtitle":"Wyświetlanie pojazów","positionFunctionText":"Położenie pojazdów aktualizowane jest co 10 sekund (z taką częstotliwością pojazdy wysyłają informacje na temat swojego położenia). Wszystkie pojazdy są oznaczone znacznikami, które posiadają etykietę z odpowiadającą linią. W przypadku nakładania się na siebie znaczników, są one grupowane w jeden znacznik grupowy, który posiada etykietę z listą wszystkich linii.","filteringFunctionSubtitle":"Filtrowanie poprzez rysowanie figur na mapie","filteringFunctionText":"Elementy wyświetlane na mapie mogą być filtrowane poprzez narysowane na mapie figury. Dostępne jest także filtrowanie poprzez wcześniej zdefiniowane figury - w tym przypadku dzielnice Warszawy.","linesFunctionSubtitle":"Dostępność przystanków oraz liczba linii na przystankach","linesFunctionText1":"Liczba przystanków jest reprezentowana jako barwa z zakresu widma widzialnego na podstawie znormalizowanej wartości za pomocą przyjętej wartości maksymalnej.","linesFunctionText2":"Możliwe jest wyznaczenie obszarów dla każdego z przystanków o założonym promieniu.","chartFunctionSubtitle":"Wykres liczby przystanków dla linii jako przykładowa wizualizacja","chartFunctionText":"Jako przykładowa wizualizacja przedstawiony został wykres przystanków dla linii."}}'),delete t.options._Ctor}},"8b37":function(t,e,a){},"8c88":function(t,e,a){"use strict";var i=a("5c8f"),n=a.n(i);e["default"]=n.a},b83b:function(t,e,a){t.exports=a.p+"media/wykres_ed.41253158.webm"},ebf8:function(t,e,a){t.exports=a.p+"media/dostepnosc_ed.2362a04b.webm"},fbcd:function(t,e,a){t.exports=a.p+"media/wyswietlanie_ed.c650c222.webm"},fd6e:function(t,e,a){t.exports=a.p+"img/busflow_main.399bdee1.png"}}]);
//# sourceMappingURL=chunk-191131af.6391b4f5.js.map
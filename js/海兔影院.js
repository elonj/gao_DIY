muban.mxone5.二级.title = '.video-cover&&img&&alt;.video-info-aux&&Text';
muban.mxone5.二级.desc = '.video-info-items:eq(3)&&Text;;;.video-info-actor:eq(0)&&Text;.video-info-actor:eq(1)&&Text';
var rule = {
	title:'海兔影院',
	模板:'mxone5',
	//host:'https://www.haitu.tv',
	host:'https://www.haituu.tv',
	// url:'/vod/show/id/fyclass/page/fypage.html',
	url:'/vod/show/id/fyfilter.html',
	filterable:1,//是否启用分类筛选,
	filter_url:'{{fl.cateId}}{{fl.area}}{{fl.by}}{{fl.lang}}/page/fypage{{fl.year}}',
	filter: {
		"1":[{"key":"cateId","name":"类型","value":[{"n":"全部","v":"1"},{"n":"动作片","v":"6"},{"n":"爱情片","v":"7"},{"n":"科幻片","v":"8"},{"n":"剧情片","v":"9"},{"n":"喜剧片","v":"10"},{"n":"恐怖片","v":"11"},{"n":"战争片","v":"12"},{"n":"动漫片","v":"30"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"大陆","v":"/area/大陆"},{"n":"香港","v":"/area/香港"},{"n":"台湾","v":"/area/台湾"},{"n":"美国","v":"/area/美国"},{"n":"韩国","v":"/area/韩国"},{"n":"日本","v":"/area/日本"},{"n":"泰国","v":"/area/泰国"},{"n":"新加坡","v":"/area/新加坡"},{"n":"马来西亚","v":"/area/马来西亚"},{"n":"印度","v":"/area/印度"},{"n":"英国","v":"/area/英国"},{"n":"法国","v":"/area/法国"},{"n":"加拿大","v":"/area/加拿大"},{"n":"西班牙","v":"/area/西班牙"},{"n":"俄罗斯","v":"/area/俄罗斯"},{"n":"其它","v":"/area/其它"}]},{"key":"lang","name":"语言","value":[{"n":"全部","v":""},{"n":"国语","v":"/lang/国语"},{"n":"英语","v":"/lang/英语"},{"n":"粤语","v":"/lang/粤语"},{"n":"闽南语","v":"/lang/闽南语"},{"n":"韩语","v":"/lang/韩语"},{"n":"日语","v":"/lang/日语"},{"n":"法语","v":"/lang/法语"},{"n":"德语","v":"/lang/德语"},{"n":"其它","v":"/lang/其它"}]},{"key":"year","name":"时间","value":[{"n":"全部","v":""},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2011"},{"n":"2000-2010","v":"/year/2000-2010"},{"n":"1990-1999","v":"/year/1990-1999"},{"n":"1980-1989","v":"/year/1980-1989"},{"n":"1900-1979","v":"/year/1900-1979"}]},{"key":"by","name":"排序","value":[{"n":"更新时间","v":"/by/time"},{"n":"日人气","v":"/by/hits_day"},{"n":"周人气","v":"/by/hits_week"},{"n":"月人气","v":"/by/hits_month"},{"n":"总人气","v":"/by/hits"},{"n":"评分排序","v":"/by/score"}]}],
		"2":[{"key":"cateId","name":"类型","value":[{"n":"全部","v":"2"},{"n":"国产剧","v":"13"},{"n":"欧美剧","v":"14"},{"n":"港台剧","v":"15"},{"n":"日韩剧","v":"16"},{"n":"海外剧","v":"20"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"大陆","v":"/area/大陆"},{"n":"香港","v":"/area/香港"},{"n":"台湾","v":"/area/台湾"},{"n":"美国","v":"/area/美国"},{"n":"韩国","v":"/area/韩国"},{"n":"日本","v":"/area/日本"},{"n":"泰国","v":"/area/泰国"},{"n":"新加坡","v":"/area/新加坡"},{"n":"马来西亚","v":"/area/马来西亚"},{"n":"印度","v":"/area/印度"},{"n":"英国","v":"/area/英国"},{"n":"法国","v":"/area/法国"},{"n":"加拿大","v":"/area/加拿大"},{"n":"西班牙","v":"/area/西班牙"},{"n":"俄罗斯","v":"/area/俄罗斯"},{"n":"土耳其","v":"/area/土耳其"},{"n":"其它","v":"/area/其它"}]},{"key":"lang","name":"语言","value":[{"n":"全部","v":""},{"n":"国语","v":"/lang/国语"},{"n":"英语","v":"/lang/英语"},{"n":"粤语","v":"/lang/粤语"},{"n":"闽南语","v":"/lang/闽南语"},{"n":"韩语","v":"/lang/韩语"},{"n":"日语","v":"/lang/日语"},{"n":"法语","v":"/lang/法语"},{"n":"德语","v":"/lang/德语"},{"n":"其它","v":"/lang/其它"}]},{"key":"year","name":"时间","value":[{"n":"全部","v":""},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2011"},{"n":"2000-2010","v":"/year/2000-2010"},{"n":"1990-1999","v":"/year/1990-1999"},{"n":"1980-1989","v":"/year/1980-1989"},{"n":"1900-1979","v":"/year/1900-1979"}]},{"key":"by","name":"排序","value":[{"n":"更新时间","v":"/by/time"},{"n":"日人气","v":"/by/hits_day"},{"n":"周人气","v":"/by/hits_week"},{"n":"月人气","v":"/by/hits_month"},{"n":"总人气","v":"/by/hits"},{"n":"评分排序","v":"/by/score"}]}],
		"3":[{"key":"cateId","name":"类型","value":[{"n":"全部","v":"3"},{"n":"大陆综艺","v":"21"},{"n":"日韩综艺","v":"22"},{"n":"欧美综艺","v":"23"},{"n":"港台综艺","v":"24"},{"n":"纪录片","v":"25"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"内地","v":"/area/内地"},{"n":"港台","v":"/area/港台"},{"n":"日韩","v":"/area/日韩"},{"n":"欧美","v":"/area/欧美"}]},{"key":"lang","name":"语言","value":[{"n":"全部","v":""},{"n":"国语","v":"/lang/国语"},{"n":"英语","v":"/lang/英语"},{"n":"粤语","v":"/lang/粤语"},{"n":"闽南语","v":"/lang/闽南语"},{"n":"韩语","v":"/lang/韩语"},{"n":"日语","v":"/lang/日语"},{"n":"其它","v":"/lang/其它"}]},{"key":"year","name":"时间","value":[{"n":"全部","v":""},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2011"},{"n":"2000-2010","v":"/year/2000-2010"},{"n":"1990-1999","v":"/year/1990-1999"},{"n":"1980-1989","v":"/year/1980-1989"},{"n":"1900-1979","v":"/year/1900-1979"}]},{"key":"by","name":"排序","value":[{"n":"更新时间","v":"/by/time"},{"n":"日人气","v":"/by/hits_day"},{"n":"周人气","v":"/by/hits_week"},{"n":"月人气","v":"/by/hits_month"},{"n":"总人气","v":"/by/hits"},{"n":"评分排序","v":"/by/score"}]}],
		"4":[{"key":"cateId","name":"类型","value":[{"n":"全部","v":"4"},{"n":"国产动漫","v":"26"},{"n":"日韩动漫","v":"27"},{"n":"欧美动漫","v":"28"},{"n":"港台动漫","v":"29"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"大陆","v":"/area/大陆"},{"n":"日本","v":"/area/日本"},{"n":"美国","v":"/area/美国"},{"n":"韩国","v":"/area/韩国"},{"n":"香港","v":"/area/香港"},{"n":"台湾","v":"/area/台湾"},{"n":"泰国","v":"/area/泰国"},{"n":"新加坡","v":"/area/新加坡"},{"n":"马来西亚","v":"/area/马来西亚"},{"n":"印度","v":"/area/印度"},{"n":"英国","v":"/area/英国"},{"n":"法国","v":"/area/法国"},{"n":"加拿大","v":"/area/加拿大"},{"n":"西班牙","v":"/area/西班牙"},{"n":"俄罗斯","v":"/area/俄罗斯"},{"n":"其它","v":"/area/其它"}]},{"key":"lang","name":"语言","value":[{"n":"全部","v":""},{"n":"国语","v":"/lang/国语"},{"n":"英语","v":"/lang/英语"},{"n":"粤语","v":"/lang/粤语"},{"n":"闽南语","v":"/lang/闽南语"},{"n":"韩语","v":"/lang/韩语"},{"n":"日语","v":"/lang/日语"},{"n":"法语","v":"/lang/法语"},{"n":"德语","v":"/lang/德语"},{"n":"其它","v":"/lang/其它"}]},{"key":"year","name":"时间","value":[{"n":"全部","v":""},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2011"},{"n":"2000-2010","v":"/year/2000-2010"},{"n":"1990-1999","v":"/year/1990-1999"},{"n":"1980-1989","v":"/year/1980-1989"},{"n":"1900-1979","v":"/year/1900-1979"}]},{"key":"by","name":"排序","value":[{"n":"更新时间","v":"/by/time"},{"n":"日人气","v":"/by/hits_day"},{"n":"周人气","v":"/by/hits_week"},{"n":"月人气","v":"/by/hits_month"},{"n":"总人气","v":"/by/hits"},{"n":"评分排序","v":"/by/score"}]}]
	},
	filter_def:{
		1:{cateId:'1',by:'/by/time'},
		2:{cateId:'2',by:'/by/time'},
		3:{cateId:'3',by:'/by/time'},
		4:{cateId:'4',by:'/by/time'}
	},
	class_parse: '.nav-menu-items&&li:gt(0):lt(5);a&&title;a&&href;.*/(.*?).html',
	// searchUrl:'/vod/search/page/fypage/wd/**.html',
	searchUrl:'/index.php/ajax/suggest?mid=1&wd=**&limit=50',
	detailUrl:'/vod/detail/id/fyid.html', //非必填,二级详情拼接链接
	搜索:'json:list;name;pic;;id',
}


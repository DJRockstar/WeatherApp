var url = 'http://api.openweathermap.org/data/2.5/weather';

$('document').ready(function(){
	$('form').on('submit',function(e){
		e.preventDefault();
		$('.js-search-results').remove();
		$.get(url,{
			q : $('.js-query').val(),
			APPID:'9faef37696585bee68c95c47cc4819a6',
			units: 'imperial'
		}, function(data){
			var result = '';
			result+='<div class=js-search-results><ul>'
			result+= '<li>' + "<p>" + data.name + "'s Temperature- " + "</p>" + data.main.temp + " F" + '<li>' + "<p>" + 'Description- ' + "</p>" + data.weather[0].description + '</li></li>'
			result+= '<li>' + "<p>" + 'Max Temp: ' + "</p>" + data.main.temp_max  +" F"+ "<p>" + ' and Min Temp: ' + "</p>" + data.main.temp_min + " F" + '</li>';
			$('body').append(result);
		})
	})
})
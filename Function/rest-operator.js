function fn(name, age, ...hobbies){
	console.log(name, age)
	if(hobbies.length > 1){
		console.log('first hobbby is ', hobbies[0])
	}

	console.log('all hobbies are ', hobbies)
}

fn('yishuangxi', 27, 'basketball', 'snooker')
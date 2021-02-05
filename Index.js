let str1 = 'the-stealth-warrior'
let str2 = 'The_stealth-warrior'

console.log(str1)
console.log(str1.replace(/[-_](.)/g,(a,b) => {
	console.log(a) // Заменяемая подстрока (-s, -w)
	console.log(b) // Второй элемент заменяемой строки "(.)"
	console.log(c)
	return b.toUpperCase()}))

function toCamelCase(str){
	let isFirstCaps = !!str.match(/^[A-Z]/)
	let isFirstLetter = true
	let isFirstWord = true
	return str
		.toLowerCase()
		.split(/[^a-z]/)
		.map(word => {
			isFirstLetter = true
			return word
				.split('')
				.map(letter => {
					if(isFirstLetter) {
						isFirstLetter = false
						if(isFirstWord) {
							isFirstWord = false
							if(isFirstCaps) return String.fromCharCode(letter.charCodeAt() - 32)
							else return letter
						}
						else return String.fromCharCode(letter.charCodeAt() - 32)
					}
					else return letter
				})
				.join('')
		})
		.join('')
}
console.log(toCamelCase(str1))
console.log(toCamelCase(str2))
console.log(!!str1.match(/^[A-Z]/))
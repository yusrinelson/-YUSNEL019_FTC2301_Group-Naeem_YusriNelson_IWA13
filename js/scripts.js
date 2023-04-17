let state = 'idle'
let user = null
let calculated = '1'

// Only allowed to change below

//fixed the function sytnax

const logCalc = () => { 
    const isString = typeof String(calculated) === 'string' 
    const calculatedAsNumber = isString == "true" ? calculated : parseInt(calculated)
    calculated = calculatedAsNumber + 1 
}

const calcUser = () => {
  logCalc()  // brackets to make it a function
  if (calculated > 2) user = 'John'
  if (calculated > 2) state = 'requesting'
  if (calculated > 3) state = 'idle'
}

const checkUser = () => {
	if (user && state === 'requesting') {
		console.log(`User: ${user} (${calculated})`)
	}
}

// Only allowed to change code above

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()
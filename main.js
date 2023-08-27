const inputs = document.querySelectorAll('input');

const states = [true, false];

inputs.forEach(input => {
	input.addEventListener('change', (e) => {
		const remainingInputs = Array.from(inputs).filter(input => input['id'] !== e.target.id);
		randomlyChangeState(remainingInputs)
	})
})


function randomlyChangeState(inputs) {
	inputs.forEach(input => {
		const index = Math.floor(Math.random() * 2);
		input.checked = states[index];
	})
}
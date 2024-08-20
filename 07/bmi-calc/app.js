const form = document.getElementById("form")
const res = document.getElementById("result")
form.addEventListener('submit', (e) => {
    res.innerText = ""

    e.preventDefault()
    const height = parseInt(document.getElementById('height').value)
    const weight = parseInt(document.getElementById('weight').value)

    if (height === 0 || isNaN(height) || height < 0 || height === "") {
        res.innerText = `Please write valid height`
    } else if (weight === 0 || isNaN(weight) || weight < 0 || weight === "") {
        res.innerText = `Please write valid weight`
    } else {
        const calculate = (weight / ((height * height) / 10000)).toFixed(2)
        res.innerText = `Your BMI is ${calculate}`
        if (calculate <= 18.6) {
            res.innerText += `, You're underweight`
        } else if (calculate >= 18.6 && calculate <= 24.9) {
            res.innerText += `, You're normal range`
        } else if (calculate > 24.9) {
            res.innerText += `, You're overweight`
        }
    }
})
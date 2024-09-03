import {connection}  from "../dbConnection/db.js";

const form = document.getElementById("contactForm")

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const values = e.target;

    const firstName = values.elements[0].value
    const lastName = values.elements[1].value
    const email = values.elements[2].value
    const phone = values.elements[3].value
    const message = values.elements[4].value

    console.log(firstName, lastName, email, phone, message);

    const query = `INSERT INTO contact_us (first_name, last_name, email, phone, message) VALUES (?, ?, ?, ?, ?)`
    const value = [firstName, lastName, email, phone, message];

    connection.connect( (err) => {
        if (err) {
            throw err
        }
        connection.query(query, value, (err, result) => {
            if(err) throw err
            console.log("Data insert Success: ", result);
        })
    })
})
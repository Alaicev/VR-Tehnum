document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("form");
    form.addEventListener("submit", submitForm)

    async function submitForm (e) {
    e.preventDefault();

    let formData = new FormData(form)
    alert(formData)

    let response = await fetch("sendmail.php", {
        method: "POST",
        body: formData
    })
    if(response.ok) {
        alert ("good")
        let result = await response.json()
        alert(result.message)
        formPreview.innerHTML = ""
        form.reset()
    } else {
        alert("error")
    }

}
})


window.addEventListener("DOMContentLoaded", (event) => {
    getVisitCount();
});

const functionAPIUrl = "https://<your-function-app-name>.azurewebsites.net/api/CounterFunction";

const getVisitCount = () => {
    let count = 30;
    fetch(functionAPIUrl)
        .then(response => response.json())
        .then(response => {
            console.log("Visit count fetched successfully:", response);
            count = response.count;
            document.getElementById("counter").innerText = count;
            return count;
        })
        .catch(error => {
            console.error("Error fetching visit count:", error);
            document.getElementById("counter").innerText = "Error fetching count";
        });
}
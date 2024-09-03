
const container = document.getElementById("container")
const quoteGenerate = document.getElementById("quote-btw")
quoteGenerate.addEventListener("click",generateQuote)


function randomcode(x){
    return Math.floor(Math.random()*x)
}

function randomcolor(){
    const r = randomcode(256)
    const g = randomcode(150)
    const b = randomcode(256)
    return `rgb(${r},${g},${b})`
}

async function generateQuote(){
    const data = await fetch("https://api.quotable.io/quotes/random")
    let response = await data.json()

    let rcolor = randomcolor()
    console.log(rcolor)
    document.body.style.backgroundColor = rcolor
    
    container.style.color = rcolor
    document.getElementById('quote').innerText = (Object.entries(response)[0][1].content)
    document.getElementById('author').innerText = (Object.entries(response)[0][1].author)

}


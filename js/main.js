async function trivia(){
    const res = await fetch("https://opentdb.com/api.php?amount=10&category=20&difficulty=easy&type=multiple")
    const resJSON = await res.json();

    console.log(resJSON)
}
trivia()

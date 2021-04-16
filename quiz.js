var username;
var rollnum;
var score = 0;
var attempt=0;
var displayname;
function saveLogin()
 { 
    
    rollnum = document.getElementById("rollnum").value;
    
    localStorage.setItem("rollnum", rollnum)
    localStorage.setItem("score", score)
    window.location.href = "q1.html"

}
function nextPage(qid, name, type, page)
{
    if(type == "radio" && qid == "q1"){
        getname = document.getElementsByName(name)
        // console.log(getname)
        for(let i = 0; i < getname.length; i++)
        {
            // console.log(getname[i].value)
            // console.log(getname[i].checked)
            if(getname[i].checked){attempt++}
            if(getname[i].checked && getname[i].value == 'Oracle')
            {
                // localStorage.setItem("q1",getname[i])
                // console.log(localStorage.getItem("q1"))
                var s = getname[i]
                score = Number(getScore()) + 1
                setScore(score)
                // setScore(Number(getAttempt()) + 1)
            }
            // else{
            //     localStorage.setItem("q1",getname[i].value)
            //     console.log(localStorage.getItem("q1"))
            //     score = Number(getScore()) 
            //     setScore(score)
            // }
            
        }
        
    }

    if(type == "radio" && qid == "q2"){
        getname = document.getElementsByName(name)
        for(let i = 0; i < getname.length; i++)
        {
            console.log(getname[i].value)
            if(getname[i].checked){attempt++}
            if(getname[i].checked && getname[i].value == '8')
            {
                score = Number(getScore()) + 1
                setScore(score)
            }
        }
    }

    if(type == "radio" && qid == "q3"){
        getname = document.getElementsByName(name)
        for(let i = 0; i < getname.length; i++)
        {
            console.log(getname[i].value)
            if(getname[i].checked){attempt++}
            if(getname[i].checked && getname[i].value == '1950')
            {
                score = Number(getScore()) + 1
                setScore(score)

            }
        }
    }
    if(type == "radio" && qid == "q4"){
        getname = document.getElementsByName(name)
        for(let i = 0; i < getname.length; i++)
        {
            console.log(getname[i].value)
            if(getname[i].checked){attempt++}
            if(getname[i].checked && getname[i].value == '.txt')
            {
                score = Number(getScore()) + 1
                setScore(score)

            }
        }
    }
    if(type == "radio" && qid == "q5"){
        getname = document.getElementsByName(name)
        for(let i = 0; i < getname.length; i++)
        {
            console.log(getname[i].value)
            if(getname[i].checked){attempt++}
            if(getname[i].checked && getname[i].value == 'shell')
            {
                score = Number(getScore()) + 1
                setScore(score)

            }
        }
    }
    if(type == "radio" && qid == "q6"){
        getname = document.getElementsByName(name)
        for(let i = 0; i < getname.length; i++)
        {
            console.log(getname[i].value)
            if(getname[i].checked){attempt++}
            if(getname[i].checked && getname[i].value == 'File allocation table')
            {
                score = Number(getScore()) + 1
                setScore(score)

            }
        }
    }
    if(type == "radio" && qid == "q7"){
        getname = document.getElementsByName(name)
        for(let i = 0; i < getname.length; i++)
        {
            console.log(getname[i].value)
            if(getname[i].checked){attempt++}
            if(getname[i].checked && getname[i].value == 'By operating system')
            {
                score = Number(getScore()) + 1
                setScore(score)

            }
        }
    }
    if(type == "radio" && qid == "q8"){
        getname = document.getElementsByName(name)
        for(let i = 0; i < getname.length; i++)
        {
            console.log(getname[i].value)
            if(getname[i].checked){attempt++}
            if(getname[i].checked && getname[i].value == '1950')
            {
                score = Number(getScore()) + 1
                setScore(score)
                // setScore(Number(getAttempt()) + 1)
            }
        }
    }
    if(type == "radio" && qid == "q9"){
        getname = document.getElementsByName(name)
        for(let i = 0; i < getname.length; i++)
        {
            console.log(getname[i].value)
            if(getname[i].checked){attempt++}
            if(getname[i].checked && getname[i].value == '8')
            {
                score = Number(getScore()) + 1
                setScore(score)
                // setScore(Number(getAttempt()) + 1)
            }
        }
    }
    if(type == "radio" && qid == "q10"){
        getname = document.getElementsByName(name)
        for(let i = 0; i < getname.length; i++)
        {
            console.log(getname[i].value)
            if(getname[i].checked){attempt++}
            if(getname[i].checked && getname[i].value == 'Oracle')
            {
                score = Number(getScore()) + 1
                setScore(score)
                // setScore(Number(getAttempt()) + 1)
            }
        }
    }

    window.location.href = page;
}

function getScore(){
    return localStorage.getItem("score", score)
}

function setScore(score){
    localStorage.setItem("score", score)
}


displayroll = localStorage.getItem("rollnum")
displayscore = localStorage.getItem("score")
console.log(score, displayroll)
document.getElementById("setUname").innerHTML = displayroll
document.getElementById("result").innerHTML="Score: "+ displayscore
// document.getElementById("attempted").innerHTML="Attempted: "+ attempt
// document.getElementById("result").innerHTML = "Score: "+displayscore+"/3"
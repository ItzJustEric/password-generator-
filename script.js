const btn = document.querySelector(".btn")
const pass = document.querySelector(".password")

const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lower = upper.toLowerCase()
const nums = "0123456789"
const syms = "!@#$%^&*()"
const allChars = upper + lower + nums + syms
const length = 20



  function getPass() {

    let str = ""

    str += upper.charAt(Math.floor(Math.random()*upper.length ))

    str += upper.charAt(Math.floor(Math.random()*lower.length ))

    str += upper.charAt(Math.floor(Math.random()*nums.length ))

    str += upper.charAt(Math.floor(Math.random()*syms.length ))

    while ( length > str.length ) {
        str += allChars[Math.floor(Math.random()*allChars.length )]



    }
    pass.textContent = str
    



}

















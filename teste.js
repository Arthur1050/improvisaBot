function hourFormat(tempo){
    var fixed = tempo.toFixed(2)
    fixed = fixed * 100
    fixed = fixed.slice(2)
    return fixed
}

console.log(hourFormat(165))
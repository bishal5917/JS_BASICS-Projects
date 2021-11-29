try {
    evaluates(); //Error thrown because we dont have this function
}
catch (error) {
    console.log(error)
    console.log(error.name)
    console.log(error.message)
}

finally {
    console.log("Whatever happens earlier,this finally portion executes")
}
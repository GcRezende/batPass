export default function generatePass()
{
    let pass: string = ""
    let char: string = "0123456789@#$%!"
    let tam = 5
    for ( let index = 0; index < tam; index++ )
        {
            pass+= char.charAt(Math.floor( Math.random() * char.length))

        }
    return pass
}
export function useCaptcha()
{
    var code = '';
    code = `${Math.round(Math.random()*9)} ${Math.round(Math.random()*9)} ${Math.round(Math.random()*9)} ${Math.round(Math.random()*9)} ${Math.round(Math.random()*9)} ${Math.round(Math.random()*9)}`

    return code;
}
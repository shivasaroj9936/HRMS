export const PATTERN = {
    email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    password: /^[^\s]+$/,
    address: /(.|\s)*\S(.|\s)*/,
    // name: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
    name: /^[_A-z]*((-|\s)*[_A-z])*$/,
    phone: "^[0-9]+$",
    zipcode: /^(?:(?:[2-8]\d|9[0-7]|0?[28]|0?9(?=09))(?:\d{2}))$/,
    price: /(^[0][1-9]+)|([1-9]\d*)+$/,
    alphaNumeric: "^[a-zA-Z0-9]*$",
    validLink: /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/,
    descArabic: /^[\u0621-\u064A0-9_@./#&+-`~!$%^*()=,"']+$/,
    colourHexCode: "^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$",
    subdomain: /^[a-zA-Z]+((['-][a-zA-Z ])?[a-zA-Z]*)*$/,
    month: /^(0[1-9]|1[0-2])$/
};
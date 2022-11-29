import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle `
body {
    margin: 0;
    padding: 0;
    list-style: none;
}

button{
    cursor: pointer
}

:root{
    --color-primary: #27ae60;
    --color-primary-50: #93d7af;
    --color-secondary: #eb5757;
    --grey-100: #333333;
    --grey-50: #828282;
    --grey-30: #a0a0a0
    --grey-20: #b0b0b0;
    --grey-0: #f5f5f5;
    --negative: #e60000;
    --warning: #ffcd07;
    --sucess: #168821;
    --information: #155aca
}

`
export default GlobalStyles
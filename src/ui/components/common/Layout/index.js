import { COLOR } from '../../../theme'
import { fonts, reset, injectGlobal } from '@qiwi/pijma-core'

injectGlobal(reset, fonts, `
  html, body, #root{
    height: 100%;
    font-size: 16px;
  }
  body {
    background: ${COLOR.BACKGROUND.Undercoat};
    line-height: 20px;
    font-family: 'Museo Sans';
    font-weight: 500;
    overflow-x: hidden;
    table: {
        border: 3px;
    };
  }
  
  a {
    text-decoration: none;
  }
  
  textarea, select, input, button { outline: none; }
  
  * {
    outline: 0
  }
  
  hr {
    border: 3;
    height: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  }
  
  .noselect {
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome and Opera */
  }
`)

const is_large_screen = false
const is_collapsed = true
let classes = 'header'

classes += (is_large_screen ?
   '' : is_collapsed ?
     ' icon-expander' : ' icon-collapser');
console.log(classes)

classes = `header ${ is_large_screen ? '' :
 `icon-${is_collapsed ? 'expander' : 'collapser'}` }`;
console.log(classes)


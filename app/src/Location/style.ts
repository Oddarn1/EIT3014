import {style, media} from 'typestyle';

export const imageContainer = style({
    display:"flex", 
    justifyContent:"center",
    height: "400px",
    width:"400px",
    borderRadius: "15px",
    overflow: "hidden"
}, media({minWidth:0, maxWidth: 449},
    {
        height: "250px",
        width: "250px"
    })
);

export const image = style({
    borderRadius: "15px",
})
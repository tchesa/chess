var isOnDrag = false;
var pieceIdOnDrag = "";
//teste
function inicializaTabuleiro() 
{
    //alert("InicializaTabuleiro");
    for (var i = 0; i < 8; i++) 
    { 
        for (var j = 0; j < 8; j++) 
        { 
            if(i <= 1 || i >= 6) 
            {
                document.getElementById(getPieceId(i+1,j+1)).style.visibility = "visible";
                //alert("show " + getPieceId(i+1,j+1));
            }
            else
            {
                document.getElementById(getPieceId(i+1,j+1)).style.visibility = "hidden";
                //alert("hide " + getPieceId(i+1,j+1));
            }
        }
    }
}

function getPieceId(row, column)
{
    return row + String.fromCharCode("a".charCodeAt() + column - 1);
}

function startDrag(image) {
    //alert("teste");
    
    if(!isOnDrag)
    {
        isOnDrag = true;
        pieceIdOnDrag = image.id;
        document.getElementById(image.id).style.visibility = "hidden";
    }
}

function endDrag(id)
{
    if(isOnDrag)
    {
        if(document.getElementById(id).style.visibility == "visible")
            document.getElementById(pieceIdOnDrag).style.visibility = "visible";
        else
            document.getElementById(id).style.visibility = "visible";
                
        isOnDrag = false;
        pieceIdOnDrag = "";
    }
}
